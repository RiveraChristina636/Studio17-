"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e20]/95 backdrop-blur-sm border-b border-[#27273f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#fcfbfc]">
              STUDIO<span className="text-[#cd4746]">17</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-[#fcfbfc] hover:text-[#cd4746] transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-[#fcfbfc] hover:text-[#cd4746] transition-colors">
                Services
              </Link>
              <Link href="/booking" className="text-[#fcfbfc] hover:text-[#cd4746] transition-colors">
                Booking
              </Link>
              <Link href="/about" className="text-[#fcfbfc] hover:text-[#cd4746] transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-[#fcfbfc] hover:text-[#cd4746] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-[#fcfbfc]">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#212325]">
            <Link href="/" className="block px-3 py-2 text-[#fcfbfc] hover:text-[#cd4746]">
              Home
            </Link>
            <Link href="/services" className="block px-3 py-2 text-[#fcfbfc] hover:text-[#cd4746]">
              Services
            </Link>
            <Link href="/booking" className="block px-3 py-2 text-[#fcfbfc] hover:text-[#cd4746]">
              Booking
            </Link>
            <Link href="/about" className="block px-3 py-2 text-[#fcfbfc] hover:text-[#cd4746]">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-[#fcfbfc] hover:text-[#cd4746]">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
