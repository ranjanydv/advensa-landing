import { Star } from 'lucide-react';
import { FloatingCard } from '../custom/floating-card';
import { SectionHeader } from '../custom/section-header';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        country: 'USA',
        rating: 5,
        text: 'Incredible experience! The guides were knowledgeable and the organization was flawless. Everest Base Camp exceeded all my expectations.',
        initials: 'SJ',
        trek: 'Everest Base Camp',
    },
    {
        id: 2,
        name: 'Michael Kim',
        country: 'Canada',
        rating: 5,
        text: 'Professional service from start to finish. The Annapurna Circuit was beautifully organized and our guide made the journey unforgettable.',
        initials: 'MK',
        trek: 'Annapurna Circuit',
    },
    {
        id: 3,
        name: 'Emma Peterson',
        country: 'Australia',
        rating: 5,
        text: 'Amazing cultural immersion along with breathtaking views. Advensa Travels made our Langtang Valley trek safe and memorable.',
        initials: 'EP',
        trek: 'Langtang Valley',
    },
];

export function TestimonialsSection() {
    return (
        <section className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-muted/10 to-transparent" />

            <div className="z-10 relative mx-auto px-4 md:px-6 container">
                <SectionHeader
                    badge="Testimonials"
                    title="What Our Trekkers Say"
                    description="Real experiences from adventurers who have explored the Himalayas with us."
                />

                <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3 mt-16">
                    {testimonials.map((testimonial, index) => (
                        <FloatingCard
                            key={testimonial.id}
                            className="space-y-6 p-8 animate-[slide-up_0.8s_ease-out]"
                            style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="space-y-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="fill-primary w-5 h-5 text-primary" />
                                    ))}
                                </div>

                                <blockquote className="text-muted-foreground italic leading-relaxed">&quot;{testimonial.text}&quot;</blockquote>

                                <div className="font-medium text-primary text-xs">{testimonial.trek}</div>
                            </div>

                            <div className="flex items-center gap-4 pt-4 border-gray-100 border-t">
                                <div className="flex justify-center items-center bg-gradient-to-br from-primary to-accent rounded-full w-12 h-12 font-semibold text-white">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-muted-foreground text-sm">{testimonial.country}</div>
                                </div>
                            </div>
                        </FloatingCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
