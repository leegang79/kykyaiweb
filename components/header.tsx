"use client"

import { Button } from "@/components/ui/button"
import { Bot } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-purple-600">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              快语科技
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/products" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
              产品展示
            </Link>
            <Link
              href="/technology"
              className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors"
            >
              技术平台
            </Link>
            <Link href="/contact" className="text-sm font-medium text-gray-900 hover:text-gray-700 transition-colors">
              联系我们
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              登录
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              开始体验
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
