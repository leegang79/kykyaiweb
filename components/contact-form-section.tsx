"use client"

import type React from "react"
import { Settings } from "lucide-react"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, Send, Building2, Users, MessageSquare, Globe } from "lucide-react"
import { useState } from "react"

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
               <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">联系我们</h2>
                <p className="text-lg text-gray-600 mb-8 pb-6">
                  请填写以下表单，我们会在24小时内回复您。
                </p>
              </div>
              <Card className="border-0 shadow-2xl bg-slate-200">
                <div className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          姓名 *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white"
                          placeholder="请输入您的姓名"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          邮箱 *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white"
                          placeholder="请输入您的邮箱"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          公司名称
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white"
                          placeholder="请输入公司名称"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          联系电话
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white"
                          placeholder="请输入联系电话"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        主题 *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white"
                        placeholder="请输入咨询主题"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        详细信息 *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-white"
                        placeholder="请详细描述您的需求或问题..."
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      发送消息
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">联系信息</h2>
                <p className="text-lg text-gray-600 mb-8">
                  快语科技致力于为客户提供专业的AI解决方案。我们的团队随时准备为您提供技术支持和商务咨询。
                </p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">深圳总部</h3>
                      <p className="text-gray-600">深圳市龙岗区龙城街道黄阁坑社区</p>
                      <p className="text-gray-600">龙城工业园1号</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">南昌运营研发中心</h3>
                      <p className="text-gray-600">江西省南昌市红谷滩区红谷中大道1619号</p>
                      <p className="text-gray-600">南昌国际金融大厦1116-1118室</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">上海办事处</h3>
                      <p className="text-gray-600">上海市静安区恒丰路666号苏河壹号</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">杭州办事处</h3>
                      <p className="text-gray-600">余杭区天目山路2988号</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">联系电话</h3>
                      <p className="text-gray-600">13564339979 陶女士</p>
                      <p className="text-gray-600 text-sm">工作日 9:00-18:00</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">电子邮箱</h3>
                      <p className="text-gray-600">taoyangyang@kykyai.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">工作时间</h3>
                      <p className="text-gray-600">周一至周五：9:00 - 18:00</p>
                      <p className="text-gray-600">周六：10:00 - 16:00</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Business Areas */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">业务领域</h3>
                <div className="flex flex-wrap gap-2 text-slate-800">
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Users className="w-3 h-3 mr-1" />
                    AI导游系统
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    虚拟人交互
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Globe className="w-3 h-3 mr-1" />
                    智能内容生成
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Phone className="w-3 h-3 mr-1" />
                    技术咨询
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Building2 className="w-3 h-3 mr-1" />
                    定制开发
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Settings className="w-3 h-3 mr-1" />
                    系统集成
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
