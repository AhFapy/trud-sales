// src/components/CursorShadow.jsx
import React, { useState, useEffect } from 'react';

const CursorShadow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed w-40 h-40 bg-green-500 rounded-full pointer-events-none transition-transform duration-75 opacity-40"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        filter: 'blur(100px)',
        opacity: "0.7",
      }}
    />
  );
};

export default CursorShadow;
