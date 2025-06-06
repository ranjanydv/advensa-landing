import { AboutSection } from '@/components/layouts/about';
import { ContactSection } from '@/components/layouts/contact';
import { CTASection } from '@/components/layouts/cta';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { HeroSection } from '@/components/layouts/hero';
import { PopularTreksSection } from '@/components/layouts/popular-treks';
import { ServicesSection } from '@/components/layouts/services';
import { TestimonialsSection } from '@/components/layouts/testimonials';


export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <HeroSection />
                <PopularTreksSection />
                <ServicesSection />
                <AboutSection />
                <TestimonialsSection />
                <ContactSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}
