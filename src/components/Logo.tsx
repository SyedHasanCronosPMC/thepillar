import React from 'react';

interface LogoProps {
  className?: string;
  inverted?: boolean;
}

export default function Logo({ className = '', inverted = false }: LogoProps) {
  return (
    <img
      src="/images/thepillar-logo.png"
      alt="The Pillar Logo"
      className={`w-auto h-full object-contain ${className}`}
      style={{ filter: inverted ? 'brightness(0) invert(1)' : 'none' }}
    />
  );
}