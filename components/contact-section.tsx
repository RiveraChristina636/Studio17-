import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#A03232] to-[rgba(0,0,0,0.41)] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 font-sans">Get In Touch</h2>
          <p className="text-xl text-white max-w-4xl mx-auto mb-8 font-medium leading-relaxed tracking-tight">
            Feel Free to contact us with any questions about our location or booking us for events!
          </p>

          <Button
            className="bg-[#CD4746] hover:bg-[#9747ff] text-white px-8 py-4 rounded-full text-lg font-medium"
            asChild
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
