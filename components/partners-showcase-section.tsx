"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Building2, Cpu, Cloud, Database, Users, ArrowRight, CheckCircle, Globe, TrendingUp, Zap } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function PartnersShowcaseSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Partner Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">{t("partners.categories_title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-slate-800">
                  {t("partners.tech_partners_title")}
                </CardTitle>
                <CardDescription className="text-slate-600">{t("partners.tech_partners_description")}</CardDescription>
              </Card>

              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-slate-800">
                  {t("partners.industry_partners_title")}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {t("partners.industry_partners_description")}
                </CardDescription>
              </Card>

              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold mb-3 text-slate-800">
                  {t("partners.channel_partners_title")}
                </CardTitle>
                <CardDescription className="text-slate-600">
                  {t("partners.channel_partners_description")}
                </CardDescription>
              </Card>
            </div>
          </div>

          {/* Strategic Partners */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">{t("partners.strategic_title")}</h2>
            <div className="space-y-8">
              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden mt-[-24px]">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mt-[-24px]">
                    <div className="text-center text-white">
                      <Cloud className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">{t("partners.cloud_service_provider")}</h3>
                      <p className="text-blue-100 mt-2">{t("partners.infrastructure_cooperation")}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4   mt-[-24px]">
                    <Badge className="bg-blue-500 hover:bg-blue-600">
                      <Cloud className="w-3 h-3 mr-1" />
                      {t("badges.tech_cooperation")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold mb-3 text-slate-800">
                    {t("partners.cloud_service_title")}
                  </CardTitle>
                  <CardDescription className="mb-4 text-slate-600">
                    {t("partners.cloud_service_description")}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <Cloud className="w-3 h-3 mr-1" />
                      {t("badges.cloud_deployment")}
                    </Badge>
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {t("badges.elastic_scaling")}
                    </Badge>
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <Globe className="w-3 h-3 mr-1" />
                      {t("badges.global_service")}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-0 bg-cyan-50 shadow-lg hover:shadow-xl hover:bg-white transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mt-[-24px]">
                    <div className="text-center text-white">
                      <Database className="w-16 h-16 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">{t("partners.data_service_provider")}</h3>
                      <p className="text-purple-100 mt-2">{t("partners.data_resource_cooperation")}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4  mt-[-24px]">
                    <Badge className="bg-purple-500 hover:bg-purple-600">
                      <Database className="w-3 h-3 mr-1" />
                      {t("badges.data_cooperation")}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold mb-3 text-slate-800">
                    {t("partners.data_service_title")}
                  </CardTitle>
                  <CardDescription className="mb-4 text-slate-600">
                    {t("partners.data_service_description")}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      {t("badges.data_quality")}
                    </Badge>
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <Zap className="w-3 h-3 mr-1" />
                      {t("badges.model_optimization")}
                    </Badge>
                    <Badge variant="outline" className="flex items-center text-slate-600">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      {t("badges.continuous_improvement")}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </div>

          {/* Partnership Benefits */}
          <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-8 lg:p-12 mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">{t("partners.benefits_title")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{t("partners.tech_complement_title")}</h3>
                    <p className="text-slate-600">{t("partners.tech_complement_description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      {t("partners.market_expansion_title")}
                    </h3>
                    <p className="text-slate-600">{t("partners.market_expansion_description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      {t("partners.cost_optimization_title")}
                    </h3>
                    <p className="text-slate-600">{t("partners.cost_optimization_description")}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">{t("partners.risk_sharing_title")}</h3>
                    <p className="text-slate-600">{t("partners.risk_sharing_description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      {t("partners.innovation_acceleration_title")}
                    </h3>
                    <p className="text-slate-600">{t("partners.innovation_acceleration_description")}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-lime-500 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-1">
                      {t("partners.ecosystem_building_title")}
                    </h3>
                    <p className="text-slate-600">{t("partners.ecosystem_building_description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partnership CTA */}
          <div className="text-center bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">{t("partners.cta_title")}</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">{t("partners.cta_description")}</p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-lime-500 to-lime-600 hover:from-lime-600 hover:to-lime-700 px-8 py-4 text-lg text-white"
            >
              {t("partners.cta_button")}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
