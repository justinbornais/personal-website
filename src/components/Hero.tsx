import React, { useEffect, useRef } from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
}

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const Hero: React.FC<HeroProps> = ({
  title = "Justin Bornais",
  subtitle = "Software Developer, Musician"
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size.
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse tracking.
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Create particles.
    const particleCount = 100;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 2.5,
        speedY: (Math.random() - 0.5) * 2.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    const mouse = mouseRef.current;
    const mouseRadius = 120;
    const returnSpeed = 0.02;

    // Animation loop.
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles.
      particles.forEach((particle) => {
        // Calculate distance from mouse.
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Mouse repulsion effect.
        if (distance < mouseRadius && distance > 0) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - distance) / mouseRadius;
          particle.x -= Math.cos(angle) * force * 8;
          particle.y -= Math.sin(angle) * force * 8;
        }

        // Gentle drift.
        particle.x += particle.speedX * 0.5;
        particle.y += particle.speedY * 0.5;

        // Return to base position (only if far from base).
        const dxBase = particle.baseX - particle.x;
        const dyBase = particle.baseY - particle.y;
        const distanceFromBase = Math.sqrt(dxBase * dxBase + dyBase * dyBase);
        
        if (distanceFromBase > 50) {
          particle.x += dxBase * returnSpeed;
          particle.y += dyBase * returnSpeed;
        }

        // Wrap around screen.
        if (particle.x < -50) {
          particle.x = canvas.width + 50;
          particle.baseX = particle.x;
        }
        if (particle.x > canvas.width + 50) {
          particle.x = -50;
          particle.baseX = particle.x;
        }
        if (particle.y < -50) {
          particle.y = canvas.height + 50;
          particle.baseY = particle.y;
        }
        if (particle.y > canvas.height + 50) {
          particle.y = -50;
          particle.baseY = particle.y;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147, 197, 253, ${particle.opacity})`; // blue-300
        ctx.fill();
      });

      // Draw connections (web effect)
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(147, 197, 253, ${
              0.2 * (1 - distance / 120)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 lg:p-12 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 0 }}
      />
      <div className="relative text-center max-w-4xl mx-auto" style={{ zIndex: 1 }}>
        <p className="text-lg md:text-xl text-gray-400 mb-4 tracking-wide uppercase">
          Hello, my name is
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-blue-500 to-white bg-clip-text text-transparent bg-[length:400%] animate-gradient">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <a
            href="#about"
            className="px-8 py-3 bg-gradient-to-r from-amber-500 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Learn More
          </a>
          <a
            href="/blog"
            className="px-8 py-3 border border-gray-500 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 transition-colors"
          >
            Read Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
