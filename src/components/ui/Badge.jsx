import { useState } from 'react';

// Each scheme defines Tailwind base classes plus inline-style values for the hover glow.
// All class strings are listed statically so Tailwind's scanner includes them in the build.
export const BADGE_COLOR_SCHEMES = [
  { base: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',   glow: 'rgba(99,102,241,0.35)',  bgHover: 'rgba(99,102,241,0.18)'  },
  { base: 'bg-violet-500/10 text-violet-300 border-violet-500/20',   glow: 'rgba(139,92,246,0.35)',  bgHover: 'rgba(139,92,246,0.18)'  },
  { base: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',         glow: 'rgba(6,182,212,0.35)',   bgHover: 'rgba(6,182,212,0.18)'   },
  { base: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',glow: 'rgba(52,211,153,0.35)',  bgHover: 'rgba(52,211,153,0.18)'  },
  { base: 'bg-amber-500/10 text-amber-300 border-amber-500/20',      glow: 'rgba(251,191,36,0.35)',  bgHover: 'rgba(251,191,36,0.18)'  },
  { base: 'bg-rose-500/10 text-rose-300 border-rose-500/20',         glow: 'rgba(251,113,133,0.35)', bgHover: 'rgba(251,113,133,0.18)' },
  { base: 'bg-sky-500/10 text-sky-300 border-sky-500/20',            glow: 'rgba(56,189,248,0.35)',  bgHover: 'rgba(56,189,248,0.18)'  },
  { base: 'bg-teal-500/10 text-teal-300 border-teal-500/20',         glow: 'rgba(45,212,191,0.35)',  bgHover: 'rgba(45,212,191,0.18)'  },
  { base: 'bg-orange-500/10 text-orange-300 border-orange-500/20',   glow: 'rgba(251,146,60,0.35)',  bgHover: 'rgba(251,146,60,0.18)'  },
  { base: 'bg-pink-500/10 text-pink-300 border-pink-500/20',         glow: 'rgba(244,114,182,0.35)', bgHover: 'rgba(244,114,182,0.18)' },
];

// Tailwind handles the lift via hover class; glow + background intensify via inline style on state.
const Badge = ({ children, colorScheme, className = '' }) => {
  const [hovered, setHovered] = useState(false);
  const scheme = colorScheme ?? BADGE_COLOR_SCHEMES[0];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-medium border
        transition-all duration-200 cursor-default select-none
        hover:-translate-y-0.5
        ${scheme.base} ${className}`}
      style={hovered ? { boxShadow: `0 0 14px ${scheme.glow}`, backgroundColor: scheme.bgHover } : {}}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </span>
  );
};

export default Badge;
