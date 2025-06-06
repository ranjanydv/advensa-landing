import React from 'react';
import { ChevronDown, Instagram, Twitter } from 'lucide-react';

const HomePage = () => {
    return (
        <div className="relative min-h-[90vh] overflow-hidden">
            {/* Background Image */}
            <div className="z-0 absolute inset-0">
                <div
                    className="bg-cover bg-center w-full h-full"
                    style={{
                        backgroundImage: `url('/hero.webp')`,
                        opacity: 0.6,
                    }}
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-1% from-secondary/80 via-10% via-transparent to-97% to-transparent" />

            <div className="z-10 relative flex justify-center items-center px-8 min-h-[95vh]">
                <div className="max-w-4xl">
                    <h1 className="mb-8 font-light text-[3rem] text-black md:text-[4rem] lg:text-[4.5rem] leading-tight">
                        Your Journey
                        <br />
                        <span className="font-normal">
                            Starts Here...
                        </span>
                    </h1>

                    <div className="flex justify-center items-center mt-16 mb-8">
                        <span className="mr-4 text-sm tracking-wider">Scroll Down</span>
                        <ChevronDown className="w-5 h-5 animate-bounce" />
                    </div>
                </div>
            </div>

            {/* Side Navigation */}
            <div className="hidden lg:block top-1/2 left-8 z-20 fixed -translate-y-1/2 transform">
                <div className="flex flex-col items-center space-y-6">
                    <span className="mb-10 text-black text-sm -rotate-90 transform">Follow us</span>
                    <Instagram className="w-5 h-5 text-black hover:text-primary -rotate-90 transition-colors cursor-pointer" />
                    <Twitter className="w-5 h-5 text-black hover:text-primary -rotate-90 transition-colors cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default HomePage;
