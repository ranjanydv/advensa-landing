import { Calendar, Phone } from "lucide-react"
import { GradientButton } from "../custom/gradient-button"

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />

      <div className="z-10 relative mx-auto px-4 md:px-6 container">
        <div className="space-y-8 text-white text-center animate-[slide-up_0.8s_ease-out]">
          <div className="space-y-4">
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Ready for Your Himalayan Adventure?
            </h2>
            <p className="opacity-90 mx-auto max-w-3xl text-xl leading-relaxed">
              Join thousands of satisfied trekkers who have experienced the magic of Nepal with Advensa Travels.
            </p>
          </div>

          <div className="flex sm:flex-row flex-col justify-center gap-4">
            <GradientButton
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-white/90 shadow-2xl text-primary"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Book Your Trek Now
            </GradientButton>
            <GradientButton
              variant="outline"
              size="lg"
              className="hover:bg-white shadow-2xl border-white text-white hover:text-primary"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call +977-1-4123456
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  )
}
