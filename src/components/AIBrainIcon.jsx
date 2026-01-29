function AIBrainIcon({ size = 64, className = "" }) {
    return (
        <div className={`ai-brain-container ${className}`} style={{ width: size, height: size }}>
            {/* Subtle glow effect */}
            <div className="ai-brain-glow"></div>

            {/* Brain SVG */}
            <svg
                width={size}
                height={size}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="relative z-10"
            >
                {/* Brain outline */}
                <path
                    d="M32 8C24 8 18 12 16 18C12 18 8 22 8 28C8 32 10 36 14 38C14 44 18 50 24 52C26 54 29 56 32 56C35 56 38 54 40 52C46 50 50 44 50 38C54 36 56 32 56 28C56 22 52 18 48 18C46 12 40 8 32 8Z"
                    stroke="#ffd700"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                />

                {/* Neural connections - left hemisphere */}
                <path
                    d="M20 24C22 26 24 28 24 32C24 36 22 38 20 40"
                    stroke="#ffd700"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.8"
                />
                <circle cx="20" cy="24" r="2" fill="#ffd700" opacity="0.9" />
                <circle cx="24" cy="32" r="2" fill="#ffd700" opacity="0.9" />
                <circle cx="20" cy="40" r="2" fill="#ffd700" opacity="0.9" />

                {/* Neural connections - right hemisphere */}
                <path
                    d="M44 24C42 26 40 28 40 32C40 36 42 38 44 40"
                    stroke="#ffd700"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.8"
                />
                <circle cx="44" cy="24" r="2" fill="#ffd700" opacity="0.9" />
                <circle cx="40" cy="32" r="2" fill="#ffd700" opacity="0.9" />
                <circle cx="44" cy="40" r="2" fill="#ffd700" opacity="0.9" />

                {/* Central neural pathway */}
                <path
                    d="M32 16V20M32 28V36M32 44V48"
                    stroke="#ffd700"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    opacity="0.7"
                />
                <circle cx="32" cy="20" r="2" fill="#ffd700" />
                <circle cx="32" cy="32" r="3" fill="#ffd700" />
                <circle cx="32" cy="44" r="2" fill="#ffd700" />

                {/* Cross connections */}
                <path
                    d="M24 32L32 28L40 32L32 36L24 32"
                    stroke="#ffd700"
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.6"
                />

                {/* AI indicator - circuit pattern */}
                <path
                    d="M28 20H36M26 44H38"
                    stroke="#ffd700"
                    strokeWidth="1"
                    strokeLinecap="round"
                    opacity="0.5"
                />
            </svg>
        </div>
    )
}

export default AIBrainIcon
