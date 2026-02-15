import Link from 'next/link'
import { Search } from 'lucide-react'
import { Logo } from './Logo'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Logo className="h-7" />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/companies"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Companies
            </Link>
            <Link
              href="/people"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              People
            </Link>
            <Link
              href="/vcs"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              VCs
            </Link>
            <Link
              href="/topics"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Topics
            </Link>
          </nav>

          <Link
            href="/search"
            className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden md:inline-flex h-5 items-center gap-1 rounded border bg-white px-1.5 font-mono text-[10px] font-medium text-gray-500">
              ⌘K
            </kbd>
          </Link>
        </div>
      </div>
    </header>
  )
}
