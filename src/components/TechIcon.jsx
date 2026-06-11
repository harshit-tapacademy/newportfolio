import React from 'react';

export default function TechIcon({ name, className = "w-6 h-6", size = 24 }) {
  const icons = {
    java: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Colorful Java Coffee Cup */}
        <path d="M5.5 2C6 3.5 4.5 4.5 4.5 6s1.5 2 1.5 3.5" stroke="#f89820" strokeWidth="2" strokeLinecap="round" />
        <path d="M9.5 1.5C10.5 3.5 8 4.5 8 6.5s2 2 2 4" stroke="#e76f51" strokeWidth="2" strokeLinecap="round" />
        <path d="M13 3C13.5 4.5 12 5.5 12 7s1.5 2 1.5 3.5" stroke="#f89820" strokeWidth="2" strokeLinecap="round" />
        
        <path d="M2 11h13v3c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4v-3z" fill="#0073b7" opacity="0.85" />
        <path d="M2 11h13v3c0 2.2-1.8 4-4 4H6c-2.2 0-4-1.8-4-4v-3z" stroke="#5382a1" strokeWidth="1.5" />
        <path d="M15 12h1.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H15" stroke="#5382a1" strokeWidth="1.5" fill="#e76f51" fillOpacity="0.2" />
        
        <ellipse cx="8.5" cy="20" rx="7.5" ry="1.5" fill="#f89820" opacity="0.8" />
        <ellipse cx="8.5" cy="20" rx="7.5" ry="1.5" stroke="#5382a1" strokeWidth="1" />
      </svg>
    ),
    spring: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official Spring Green Leaf */}
        <path d="M12 2A10 10 0 0 0 2 12c0 4.4 3.6 8 8 8h2a10 10 0 0 0 10-10C22 6.4 18.4 2 12 2z" fill="#6db33f" />
        <path d="M12 2c1.2 4.5-1 8.5-4 10.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 14c2.5-.5 5-2 6.5-4" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M11 17c1.5-.5 3-1.5 4-3" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    hibernate: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official Hibernate Yellow/Grey Logo Icon */}
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#59666c" />
        <path d="M7 6v12M17 6v12M7 12h10" stroke="#f9b000" strokeWidth="3" strokeLinecap="round" />
        <path d="M12 9l3 3-3 3-3-3z" fill="#f9b000" />
      </svg>
    ),
    jdbc: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Colorful Database Stack */}
        <ellipse cx="12" cy="5" rx="9" ry="3" fill="#33b5e5" />
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#0099cc" strokeWidth="1.2" />
        
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" fill="#0099cc" opacity="0.4" />
        <path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#0099cc" strokeWidth="1.2" />
        
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" fill="#0099cc" opacity="0.7" />
        <path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6" stroke="#0099cc" strokeWidth="1.2" />
      </svg>
    ),
    react: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official Cyan React Logo */}
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.5" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61dafb" strokeWidth="1.5" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="#61dafb" />
      </svg>
    ),
    javascript: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official Yellow JavaScript Square */}
        <rect x="3" y="3" width="18" height="18" rx="2" fill="#f7df1e" />
        <path d="M13.8 13.5c0 1.5.8 2.2 2 2.2 1 0 1.6-.5 1.6-1.5 0-2.2-3.1-1.6-3.1-4.7 0-1.5 1-2.5 2.8-2.5 1.5 0 2.5.8 2.5 2.1h-1.5c0-.8-.5-1.1-1.1-1.1-.6 0-.9.3-.9.9 0 1.9 3.1 1.4 3.1 4.5 0 1.8-1.2 2.8-3.1 2.8-1.9 0-3.1-1-3.1-2.7h1.8zM10.8 7v6.8c0 1.4-.7 2-1.8 2-.8 0-1.5-.4-1.7-1.1H9c.2.4.4.5.7.5.4 0 .6-.3.6-.9V7h1.5z" fill="#000000" />
      </svg>
    ),
    html: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official HTML5 Orange Shield */}
        <path d="M3 2l1.7 17.5L12 22l7.3-2.5L21 2h-18z" fill="#e34f26" />
        <path d="M12 3.8v16.4l5.9-2 1.4-14.4H12z" fill="#ef652a" />
        <path d="M12 8.3h-3.4l-.2-2.7H12V3.8H5.9l.7 7.2H12V8.3zM12 14.5l-3-.8-.2-2H6.3l.4 4.5 5.3 1.8v-3.5z" fill="#ffffff" />
        <path d="M12 8.3h3.2l-.3 3.4H12v2.8l3-.8.3-3.2H12v-2.2z" fill="#ebebeb" />
      </svg>
    ),
    css: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official CSS3 Blue Shield */}
        <path d="M3 2l1.7 17.5L12 22l7.3-2.5L21 2h-18z" fill="#1572b6" />
        <path d="M12 3.8v16.4l5.9-2 1.4-14.4H12z" fill="#29a9df" />
        <path d="M12 8.3h-3.4l-.2-2.7H12V3.8H5.9l.7 7.2H12V8.3zM12 14.5l-3-.8-.2-2H6.3l.4 4.5 5.3 1.8v-3.5z" fill="#ffffff" />
        <path d="M12 8.3h3.2l-.3 3.4H12v-3.4H12v2.2z" fill="#ebebeb" />
      </svg>
    ),
    mysql: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official Dolphin Blue & Orange waves */}
        <path d="M12 3a9 9 0 0 0-9 9c0 3 2.5 5.5 5.5 5.5.5 0 1-.1 1.5-.3.7.8 1.8 1.3 3 1.3 2.5 0 4.5-2 4.5-4.5 0-.5-.1-1-.3-1.5.8-.7 1.3-1.8 1.3-3 0-4.7-4.1-8.5-8.5-8.5z" fill="#00758f" />
        <path d="M8 12.5c1 0 2 .5 2 1.5s-.8 1.5-1.5 1.5" stroke="#f29111" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 8.5c1 0 1.5.5 1.5 1S13 11 12 11" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    mongodb: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official MongoDB Green Leaf */}
        <path d="M12 2s6 4.5 6 10-6 10-6 10-6-4.5-6-10 6-10 6-10z" fill="#47a248" />
        <path d="M12 2v20" stroke="#3f3e3f" strokeWidth="1.5" />
        <path d="M12 6c2 2 3 5 0 9" fill="#13aa52" />
        <path d="M12 6c-2 2-3 5 0 9" fill="#13aa52" opacity="0.8" />
      </svg>
    ),
    docker: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official Blue Docker Whale */}
        <path d="M22 12.5c0-1.5-1.2-2-2.5-2h-3v-2.5c0-.8-.7-1.5-1.5-1.5h-2c-.8 0-1.5.7-1.5 1.5v2.5h-5.5v3h16z" fill="#2496ed" />
        <path d="M2 12.5C2 17 5.5 20 10 20h7c3 0 5-2.5 5-5.5" fill="#2496ed" />
        <rect x="7" y="5" width="2.5" height="2" rx="0.5" fill="#ffffff" />
        <rect x="10" y="5" width="2.5" height="2" rx="0.5" fill="#ffffff" />
        <rect x="7" y="2.5" width="2.5" height="2" rx="0.5" fill="#ffffff" />
      </svg>
    ),
    kubernetes: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official Kubernetes Blue Helm */}
        <path d="M12 2l8.5 4v10L12 22l-8.5-6V6L12 2z" fill="#326ce5" />
        <path d="M12 6v12M12 12l6 3.5M12 12l-6 3.5M12 12L17.5 8M12 12L6.5 8" stroke="#ffffff" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2.5" fill="#ffffff" />
      </svg>
    ),
    rest: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Tech styled Blue/Cyan Server Globe API */}
        <circle cx="12" cy="12" r="10" fill="#e8f4fd" stroke="#007fff" strokeWidth="1.5" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="#007fff" strokeWidth="1" />
        <path d="M2 12h20" stroke="#007fff" strokeWidth="1" />
        <path d="M16 8l3 4-3 4" stroke="#007fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    microservices: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Interconnected Colored Nodes */}
        <circle cx="12" cy="5" r="3" fill="#e34f26" />
        <circle cx="5" cy="18" r="3" fill="#6db33f" />
        <circle cx="19" cy="18" r="3" fill="#61dafb" />
        <path d="M12 8v4M5 15l5.5-5.5M19 15l-5.5-5.5" stroke="#59666c" strokeWidth="1.5" />
      </svg>
    ),
    github: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official Dark GitHub Logo */}
        <path d="M12 2A10 10 0 0 0 2 12c0 4.4 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#24292e" />
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Official LinkedIn Blue Icon */}
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#0077b5" />
        <path d="M9 17v-6H7v6h2zm-1-7c.7 0 1.2-.5 1.2-1.2S8.7 7.6 8 7.6s-1.2.5-1.2 1.2S7.3 10 8 10zm9 7v-3.5c0-1.7-.8-2.5-2.2-2.5-1.1 0-1.8.6-2.1 1.1V11h-2v6h2v-3.5c0-.9.2-1.8 1.4-1.8 1.1 0 1.1 1 1.1 1.9V17h2z" fill="#ffffff" />
      </svg>
    ),
    mail: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        {/* Red Gmail Styled Envelope */}
        <rect x="2" y="4" width="20" height="16" rx="3" fill="#ea4335" />
        <path d="M2 6l10 7L22 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    external: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="#2b7fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    code: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
        <polyline points="16 18 22 12 16 6" stroke="#007fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="8 6 2 12 8 18" stroke="#007fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  return icons[name.toLowerCase()] || (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="10" stroke="#007fff" strokeWidth="1.5" />
    </svg>
  );
}
