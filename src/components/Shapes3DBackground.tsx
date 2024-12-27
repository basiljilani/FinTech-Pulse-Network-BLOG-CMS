import React from 'react';
import { motion } from 'framer-motion';

const Shapes3DBackground: React.FC = () => {
  // Generate random positions for shapes
  const shapes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    rotation: Math.random() * 360,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            perspective: '1000px',
          }}
          animate={{
            y: [0, -30, 0],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          {/* Cube */}
          {shape.id % 3 === 0 && (
            <div 
              className="w-8 h-8 relative transform-gpu"
              style={{
                transform: `scale(${shape.scale})`,
              }}
            >
              <div className="absolute w-full h-full bg-blue-100/30 border border-blue-200 transform-gpu rotate-y-45 rotate-x-45" />
              <div className="absolute w-full h-full bg-blue-100/20 border border-blue-200 transform-gpu translate-z-8" />
            </div>
          )}
          
          {/* Pyramid */}
          {shape.id % 3 === 1 && (
            <div 
              className="w-8 h-8 relative transform-gpu"
              style={{
                transform: `scale(${shape.scale})`,
              }}
            >
              <div className="absolute w-0 h-0 border-l-[16px] border-r-[16px] border-b-[28px] border-l-transparent border-r-transparent border-b-purple-100/30" />
              <div className="absolute w-full h-full bg-purple-100/20 border border-purple-200 transform-gpu rotate-45" />
            </div>
          )}
          
          {/* Sphere */}
          {shape.id % 3 === 2 && (
            <div 
              className="relative transform-gpu"
              style={{
                transform: `scale(${shape.scale})`,
              }}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-100/30 to-pink-100/10 border border-pink-200" />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-transparent to-white/40" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Shapes3DBackground;
