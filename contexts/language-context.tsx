"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "zh" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.products": "产品展示",
    "nav.technology": "技术平台",
    "nav.customers": "我们的客户",
    "nav.partners": "合作伙伴",
    "nav.contact": "联系我们",

    // Hero Section
    "hero.title": "快语科技",
    "hero.subtitle": "智能化内容处理，虚拟人实时交互",
    "hero.description":
      "我们是一家高速成长的人工智能科技公司，总部位于深圳，在南昌设有研发中心，在上海、杭州设有办事处。快语科技专注于应用人工智能赋能在文旅产业的应用和研发，业务覆盖众多国内5A级景区、一级博物馆。团队致力于通过人工智能技术创新推动文旅产业升级。",
    "hero.cta.primary": "了解更多",
    "hero.cta.secondary": "联系我们",
    "hero.video_not_supported": "您的浏览器不支持视频播放.",

    // Company Introduction
    "company.title": "公司介绍",
    "company.vision.title": "愿景",
    "company.vision.description": "成为文旅产业AI技术创新的引领者",
    "company.strategy.title": "战略",
    "company.strategy.description": "通过人工智能技术推动文旅产业数字化转型",
    "company.datasets.title": "专业数据集构建",
    "company.datasets.museum": "文博场馆数据集",
    "company.datasets.artifacts": "文物知识数据集",
    "company.datasets.red": "红色场馆问答数据集",
    "company.datasets.description":
      "进行模型训练和微调的数据集方面，除了汇集公开数据集外，快语在多年研究的基础上，针对人工智能应用软件产品的应用场景不同，分别构建了多个专业数据集：",
    "company.datasets.children_books": "儿童图书数据集",
    "company.datasets.children_stories": "儿童故事数据集",
    "company.datasets.psychology_consultation": "心理咨询对话",

    // Products
    "products.title": "我们的产品",
    "products.subtitle": "创新AI解决方案",
    "products.hero.badge": "AI产品矩阵",
    "products.hero.title1": "智能化产品",
    "products.hero.title2": "全方位解决方案",
    "products.hero.description": "从AI导游讲解到虚拟人交互，从智能背诵到时间管理，我们为不同场景提供专业的AI解决方案",
    "products.tengwangge.title": "滕王阁AI导游讲解系统",
    "products.tengwangge.description": "基于人工智能技术的智能导游系统，为游客提供个性化的文化体验。",
    "products.tengwangge.voice_badge": "语音讲解",
    "products.tengwangge.history_badge": "历史还原",
    "products.tengwangge.interaction_badge": "互动体验",
    "products.tengwangge.learn_btn": "了解详情",
    "products.tengwangge.media_title": "滕王阁项目被各大媒体报道",
    "products.tengwangge.media.cctv.name": "央视新闻",
    "products.tengwangge.media.cctv.description": "滕王阁AI导游系统创新应用",
    "products.tengwangge.media.peoples_daily.name": "人民日报",
    "products.tengwangge.media.peoples_daily.description": "AI技术赋能文旅产业发展",
    "products.tengwangge.media.xinhua.name": "新华社",
    "products.tengwangge.media.xinhua.description": "智慧旅游新体验引关注",
    "products.tengwangge.media.jiangxi_daily.name": "江西日报",
    "products.tengwangge.media.jiangxi_daily.description": "本土科技企业创新突破",
    "products.tengwangge.media.tech_daily.name": "科技日报",
    "products.tengwangge.media.tech_daily.description": "虚拟人技术应用新突破",

    "products.jinggangshan.title": "井冈山AI导游讲解系统",
    "products.jinggangshan.description": "专为红色旅游景区设计的AI导游系统，传承革命精神。",
    "products.jinggangshan.education_badge": "红色教育",
    "products.jinggangshan.history_badge": "历史讲解",
    "products.jinggangshan.patriotism_badge": "爱国主义",
    "products.jinggangshan.learn_btn": "了解详情",

    "products.pavilion.title": "滕王阁智能背序亭",
    "products.pavilion.description": "结合传统文化与现代科技的智能互动体验。",
    "products.pavilion.poetry_badge": "诗词背诵",
    "products.pavilion.education_badge": "文学教育",
    "products.pavilion.tutoring_badge": "智能辅导",
    "products.pavilion.experience_btn": "体验产品",

    "products.lushi.title": '时间管理虚拟人产品"律时"',
    "products.lushi.description": "智能时间管理助手，帮助用户提高工作效率。",
    "products.lushi.planning_badge": "时间规划",
    "products.lushi.efficiency_badge": "效率提升",
    "products.lushi.assistant_badge": "虚拟助手",
    "products.lushi.demo_btn": "观看演示",
    "products.lushi.media_title": "律时项目被各大媒体报道",
    "products.lushi.media.legal_daily.name": "法制日报",
    "products.lushi.media.legal_daily.description": "AI助力律师时间管理创新",
    "products.lushi.media.china_lawyer.name": "中国律师",
    "products.lushi.media.china_lawyer.description": "虚拟助手提升律师工作效率",
    "products.lushi.media.jiangxi_legal.name": "江西法制报",
    "products.lushi.media.jiangxi_legal.description": "本土科技赋能法律服务",
    "products.lushi.media.shenzhen_daily.name": "深圳特区报",
    "products.lushi.media.shenzhen_daily.description": "智能化办公新趋势",
    "products.lushi.media.nanchang_daily.name": "南昌日报",
    "products.lushi.media.nanchang_daily.description": "AI技术助力专业服务升级",

    "products.reading.title": '"21世纪智能、读书"产品',
    "products.reading.description": "智能阅读辅助系统，提升学习体验。",

    // Products Grid Section
    "products.grid.tour_guide_title": "AI导游讲解系统",
    "products.grid.smart_interaction_title": "智能交互系统",
    "products.grid.reading_products_title": "智能阅读产品",
    "products.grid.demo_videos_title": "央媒报道",

    // Tengwangge Product
    "products.tengwangge.heritage_badge": "文化遗产",
    "products.tengwangge.title": "滕王阁AI导游讲解系统",
    "products.tengwangge.description":
      "滕王阁AI导游旨在为游客提供更便捷、个性化的讲解体验。该系统融合了人工智能大语言模型、计算机视觉、数字人和物联网等技术，以虚拟数字人'王勃'为导游形象，搭载听、点、拍、问四大功能特性。游客走到哪里听到哪里，点到什么讲什么，拍拍图像就有典故呈现，问问'王勃'犹如导游在侧。\n\n相较于传统的电子导游设备，滕王阁AI导游具有交互式拟人体验、个性化内容博深、价格低普惠大众、无租借安全卫生等优点，并能够有效缓解导游资源不足的问题，提升游客的参观体验。",
    "products.tengwangge.voice_badge": "语音讲解",
    "products.tengwangge.history_badge": "历史还原",
    "products.tengwangge.interaction_badge": "互动体验",
    "products.tengwangge.learn_btn": "了解详情",
    "products.tengwangge.media_title": "滕王阁项目被各大媒体报道",

    // Jinggangshan Product
    "products.jinggangshan.heritage_badge": "红色旅游",
    "products.jinggangshan.title": "井冈山AI导游讲解系统",
    "products.jinggangshan.description":
      "专为革命圣地井冈山打造的智能导游系统，深度挖掘红色文化内涵，为游客提供生动的革命历史教育体验。\n\n井冈山AI导游产品是大语言模型与虚拟人实时交互技术的产物，它是博物馆导览讲解的颠覆性创新应用。其创新的四大核心功能：自动感应听讲解、拍照识别听解说、个性化点选讲解、数字人互动问答，以官方的'真人'导游为形象，给游客以亲切感，极大地丰富了游客的体验感。依靠大语言模型生成技术，游客可以实现对文物不同深度与广度的了解，同时也将成为博物馆里的'新宠儿'。",
    "products.jinggangshan.education_badge": "红色教育",
    "products.jinggangshan.history_badge": "历史讲解",
    "products.jinggangshan.patriotism_badge": "爱国主义",
    "products.jinggangshan.learn_btn": "了解详情",

    // Smart Pavilion Product
    "products.pavilion.heritage_badge": "热门景区",
    "products.pavilion.title": "滕王阁智能背序亭",
    "products.pavilion.description":
      "虚拟人'王勃'采用最新的人工智能技术，它不仅应用了虚拟人实时交互技术，而且使用了最新的大语言模型内容生成技术。因此，'王勃'既有栩栩如生的形态，也有聪明智慧的沟通和评测能力。它可以自主检测游客的背诵情况，准确识别出游客语音、语速、语调等方面的表现，并分析判断出游客是否满足了背诵的标准。同时，虚拟人还可以进行互动，与游客进行简单的对话和交流，帮助游客更好地了解滕王阁的历史与文化。",
    "products.pavilion.poetry_badge": "诗词背诵",
    "products.pavilion.education_badge": "文学教育",
    "products.pavilion.tutoring_badge": "智能辅导",
    "products.pavilion.experience_btn": "体验产品",

    // Lushi Product
    "products.lushi.time_badge": "时间管理",
    "products.lushi.title": '时间管理虚拟人"律时"',
    "products.lushi.description":
      '律师时间管理虚拟人助理APP"律时"是快语科技基于快语数字虚拟人平台的AI技术进行开发的时间管理的移动端软件及后台管理平台，帮助律师进行个人的时间管理，提高工作效率和工作效果。\n\n目前，快语科技开发的律师时间管理虚拟人助理APP"律时"已经付江西凌科安时律师事务所进行使用。"律时"可以广泛应用于律师以及其他有时间管理需求的高端服务业人士，例如会计师、医师、教师、 企业高级管理人员等，使他们的工作更加轻松、高效。',
    "products.lushi.planning_badge": "时间规划",
    "products.lushi.efficiency_badge": "效率提升",
    "products.lushi.assistant_badge": "虚拟助手",
    "products.lushi.demo_btn": "观看演示",
    "products.lushi.media_title": "律时项目被各大媒体报道",

    // Customers Section
    "customers.main_title": "我们的客户",
    "customers.intro_text":
      "快语科技致力于为各行各业提供优质的AI解决方案，我们的客户遍布文旅、教育、企业服务等多个领域",
    "customers.industry_categories_title": "服务行业",
    "customers.tourism_title": "文旅行业",
    "customers.tourism_description": "为景区、博物馆、文化遗址提供AI导游和智能讲解服务，包括滕王阁、井冈山等知名景区",
    "customers.education_title": "教育培训",
    "customers.education_description": "为高等院校、培训机构提供智能教学助手和个性化学习解决方案",
    "customers.government_title": "政府机构",
    "customers.government_description": "为政府部门、事业单位提供智能政务服务和公共服务解决方案",
    "customers.enterprise_title": "企业服务",
    "customers.enterprise_description": "为各类企业提供智能客服、内容生成和办公自动化解决方案",
    "customers.featured_clients_title": "重点客户案例",
    "customers.tengwangge_client_title": "AI导游讲解系统",
    "customers.tengwangge_client_description":
      "为滕王阁景区部署智能导游系统，结合历史文化背景，为游客提供沉浸式的游览体验。系统支持多语言讲解，大幅提升了游客满意度。",
    "customers.jinggangshan_client_title": "红色教育AI系统",
    "customers.jinggangshan_client_description":
      "专为井冈山革命圣地打造的AI导游系统，深度挖掘红色文化内涵，为游客提供生动的革命历史教育体验。",
    "customers.success_metrics_title": "服务成果",
    "customers.clients_label": "服务客户",
    "customers.projects_label": "部署项目",
    "customers.satisfaction_label": "客户满意度",
    "customers.awards_label": "行业奖项",
    "customers.hero.badge": "客户案例",
    "customers.hero.title1": "服务全球客户",
    "customers.hero.title2": "创造卓越价值",
    "customers.hero.description": "我们为各行各业的客户提供专业的AI解决方案，助力企业数字化转型升级",
    "customers.tengwangge_location": "滕王阁景区",
    "customers.nanchang_location": "江西南昌",
    "customers.jinggangshan_location": "井冈山景区",
    "customers.jian_location": "江西吉安",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.technology": "Technology",
    "nav.customers": "Our Customers",
    "nav.partners": "Partners",
    "nav.contact": "Contact Us",

    // Hero Section
    "hero.title": "KykyAI",
    "hero.subtitle": "Intelligent Content Processing, Real-time Virtual Human Interaction",
    "hero.description":
      "We are a fast-growing artificial intelligence technology company headquartered in Shenzhen, with R&D center in Nanchang and offices in Shanghai and Hangzhou. KykyAI focuses on AI applications in the cultural tourism industry, serving numerous domestic 5A scenic spots and first-class museums. Our team is committed to promoting the upgrade of the cultural tourism industry through AI technology innovation.",
    "hero.cta.primary": "Learn More",
    "hero.cta.secondary": "Contact Us",
    "hero.video_not_supported": "Your browser does not support video playback.",

    // Company Introduction
    "company.title": "About Us",
    "company.vision.title": "Vision",
    "company.vision.description": "To become a leader in AI technology innovation for the cultural tourism industry",
    "company.strategy.title": "Strategy",
    "company.strategy.description": "Driving digital transformation in cultural tourism through AI technology",
    "company.datasets.title": "Professional Dataset Construction",
    "company.datasets.museum": "Museum Venue Dataset",
    "company.datasets.artifacts": "Cultural Artifacts Dataset",
    "company.datasets.red": "Red Venue Q&A Dataset",
    "company.datasets.description":
      "In terms of datasets for model training and fine-tuning, in addition to collecting public datasets, KykyAI has built multiple professional datasets based on years of research, targeting different application scenarios of AI software products:",
    "company.datasets.children_books": "Children's Books Dataset",
    "company.datasets.children_stories": "Children's Stories Dataset",
    "company.datasets.psychology_consultation": "Psychology Consultation Dialogue",

    // Products
    "products.title": "Our Products",
    "products.subtitle": "Innovative AI Solutions",
    "products.hero.badge": "AI Product Matrix",
    "products.hero.title1": "Intelligent Products",
    "products.hero.title2": "Comprehensive Solutions",
    "products.hero.description":
      "From AI tour guide explanations to virtual human interactions, from intelligent recitation to time management, we provide professional AI solutions for different scenarios",
    "products.tengwangge.title": "Tengwangge AI Tour Guide System",
    "products.tengwangge.description":
      "AI-powered intelligent tour guide system providing personalized cultural experiences for visitors.",
    "products.tengwangge.voice_badge": "Voice Commentary",
    "products.tengwangge.history_badge": "Historical Recreation",
    "products.tengwangge.interaction_badge": "Interactive Experience",
    "products.tengwangge.learn_btn": "Learn More",
    "products.tengwangge.media_title": "Tengwangge Project Media Coverage",
    "products.tengwangge.media.cctv.name": "CCTV News",
    "products.tengwangge.media.cctv.description": "Tengwangge AI Tour Guide System Innovation",
    "products.tengwangge.media.peoples_daily.name": "People's Daily",
    "products.tengwangge.media.peoples_daily.description": "AI Technology Empowers Cultural Tourism",
    "products.tengwangge.media.xinhua.name": "Xinhua News",
    "products.tengwangge.media.xinhua.description": "Smart Tourism Experience Gains Attention",
    "products.tengwangge.media.jiangxi_daily.name": "Jiangxi Daily",
    "products.tengwangge.media.jiangxi_daily.description": "Local Tech Company Innovation Breakthrough",
    "products.tengwangge.media.tech_daily.name": "Science & Technology Daily",
    "products.tengwangge.media.tech_daily.description": "Virtual Human Technology Application Breakthrough",

    "products.jinggangshan.title": "Jinggangshan AI Tour Guide System",
    "products.jinggangshan.description":
      "An intelligent tour guide system specially designed for the revolutionary holy land Jinggangshan, deeply exploring red cultural connotations to provide tourists with vivid revolutionary history educational experiences.\n\nThe Jinggangshan AI tour guide product is the result of large language models and real-time virtual human interaction technology. It is a disruptive innovative application for museum tour guidance. Its four innovative core functions: automatic sensing for explanations, photo recognition for commentary, personalized point-and-select explanations, and digital human interactive Q&A, using official 'real person' guides as the image, gives tourists a sense of intimacy and greatly enriches their experience. Relying on large language model generation technology, tourists can achieve different depths and breadths of understanding of cultural relics, and will also become the 'new favorite' in museums.",
    "products.jinggangshan.education_badge": "Red Education",
    "products.jinggangshan.history_badge": "Historical Commentary",
    "products.jinggangshan.patriotism_badge": "Patriotism",
    "products.jinggangshan.learn_btn": "Learn More",

    "products.pavilion.title": "Tengwangge Smart Poetry Pavilion",
    "products.pavilion.description":
      "Virtual human 'Wang Bo' adopts the latest artificial intelligence technology, not only applying real-time virtual human interaction technology but also using the latest large language model content generation technology. Therefore, 'Wang Bo' has both lifelike appearance and intelligent communication and assessment capabilities. It can autonomously detect tourists' recitation situations, accurately identify tourists' performance in voice, speed, and tone, and analyze and judge whether tourists meet recitation standards. At the same time, the virtual human can also interact, engage in simple dialogue and communication with tourists, helping them better understand the history and culture of Tengwangge.",
    "products.pavilion.poetry_badge": "Poetry Recitation",
    "products.pavilion.education_badge": "Literary Education",
    "products.pavilion.tutoring_badge": "Smart Tutoring",
    "products.pavilion.experience_btn": "Experience Product",

    "products.lushi.title": 'Time Management Virtual Human "Lushi"',
    "products.lushi.description":
      'The lawyer time management virtual human assistant APP "Lushi" is a mobile software and backend management platform developed by KykyAI based on AI technology from the KykyAI digital virtual human platform, helping lawyers with personal time management to improve work efficiency and effectiveness.\n\nCurrently, the lawyer time management virtual human assistant APP "Lushi" developed by KykyAI has been deployed for use by Jiangxi Lingke Anshi Law Firm. "Lushi" can be widely applied to lawyers and other high-end service industry professionals with time management needs, such as accountants, doctors, teachers, and senior corporate management personnel, making their work easier and more efficient.',
    "products.lushi.planning_badge": "Time Planning",
    "products.lushi.efficiency_badge": "Efficiency Enhancement",
    "products.lushi.assistant_badge": "Virtual Assistant",
    "products.lushi.demo_btn": "Watch Demo",
    "products.lushi.media_title": "Lushi Project Media Coverage",
    "products.lushi.media.legal_daily.name": "Legal Daily",
    "products.lushi.media.legal_daily.description": "AI Assists Lawyer Time Management Innovation",
    "products.lushi.media.china_lawyer.name": "China Lawyer",
    "products.lushi.media.china_lawyer.description": "Virtual Assistant Improves Lawyer Efficiency",
    "products.lushi.media.jiangxi_legal.name": "Jiangxi Legal News",
    "products.lushi.media.jiangxi_legal.description": "Local Tech Empowers Legal Services",
    "products.lushi.media.shenzhen_daily.name": "Shenzhen Special Zone Daily",
    "products.lushi.media.shenzhen_daily.description": "Smart Office New Trends",
    "products.lushi.media.nanchang_daily.name": "Nanchang Daily",
    "products.lushi.media.nanchang_daily.description": "AI Technology Assists Professional Service Upgrade",

    "products.reading.title": '"21st Century Smart Reading" Product',
    "products.reading.description": "Intelligent reading assistance system enhancing learning experience.",

    // Products Grid Section
    "products.grid.tour_guide_title": "AI Tour Guide Systems",
    "products.grid.smart_interaction_title": "Smart Interaction Systems",
    "products.grid.reading_products_title": "Smart Reading Products",
    "products.grid.demo_videos_title": "Media Coverage",

    // Tengwangge Product
    "products.tengwangge.heritage_badge": "Cultural Heritage",
    "products.tengwangge.title": "Tengwangge AI Tour Guide System",
    "products.tengwangge.description":
      "The Tengwangge AI tour guide aims to provide tourists with a more convenient and personalized explanation experience. The system integrates artificial intelligence large language models, computer vision, digital humans, and IoT technologies, featuring virtual digital human 'Wang Bo' as the guide image, equipped with four major functional characteristics: listen, point, shoot, and ask. Tourists can hear explanations wherever they go, get explanations for whatever they point to, capture images to reveal historical stories, and ask 'Wang Bo' as if having a guide by their side.\n\nCompared to traditional electronic guide devices, the Tengwangge AI guide has advantages of interactive humanized experience, personalized deep content, low cost for public benefit, rental-free safety and hygiene, and can effectively alleviate the shortage of guide resources while enhancing tourists' visiting experience.",
    "products.tengwangge.voice_badge": "Voice Commentary",
    "products.tengwangge.history_badge": "Historical Recreation",
    "products.tengwangge.interaction_badge": "Interactive Experience",
    "products.tengwangge.learn_btn": "Learn More",
    "products.tengwangge.media_title": "Tengwangge Project Media Coverage",

    // Jinggangshan Product
    "products.jinggangshan.heritage_badge": "Red Tourism",
    "products.jinggangshan.title": "Jinggangshan AI Tour Guide System",
    "products.jinggangshan.description":
      "An intelligent tour guide system specially designed for the revolutionary holy land Jinggangshan, deeply exploring red cultural connotations to provide tourists with vivid revolutionary history educational experiences.\n\nThe Jinggangshan AI tour guide product is the result of large language models and real-time virtual human interaction technology. It is a disruptive innovative application for museum tour guidance. Its four innovative core functions: automatic sensing for explanations, photo recognition for commentary, personalized point-and-select explanations, and digital human interactive Q&A, using official 'real person' guides as the image, gives tourists a sense of intimacy and greatly enriches their experience. Relying on large language model generation technology, tourists can achieve different depths and breadths of understanding of cultural relics, and will also become the 'new favorite' in museums.",
    "products.jinggangshan.education_badge": "Red Education",
    "products.jinggangshan.history_badge": "Historical Commentary",
    "products.jinggangshan.patriotism_badge": "Patriotism",
    "products.jinggangshan.learn_btn": "Learn More",

    // Smart Pavilion Product
    "products.pavilion.heritage_badge": "Popular Attraction",
    "products.pavilion.title": "Tengwangge Smart Poetry Pavilion",
    "products.pavilion.description":
      "Virtual human 'Wang Bo' adopts the latest artificial intelligence technology, not only applying real-time virtual human interaction technology but also using the latest large language model content generation technology. Therefore, 'Wang Bo' has both lifelike appearance and intelligent communication and assessment capabilities. It can autonomously detect tourists' recitation situations, accurately identify tourists' performance in voice, speed, and tone, and analyze and judge whether tourists meet recitation standards. At the same time, the virtual human can also interact, engage in simple dialogue and communication with tourists, helping them better understand the history and culture of Tengwangge.",
    "products.pavilion.poetry_badge": "Poetry Recitation",
    "products.pavilion.education_badge": "Literary Education",
    "products.pavilion.tutoring_badge": "Smart Tutoring",
    "products.pavilion.experience_btn": "Experience Product",

    // Lushi Product
    "products.lushi.time_badge": "Time Management",
    "products.lushi.title": 'Time Management Virtual Human "Lushi"',
    "products.lushi.description":
      'The lawyer time management virtual human assistant APP "Lushi" is a mobile software and backend management platform developed by KykyAI based on AI technology from the KykyAI digital virtual human platform, helping lawyers with personal time management to improve work efficiency and effectiveness.\n\nCurrently, the lawyer time management virtual human assistant APP "Lushi" developed by KykyAI has been deployed for use by Jiangxi Lingke Anshi Law Firm. "Lushi" can be widely applied to lawyers and other high-end service industry professionals with time management needs, such as accountants, doctors, teachers, and senior corporate management personnel, making their work easier and more efficient.',
    "products.lushi.planning_badge": "Time Planning",
    "products.lushi.efficiency_badge": "Efficiency Enhancement",
    "products.lushi.assistant_badge": "Virtual Assistant",
    "products.lushi.demo_btn": "Watch Demo",
    "products.lushi.media_title": "Lushi Project Media Coverage",

    // Customers Section
    "customers.main_title": "Our Customers",
    "customers.intro_text":
      "KykyAI is committed to providing high-quality AI solutions for various industries. Our customers span across cultural tourism, education, enterprise services, and many other fields",
    "customers.industry_categories_title": "Service Industries",
    "customers.tourism_title": "Cultural Tourism",
    "customers.tourism_description":
      "Providing AI tour guide and intelligent commentary services for scenic spots, museums, and cultural heritage sites, including famous attractions like Tengwangge and Jinggangshan",
    "customers.education_title": "Education & Training",
    "customers.education_description":
      "Providing intelligent teaching assistants and personalized learning solutions for universities and training institutions",
    "customers.government_title": "Government Agencies",
    "customers.government_description":
      "Providing intelligent government services and public service solutions for government departments and public institutions",
    "customers.enterprise_title": "Enterprise Services",
    "customers.enterprise_description":
      "Providing intelligent customer service, content generation, and office automation solutions for various enterprises",
    "customers.featured_clients_title": "Featured Client Cases",
    "customers.tengwangge_client_title": "AI Tour Guide System",
    "customers.tengwangge_client_description":
      "Deployed intelligent tour guide system for Tengwangge scenic area, combining historical and cultural background to provide immersive touring experiences for visitors. The system supports multilingual commentary and significantly improves visitor satisfaction.",
    "customers.jinggangshan_client_title": "Red Education AI System",
    "customers.jinggangshan_client_description":
      "AI tour guide system specially designed for the revolutionary holy land Jinggangshan, deeply exploring red cultural connotations to provide vivid revolutionary history educational experiences for visitors.",
    "customers.success_metrics_title": "Service Results",
    "customers.clients_label": "Clients Served",
    "customers.projects_label": "Projects Deployed",
    "customers.satisfaction_label": "Customer Satisfaction",
    "customers.awards_label": "Industry Awards",
    "customers.hero.badge": "Client Success Stories",
    "customers.hero.title1": "Serving Global Clients",
    "customers.hero.title2": "Creating Exceptional Value",
    "customers.hero.description":
      "We provide professional AI solutions for clients across various industries, empowering digital transformation and business growth",
    "customers.tengwangge_location": "Tengwangge Scenic Area",
    "customers.nanchang_location": "Nanchang, Jiangxi",
    "customers.jinggangshan_location": "Jinggangshan Scenic Area",
    "customers.jian_location": "Ji'an, Jiangxi",

    // Partners Section
    "partners.categories_title": "Partner Categories",
    "partners.tech_partners_title": "Technology Partners",
    "partners.tech_partners_description":
      "Deep cooperation with AI chip, cloud computing, and big data technology vendors",
    "partners.industry_partners_title": "Industry Partners",
    "partners.industry_partners_description":
      "Cooperation with leading enterprises in cultural tourism, education, enterprise services, and other industries",
    "partners.channel_partners_title": "Channel Partners",
    "partners.channel_partners_description":
      "Establishing extensive sales networks with system integrators and distributors",
    "partners.strategic_title": "Strategic Partners",
    "partners.cloud_service_title": "Cloud AI Services",
    "partners.cloud_service_description":
      "Cooperating with mainstream cloud computing service providers to offer stable and reliable cloud AI services for customers, supporting elastic scaling and global deployment.",
    "partners.data_service_title": "Data Resource Integration",
    "partners.data_service_description":
      "Cooperating with professional data service providers to obtain high-quality training data and continuously optimize AI model performance and accuracy.",
    "partners.benefits_title": "Partnership Advantages",
    "partners.tech_complement_title": "Technology Complementarity",
    "partners.tech_complement_description":
      "Combining technological advantages of all parties to provide more complete solutions",
    "partners.market_expansion_title": "Market Expansion",
    "partners.market_expansion_description": "Sharing channel resources to rapidly expand market coverage",
    "partners.cost_optimization_title": "Cost Optimization",
    "partners.cost_optimization_description": "Reducing R&D and operational costs through cooperation",
    "partners.risk_sharing_title": "Risk Sharing",
    "partners.risk_sharing_description": "Dispersing technical and market risks to improve success rates",
    "partners.innovation_acceleration_title": "Innovation Acceleration",
    "partners.innovation_acceleration_description": "Accelerating product iteration and technological innovation",
    "partners.ecosystem_building_title": "Ecosystem Building",
    "partners.ecosystem_building_description": "Building a healthy AI industry ecosystem",
    "partners.cta_title": "Become Our Partner",
    "partners.cta_description":
      "If you are interested in establishing a partnership with us, please contact us to explore cooperation opportunities",
    "partners.cta_button": "Contact for Partnership",
    "partners.hero.badge": "Strategic Partnerships",
    "partners.hero.title1": "Building Ecosystem",
    "partners.hero.title2": "Together We Grow",
    "partners.hero.description":
      "We collaborate with leading technology companies, industry partners, and service providers to deliver comprehensive AI solutions and expand market reach",
    "partners.cloud_service_provider": "Cloud Computing Service Providers",
    "partners.infrastructure_cooperation": "Infrastructure Partnership",
    "partners.data_service_provider": "Data Service Providers",
    "partners.data_resource_cooperation": "Data Resource Partnership",

    // Contact form - Complete translations
    "contact.hero.badge": "Get In Touch",
    "contact.hero.title1": "Ready to Transform",
    "contact.hero.title2": "Your Business with AI?",
    "contact.hero.description":
      "Contact our team to discuss how KykyAI can help accelerate your digital transformation journey",

    // Footer
    "footer.company": "Shenzhen KykyAI Technology Co., Ltd.",
    "footer.description":
      "Providing innovative AI solutions through intelligent content generation and real-time virtual human interaction.",
    "footer.links": "Company",
    "footer.contact": "Contact",
    "footer.copyright": "All Rights Reserved",
    "footer.icp": "ICP License: 粤ICP备2022083001号-1",
    "footer.phone": "13564339979 Ms. Tao",
    "footer.email": "taoyangyang@kykyai.com",
    "footer.languageLabel": "Language:",
    "footer.addresses.title": "Office Addresses",
    "footer.addresses.shenzhen": "Shenzhen Headquarters",
    "footer.addresses.shenzhenDetail":
      "No.1 Longcheng Industrial Park, Huanggekeng Community, Longcheng Street, Longgang District, Shenzhen",
    "footer.addresses.nanchang": "Nanchang Operations Center",
    "footer.addresses.nanchangDetail1": "No.1619 Honggu Middle Avenue, Honggutan District, Nanchang, Jiangxi Province",
    "footer.addresses.nanchangDetail2": "Nanchang International Finance Building, Rooms 1116-1118",
    "footer.addresses.shanghai": "Shanghai Office",
    "footer.addresses.shanghaiDetail": "Suhe No.1, No.666 Hengfeng Road, Jing'an District, Shanghai",
    "footer.addresses.hangzhou": "Hangzhou Office",
    "footer.addresses.hangzhouDetail": "No.2988 Tianmushan Road, Yuhang District",
    "footer.nav.about": "About Us",
    "footer.nav.products": "Products",
    "footer.nav.technology": "Technology",
    "footer.nav.customers": "Our Customers",
    "footer.nav.partners": "Partners",
    "footer.nav.contact": "Contact Us",

    // Badges
    "badges.5a_scenic": "5A Scenic Area",
    "badges.revolutionary_site": "Revolutionary Site",
    "badges.multilingual": "Multilingual Support",
    "badges.cultural_heritage": "Cultural Heritage",
    "badges.smart_interaction": "Smart Interaction",
    "badges.red_education": "Red Education",
    "badges.heritage_preservation": "Heritage Preservation",
    "badges.patriotism": "Patriotism",
    "badges.tech_cooperation": "Tech Cooperation",
    "badges.data_cooperation": "Data Cooperation",
    "badges.cloud_deployment": "Cloud Deployment",
    "badges.elastic_scaling": "Elastic Scaling",
    "badges.global_service": "Global Service",
    "badges.data_quality": "Data Quality",
    "badges.model_optimization": "Model Optimization",
    "badges.continuous_improvement": "Continuous Improvement",

    // Common
    "common.learn_more": "Learn More",
    "common.contact_us": "Contact Us",
    "common.view_details": "View Details",

    // Contact Form
    "contact.form.title": "Contact Us",
    "contact.form.subtitle": "Please fill out the form below and we will get back to you within 24 hours.",
    "contact.form.name": "Name",
    "contact.form.name_placeholder": "Please enter your name",
    "contact.form.email": "Email",
    "contact.form.email_placeholder": "Please enter your email",
    "contact.form.company": "Company Name",
    "contact.form.company_placeholder": "Please enter company name",
    "contact.form.phone": "Phone",
    "contact.form.phone_placeholder": "Please enter phone number",
    "contact.form.subject": "Subject",
    "contact.form.subject_placeholder": "Please enter inquiry subject",
    "contact.form.message": "Message",
    "contact.form.message_placeholder": "Please describe your requirements or questions in detail...",
    "contact.form.submit": "Send Message",
    "contact.form.required": "*",

    // Contact Information
    "contact.info.title": "Contact Information",
    "contact.info.description":
      "KykyAI is committed to providing professional AI solutions for customers. Our team is ready to provide technical support and business consultation at any time.",
    "contact.info.shenzhen_hq": "Shenzhen Headquarters",
    "contact.info.nanchang_center": "Nanchang Operations Center",
    "contact.info.shanghai_office": "Shanghai Office",
    "contact.info.hangzhou_office": "Hangzhou Office",
    "contact.info.phone_title": "Phone",
    "contact.info.phone_hours": "Weekdays 9:00-18:00",
    "contact.info.email_title": "Email",
    "contact.info.hours_title": "Business Hours",
    "contact.info.weekdays": "Monday to Friday: 9:00 - 18:00",
    "contact.info.saturday": "Saturday: 10:00 - 16:00",

    // Business Areas
    "contact.business.title": "Business Areas",
    "contact.business.ai_guide": "AI Tour Guide Systems",
    "contact.business.virtual_human": "Virtual Human Interaction",
    "contact.business.content_generation": "Intelligent Content Generation",
    "contact.business.tech_consulting": "Technical Consulting",
    "contact.business.custom_development": "Custom Development",
    "contact.business.system_integration": "System Integration",

    // CTA Section
    "cta.title": "Ready to Get Started?",
    "cta.subtitle": "Join the AI revolution and experience the power of intelligent content generation",
    "cta.free_trial": "Free Trial",
    "cta.contact_sales": "Contact Sales",

    // Header
    "header.company_name": "KykyAI",
    "header.products": "Products",
    "header.technology": "Technology",
    "header.contact": "Contact Us",
    "header.login": "Login",
    "header.start_experience": "Get Started",

    // Vision Strategy Section
    "vision.title": "Our Vision & Strategy",
    "vision.description":
      "We are a fast-growing artificial intelligence technology company headquartered in Shenzhen, with R&D center in Nanchang and offices in Shanghai and Hangzhou. KykyAI focuses on AI applications in the cultural tourism industry, serving numerous domestic 5A scenic spots and first-class museums.",
    "vision.vision_title": "Vision",
    "vision.vision_description":
      "Promoting the upgrade of the cultural tourism industry through AI technology innovation, providing tourists with smarter and more personalized cultural tourism experiences!",
    "vision.strategy_title": "Strategy",
    "vision.strategy_description":
      "Focusing on AI applications in the cultural tourism industry, deeply cooperating with domestic 5A scenic spots and first-class museums, using globally leading artificial intelligence technology to create innovative products such as intelligent tour guides and virtual commentary, promoting the digital transformation and upgrade of traditional cultural tourism industry.",
    "vision.datasets_title": "Professional Dataset Construction",
    "vision.datasets_description":
      "Based on in-depth research of the cultural tourism industry, KykyAI has built multiple professional datasets for different cultural tourism application scenarios, providing high-quality data support for AI model training and optimization:",
    "vision.children_books": "Children's Books Dataset",
    "vision.children_stories": "Children's Stories Dataset",
    "vision.psychology_consultation": "Psychology Consultation Dialogue",
    "vision.psychology_symptoms": "Mental Health Symptoms",
    "vision.treasure_hunt_images": "China Treasure Hunt Images",
    "vision.cartoon_images": "Anime Character Images",

    // Company Values
    "company.values.title": "Core Values",
    "company.values.innovation_title": "Innovation Driven",
    "company.values.innovation_description":
      "Continuously exploring AI technology frontiers to bring breakthrough intelligent experiences to users",
    "company.values.user_first_title": "User First",
    "company.values.user_first_description":
      "Focusing on user needs to provide simple and easy-to-use intelligent solutions",
    "company.values.quality_title": "Quality Assurance",
    "company.values.quality_description":
      "Strict quality standards ensuring every product reaches industry-leading levels",

    // Technology Platform
    "tech.hero.badge": "Technology Platform",
    "tech.hero.title1": "Intelligent Content Generation",
    "tech.hero.title2": "Real-time Virtual Human Interaction",
    "tech.hero.description":
      "Based on advanced artificial intelligence technology, we have built two core technology platforms: Intelligent Content Generation Platform and Real-time Virtual Human Interaction Platform, providing powerful AI technology support for various industries.",

    // Content Platform
    "tech.content_platform_title": "Intelligent Content Generation Platform",
    "tech.content_platform_description":
      "AI-powered content generation technology based on large language models, providing personalized, high-quality content creation services for cultural tourism, education and other industries.",
    "tech.core_features": "Core Features",
    "tech.content_features.text_generation": "Intelligent Text Generation",
    "tech.content_features.translation": "Multilingual Translation",
    "tech.content_features.recommendation": "Personalized Recommendations",
    "tech.content_features.quality_assessment": "Content Quality Assessment",
    "tech.tech_features": "Technical Features",
    "tech.content_badges.large_data": "Big Data Training",
    "tech.content_badges.realtime": "Real-time Generation",
    "tech.content_badges.customizable": "Customizable",
    "tech.learn_more": "Learn More",

    // Virtual Human Platform
    "tech.virtual_human_title": "Real-time Virtual Human Interaction Platform",
    "tech.virtual_human_description":
      "Combining computer vision, speech recognition and natural language processing technologies to create lifelike virtual human interaction experiences.",
    "tech.virtual_features.voice_dialogue": "Voice Dialogue Interaction",
    "tech.virtual_features.expression_generation": "Facial Expression & Gesture Generation",
    "tech.virtual_features.emotion_recognition": "Emotion Recognition & Analysis",
    "tech.virtual_features.multi_scenario": "Multi-scenario Adaptation",
    "tech.virtual_badges.voice_recognition": "Speech Recognition",
    "tech.virtual_badges.realtime_rendering": "Real-time Rendering",
    "tech.virtual_badges.natural_dialogue": "Natural Dialogue",
    "tech.experience_demo": "Experience Demo",

    // Platform Integration
    "tech.integration_title": "Platform Integration Applications",
    "tech.integration_description":
      "Deep integration of our two technology platforms provides customers with complete AI solutions, achieving seamless combination of intelligent content generation and virtual human interaction.",
    "tech.integration_content_title": "Content Intelligence",
    "tech.integration_content_description":
      "Automatically generate high-quality commentary content, educational materials and interactive scripts",
    "tech.integration_personalization_title": "Personalized Experience",
    "tech.integration_personalization_description":
      "Provide customized interactive experiences based on user preferences and behavioral data",
    "tech.integration_deployment_title": "Rapid Deployment",
    "tech.integration_deployment_description":
      "Support cloud deployment and on-premise deployment, quickly integrate into existing systems",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("zh")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("kykyai-language") as Language
    if (savedLanguage && (savedLanguage === "zh" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("kykyai-language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
