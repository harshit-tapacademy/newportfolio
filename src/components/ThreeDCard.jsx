import React, { useState, useRef } from 'react';

export default function ThreeDCard({ children, className = "", style = {}, showShadow = true }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg) translateZ(0px)");
  const [shadow, setShadow] = useState(showShadow ? "0 10px 30px rgba(0, 0, 0, 0.05)" : "none");

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to card center
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;
    
    // Rotate amount: max 15 degrees tilt
    const rotateX = -(y / height) * 15;
    const rotateY = (x / width) * 15;
    
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`);
    
    // Calculate shadow dynamically only if showShadow is true
    if (showShadow) {
      setShadow(`${-rotateY * 1.5}px ${rotateX * 1.5}px 40px rgba(0, 0, 0, 0.15)`);
    }
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)");
    if (showShadow) {
      setShadow("0 10px 30px rgba(0, 0, 0, 0.05)");
    } else {
      setShadow("none");
    }
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        ...style,
        transform: transform,
        boxShadow: shadow,
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
        cursor: 'pointer'
      }}
    >
      {children}
    </div>
  );
}
