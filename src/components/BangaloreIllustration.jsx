import React from 'react';

export default function BangaloreIllustration() {
  return (
    <div className="frosted-glass animate-fade-in-up delay-2" style={{
      borderRadius: 'var(--radius-cards)',
      padding: 'var(--spacing-24)',
      width: '100%',
      maxWidth: '450px',
      aspectRatio: '4/3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glowing/blending sun/moon shape */}
      <div style={{
        position: 'absolute',
        width: '180px',
        height: '180px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
        top: '10%',
        left: '20%',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      {/* Styled cloud elements floating around */}
      <div className="font-tnt" style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.4)',
        userSelect: 'none',
        zIndex: 0
      }}>
        [ ATMOSPHERE: AIR ]
      </div>

      <svg width="100%" height="100%" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ zIndex: 1, maxWidth: '100%', maxHeight: '100%' }}>
        {/* Soft decorative grid lines representing a blueprint/sketch feel */}
        <line x1="20" y1="230" x2="380" y2="230" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" />
        <line x1="20" y1="234" x2="380" y2="234" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        
        {/* Stylized Clouds */}
        <path d="M50 80 C60 70, 80 70, 90 80 C100 75, 115 80, 120 90 C110 100, 60 100, 50 90 Z" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
        <path d="M280 60 C290 50, 310 50, 320 60 C330 55, 345 60, 350 70 C340 80, 290 80, 280 70 Z" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />

        {/* --- Landmark 1: Vidhana Soudha Dome & Pillars (Center) --- */}
        {/* Steps */}
        <rect x="130" y="210" width="140" height="20" rx="1" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.2" />
        <rect x="140" y="200" width="120" height="10" rx="1" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.2" />
        
        {/* Main Pillar Structure */}
        <rect x="150" y="165" width="100" height="35" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.5" />
        {/* Vertical pillars */}
        <line x1="160" y1="165" x2="160" y2="200" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
        <line x1="170" y1="165" x2="170" y2="200" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
        <line x1="180" y1="165" x2="180" y2="200" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
        <line x1="220" y1="165" x2="220" y2="200" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
        <line x1="230" y1="165" x2="230" y2="200" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
        <line x1="240" y1="165" x2="240" y2="200" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" />
        
        {/* Portico pediment (Triangle) */}
        <polygon points="150,165 250,165 200,145" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.5" fill="none" />
        
        {/* Main Dome base and Dome */}
        <rect x="180" y="135" width="40" height="10" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.2" />
        <path d="M185 135 C185 110, 215 110, 215 135 Z" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.8" fill="none" />
        {/* Kalasa / Spire on top */}
        <line x1="200" y1="110" x2="200" y2="98" stroke="rgba(255, 255, 255, 0.9)" strokeWidth="1.5" />
        <circle cx="200" cy="98" r="1.5" fill="white" />

        {/* --- Landmark 2: Bangalore Palace Turrets & Castles (Right Side) --- */}
        {/* Main palace wall block */}
        <rect x="270" y="160" width="80" height="70" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" />
        
        {/* Palace battlements (teeth) */}
        <path d="M 270,160 L 270,154 L 278,154 L 278,160 L 286,160 L 286,154 L 294,154 L 294,160 L 302,160 L 302,154 L 310,154 L 310,160 L 318,160 L 318,154 L 326,154 L 326,160 L 334,160 L 334,154 L 342,154 L 342,160 L 350,160" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" fill="none" />
        
        {/* Main Gothic Round Turret */}
        <rect x="330" y="120" width="25" height="110" rx="2" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1.5" fill="none" />
        {/* Turret windows */}
        <rect x="339" y="135" width="7" height="15" rx="3.5" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" />
        <rect x="339" y="165" width="7" height="15" rx="3.5" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" />
        {/* Turret pointed conical roof */}
        <polygon points="327,120 358,120 342.5,90" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1.5" fill="none" />
        {/* Banner/flag on top of turret */}
        <line x1="342.5" y1="90" x2="342.5" y2="80" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" />
        <path d="M342.5 80 L350 83 L342.5 86 Z" stroke="rgba(255, 255, 255, 0.8)" strokeWidth="1" fill="none" />

        {/* --- Landmark 3: Garden City Trees & Vintage Streetlamp (Left Side) --- */}
        {/* High-quality stylized trees representing greenery */}
        {/* Tree 1 */}
        <path d="M35 230 C35 180, 75 180, 75 230" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" fill="none" />
        <path d="M42 230 C42 195, 68 195, 68 230" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" fill="none" />
        <line x1="55" y1="230" x2="55" y2="215" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />
        
        {/* Tree 2 (Smaller overlapping) */}
        <path d="M70 230 C70 190, 100 190, 100 230" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1.5" fill="none" />
        <line x1="85" y1="230" x2="85" y2="210" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" />

        {/* Vintage Bangalore Streetlamp */}
        <line x1="115" y1="230" x2="115" y2="150" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" />
        {/* Curved arm */}
        <path d="M115 160 C110 150, 100 150, 102 158" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.2" fill="none" />
        {/* Hanging lamp */}
        <polygon points="99,158 105,158 107,166 97,166" stroke="rgba(255, 255, 255, 0.7)" strokeWidth="1" fill="none" />
        <circle cx="102" cy="169" r="1.5" fill="#2b7fff" /> {/* Action Blue glow dot */}

        {/* --- Foreground birds flying (Air feel) --- */}
        <path d="M110 70 Q115 65 120 70 Q125 65 130 70" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" fill="none" />
        <path d="M240 50 Q245 45 250 50 Q255 45 260 50" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="1" fill="none" />
      </svg>

      {/* Decorative caption label */}
      <div className="font-cursive" style={{
        position: 'absolute',
        bottom: '8px',
        color: 'var(--color-cloud-white)',
        fontSize: '15px',
        letterSpacing: '0.5px'
      }}>
        Bengaluru — The Garden City
      </div>
    </div>
  );
}
