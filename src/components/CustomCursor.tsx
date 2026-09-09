import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    let mouseX = 0
    let mouseY = 0
    let dotX = 0
    let dotY = 0
    let rafId: number

    const animate = () => {
      dotX += (mouseX - dotX) * 0.15
      dotY += (mouseY - dotY) * 0.15
      dot.style.transform = `translate(${dotX - (expanded ? 24 : 4)}px, ${dotY - (expanded ? 24 : 4)}px)`
      rafId = requestAnimationFrame(animate)
    }

    const handleMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleEnter = () => setExpanded(true)
    const handleLeave = () => setExpanded(false)

    window.addEventListener('mousemove', handleMove)
    rafId = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('a, button, input, textarea, [data-cursor]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(rafId)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [expanded])

  return (
    <div
      ref={dotRef}
      className={`cursor-dot ${expanded ? 'expanded' : ''}`}
      style={{ willChange: 'transform' }}
    />
  )
}