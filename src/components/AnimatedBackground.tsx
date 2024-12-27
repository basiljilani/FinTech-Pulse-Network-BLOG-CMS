import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];

    const colors = [
      'rgba(37, 99, 235, 0.1)',  // blue-600
      'rgba(79, 70, 229, 0.1)',  // indigo-600
      'rgba(147, 51, 234, 0.1)', // purple-600
    ];

    // Create particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      
      {/* Canvas for particle animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      
      {/* Dynamic gradient blobs */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -inset-[100%] mix-blend-multiply blur-[100px] opacity-20"
          animate={{
            background: [
              'linear-gradient(to right, #2563eb, #4f46e5, #7c3aed)',
              'linear-gradient(to right, #4f46e5, #7c3aed, #2563eb)',
              'linear-gradient(to right, #7c3aed, #2563eb, #4f46e5)',
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -inset-[100%] mix-blend-multiply blur-[100px] opacity-20"
          animate={{
            background: [
              'linear-gradient(45deg, #2563eb, #4f46e5, #7c3aed)',
              'linear-gradient(45deg, #7c3aed, #2563eb, #4f46e5)',
              'linear-gradient(45deg, #4f46e5, #7c3aed, #2563eb)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 5
          }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #4f46e5 1px, transparent 1px),
            linear-gradient(to bottom, #4f46e5 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px]" />

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;
