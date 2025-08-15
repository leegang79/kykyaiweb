"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Menu, X, Globe } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

const navigationItems = [
  { name: "首页", href: "/" },
  { name: "产品展示", href: "/products" },
  { name: "技术平台", href: "/technology" },
  { name: "我们的客户", href: "/customers" },
  { name: "合作伙伴", href: "/partners" },
  { name: "联系我们", href: "/contact" },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navigationItems = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.products"), href: "/products" },
    { name: t("nav.technology"), href: "/technology" },
    { name: t("nav.customers"), href: "/customers" },
    { name: t("nav.partners"), href: "/partners" },
    { name: t("nav.contact"), href: "/contact" },
  ]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])

  const handleLinkClick = () => {
    setIsOpen(false)
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <nav id="main-navigation" className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <div className="relative h-[42] w-[170]">
              <Image
                id="main-logo"
                src={
                  language === "en"
                    ? "https://www.kykyai.com/images/logo-en.png"
                    : "https://www.kykyai.com/images/logo.png"
                }
                alt="KykyAI Logo"
                width={170}
                height={42}
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div id="desktop-nav-menu" className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-900 hover:text-blue-600"
                }`}
                onClick={handleLinkClick}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-300">
              <Globe className="h-4 w-4 text-gray-600" />
              <button
                onClick={() => setLanguage("zh")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === "zh" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                中文
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                  language === "en" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-blue-600"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
                className="p-1 rounded text-gray-900 hover:text-blue-600"
              >
                <Globe size={20} />
              </button>
            </div>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-900 hover:text-blue-600 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="mobile-nav-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    pathname === item.href
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-900 hover:text-blue-600 hover:bg-gray-100"
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-3 py-2 border-t border-gray-200 mt-2">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{t("footer.languageLabel")}</span>
                  <button
                    onClick={() => setLanguage("zh")}
                    className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                      language === "zh" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    中文
                  </button>
                  <button
                    onClick={() => setLanguage("en")}
                    className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
                      language === "en" ? "bg-blue-100 text-blue-600" : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
