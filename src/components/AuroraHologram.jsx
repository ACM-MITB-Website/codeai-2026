import { useEffect, useRef } from 'react'

function AuroraHologram() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationId
        let time = 0

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio
            canvas.height = canvas.offsetHeight * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
        }

        resize()
        window.addEventListener('resize', resize)

        // Aurora wave parameters
        const waves = [
            { amplitude: 30, frequency: 0.008, speed: 0.015, color: 'rgba(139, 92, 246, 0.6)', offset: 0 },
            { amplitude: 25, frequency: 0.012, speed: 0.02, color: 'rgba(59, 130, 246, 0.5)', offset: 50 },
            { amplitude: 35, frequency: 0.006, speed: 0.012, color: 'rgba(6, 182, 212, 0.4)', offset: 100 },
            { amplitude: 20, frequency: 0.015, speed: 0.025, color: 'rgba(168, 85, 247, 0.5)', offset: -30 },
            { amplitude: 28, frequency: 0.01, speed: 0.018, color: 'rgba(255, 215, 0, 0.3)', offset: 70 },
        ]

        // Floating particles
        const particles = []
        const numParticles = 50

        for (let i = 0; i < numParticles; i++) {
            particles.push({
                x: Math.random() * 500,
                y: Math.random() * 500,
                size: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: Math.random() * -0.5 - 0.2,
                opacity: Math.random() * 0.5 + 0.3
            })
        }

        // Holographic ring data
        const rings = [
            { radius: 0.85, rotation: 0, speed: 0.002, dashes: 60 },
            { radius: 0.7, rotation: Math.PI / 4, speed: -0.003, dashes: 40 },
            { radius: 0.55, rotation: 0, speed: 0.004, dashes: 30 },
        ]

        // Data points orbiting
        const dataPoints = []
        for (let i = 0; i < 8; i++) {
            dataPoints.push({
                angle: (Math.PI * 2 / 8) * i,
                radius: 0.65,
                speed: 0.008,
                size: 4,
                pulsePhase: Math.random() * Math.PI * 2
            })
        }

        const drawAurora = (width, height) => {
            const centerY = height * 0.5

            waves.forEach(wave => {
                ctx.beginPath()

                for (let x = 0; x <= width; x += 2) {
                    const y = centerY + wave.offset +
                        Math.sin(x * wave.frequency + time * wave.speed * 60) * wave.amplitude +
                        Math.sin(x * wave.frequency * 1.5 + time * wave.speed * 40) * wave.amplitude * 0.5 +
                        Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 80) * wave.amplitude * 0.3

                    if (x === 0) {
                        ctx.moveTo(x, y)
                    } else {
                        ctx.lineTo(x, y)
                    }
                }

                // Complete the shape to bottom
                ctx.lineTo(width, height)
                ctx.lineTo(0, height)
                ctx.closePath()

                // Create gradient
                const gradient = ctx.createLinearGradient(0, centerY - 100, 0, height)
                gradient.addColorStop(0, wave.color)
                gradient.addColorStop(0.5, wave.color.replace(/[\d.]+\)$/, '0.2)'))
                gradient.addColorStop(1, 'transparent')

                ctx.fillStyle = gradient
                ctx.fill()
            })
        }

        const drawHolographicRings = (cx, cy, maxRadius) => {
            rings.forEach(ring => {
                ring.rotation += ring.speed

                ctx.save()
                ctx.translate(cx, cy)
                ctx.rotate(ring.rotation)

                const radius = maxRadius * ring.radius
                const dashLength = (Math.PI * 2) / ring.dashes

                for (let i = 0; i < ring.dashes; i++) {
                    const startAngle = i * dashLength
                    const endAngle = startAngle + dashLength * 0.6

                    const opacity = 0.3 + Math.sin(time * 2 + i * 0.5) * 0.2

                    ctx.beginPath()
                    ctx.arc(0, 0, radius, startAngle, endAngle)
                    ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`
                    ctx.lineWidth = 1.5
                    ctx.stroke()
                }

                ctx.restore()
            })
        }

        const drawDataPoints = (cx, cy, maxRadius) => {
            dataPoints.forEach((point, index) => {
                point.angle += point.speed

                const x = cx + Math.cos(point.angle) * maxRadius * point.radius
                const y = cy + Math.sin(point.angle) * maxRadius * point.radius

                // Pulse effect
                const pulse = 1 + Math.sin(time * 3 + point.pulsePhase) * 0.3
                const size = point.size * pulse

                // Glow
                const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 4)
                gradient.addColorStop(0, 'rgba(255, 215, 0, 0.8)')
                gradient.addColorStop(0.5, 'rgba(255, 215, 0, 0.3)')
                gradient.addColorStop(1, 'transparent')

                ctx.beginPath()
                ctx.arc(x, y, size * 4, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()

                // Core
                ctx.beginPath()
                ctx.arc(x, y, size, 0, Math.PI * 2)
                ctx.fillStyle = '#ffd700'
                ctx.fill()

                // Connection to center
                ctx.beginPath()
                ctx.moveTo(cx, cy)
                ctx.lineTo(x, y)
                ctx.strokeStyle = `rgba(255, 215, 0, ${0.1 + Math.sin(time * 2 + index) * 0.1})`
                ctx.lineWidth = 1
                ctx.stroke()
            })
        }

        const drawCenterCore = (cx, cy) => {
            // Outer glow
            const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 80)
            gradient.addColorStop(0, 'rgba(255, 215, 0, 0.4)')
            gradient.addColorStop(0.3, 'rgba(168, 85, 247, 0.2)')
            gradient.addColorStop(0.6, 'rgba(59, 130, 246, 0.1)')
            gradient.addColorStop(1, 'transparent')

            ctx.beginPath()
            ctx.arc(cx, cy, 80, 0, Math.PI * 2)
            ctx.fillStyle = gradient
            ctx.fill()

            // Inner core with pulse
            const coreSize = 15 + Math.sin(time * 2) * 3

            const coreGradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreSize)
            coreGradient.addColorStop(0, '#ffffff')
            coreGradient.addColorStop(0.3, '#ffd700')
            coreGradient.addColorStop(1, 'rgba(255, 215, 0, 0.5)')

            ctx.beginPath()
            ctx.arc(cx, cy, coreSize, 0, Math.PI * 2)
            ctx.fillStyle = coreGradient
            ctx.fill()

            // Pulse ring
            const pulseRadius = 20 + (time * 30) % 60
            const pulseOpacity = 0.5 - (pulseRadius - 20) / 60 * 0.5

            ctx.beginPath()
            ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(255, 215, 0, ${pulseOpacity})`
            ctx.lineWidth = 2
            ctx.stroke()
        }

        const drawParticles = (width, height) => {
            particles.forEach(p => {
                p.x += p.speedX
                p.y += p.speedY

                // Reset particle if it goes off screen
                if (p.y < 0) {
                    p.y = height
                    p.x = Math.random() * width
                }
                if (p.x < 0) p.x = width
                if (p.x > width) p.x = 0

                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
                ctx.fill()
            })
        }

        const drawScanlines = (width, height) => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
            for (let y = 0; y < height; y += 4) {
                ctx.fillRect(0, y, width, 2)
            }
        }

        const animate = () => {
            const width = canvas.offsetWidth
            const height = canvas.offsetHeight
            const cx = width / 2
            const cy = height / 2
            const maxRadius = Math.min(width, height) * 0.45

            ctx.clearRect(0, 0, width, height)

            // Draw aurora waves
            drawAurora(width, height)

            // Draw floating particles
            drawParticles(width, height)

            // Draw holographic rings
            drawHolographicRings(cx, cy, maxRadius)

            // Draw orbiting data points
            drawDataPoints(cx, cy, maxRadius)

            // Draw center core
            drawCenterCore(cx, cy)

            // Subtle scanlines for holographic effect
            drawScanlines(width, height)

            time += 0.016
            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <div className="aurora-hologram-container">
            <canvas ref={canvasRef} className="aurora-hologram-canvas" />
            <div className="aurora-hologram-overlay">
                <div className="hologram-text">
                    <span className="hologram-label">ANALYZING</span>
                    <span className="hologram-value">DATA STREAMS</span>
                </div>
                <div className="hologram-stats">
                    <div className="stat">
                        <span className="stat-value">2.4K+</span>
                        <span className="stat-label">Papers</span>
                    </div>
                    <div className="stat">
                        <span className="stat-value">50+</span>
                        <span className="stat-label">Countries</span>
                    </div>
                </div>
            </div>
            <div className="aurora-corner top-left"></div>
            <div className="aurora-corner top-right"></div>
            <div className="aurora-corner bottom-left"></div>
            <div className="aurora-corner bottom-right"></div>
        </div>
    )
}

export default AuroraHologram
