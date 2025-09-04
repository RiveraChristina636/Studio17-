import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/condenser-mic-purple-lighting.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1e1e20]/80 via-[#27273f]/70 to-[#1e1e20]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#fcfbfc] leading-tight">
            A studio you can count on,
            <br />
            <span className="text-[#cd4746]">A session you won't forget.</span>
          </h1>

          <div className="space-y-4">
            <p className="text-lg md:text-xl text-[#fcfbfc] max-w-3xl mx-auto leading-relaxed">
              {"Studio 17 offers customized studio experiences. Book your session today!"}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[#cd4746] hover:bg-[#9747ff] text-[#fcfbfc] px-8 py-4 text-lg" asChild>
              <Link href="/booking">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1e1e20] to-transparent" />
    </section>
  )
}
