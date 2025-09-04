import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1e1e20] via-[#212325] to-[#27273f] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/abstract-sound-waves.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#cd4746] via-[#9747ff] to-[#007b65]"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              
              <h2 className="text-3xl font-bold text-white font-mono">STUDIO17</h2>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Premier recording studio delivering professional audio production services. Where creativity meets
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/nycstudio17/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="ghost"
                  className="text-gray-400 hover:text-[#cd4746] hover:bg-white/10 rounded-xl transition-all duration-300"
                >
                  <Instagram className="h-5 w-5" />
                </Button>
              </Link>
              
              
              
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#cd4746] transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-1 h-1 bg-[#cd4746] rounded-full"></span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-[#cd4746] transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-1 h-1 bg-[#cd4746] rounded-full"></span>
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/booking"
                  className="text-gray-300 hover:text-[#cd4746] transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-1 h-1 bg-[#cd4746] rounded-full"></span>
                  <span>Booking</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#cd4746] transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-1 h-1 bg-[#cd4746] rounded-full"></span>
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-[#cd4746] transition-colors duration-300 flex items-center space-x-2"
                >
                  <span className="w-1 h-1 bg-[#cd4746] rounded-full"></span>
                  <span>Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#cd4746] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>904 Flushing Avenue</p>
                  <p>Brooklyn, NY, USA</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#cd4746] flex-shrink-0" />
                <p className="text-gray-300">+1.9292687808</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#cd4746] flex-shrink-0" />
                <p className="text-gray-300">nycstudio17@gmail.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#cd4746] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p className="font-medium">Hours</p>
                  <p className="text-sm">Monday – Sunday</p>
                  <p className="text-sm">09:00 am – 09:00 am</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 Studio17. All rights reserved.</div>
            <div className="flex space-x-6 text-sm">
              
              
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                Cancellation Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
