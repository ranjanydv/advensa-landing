import Image from 'next/image';
import { Calendar, Phone, Star, Users, MapPin } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { GradientButton } from '../custom/gradient-button';
import { FloatingCard } from '../custom/floating-card';

export function HeroSection() {
    return (
        <section className="relative flex justify-center items-center py-10 min-h-screen overflow-hidden">
            {/* Background with gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,154,0,0.2),transparent_50%)]" />

            <div className="z-10 relative mx-auto px-4 md:px-6 pt-20 container">
                <div className="items-center gap-12 lg:gap-16 grid lg:grid-cols-2">
                    <div className="space-y-8 animate-[slide-up_0.8s_ease-out]">
                        <div className="space-y-6">
                            <Badge className="px-4 py-2 border-primary/30 text-primary glass-effect">
                                <MapPin className="mr-2 w-4 h-4" />
                                Nepal Trekking Specialists
                            </Badge>

                            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight">
                                The <span className="gradient-text">Great Trails </span>of Nepal with Advensa Travel
                            </h1>

                            <p className="max-w-2xl text-muted-foreground text-xl leading-relaxed">
                                Discover the wonders of Nepal with our expert travel services. From majestic mountain treks to cultural city tours, we create unforgettable journeys tailored to your dreams.
                            </p>
                        </div>

                        <div className="flex sm:flex-row flex-col gap-4">
                            <GradientButton size="lg" className="group">
                                <Calendar className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Book Your Trek
                            </GradientButton>
                            <GradientButton variant="outline" size="lg" className="group">
                                <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                                Free Consultation
                            </GradientButton>
                        </div>

                        <div className="flex flex-wrap items-center gap-6 text-sm">
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
                                <Star className="fill-primary w-4 h-4 text-primary" />
                                <span className="font-semibold">4.9/5</span>
                                <span className="text-muted-foreground">(500+ reviews)</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
                                <Users className="w-4 h-4 text-primary" />
                                <span className="font-semibold">2000+ Happy Trekkers</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative px-2 lg:px-0 animate-[fade-in_1s_ease-out_0.3s_both]">
                        <div className="relative">
                            <FloatingCard className="animate-[float_6s_ease-in-out_infinite]">
                                <Image
                                    src="/hero.webp"
                                    width="600"
                                    height="600"
                                    alt="Nepal Mountain Trekking"
                                    className="rounded-2xl w-full object-cover aspect-square"
                                />
                            </FloatingCard>

                            {/* Floating stats cards */}
                            <FloatingCard className="-top-4 -left-4 absolute p-4 animate-[float_6s_ease-in-out_infinite_1s]">
                                <div className="text-center">
                                    <div className="font-bold text-primary text-2xl">10+</div>
                                    <div className="text-muted-foreground text-xs">Years</div>
                                </div>
                            </FloatingCard>

                            <FloatingCard className="-right-4 -bottom-4 absolute p-4 animate-[float_6s_ease-in-out_infinite_2s]">
                                <div className="text-center">
                                    <div className="font-bold text-accent text-2xl">50+</div>
                                    <div className="text-muted-foreground text-xs">Routes</div>
                                </div>
                            </FloatingCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
