'use client';

import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GradientButtonProps {
    children: ReactNode;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    onClick?: () => void;
}

export function GradientButton({ children, className, variant = 'primary', size = 'md', onClick }: GradientButtonProps) {
    const baseClasses = 'cursor-pointer inline-flex items-center justify-center relative overflow-hidden font-semibold transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 whitespace-nowrap';

    const variants = {
        primary: 'bg-gradient-to-br from-primary to-accent text-white shadow-lg hover:shadow-xl',
        secondary: 'bg-gradient-to-r from-secondary to-muted text-white shadow-lg hover:shadow-xl',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-3 text-base rounded-xl',
        lg: 'px-8 py-4 text-lg rounded-2xl',
    };

    return (
        <button onClick={onClick} className={cn(baseClasses, variants[variant], sizes[size], className)}>
            <span className="inline-flex z-10 relative items-center">{children}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </button>
    );
}
