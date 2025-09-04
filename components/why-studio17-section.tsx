import Image from "next/image"

export function WhyStudio17Section() {
  return (
    <section className="py-16 px-4 bg-[#1e1e20]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#cd4746] font-mono tracking-tight">Why Studio 17</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1 */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-800">
              <Image
                src="/studio17-control-room-wide.webp"
                alt="Professional Equipment"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">Professional Equipment</h3>
              <p className="text-[#b2b2b2] text-base leading-relaxed font-light">
                State-of-the-art recording equipment and acoustically treated rooms ensure your music sounds its
                absolute best.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-800">
              <Image
                src="/studio17-microphone-blue-lighting.webp"
                alt="Expert Engineers"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">Expert Engineers</h3>
              <p className="text-[#b2b2b2] text-base leading-relaxed font-light">
                Our experienced engineers bring years of expertise to help you achieve the perfect sound for your
                project.
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg bg-gray-800">
              <Image
                src="/studio17-lounge-area.webp"
                alt="Comfortable Environment"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center px-4">
              <h3 className="text-2xl font-bold text-white mb-4 font-sans">Comfortable Environment</h3>
              <p className="text-[#b2b2b2] text-base leading-relaxed font-light">
                Relax and focus on your creativity in our welcoming, professional atmosphere designed for artists.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
