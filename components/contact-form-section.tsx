"use client"

import type React from "react"
import { Settings } from "lucide-react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, Send, Building2, Users, MessageSquare, Globe } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function ContactFormSection() {
  const { t } = useLanguage()
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("contact.form.title")}</h2>
                <p className="text-lg text-gray-600 mb-8 pb-6">{t("contact.form.subtitle")}</p>
              </div>
              <Card className="border-0 shadow-2xl bg-slate-200">
                <div className="p-8 pt-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.name")} {t("contact.form.required")}
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white"
                          placeholder={t("contact.form.name_placeholder")}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.email")} {t("contact.form.required")}
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white"
                          placeholder={t("contact.form.email_placeholder")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.company")}
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full bg-white"
                          placeholder={t("contact.form.company_placeholder")}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          {t("contact.form.phone")}
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white"
                          placeholder={t("contact.form.phone_placeholder")}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.subject")} {t("contact.form.required")}
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-white"
                        placeholder={t("contact.form.subject_placeholder")}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t("contact.form.message")} {t("contact.form.required")}
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full bg-white"
                        placeholder={t("contact.form.message_placeholder")}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 text-lg text-white"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t("contact.form.submit")}
                    </Button>
                  </form>
                </div>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("contact.info.title")}</h2>
                <p className="text-lg text-gray-600 mb-8">{t("contact.info.description")}</p>
              </div>

              <div className="space-y-6">
                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contact.info.shenzhen_hq")}</h3>
                      <p className="text-gray-600">{t("footer.addresses.shenzhenDetail")}</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contact.info.nanchang_center")}</h3>
                      <p className="text-gray-600">{t("footer.addresses.nanchangDetail1")}</p>
                      <p className="text-gray-600">{t("footer.addresses.nanchangDetail2")}</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contact.info.shanghai_office")}</h3>
                      <p className="text-gray-600">{t("footer.addresses.shanghaiDetail")}</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contact.info.hangzhou_office")}</h3>
                      <p className="text-gray-600">{t("footer.addresses.hangzhouDetail")}</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contact.info.phone_title")}</h3>
                      <p className="text-gray-600">{t("footer.phone")}</p>
                      <p className="text-gray-600 text-sm">{t("contact.info.phone_hours")}</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contact.info.email_title")}</h3>
                      <p className="text-gray-600">{t("footer.email")}</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg p-6 bg-slate-100">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{t("contact.info.hours_title")}</h3>
                      <p className="text-gray-600">{t("contact.info.weekdays")}</p>
                      <p className="text-gray-600">{t("contact.info.saturday")}</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Business Areas */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{t("contact.business.title")}</h3>
                <div className="flex flex-wrap gap-2 text-slate-800">
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Users className="w-3 h-3 mr-1" />
                    {t("contact.business.ai_guide")}
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <MessageSquare className="w-3 h-3 mr-1" />
                    {t("contact.business.virtual_human")}
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Globe className="w-3 h-3 mr-1" />
                    {t("contact.business.content_generation")}
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Phone className="w-3 h-3 mr-1" />
                    {t("contact.business.tech_consulting")}
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Building2 className="w-3 h-3 mr-1" />
                    {t("contact.business.custom_development")}
                  </Badge>
                  <Badge variant="outline" className="flex items-center text-slate-600">
                    <Settings className="w-3 h-3 mr-1" />
                    {t("contact.business.system_integration")}
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
