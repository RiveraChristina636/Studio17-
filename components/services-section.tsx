import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-[#212325]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#cd4746] font-mono tracking-tight mb-12">Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm mb-4">
              <Image
                src="/studio17-condenser-mic-purple.webp"
                alt="Audio Recording - Professional Condenser Microphone"
                width={395}
                height={355}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">Audio Recording</h3>
              <Button className="bg-[#cd4746] hover:bg-[#9747ff] text-white px-6 py-3 rounded-full" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm mb-4">
              <Image
                src="/studio17-mixing-console-closeup.webp"
                alt="Mixing & Mastering - Professional Mixing Console"
                width={395}
                height={355}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">Mixing & Mastering</h3>
              <Button className="bg-[#cd4746] hover:bg-[#9747ff] text-white px-6 py-3 rounded-full" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm mb-4">
              <Image
                src="/studio17-desktop-setup.webp"
                alt="Studio Rental - Professional Audio Interface"
                width={395}
                height={355}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">Studio Rental</h3>
              <Button
                variant="outline"
                className="border-[#cd4746] text-[#cd4746] hover:bg-[#cd4746] hover:text-white bg-transparent px-6 py-3 rounded-full"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
