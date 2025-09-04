import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#1e1e20]">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero Section */}
          <section className="mb-20">
            <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
              <img
                src="/studio17-mixing-console-hero.webp"
                alt="Studio 17 Professional Mixing Console with Blue Lighting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e1e20]/80 to-transparent flex items-center">
                <div className="px-12">
                  <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
                  <p className="text-xl text-gray-200 max-w-2xl">
                    Professional recording, mixing, and mastering services tailored to bring your vision to life.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Recording Sessions Section */}
          <section className="mb-32">
            <div className="mb-16">
              <h2 className="text-4xl font-semibold text-white mb-4 font-sans">Recording Sessions</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              {/* Tunnel Suite */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-2xl mb-4 shadow-lg overflow-hidden">
                  <img
                    src="/studio17-aws-console-services.webp"
                    alt="Tunnel Suite Professional AWS Mixing Console"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Tunnel Suite</h3>
                    <p className="text-sm text-gray-400">3 hr minimum</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-gray-400">$150/hr</p>
                  </div>
                </div>
              </div>

              {/* C-Room */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-2xl mb-4 shadow-lg overflow-hidden">
                  <img
                    src="/studio17-desktop-setup-services.webp"
                    alt="C-Room Professional Desktop Recording Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">C-Room</h3>
                    <p className="text-sm text-gray-400">3 hr minimum</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-gray-400">$50/hr</p>
                  </div>
                </div>
              </div>

              {/* B-Room */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-2xl mb-4 shadow-lg overflow-hidden">
                  <img
                    src="/studio17-microphone-booth-services.webp"
                    alt="B-Room Professional Microphone Recording Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">B-Room</h3>
                    <p className="text-sm text-gray-400">3 hr minimum</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-gray-400">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Editing & Mixing Section */}
          <section>
            <div className="mb-16">
              <h2 className="text-4xl font-semibold text-white mb-4 font-sans">Editing & Mixing</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-16">
              {/* Vocal Tuning & Editing */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-2xl mb-4 shadow-lg overflow-hidden">
                  <img
                    src="/studio17-aws-console-editing.webp"
                    alt="Professional AWS Console for Vocal Tuning and Editing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Vocal Tuning & Editing</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-gray-400">$75+ per song</p>
                  </div>
                </div>
              </div>

              {/* Full Mix & Master */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-2xl mb-4 shadow-lg overflow-hidden">
                  <img
                    src="/studio17-compact-mixer-setup.webp"
                    alt="Professional Compact Mixing Setup for Full Mix and Master"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Full Mix & Master</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-gray-400">$200+ per song</p>
                  </div>
                </div>
              </div>

              {/* Stem Mixing */}
              <div className="flex flex-col items-center">
                <div className="w-full h-80 rounded-2xl mb-4 shadow-lg overflow-hidden">
                  <img
                    src="/studio17-condenser-mic-editing.webp"
                    alt="Professional Condenser Microphone for Stem Mixing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Stem Mixing (Beat+Vocals)</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xl text-gray-400">$150+ per song</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mt-32 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Ready to Book Your Session?</h2>
            <Link href="/booking">
              <Button className="bg-[#cd4746] hover:bg-[#b23a3a] text-white px-8 py-3 text-lg">Book Now</Button>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
