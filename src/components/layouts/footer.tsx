import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-50 to-white border-t">
            <div className="mx-auto px-4 md:px-6 py-8 container">
                <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="group flex items-center gap-3">
                            <Image src={'/logo.webp'} alt="Advensa Travel" width={60} height={70} className="object-contain" />
                        </Link>
                        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} Advensa Travels. All rights reserved.</p>
                    </div>

                    <nav className="hidden md:flex gap-6">
                        {['Terms of Service', 'Privacy Policy', 'Booking Terms'].map((item) => (
                            <Link
                                key={item}
                                href="https://advensatravel.com"
                                target="_blank"
                                className="text-muted-foreground hover:text-primary text-sm transition-colors">
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
