'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface Logo {
    name: string;
    logo: string;
}

interface LogoCarouselProps {
    logos: Logo[];
    direction?: 'left' | 'right';
    speed?: number;
}

export default function LogoCarousel({ logos, direction = 'left', speed = 30 }: LogoCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isClient, setIsClient] = useState(false);

    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        const singleSetWidth = scrollContainer.scrollWidth / 4;

        // For right direction, start offset so we have room to scroll left
        let position = direction === 'right' ? singleSetWidth : 0;
        const pixelsPerFrame = direction === 'left' ? 0.5 : -0.5;

        const animate = () => {
            position += pixelsPerFrame;

            // Reset position for seamless loop
            if (direction === 'left') {
                if (position >= singleSetWidth) {
                    position = 0;
                }
            } else {
                // For right direction (scrolling content to the right)
                if (position <= 0) {
                    position = singleSetWidth;
                }
            }

            scrollContainer.style.transform = `translateX(${-position}px)`;
            animationId = requestAnimationFrame(animate);
        };

        // Set initial position
        scrollContainer.style.transform = `translateX(${-position}px)`;
        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [direction, speed, isClient]);

    if (!isClient) {
        return (
            <div className="h-28 bg-black"></div>
        );
    }

    return (
        <div className="relative overflow-hidden py-2">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

            <div
                ref={scrollRef}
                className="flex gap-8 items-center will-change-transform"
            >
                {duplicatedLogos.map((logo, index) => (
                    <div
                        key={`${logo.name}-${index}`}
                        className="flex-shrink-0 bg-gray-900/80 border border-gray-700 hover:border-yellow-500/50 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-gray-800/80"
                    >
                        <Image
                            src={logo.logo}
                            alt={logo.name}
                            width={240}
                            height={120}
                            className="h-24 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
