'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
    text: string;
    className?: string;
    speed?: number;
    delay?: number;
    loop?: boolean;
    pauseDuration?: number;
}

export default function TypingAnimation({
    text,
    className = '',
    speed = 80,
    delay = 300,
    loop = true,
    pauseDuration = 2000
}: TypingAnimationProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let isDeleting = false;
        let timeoutId: NodeJS.Timeout;

        const animate = () => {
            if (!isDeleting) {
                // Typing
                if (currentIndex < text.length) {
                    currentIndex++;
                    setDisplayedText(text.slice(0, currentIndex));
                    timeoutId = setTimeout(animate, speed);
                } else {
                    // Finished typing, pause then start deleting
                    setIsTyping(false);
                    if (loop) {
                        timeoutId = setTimeout(() => {
                            isDeleting = true;
                            setIsTyping(true);
                            animate();
                        }, pauseDuration);
                    }
                }
            } else {
                // Deleting
                if (currentIndex > 0) {
                    currentIndex--;
                    setDisplayedText(text.slice(0, currentIndex));
                    timeoutId = setTimeout(animate, speed / 2); // Delete faster
                } else {
                    // Finished deleting, pause then start typing
                    isDeleting = false;
                    timeoutId = setTimeout(animate, pauseDuration / 2);
                }
            }
        };

        // Initial delay before starting
        const startDelay = setTimeout(() => {
            animate();
        }, delay);

        // Cursor blink effect
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 530);

        return () => {
            clearTimeout(startDelay);
            clearTimeout(timeoutId);
            clearInterval(cursorInterval);
        };
    }, [text, speed, delay, loop, pauseDuration]);

    return (
        <span className={className}>
            {displayedText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} text-yellow-400 transition-opacity duration-100`}>_</span>
        </span>
    );
}
