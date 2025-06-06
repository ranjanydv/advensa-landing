'use client';

import { MenuIcon } from '@/lib/icons/Menu';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { buttonVariants } from '../ui/button';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'}`}>
            <div className="mx-auto px-4 lg:px-6 container">
                <div className="flex justify-between items-center py-2 min-h-16">
                    <Link href="/" className="group flex items-center gap-3">
                        <Image src={'/logo.webp'} alt="Advensa Travel" width={60} height={70} className="object-contain" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {['Treks', 'Services', 'About', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={(e) => handleNavClick(e, item)}
                                className="group relative font-medium hover:text-primary text-sm transition-colors duration-300">
                                {item}
                                <span className="-bottom-1 left-0 absolute bg-gradient-to-r from-primary to-accent w-0 group-hover:w-full h-0.5 transition-all duration-300" />
                            </Link>
                        ))}
                        <Link className={cn(buttonVariants({ size: 'lg', variant: 'secondary' }), 'h-12')} href="#contact">
                            Book Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <MenuIcon
                        isOpen={isMobileMenuOpen}
                        onOpenChange={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden hover:bg-white/10 p-2 rounded-lg transition-colors"
                    />
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden top-full left-0 absolute border-white/20 border-t w-full glass-effect glass-effect">
                            <nav className="flex flex-col space-y-4 p-4">
                                {['Treks', 'Services', 'About', 'Contact'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => handleNavClick(e, item)}
                                        className="py-2 font-medium hover:text-primary text-sm transition-colors">
                                        {item}
                                    </Link>
                                ))}
                                <Link
                                    className={buttonVariants({ size: 'lg', variant: 'secondary' })}
                                    href="#contact"
                                    onClick={() => setIsMobileMenuOpen(false)}>
                                    Book Now
                                </Link>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
