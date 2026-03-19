const GlassCard = ({ children, className = '', ...props }) => (
  <div
    className={`rounded-xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl
      shadow-[0_8px_32px_rgba(0,0,0,0.55)] transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default GlassCard;
