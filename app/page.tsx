import Navigation from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyStudio17Section } from "@/components/why-studio17-section"
import { ServicesSection } from "@/components/services-section"
import { StudiosSection } from "@/components/studios-section"
import { ContactSection } from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <WhyStudio17Section />
      <ServicesSection />
      <StudiosSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
