import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StudiosSection() {
  return (
    <section id="studios" className="py-20 bg-[#fcfbfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#c10812] font-mono tracking-tight">Studios</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Tunnel Suite */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden opacity-80 flex flex-col">
            <div className="h-48 flex-shrink-0">
              <img
                src="/sony-c80-microphone.jpg"
                alt="Tunnel Suite - Professional Sony C-80 Microphone"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl lg:text-2xl font-bold text-[#070707] mb-3">Tunnel Suite</h3>
              <p className="text-black text-sm lg:text-base leading-relaxed mb-4 flex-grow">
                Premium basement studio featuring the legendary Sony C800G mic with full acoustic treatment, custom LED
                lighting, and elite monitoring for world-class vocal clarity.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-auto">
                <Button
                  className="bg-[#cd4746] hover:bg-[#9747ff] text-white px-4 py-2 rounded-full text-sm lg:text-base w-full sm:w-auto"
                  asChild
                >
                  <Link href="/booking">Book Now</Link>
                </Button>
                <span className="text-black font-bold text-sm lg:text-base whitespace-nowrap">Capacity - 8</span>
              </div>
            </div>
          </div>

          {/* C-Room */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden opacity-80 flex flex-col">
            <div className="h-48 flex-shrink-0">
              <img
                src="/studio-purple-blue-lighting.webp"
                alt="C-Room - Modern Recording Studio with Professional Lighting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl lg:text-2xl font-bold text-[#070707] mb-3">C-Room</h3>
              <p className="text-[#070707] text-sm lg:text-base leading-relaxed mb-4 flex-grow">
                Sleek, glass-enclosed studio perfect for solo artists and voiceover work. Modern comfort meets
                professional acoustics in this compact, visually striking space.
              </p>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-3 mt-auto">
                <Button
                  className="bg-[#cd4746] hover:bg-[#9747ff] text-white px-4 py-2 rounded-full text-sm lg:text-base w-full sm:w-auto"
                  asChild
                >
                  <Link href="/booking">Book Now</Link>
                </Button>
                <span className="text-black font-bold text-sm lg:text-base whitespace-nowrap">Capacity - 4</span>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden opacity-80 flex flex-col">
            <div className="h-48 flex-shrink-0">
              <img
                src="/mixing-console-hands.jpg"
                alt="Coming Soon Studio - Professional Mixing Console"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl lg:text-2xl font-bold text-[#070707] mb-3">Coming Soon</h3>
              <p className="text-[#070707] text-sm lg:text-base leading-relaxed mb-4 flex-grow">
                Studio B is under construction with exciting upgrades to create a fully equipped, modern recording
                space.
              </p>
              <div className="flex justify-center mt-auto">
                <span className="text-black font-bold text-sm lg:text-base">Stay Tuned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
