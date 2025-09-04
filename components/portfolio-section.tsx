import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const portfolioItems = [
  {
    title: "E-commerce Platform",
    category: "Web Development",
    image: "/modern-ecommerce-website.png",
    description: "Complete online store with advanced filtering and payment integration",
  },
  {
    title: "Brand Identity",
    category: "Design",
    image: "/brand-identity-design-mockup.jpg",
    description: "Comprehensive brand identity for a tech startup",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Development",
    image: "/mobile-banking-app.png",
    description: "Secure and intuitive mobile banking application",
  },
  {
    title: "Restaurant Website",
    category: "Web Design",
    image: "/restaurant-website-design.png",
    description: "Modern restaurant website with online ordering system",
  },
  {
    title: "Product Photography",
    category: "Photography",
    image: "/professional-product-photography.png",
    description: "High-end product photography for luxury brand",
  },
  {
    title: "Marketing Campaign",
    category: "Digital Marketing",
    image: "/digital-marketing-campaign.png",
    description: "Multi-channel marketing campaign with 300% ROI increase",
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-[#1e1e20]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#fcfbfc] mb-6">
            Our <span className="text-[#cd4746]">Portfolio</span>
          </h2>
          <p className="text-xl text-[#7c8db0] max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={index}
              className="bg-[#212325] border-[#27273f] hover:border-[#9747ff] transition-all duration-300 group overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#9747ff] font-medium">{item.category}</span>
                    <Button size="icon" variant="ghost" className="text-[#7c8db0] hover:text-[#cd4746]">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>

                  <h3 className="text-xl font-semibold text-[#fcfbfc] mb-3">{item.title}</h3>

                  <p className="text-[#7c8db0] leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#cd4746] text-[#cd4746] hover:bg-[#cd4746] hover:text-[#fcfbfc] px-8 py-4 bg-transparent"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
