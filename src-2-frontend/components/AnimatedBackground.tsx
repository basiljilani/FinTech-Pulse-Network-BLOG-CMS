import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
      
      {/* Animated gradient blobs */}
      <div className="absolute inset-0">
        <div className="absolute -inset-[100%] animate-blob mix-blend-multiply blur-[80px] opacity-50 bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 animation-delay-2000" />
        <div className="absolute -inset-[100%] animate-blob mix-blend-multiply blur-[80px] opacity-50 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animation-delay-4000" />
        <div className="absolute -inset-[100%] animate-blob mix-blend-multiply blur-[80px] opacity-50 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animation-delay-6000" />
      </div>

      {/* Mesh overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at center, #4F46E5 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50" />
    </div>
  );
};

export default AnimatedBackground;
