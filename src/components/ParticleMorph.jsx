import { useEffect, useRef, useState } from 'react'

function ParticleMorph() {
    const canvasRef = useRef(null)
    const [currentShape, setCurrentShape] = useState(0)
    const shapeNames = ['AI', 'BRAIN', 'DATA', 'CODE']

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let animationId
        let particles = []
        let targetPositions = []
        let mouse = { x: null, y: null, radius: 150 }
        let time = 0

        const colors = [
            '#ffd700', '#f59e0b', '#a855f7', '#3b82f6',
            '#22d3ee', '#10b981', '#f472b6', '#8b5cf6'
        ]

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio
            canvas.height = canvas.offsetHeight * window.devicePixelRatio
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
            initParticles()
        }

        // Generate points for different shapes
        const generateShapePoints = (shape, width, height, numPoints) => {
            const points = []
            const centerX = width / 2
            const centerY = height / 2
            const scale = Math.min(width, height) * 0.35

            switch (shape) {
                case 0: // AI text
                    const aiText = 'AI'
                    ctx.font = `bold ${scale * 1.5}px Inter, Arial`
                    ctx.textAlign = 'center'
                    ctx.textBaseline = 'middle'
                    ctx.fillStyle = 'white'
                    ctx.fillText(aiText, centerX, centerY)

                    const aiImageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
                    ctx.clearRect(0, 0, canvas.width, canvas.height)

                    for (let y = 0; y < canvas.height; y += 6) {
                        for (let x = 0; x < canvas.width; x += 6) {
                            const i = (y * canvas.width + x) * 4
                            if (aiImageData.data[i + 3] > 128) {
                                points.push({
                                    x: x / window.devicePixelRatio,
                                    y: y / window.devicePixelRatio
                                })
                            }
                        }
                    }
                    break

                case 1: // Brain shape
                    for (let i = 0; i < numPoints; i++) {
                        const t = (i / numPoints) * Math.PI * 2
                        // Brain-like parametric curve
                        const r = scale * (0.8 + 0.3 * Math.sin(3 * t) + 0.15 * Math.sin(5 * t))
                        const x = centerX + r * Math.cos(t) * 1.2
                        const y = centerY + r * Math.sin(t) * 0.9
                        points.push({ x, y })
                    }
                    // Add internal neural connections
                    for (let i = 0; i < numPoints / 2; i++) {
                        const angle = Math.random() * Math.PI * 2
                        const radius = Math.random() * scale * 0.7
                        points.push({
                            x: centerX + radius * Math.cos(angle),
                            y: centerY + radius * Math.sin(angle) * 0.8
                        })
                    }
                    break

                case 2: // DNA Helix
                    for (let i = 0; i < numPoints; i++) {
                        const t = (i / numPoints) * Math.PI * 4
                        const yOffset = (i / numPoints - 0.5) * height * 0.7
                        // Double helix
                        points.push({
                            x: centerX + Math.sin(t) * scale * 0.5,
                            y: centerY + yOffset
                        })
                        points.push({
                            x: centerX - Math.sin(t) * scale * 0.5,
                            y: centerY + yOffset
                        })
                    }
                    break

                case 3: // Circuit/Network
                    // Grid nodes
                    const gridSize = 5
                    for (let i = 0; i < gridSize; i++) {
                        for (let j = 0; j < gridSize; j++) {
                            const x = centerX + (i - gridSize / 2 + 0.5) * scale * 0.5
                            const y = centerY + (j - gridSize / 2 + 0.5) * scale * 0.5
                            points.push({ x, y })
                            // Add extra particles along connections
                            if (i < gridSize - 1) {
                                for (let k = 1; k < 4; k++) {
                                    points.push({
                                        x: x + k * scale * 0.125,
                                        y: y
                                    })
                                }
                            }
                            if (j < gridSize - 1) {
                                for (let k = 1; k < 4; k++) {
                                    points.push({
                                        x: x,
                                        y: y + k * scale * 0.125
                                    })
                                }
                            }
                        }
                    }
                    break
            }

            return points
        }

        class Particle {
            constructor(x, y, index) {
                this.x = x
                this.y = y
                this.originX = x
                this.originY = y
                this.targetX = x
                this.targetY = y
                this.vx = 0
                this.vy = 0
                this.size = Math.random() * 2 + 1.5
                this.color = colors[index % colors.length]
                this.alpha = Math.random() * 0.5 + 0.5
                this.pulseSpeed = Math.random() * 0.02 + 0.01
                this.pulseOffset = Math.random() * Math.PI * 2
            }

            update(time) {
                // Mouse repulsion
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = this.x - mouse.x
                    const dy = this.y - mouse.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < mouse.radius) {
                        const force = (mouse.radius - distance) / mouse.radius
                        const angle = Math.atan2(dy, dx)
                        this.vx += Math.cos(angle) * force * 3
                        this.vy += Math.sin(angle) * force * 3
                    }
                }

                // Return to target position with elastic effect
                const dx = this.targetX - this.x
                const dy = this.targetY - this.y
                this.vx += dx * 0.05
                this.vy += dy * 0.05

                // Apply velocity with damping
                this.vx *= 0.9
                this.vy *= 0.9
                this.x += this.vx
                this.y += this.vy

                // Pulsing size
                this.currentSize = this.size + Math.sin(time * this.pulseSpeed * 100 + this.pulseOffset) * 0.5
            }

            draw(ctx, time) {
                // Glow effect
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.currentSize * 4
                )
                gradient.addColorStop(0, this.color)
                gradient.addColorStop(0.5, `${this.color}66`)
                gradient.addColorStop(1, 'transparent')

                ctx.beginPath()
                ctx.arc(this.x, this.y, this.currentSize * 4, 0, Math.PI * 2)
                ctx.fillStyle = gradient
                ctx.fill()

                // Core
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.currentSize, 0, Math.PI * 2)
                ctx.fillStyle = this.color
                ctx.fill()
            }
        }

        const initParticles = () => {
            const width = canvas.offsetWidth
            const height = canvas.offsetHeight
            const numPoints = 200

            particles = []

            // Generate random initial positions
            for (let i = 0; i < numPoints; i++) {
                particles.push(new Particle(
                    Math.random() * width,
                    Math.random() * height,
                    i
                ))
            }

            updateTargets(0)
        }

        const updateTargets = (shapeIndex) => {
            const width = canvas.offsetWidth
            const height = canvas.offsetHeight

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            targetPositions = generateShapePoints(shapeIndex, width, height, particles.length)

            // Assign targets to particles
            particles.forEach((particle, i) => {
                if (i < targetPositions.length) {
                    particle.targetX = targetPositions[i].x
                    particle.targetY = targetPositions[i].y
                } else {
                    // Extra particles float around
                    const angle = Math.random() * Math.PI * 2
                    const radius = Math.random() * Math.min(width, height) * 0.4
                    particle.targetX = width / 2 + Math.cos(angle) * radius
                    particle.targetY = height / 2 + Math.sin(angle) * radius
                }
            })
        }

        const drawConnections = (ctx) => {
            const maxDistance = 50

            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < maxDistance) {
                        const opacity = (1 - distance / maxDistance) * 0.3
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`
                        ctx.lineWidth = 0.5
                        ctx.stroke()
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            // Draw connections first
            drawConnections(ctx)

            // Update and draw particles
            particles.forEach(particle => {
                particle.update(time)
                particle.draw(ctx, time)
            })

            time += 0.016
            animationId = requestAnimationFrame(animate)
        }

        // Mouse events
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = e.clientX - rect.left
            mouse.y = e.clientY - rect.top
        }

        const handleMouseLeave = () => {
            mouse.x = null
            mouse.y = null
        }

        // Shape cycling
        const shapeInterval = setInterval(() => {
            setCurrentShape(prev => {
                const next = (prev + 1) % 4
                updateTargets(next)
                return next
            })
        }, 4000)

        resize()
        window.addEventListener('resize', resize)
        canvas.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseleave', handleMouseLeave)

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            canvas.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseleave', handleMouseLeave)
            cancelAnimationFrame(animationId)
            clearInterval(shapeInterval)
        }
    }, [])

    return (
        <div className="particle-morph-container">
            <canvas ref={canvasRef} className="particle-morph-canvas" />
            <div className="particle-morph-label">
                <span className="particle-morph-text">{shapeNames[currentShape]}</span>
                <div className="particle-morph-dots">
                    {shapeNames.map((_, i) => (
                        <span
                            key={i}
                            className={`dot ${i === currentShape ? 'active' : ''}`}
                        />
                    ))}
                </div>
            </div>
            <div className="particle-morph-hint">
                <span>Move your cursor to interact</span>
            </div>
        </div>
    )
}

export default ParticleMorph
