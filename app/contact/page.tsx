"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-[#1e1e20]">
      <Navigation />

      <main className="pt-32 pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-300">Ready to start your next project? We'd love to hear from you.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <div className="w-full h-80 rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="/studio17-aws-console-detailed.webp"
                  alt="Studio 17 AWS 924 Delta Mixing Console with Professional Equipment"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#cd4746] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-300">
                      904 Flushing Avenue
                      <br />
                      Brooklyn, NY, USA
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#cd4746] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-gray-300">+1.9292687808</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-[#cd4746] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                    <p className="text-gray-300">nycstudio17@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#cd4746] mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Hours</h3>
                    <p className="text-gray-300">Monday – Sunday: 09:00 am – 09:00 am</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-[#fcfbfc] rounded-2xl pt-6 px-6 pb-3 shadow-2xl">
              {submitStatus === "success" && (
                <div className="mb-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-xl">
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-xl">
                  Sorry, there was an error sending your message. Please try again.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-[#1e1e20] text-lg font-medium mb-1">Name</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-xl bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1e1e20] text-lg font-medium mb-1">Email</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-xl bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1e1e20] text-lg font-medium mb-1">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-4 border border-gray-300 rounded-xl bg-white"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#1e1e20] text-lg font-medium mb-1">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-xl bg-white resize-none"
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                <div className="pt-1">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1e1e20] hover:bg-[#2a2a2c] disabled:bg-gray-400 text-white py-2.5 text-lg rounded-xl transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
