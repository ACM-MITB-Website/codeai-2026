function AIBrainIllustration() {
    return (
        <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
            <div className="absolute w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 animate-pulse-glow"></div>
            <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-cyan-400/30 to-blue-500/30 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>

            <svg viewBox="0 0 400 400" className="relative w-64 h-64 md:w-80 md:h-80" fill="none">
                <g stroke="url(#gradient1)" strokeWidth="1.5" opacity="0.6">
                    <path d="M100 200 Q150 150 200 200 T300 200" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="10;0" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M150 100 Q200 180 250 100" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="10;0" dur="2.5s" repeatCount="indefinite" />
                    </path>
                    <path d="M150 300 Q200 220 250 300" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="10;0" dur="3s" repeatCount="indefinite" />
                    </path>
                </g>

                <path d="M200 80 C120 80 70 140 70 200 C70 280 130 320 200 320" stroke="url(#gradient1)" strokeWidth="3" fill="url(#gradient2)" opacity="0.3" />
                <path d="M200 80 C280 80 330 140 330 200 C330 280 270 320 200 320" stroke="url(#gradient1)" strokeWidth="3" fill="url(#gradient3)" opacity="0.3" />

                <g className="neural-nodes">
                    <circle cx="200" cy="200" r="8" fill="url(#gradient1)">
                        <animate attributeName="r" values="8;12;8" dur="2s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="150" r="5" fill="#3b82f6">
                        <animate attributeName="r" values="5;7;5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="150" r="5" fill="#8b5cf6">
                        <animate attributeName="r" values="5;7;5" dur="2.3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="150" cy="250" r="5" fill="#06b6d4">
                        <animate attributeName="r" values="5;7;5" dur="2.7s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="250" cy="250" r="5" fill="#3b82f6">
                        <animate attributeName="r" values="5;7;5" dur="2.1s" repeatCount="indefinite" />
                    </circle>
                </g>

                <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
            </svg>

            <div className="absolute top-10 right-10 glass-card rounded-lg p-3 animate-float-slow">
                <code className="text-xs text-yellow-400 font-mono">{'{ AI: "neural" }'}</code>
            </div>
            <div className="absolute bottom-20 left-5 glass-card rounded-lg p-3 animate-float-slow" style={{ animationDelay: '2s' }}>
                <code className="text-xs text-yellow-400 font-mono">{'fn learn() {}'}</code>
            </div>
            <div className="absolute top-5 left-1/4 w-4 h-4 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 animate-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-10 right-1/4 w-6 h-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 animate-float" style={{ animationDelay: '1.5s' }}></div>
        </div>
    )
}

export default AIBrainIllustration
