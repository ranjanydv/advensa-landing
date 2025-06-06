import type { ReactNode } from 'react';
import { Badge } from '../ui/badge';

interface SectionHeaderProps {
    badge?: string;
    title: string | ReactNode;
    description?: string;
    centered?: boolean;
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
    return (
        <div className={`space-y-4 ${centered ? 'text-center' : ''}`}>
            {badge && (
                <Badge variant="outline" className="border-primary/30 text-primary glass-effect">
                    {badge}
                </Badge>
            )}
            <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight">
                {typeof title === 'string' ? <span className="gradient-text">{title}</span> : title}
            </h2>
            {description && <p className="mx-auto max-w-3xl text-muted-foreground text-xl leading-relaxed">{description}</p>}
        </div>
    );
}
