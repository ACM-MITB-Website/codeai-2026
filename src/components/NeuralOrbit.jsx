import { useEffect, useRef } from 'react'

function NeuralOrbit() {
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

        // Configuration
        const centerX = () => canvas.offsetWidth / 2
        const centerY = () => canvas.offsetHeight / 2
        const maxRadius = () => Math.min(canvas.offsetWidth, canvas.offsetHeight) * 0.4

        // Orbiting nodes
        const nodes = [
            { orbit: 0.3, speed: 0.5, size: 4, color: '#ffd700', angle: 0 },
            { orbit: 0.3, speed: 0.5, size: 3, color: '#60a5fa', angle: Math.PI },
            { orbit: 0.5, speed: 0.35, size: 5, color: '#a855f7', angle: Math.PI / 2 },
            { orbit: 0.5, speed: 0.35, size: 4, color: '#22d3d3', angle: Math.PI * 1.5 },
            { orbit: 0.7, speed: 0.25, size: 6, color: '#fbbf24', angle: Math.PI / 4 },
            { orbit: 0.7, speed: 0.25, size: 4, color: '#f472b6', angle: Math.PI * 1.25 },
            { orbit: 0.9, speed: 0.18, size: 5, color: '#34d399', angle: Math.PI / 3 },
            { orbit: 0.9, speed: 0.18, size: 3, color: '#818cf8', angle: Math.PI * 1.33 },
            { orbit: 1.0, speed: 0.12, size: 4, color: '#f97316', angle: 0 },
        ]

        // Center node
        const centerNode = { x: 0, y: 0, size: 8, color: '#ffd700' }

        const drawGlow = (x, y, radius, color, intensity) => {
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
            gradient.addColorStop(0, color)
            gradient.addColorStop(0.5, `${color}44`)
            gradient.addColorStop(1, 'transparent')
            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(x, y, radius, 0, Math.PI * 2)
            ctx.fill()
        }

        const drawOrbitRing = (radius, opacity) => {
            ctx.beginPath()
            ctx.arc(centerX(), centerY(), radius, 0, Math.PI * 2)
            ctx.strokeStyle = `rgba(255, 215, 0, ${opacity})`
            ctx.lineWidth = 1
            ctx.setLineDash([5, 10])
            ctx.stroke()
            ctx.setLineDash([])
        }

        const drawCurvedConnection = (x1, y1, x2, y2, color) => {
            const midX = (x1 + x2) / 2
            const midY = (y1 + y2) / 2
            const offsetX = (y2 - y1) * 0.3
            const offsetY = (x1 - x2) * 0.3

            ctx.beginPath()
            ctx.moveTo(x1, y1)
            ctx.quadraticCurveTo(midX + offsetX, midY + offsetY, x2, y2)
            ctx.strokeStyle = `${color}33`
            ctx.lineWidth = 1
            ctx.stroke()
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

            const cx = centerX()
            const cy = centerY()
            const mr = maxRadius()

            // Draw orbit rings with pulse effect
            const orbits = [0.3, 0.5, 0.7, 0.9, 1.0]
            orbits.forEach((orbit, i) => {
                const pulseOpacity = 0.1 + Math.sin(time * 0.5 + i) * 0.05
                drawOrbitRing(mr * orbit, pulseOpacity)
            })

            // Central glow
            drawGlow(cx, cy, mr * 0.25, '#ffd700', 0.3)

            // Update and draw nodes
            const nodePositions = []
            nodes.forEach((node, index) => {
                node.angle += node.speed * 0.01
                const x = cx + Math.cos(node.angle) * mr * node.orbit
                const y = cy + Math.sin(node.angle) * mr * node.orbit
                nodePositions.push({ x, y, color: node.color })

                // Draw node glow
                drawGlow(x, y, node.size * 4, node.color, 0.5)

                // Draw node
                ctx.beginPath()
                ctx.arc(x, y, node.size, 0, Math.PI * 2)
                ctx.fillStyle = node.color
                ctx.fill()

                // Add small pulse ring around node
                const pulseRadius = node.size + Math.sin(time * 2 + index) * 3 + 3
                ctx.beginPath()
                ctx.arc(x, y, pulseRadius, 0, Math.PI * 2)
                ctx.strokeStyle = `${node.color}44`
                ctx.lineWidth = 1
                ctx.stroke()
            })

            // Draw curved connections between nearby nodes
            for (let i = 0; i < nodePositions.length; i++) {
                for (let j = i + 1; j < nodePositions.length; j++) {
                    const dx = nodePositions[i].x - nodePositions[j].x
                    const dy = nodePositions[i].y - nodePositions[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < mr * 0.6) {
                        drawCurvedConnection(
                            nodePositions[i].x, nodePositions[i].y,
                            nodePositions[j].x, nodePositions[j].y,
                            nodePositions[i].color
                        )
                    }
                }
                // Connect to center
                drawCurvedConnection(nodePositions[i].x, nodePositions[i].y, cx, cy, nodePositions[i].color)
            }

            // Draw center node
            ctx.beginPath()
            ctx.arc(cx, cy, centerNode.size, 0, Math.PI * 2)
            ctx.fillStyle = centerNode.color
            ctx.fill()

            // Center pulse ring
            const centerPulse = centerNode.size + Math.sin(time * 1.5) * 4 + 6
            ctx.beginPath()
            ctx.arc(cx, cy, centerPulse, 0, Math.PI * 2)
            ctx.strokeStyle = `${centerNode.color}66`
            ctx.lineWidth = 2
            ctx.stroke()

            time += 0.02
            animationId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationId)
        }
    }, [])

    return (
        <div className="neural-orbit-container">
            <canvas ref={canvasRef} className="neural-orbit-canvas" />
            <div className="neural-orbit-overlay">
                <span className="neural-orbit-label">AI</span>
            </div>
        </div>
    )
}

export default NeuralOrbit
