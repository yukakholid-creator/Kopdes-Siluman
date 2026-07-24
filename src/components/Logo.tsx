import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'white';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'full',
}) => {
  const sizeMap = {
    sm: 'h-10',
    md: 'h-12',
    lg: 'h-16 md:h-20',
    xl: 'h-24 md:h-32',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* SVG Icon matching official attachment logo */}
      <svg
        viewBox="0 0 320 280"
        className={`${sizeMap[size]} w-auto object-contain transition-transform duration-300 hover:scale-105`}
        aria-label="Logo Koperasi Desa Merah Putih"
      >
        <defs>
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EF4444" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer Red Roof & Wall Contour */}
        <g filter="url(#subtleShadow)">
          {/* Main House Red Silhouette Contour */}
          <path
            d="M 120,40 L 40,115 C 32,122 35,135 46,135 L 55,135 L 55,200 C 55,208 62,215 70,215 L 250,215 C 258,215 265,208 265,200 C 265,192 258,185 250,185 L 85,185 L 85,130 L 120,95 L 180,150 C 185,155 195,155 200,150 L 220,132 L 220,200 C 220,208 227,215 235,215 C 243,215 250,208 250,200 L 250,110 L 120,40 Z"
            fill="url(#redGrad)"
          />

          {/* Red Flag on Top Left */}
          <path
            d="M 118,40 L 118,12 C 118,10 119,8 121,8 L 155,8 C 158,8 160,11 159,14 L 155,25 L 160,35 C 162,38 159,42 155,42 L 118,42 Z"
            fill="#DC2626"
          />
          <path
            d="M 120,25 L 155,25 L 160,35 L 120,35 Z"
            fill="#FFFFFF"
            stroke="#DC2626"
            strokeWidth="1"
          />
          {/* Flagpole */}
          <line
            x1="118"
            y1="5"
            x2="118"
            y2="45"
            stroke="#B91C1C"
            strokeWidth="4"
            strokeLinecap="round"
          />

          {/* 4 Window Panes (Light Grey) */}
          <g fill="#CBD5E1">
            <rect x="98" y="142" width="12" height="12" rx="1" />
            <rect x="114" y="142" width="12" height="12" rx="1" />
            <rect x="98" y="158" width="12" height="12" rx="1" />
            <rect x="114" y="158" width="12" height="12" rx="1" />
          </g>

          {/* Stacked Red Text inside house: KOP DES KEL */}
          <text
            x="185"
            y="92"
            fill="#DC2626"
            fontSize="26"
            fontWeight="900"
            fontFamily="sans-serif"
            letterSpacing="2"
          >
            KOP
          </text>
          <text
            x="185"
            y="118"
            fill="#DC2626"
            fontSize="26"
            fontWeight="900"
            fontFamily="sans-serif"
            letterSpacing="2"
          >
            DES
          </text>
          <text
            x="185"
            y="144"
            fill="#DC2626"
            fontSize="26"
            fontWeight="900"
            fontFamily="sans-serif"
            letterSpacing="2"
          >
            KEL
          </text>

          {/* Small Black Text inside house bottom right */}
          <text
            x="180"
            y="166"
            fill="#1E293B"
            fontSize="14"
            fontWeight="800"
            fontFamily="sans-serif"
            letterSpacing="1"
          >
            MERAH PUTIH
          </text>

          {/* Text Below House Silhouette */}
          {variant !== 'icon' && (
            <>
              <text
                x="160"
                y="242"
                textAnchor="middle"
                fill={variant === 'white' ? '#F8FAFC' : '#1E293B'}
                fontSize="20"
                fontWeight="800"
                fontFamily="sans-serif"
                letterSpacing="4"
              >
                KOPERASI
              </text>
              <text
                x="85"
                y="272"
                fill="#DC2626"
                fontSize="26"
                fontWeight="900"
                fontFamily="sans-serif"
                letterSpacing="2"
              >
                MERAH
              </text>
              <text
                x="195"
                y="272"
                fill={variant === 'white' ? '#F1F5F9' : '#64748B'}
                stroke={variant === 'white' ? '#475569' : '#334155'}
                strokeWidth="0.8"
                fontSize="26"
                fontWeight="900"
                fontFamily="sans-serif"
                letterSpacing="2"
              >
                PUTIH
              </text>
            </>
          )}
        </g>
      </svg>
    </div>
  );
};
