import Image from "next/image"
import { FloatingCard } from "../custom/floating-card"
import { SectionHeader } from "../custom/section-header"

const stats = [
  { value: "10+", label: "Years Experience", color: "from-primary to-accent" },
  { value: "2000+", label: "Happy Trekkers", color: "from-secondary to-muted" },
  { value: "50+", label: "Trek Routes", color: "from-accent to-primary" },
  { value: "100%", label: "Safety Record", color: "from-primary to-secondary" },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5" />

      <div className="z-10 relative mx-auto px-4 md:px-6 container">
        <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2">
          <div className="space-y-8 animate-[slide-up_0.8s_ease-out]">
            <SectionHeader
              badge="About Advensa Travels"
              title="Your Trusted Himalayan Adventure Partner"
              description="Founded by passionate mountaineers and local experts, Advensa Travels has been guiding adventurers through Nepal's magnificent landscapes for over a decade."
              centered={false}
            />

            <div className="gap-4 grid grid-cols-2">
              {stats.map((stat, index) => (
                <FloatingCard
                  key={stat.label}
                  className="group p-6 text-center animate-[slide-up_0.8s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}
                  >
                    {stat.value}
                  </div>
                  <div className="mt-1 text-muted-foreground text-sm">{stat.label}</div>
                </FloatingCard>
              ))}
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We believe in responsible tourism that benefits local communities while preserving the pristine beauty
                of the Himalayas. Our team consists of certified guides, porters, and support staff who are passionate
                about sharing Nepal&apos;s natural and cultural treasures.
              </p>
              <p>
                Every trek is carefully planned with safety as our top priority, ensuring you can focus on the
                incredible journey ahead while we handle all the logistics.
              </p>
            </div>
          </div>

          <div className="relative animate-[fade-in_1s_ease-out_0.3s_both]">
            <FloatingCard className="overflow-hidden animate-[float_6s_ease-in-out_infinite]">
              <Image
                src="/team.webp"
                width="600"
                height="500"
                alt="Advensa Travels Team"
                className="w-full object-cover aspect-[4/3]"
              />
            </FloatingCard>

            {/* Decorative elements */}
            <div className="-top-4 -right-4 absolute bg-gradient-to-br from-primary/20 to-accent/20 blur-xl rounded-full w-24 h-24 animate-pulse" />
            <div
              className="-bottom-4 -left-4 absolute bg-gradient-to-br from-secondary/20 to-muted/20 blur-xl rounded-full w-32 h-32 animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
