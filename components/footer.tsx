"use client"

import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="main-footer" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div id="footer-company-info" className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="relative w-[170] h-[42] bg-white border-0 px-[5px] py-[5x] pt-2.5 pb-2 pl-2 pr-2 rounded-sm">
                <Image
                  id="footer-logo"
                  src="https://www.kykyai.com/images/logo.png"
                  alt="KykyAI Logo"
                  width={170}
                  height={42}
                  className="object-contain"
                />
              </div>
            </div>
            <p id="footer-description" className="text-gray-400 mb-6 max-w-md">
              {t("footer.description")}
            </p>

            <div id="footer-contact-info" className="space-y-3">
              <div id="footer-phone" className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>13564339979 陶女士</span>
              </div>
              <div id="footer-email" className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>taoyangyang@kykyai.com</span>
              </div>
            </div>
          </div>

          <div id="footer-office-addresses">
            <h3 id="footer-addresses-title" className="font-semibold mb-4">
              {t("footer.addresses.title")}
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li id="footer-shenzhen-office" className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{t("footer.addresses.shenzhen")}</div>
                  <div>深圳市龙岗区龙城街道黄阁坑社区龙城工业园1号</div>
                </div>
              </li>
              <li id="footer-nanchang-office" className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{t("footer.addresses.nanchang")}</div>
                  <div>江西省南昌市红谷滩区红谷中大道1619号</div>
                  <div>南昌国际金融大厦1116-1118室</div>
                </div>
              </li>
              <li id="footer-hangzhou-office" className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{t("footer.addresses.shanghai")}</div>
                  <div>上海市静安区恒丰路666号苏河壹号</div>
                </div>
              </li>
              <li id="footer-hangzhou-office" className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-white">{t("footer.addresses.hangzhou")}</div>
                  <div>余杭区天目山路2988号</div>
                </div>
              </li>
            </ul>
          </div>

          <div id="footer-company-links">
            <h3 id="footer-links-title" className="font-semibold mb-4">
              {t("footer.links")}
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  {t("footer.nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  {t("footer.nav.products")}
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-white transition-colors">
                  {t("footer.nav.technology")}
                </Link>
              </li>
              <li>
                <Link href="/customers" className="hover:text-white transition-colors">
                  {t("footer.nav.customers")}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white transition-colors">
                  {t("footer.nav.partners")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t("footer.nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="footer-copyright" className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span>&copy; 2024</span>
            <span>深圳快语科技有限公司</span>
            <span>{t("footer.copyright")}.</span>
          </div>
          <p id="footer-icp" className="mt-2">
            <a
              href="https://beian.miit.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              {t("footer.icp")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
