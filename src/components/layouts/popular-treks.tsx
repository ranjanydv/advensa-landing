"use client"
import Image from 'next/image';
import { Mountain, Clock, MapPin, ArrowRight } from 'lucide-react';
import { SectionHeader } from '../custom/section-header';
import { FloatingCard } from '../custom/floating-card';
import { GradientButton } from '../custom/gradient-button';

const treks = [
    {
        id: 1,
        name: 'Everest Base Camp',
        description:
            "The ultimate trekking adventure to the base of the world's highest peak. 14-day journey through Sherpa villages and stunning mountain vistas.",
        duration: '14 Days',
        altitude: '5,364m',
        image: '/ebc.webp',
        difficulty: 'Challenging',
        highlights: ['Sherpa Culture', 'Kala Patthar', 'Tengboche Monastery'],
        link: 'https://advensatravel.com/package/16-days-everest-base-camp-trek-deluxe',
    },
    {
        id: 2,
        name: 'Annapurna Base Camp',
        description: 'Journey into the heart of the Annapurna Sanctuary. Experience diverse landscapes from subtropical forests to alpine meadows.',
        duration: '12 Days',
        altitude: '4,130m',
        image: '/abc.webp',
        difficulty: 'Moderate',
        highlights: ['Annapurna Sanctuary', 'Hot Springs', 'Rhododendron Forest'],
        link: 'https://advensatravel.com/package/16-days-everest-base-camp-trek-deluxe',
    },
    {
        id: 3,
        name: 'Kathmandu Tour',
        description:
            "Discover the ancient wonders of Kathmandu Valley, home to UNESCO World Heritage sites, vibrant markets, and rich cultural heritage. Perfect for those seeking an immersive cultural experience.",
        duration: '5 Days',
        altitude: '1,400m',
        image: '/patan.webp',
        difficulty: 'Easy',
        highlights: ['Durbar Square', 'Pashupatinath', 'Boudhanath Stupa'],
        link: 'https://advensatravel.com/package/16-days-everest-base-camp-trek-deluxe',
    },
];

export function PopularTreksSection() {
    return (
        <section id="treks" className="relative py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />

            <div className="z-10 relative mx-auto px-4 md:px-6 container">
                <SectionHeader
                    badge="Popular Destinations"
                    title="Iconic Base Camp Treks"
                    description="Discover Nepal's most sought-after trekking routes, each offering unique landscapes and unforgettable experiences."
                />

                <div className="gap-8 lg:gap-12 grid md:grid-cols-2 lg:grid-cols-3 mt-16">
                    {treks.map((trek, index) => (
                        <FloatingCard
                            key={trek.id}
                            className="group p-0 overflow-hidden animate-[slide-up_0.8s_ease-out]"
                            style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="relative overflow-hidden">
                                <Image
                                    src={trek.image || '/placeholder.svg'}
                                    width="400"
                                    height="300"
                                    alt={trek.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="top-4 left-4 absolute">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold glass-effect ${
                                            trek.difficulty === 'Challenging'
                                                ? 'text-red-400'
                                                : trek.difficulty === 'Moderate'
                                                ? 'text-yellow-400'
                                                : 'text-green-400'
                                        }`}>
                                        {trek.difficulty}
                                    </span>
                                </div>
                                <div className="right-4 bottom-4 left-4 absolute">
                                    <h3 className="flex items-center gap-2 mb-2 font-bold text-white text-xl">
                                        <Mountain className="w-5 h-5 text-primary" />
                                        {trek.name}
                                    </h3>
                                </div>
                            </div>

                            <div className="space-y-4 p-6">
                                <p className="text-muted-foreground line-clamp-3 leading-relaxed">{trek.description}</p>

                                <div className="flex justify-between items-center text-sm">
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <Clock className="w-4 h-4" />
                                        {trek.duration}
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground">
                                        <MapPin className="w-4 h-4" />
                                        {trek.altitude}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="font-medium text-sm">Highlights:</div>
                                    <div className="flex flex-wrap gap-2">
                                        {trek.highlights.map((highlight) => (
                                            <span key={highlight} className="bg-primary/10 px-2 py-1 rounded-lg text-primary text-xs">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <GradientButton className="group w-full" onClick={() => window.open(trek.link, '_blank')}>
                                    View Details
                                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </GradientButton>
                            </div>
                        </FloatingCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
