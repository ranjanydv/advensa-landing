import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FloatingCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    style?: React.CSSProperties;
}

export function FloatingCard({ children, className, hover = true, style }: FloatingCardProps) {
    return (
        <div
            className={cn(
                'relative bg-white/80 backdrop-blur-sm border border-white/20 rounded-2xl shadow-xl',
                'transition-all duration-500 ease-out',
                hover && 'hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]',
                className
            )}
            style={style}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
            <div className="z-10 relative">{children}</div>
        </div>
    );
}
