'use client'

import { useEffect, useRef } from 'react'

export function Visualizer() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Demo animation for now - will be replaced with actual audio visualization
    let hue = 0
    const bars = 50
    const barWidth = canvas.width / bars

    function animate() {
      if (!ctx || !canvas) return

      // Clear background
      ctx.fillStyle = 'rgba(10, 10, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < bars; i++) {
        const height = Math.random() * canvas.height * 0.5
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, canvas.height - height, 0, canvas.height)
        gradient.addColorStop(0, `hsl(${hue}, 100%, 50%)`)
        gradient.addColorStop(1, `hsl(${hue + 60}, 100%, 50%)`)
        
        ctx.fillStyle = gradient
        ctx.fillRect(i * barWidth, canvas.height - height, barWidth - 2, height)
      }

      hue = (hue + 1) % 360
      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }
  }, [])

  return (
    <div className="mt-4 neon-border rounded-lg overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-40"
        style={{ background: 'var(--dark-bg)' }}
      />
    </div>
  )
}
