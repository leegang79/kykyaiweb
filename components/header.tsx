"use client"

import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t("header.company_name")}
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
              {t("header.products")}
            </Link>
            <Link
              href="/technology"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              {t("header.technology")}
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
              {t("header.contact")}
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              {t("header.login")}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              {t("header.start_experience")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
