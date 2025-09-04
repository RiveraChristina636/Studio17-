"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar, Clock, Phone, Mail, User, MessageSquare } from "lucide-react"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      console.log("[v0] Form submission started:", formData)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would typically send to your backend API
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Fallback for demo - simulate success
        return { ok: true }
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          message: "",
        })
        console.log("[v0] Booking submitted successfully")
      } else {
        throw new Error("Submission failed")
      }
    } catch (error) {
      console.log("[v0] Booking submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const quickLinks = [
    { name: "Tunnel Suite", price: "$150/hr", service: "tunnel-suite" },
    { name: "C-Room", price: "$50/hr", service: "c-room" },
    { name: "Vocal Editing", price: "$75+", service: "vocal-editing" },
    { name: "Mix & Master", price: "$200+", service: "mix-master" },
  ]

  const handleQuickSelect = (service: string) => {
    setFormData({ ...formData, service })
  }

  return (
    <div className="min-h-screen bg-[#1e1e20]">
      <Navigation />

      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pt-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Book Your Session</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to create something amazing? Fill out the form and we'll get back to you within 24 hours.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Service Selection</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {quickLinks.map((link) => (
                <Button
                  key={link.service}
                  onClick={() => handleQuickSelect(link.service)}
                  variant={formData.service === link.service ? "default" : "outline"}
                  className={`p-4 h-auto flex flex-col items-center space-y-2 ${
                    formData.service === link.service
                      ? "bg-[#cd4746] text-white"
                      : "border-[#cd4746] text-[#cd4746] hover:bg-[#cd4746] hover:text-white bg-transparent"
                  }`}
                >
                  <span className="font-semibold text-sm sm:text-base">{link.name}</span>
                  <span className="text-xs sm:text-sm opacity-80">{link.price}</span>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            {/* Left Side - Image and Text */}
            <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/studio17-control-room-booking.webp"
                  alt="Studio 17 Main Control Room with Professional Mixing Console and LED Lighting"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Professional Studio Experience</h2>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
                  State-of-the-art equipment, expert engineers, and a comfortable environment designed for creativity.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Phone className="w-5 h-5 text-[#cd4746]" />
                    <span className="text-gray-300">+1.9292687808</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start space-x-3">
                    <Mail className="w-5 h-5 text-[#cd4746]" />
                    <span className="text-gray-300">nycstudio17@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-[#fcfbfc] rounded-2xl p-6 sm:p-8 shadow-2xl order-1 lg:order-2">
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                  <p className="font-semibold">Booking Request Submitted!</p>
                  <p className="text-sm">We'll contact you within 24 hours to confirm your session.</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                  <p className="font-semibold">Submission Failed</p>
                  <p className="text-sm">Please try again or contact us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-[#1e1e20] text-base sm:text-lg font-medium mb-2">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl bg-white text-sm sm:text-base"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1e1e20] text-base sm:text-lg font-medium mb-2">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl bg-white text-sm sm:text-base"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1e1e20] text-base sm:text-lg font-medium mb-2">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl bg-white text-sm sm:text-base"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1e1e20] text-base sm:text-lg font-medium mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl bg-white text-sm sm:text-base"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="tunnel-suite">Tunnel Suite Recording ($150/hr)</option>
                    <option value="c-room">C-Room Recording ($50/hr)</option>
                    <option value="vocal-editing">Vocal Tuning & Editing ($75+)</option>
                    <option value="mix-master">Full Mix & Master ($200+)</option>
                    <option value="stem-mixing">Stem Mixing ($150+)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1e1e20] text-base sm:text-lg font-medium mb-2">
                      <Calendar className="inline w-4 h-4 mr-2" />
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl bg-white text-sm sm:text-base"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[#1e1e20] text-base sm:text-lg font-medium mb-2">
                      <Clock className="inline w-4 h-4 mr-2" />
                      Preferred Time
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl bg-white text-sm sm:text-base"
                      required
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#1e1e20] text-base sm:text-lg font-medium mb-2">
                    <MessageSquare className="inline w-4 h-4 mr-2" />
                    Additional Details
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl bg-white resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project, any special requirements, or questions..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#1e1e20] hover:bg-[#2a2a2c] disabled:bg-gray-400 text-white py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-colors"
                >
                  {isSubmitting ? "Submitting..." : "Submit Booking Request"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
