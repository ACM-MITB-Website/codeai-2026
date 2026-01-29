import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeLeft = () => {
        const eventDate = new Date('2026-07-16T09:00:00').getTime();
        const now = new Date().getTime();
        const difference = eventDate - now;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const TimerBox = ({ value, label }) => (
        <div className="flex flex-col items-center px-3 sm:px-5 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm rounded-lg border border-[#ffd700]/30 min-w-[70px] sm:min-w-[90px] md:min-w-[120px]">
            <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#ffd700] tabular-nums">
                {String(value).padStart(2, '0')}
            </span>
            <span className="text-[9px] sm:text-[11px] md:text-xs uppercase tracking-widest text-gray-300 font-medium mt-1">
                {label}
            </span>
        </div>
    );

    return (
        <div className="flex flex-nowrap justify-center gap-2 md:gap-4 py-4 w-full">
            <TimerBox value={timeLeft.days} label="Days" />
            <TimerBox value={timeLeft.hours} label="Hours" />
            <TimerBox value={timeLeft.minutes} label="Minutes" />
            <TimerBox value={timeLeft.seconds} label="Seconds" />
        </div>
    );
};

export default CountdownTimer;
