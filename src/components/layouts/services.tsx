import { Compass, Shield, Users, Award, MapPin, Calendar } from "lucide-react"
import { FloatingCard } from "../custom/floating-card"
import { SectionHeader } from "../custom/section-header"

const services = [
  {
    icon: Compass,
    title: "Expert Guides",
    description:
      "Licensed and experienced local guides who know every trail, ensuring your safety and enriching your journey with cultural insights.",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Comprehensive safety protocols, emergency evacuation insurance, and first-aid trained staff for your peace of mind.",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate group sizes (max 12 people) for personalized attention and minimal environmental impact.",
    color: "text-accent",
  },
  {
    icon: Award,
    title: "Quality Equipment",
    description:
      "High-quality trekking gear, sleeping bags, and safety equipment provided. Optional gear rental available.",
    color: "text-primary",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "Deep knowledge of local culture, hidden trails, and the best teahouses for authentic mountain experiences.",
    color: "text-secondary",
  },
  {
    icon: Calendar,
    title: "Flexible Itineraries",
    description: "Customizable trek packages to match your fitness level, time constraints, and personal preferences.",
    color: "text-accent",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />

      <div className="z-10 relative mx-auto px-4 md:px-6 container">
        <SectionHeader
          badge="Our Services"
          title="Complete Trekking Solutions"
          description="From planning to execution, we handle every aspect of your Himalayan adventure with professional expertise."
        />

        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mt-16">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <FloatingCard
                key={service.title}
                className="group p-8 animate-[slide-up_0.8s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <IconComponent className={`w-8 h-8 ${service.color}`} />
                  </div>

                  <h3 className="font-bold group-hover:text-primary text-xl transition-colors">{service.title}</h3>

                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </FloatingCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
