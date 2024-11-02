import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Home, Book, Users, Quote, Pencil, MessageSquare, Info, FileText, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Oedipus Rex - A Greek Tragedy',
  description: 'Explore the tragic tale of Oedipus Rex, its characters, pivotal moments, and enduring legacy.',
}

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/story", label: "Story", icon: Book },
  { href: "/characters", label: "Characters", icon: Users },
  { href: "/quotes", label: "Quotes", icon: Quote },
  { href: "/notes", label: "Notes", icon: Pencil },
  { href: "/discussion", label: "Discussion", icon: MessageSquare },
  { href: "/about", label: "About", icon: Info },
  { href: "/full-text", label: "Text", icon: FileText },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        inter.variable,
        playfair.variable,
        "font-sans bg-gray-900 text-gray-100 min-h-screen flex flex-col"
      )}>
        <header className="bg-gray-800 shadow-md sticky top-0 z-10">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-amber-400">Oedipus Rex</Link>
              <ul className="hidden md:flex space-x-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="flex items-center px-3 py-2 rounded-md hover:bg-gray-700 hover:text-amber-400 transition-colors duration-200"
                    >
                      <item.icon className="w-5 h-5 mr-2" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <DropdownMenu>
                <DropdownMenuTrigger asChild className="md:hidden">
                  <Button variant="outline" size="icon">
                    <Menu className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {navItems.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link href={item.href} className="flex items-center">
                        <item.icon className="w-4 h-4 mr-2" />
                        <span>{item.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="bg-gray-800 text-center py-6 mt-8">
          <p>&copy; {new Date().getFullYear()} Oedipus Rex Project. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}