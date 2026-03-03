const GlassCard = ({ children, className = '', ...props }) => (
  <div
    className={`rounded-xl border border-white/[0.12] bg-white/[0.06] backdrop-blur-xl
      transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default GlassCard;
