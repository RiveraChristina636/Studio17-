import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1e1e20]">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Content */}
            <div className="space-y-12">
              {/* About Section */}
              <section>
                <h1 className="text-5xl font-bold text-[#cd4746] mb-8 font-mono">About</h1>
                <div className="text-white text-lg leading-relaxed space-y-4">
                  <p>
                    Studio17 is a premier recording facility dedicated to bringing your musical vision to life. Located
                    in the heart of the city, we provide state-of-the-art equipment and professional expertise to
                    artists of all levels.
                  </p>
                  <p>
                    Our team of experienced engineers and producers work closely with each client to ensure the highest
                    quality recordings. Whether you're a solo artist, band, or content creator, we have the tools and
                    knowledge to make your project shine.
                  </p>
                  <p>
                    From intimate vocal sessions to full band recordings, mixing, and mastering, Studio17 offers
                    comprehensive audio production services in a comfortable and inspiring environment.
                  </p>
                </div>
              </section>

              {/* Terms Section */}
              <section>
                <h2 className="text-5xl font-bold text-[#cd4746] mb-8 font-mono">Terms</h2>
                <div className="text-white text-lg leading-relaxed space-y-4">
                  <p>
                    <strong>Booking Policy:</strong> All sessions require a 50% deposit to secure your booking. The
                    remaining balance is due at the start of your session.
                  </p>
                  <p>
                    <strong>Studio Rules:</strong> No outside food or drinks in the recording areas. Please arrive on
                    time as late arrivals may result in shortened session time.
                  </p>
                  <p>
                    <strong>Equipment:</strong> All basic recording equipment is included. Specialty instruments or
                    equipment rentals are available for an additional fee.
                  </p>
                  <p>
                    <strong>File Delivery:</strong> Mixed and mastered tracks will be delivered within 5-7 business days
                    via secure digital download.
                  </p>
                </div>
              </section>

              {/* Cancellation Section */}
              <section>
                <h2 className="text-5xl font-bold text-[#cd4746] mb-8 font-mono">Cancellation</h2>
                <div className="text-white text-lg leading-relaxed space-y-4">
                  <p>
                    Sessions cancelled with 48+ hours notice will receive a full refund of their deposit. Cancellations
                    with 24-48 hours notice will receive a 50% refund.
                  </p>
                  <p>
                    Same-day cancellations or no-shows will forfeit their entire deposit. We understand emergencies
                    happen - please contact us to discuss your situation.
                  </p>
                </div>
              </section>
            </div>

            {/* Right Side - Image */}
            <div className="lg:sticky lg:top-32">
              <div className="w-full h-[600px] rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/studio17-recording-booth-about.webp"
                  alt="Studio 17 Recording Booth with Professional Microphone and Signature Blue LED Lighting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
