import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { FloatingCard } from "../custom/floating-card"
import { GradientButton } from "../custom/gradient-button"
import { SectionHeader } from "../custom/section-header"
import { Input } from "@/components/ui/input"
import { Textarea } from "../ui/textarea"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />

      <div className="z-10 relative mx-auto px-4 md:px-6 container">
        <SectionHeader
          badge="Get In Touch"
          title="Start Your Adventure Today"
          description="Ready to explore the Himalayas? Contact us for a free consultation and let's plan your perfect trek."
        />

        <div className="gap-12 grid lg:grid-cols-2 mt-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-[slide-up_0.8s_ease-out]">
            <div className="space-y-6">
              <h3 className="font-bold text-2xl">Contact Information</h3>

              <div className="space-y-4">
                {[
                  { icon: Phone, title: "+977-1-4123456", subtitle: "24/7 Support", color: "text-primary" },
                  { icon: Mail, title: "info@advensatravels.com", subtitle: "Quick Response", color: "text-secondary" },
                  { icon: MapPin, title: "Thamel, Kathmandu", subtitle: "Nepal", color: "text-accent" },
                ].map((contact, index) => {
                  const IconComponent = contact.icon
                  return (
                    <FloatingCard
                      key={contact.title}
                      className="flex items-center gap-4 p-6 animate-[slide-up_0.8s_ease-out]"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center shadow-lg`}
                      >
                        <IconComponent className={`w-6 h-6 ${contact.color}`} />
                      </div>
                      <div>
                        <div className="font-semibold">{contact.title}</div>
                        <div className="text-muted-foreground text-sm">{contact.subtitle}</div>
                      </div>
                    </FloatingCard>
                  )
                })}
              </div>
            </div>

            <FloatingCard className="p-6">
              <h4 className="flex items-center gap-2 mb-4 font-semibold">
                <Clock className="w-5 h-5 text-primary" />
                Office Hours
              </h4>
              <div className="space-y-2 text-sm">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Emergency Only" },
                ].map((schedule) => (
                  <div key={schedule.day} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </FloatingCard>
          </div>

          {/* Contact Form */}
          <FloatingCard className="p-8 animate-[slide-up_0.8s_ease-out_0.2s_both]">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-bold text-2xl">Send us a Message</h3>
                <p className="text-muted-foreground">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
              </div>

              <form className="space-y-6">
                <div className="gap-4 grid grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="font-medium text-sm">
                      First Name
                    </label>
                    <Input id="first-name" placeholder="John" className="rounded-xl h-12" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="font-medium text-sm">
                      Last Name
                    </label>
                    <Input id="last-name" placeholder="Doe" className="rounded-xl h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="font-medium text-sm">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" className="rounded-xl h-12" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="trek" className="font-medium text-sm">
                    Interested Trek
                  </label>
                  <Input id="trek" placeholder="Everest Base Camp" className="rounded-xl h-12" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="font-medium text-sm">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    cols={4}
                    className="rounded-xl min-h-[140px] placeholder:text-muted-foreground text-sm resize-none"
                    placeholder="Tell us about your trekking experience and preferences..."
                  />
                </div>

                <GradientButton className="w-full">Send Message</GradientButton>
              </form>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}
