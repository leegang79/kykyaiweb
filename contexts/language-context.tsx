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
    "nav.products": "产品",
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

    // Products
    "products.title": "我们的产品",
    "products.subtitle": "创新AI解决方案",
    "products.hero.badge": "AI产品矩阵",
    "products.hero.title1": "智能化产品",
    "products.hero.title2": "全方位解决方案",
    "products.hero.description": "从AI导游讲解到虚拟人交互，从智能背诵到时间管理，我们为不同场景提供专业的AI解决方案",
    "products.tengwangge.title": "滕王阁AI导游讲解系统",
    "products.tengwangge.description": "基于人工智能技术的智能导游系统，为游客提供个性化的文化体验。",
    "products.jinggangshan.title": "井冈山AI导游讲解系统",
    "products.jinggangshan.description": "专为红色旅游景区设计的AI导游系统，传承革命精神。",
    "products.pavilion.title": "滕王阁智能背序亭",
    "products.pavilion.description": "结合传统文化与现代科技的智能互动体验。",
    "products.lushi.title": '时间管理虚拟人产品"律时"',
    "products.lushi.description": "智能时间管理助手，帮助用户提高工作效率。",
    "products.reading.title": '"21世纪智能、读书"产品',
    "products.reading.description": "智能阅读辅助系统，提升学习体验。",

    // Technology Platform
    "tech.title": "技术平台",
    "tech.subtitle": "核心技术能力",
    "tech.hero.badge": "核心技术平台",
    "tech.hero.title1": "技术平台",
    "tech.hero.title2": "驱动创新",
    "tech.hero.description": "基于先进的人工智能技术，我们构建了两大核心平台，为各行业提供智能化解决方案",
    "tech.content.title": "智能化内容生成平台",
    "tech.content.description": "基于大语言模型的内容生成技术",
    "tech.virtual.title": "虚拟人实时交互平台",
    "tech.virtual.description": "实时语音交互和动作生成技术",

    // Customers
    "customers.title": "我们的客户",
    "customers.subtitle": "值得信赖的合作伙伴",
    "customers.hero.badge": "客户案例",
    "customers.hero.title1": "服务客户",
    "customers.hero.title2": "共创价值",
    "customers.hero.description": "我们为各行各业的客户提供专业的AI解决方案，助力数字化转型和智能化升级",

    // Partners
    "partners.title": "合作伙伴",
    "partners.subtitle": "战略合作关系",
    "partners.hero.badge": "战略合作",
    "partners.hero.title1": "合作伙伴",
    "partners.hero.title2": "共赢未来",
    "partners.hero.description": "与行业领先企业建立深度合作关系，共同推动人工智能技术的创新与应用",

    // Contact
    "contact.title": "联系我们",
    "contact.subtitle": "开启合作之旅",
    "contact.hero.badge": "联系我们",
    "contact.hero.title1": "联系我们",
    "contact.hero.title2": "开启合作",
    "contact.hero.description": "我们期待与您的交流，无论是产品咨询、技术合作还是商务洽谈，都欢迎与我们联系",
    "contact.form.name": "姓名",
    "contact.form.email": "邮箱",
    "contact.form.company": "公司",
    "contact.form.message": "留言",
    "contact.form.submit": "发送消息",
    "contact.info.title": "联系信息",
    "contact.info.phone": "联系电话",
    "contact.info.email": "邮箱地址",
    "contact.info.address": "办公地址",
    "contact.business.title": "业务领域",

    // Footer
    "footer.company": "快语科技",
    "footer.description": "通过智能化内容生成和虚拟人实时交互，为用户提供创新的AI解决方案。",
    "footer.links": "公司",
    "footer.contact": "联系方式",
    "footer.copyright": "保留所有权利",
    "footer.icp": "粤ICP备2022083001号-1",
    "footer.addresses.title": "办公地址",
    "footer.addresses.shenzhen": "深圳总部",
    "footer.addresses.nanchang": "南昌运营研发中心",
    "footer.addresses.shanghai": "上海办事处",
    "footer.addresses.hangzhou": "杭州办事处",
    "footer.nav.about": "关于我们",
    "footer.nav.products": "产品展示",
    "footer.nav.technology": "技术平台",
    "footer.nav.customers": "我们的客户",
    "footer.nav.partners": "合作伙伴",
    "footer.nav.contact": "联系我们",

    // Common
    "common.learn_more": "了解更多",
    "common.contact_us": "联系我们",
    "common.view_details": "查看详情",
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
    "products.jinggangshan.title": "Jinggangshan AI Tour Guide System",
    "products.jinggangshan.description":
      "AI tour guide system designed specifically for red tourism attractions, preserving revolutionary spirit.",
    "products.pavilion.title": "Tengwangge Smart Poetry Pavilion",
    "products.pavilion.description":
      "Intelligent interactive experience combining traditional culture with modern technology.",
    "products.lushi.title": 'Time Management Virtual Human "Lushi"',
    "products.lushi.description": "Intelligent time management assistant helping users improve work efficiency.",
    "products.reading.title": '"21st Century Smart Reading" Product',
    "products.reading.description": "Intelligent reading assistance system enhancing learning experience.",

    // Technology Platform
    "tech.title": "Technology Platform",
    "tech.subtitle": "Core Technical Capabilities",
    "tech.hero.badge": "Core Technology Platform",
    "tech.hero.title1": "Technology Platform",
    "tech.hero.title2": "Driving Innovation",
    "tech.hero.description":
      "Based on advanced artificial intelligence technology, we have built two core platforms to provide intelligent solutions for various industries",
    "tech.content.title": "Intelligent Content Generation Platform",
    "tech.content.description": "Content generation technology based on large language models",
    "tech.virtual.title": "Real-time Virtual Human Interaction Platform",
    "tech.virtual.description": "Real-time voice interaction and motion generation technology",

    // Customers
    "customers.title": "Our Customers",
    "customers.subtitle": "Trusted Partners",
    "customers.hero.badge": "Customer Cases",
    "customers.hero.title1": "Serving Customers",
    "customers.hero.title2": "Creating Value Together",
    "customers.hero.description":
      "We provide professional AI solutions for customers across various industries, facilitating digital transformation and intelligent upgrades",

    // Partners
    "partners.title": "Partners",
    "partners.subtitle": "Strategic Partnerships",
    "partners.hero.badge": "Strategic Cooperation",
    "partners.hero.title1": "Partners",
    "partners.hero.title2": "Win-Win Future",
    "partners.hero.description":
      "Establishing deep cooperation with industry-leading enterprises to jointly promote innovation and application of artificial intelligence technology",

    // Contact
    "contact.title": "Contact Us",
    "contact.subtitle": "Start Your Partnership Journey",
    "contact.hero.badge": "Contact Us",
    "contact.hero.title1": "Contact Us",
    "contact.hero.title2": "Start Partnership",
    "contact.hero.description":
      "We look forward to communicating with you, whether it's product consultation, technical cooperation, or business negotiation, we welcome your contact",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.company": "Company",
    "contact.form.message": "Message",
    "contact.form.submit": "Send Message",
    "contact.info.title": "Contact Information",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.address": "Office Address",
    "contact.business.title": "Business Areas",

    // Footer
    "footer.company": "KykyAI",
    "footer.description":
      "Providing innovative AI solutions through intelligent content generation and real-time virtual human interaction.",
    "footer.links": "Company",
    "footer.contact": "Contact",
    "footer.copyright": "All Rights Reserved",
    "footer.icp": "ICP License: 粤ICP备2022083001号-1",
    "footer.addresses.title": "Office Addresses",
    "footer.addresses.shenzhen": "Shenzhen Headquarters",
    "footer.addresses.nanchang": "Nanchang Operations Center",
    "footer.addresses.shanghai": "Shanghai Office",
    "footer.addresses.hangzhou": "Hangzhou Office",
    "footer.nav.about": "About Us",
    "footer.nav.products": "Products",
    "footer.nav.technology": "Technology",
    "footer.nav.customers": "Our Customers",
    "footer.nav.partners": "Partners",
    "footer.nav.contact": "Contact Us",

    // Common
    "common.learn_more": "Learn More",
    "common.contact_us": "Contact Us",
    "common.view_details": "View Details",
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
