const GlassCard = ({ children, className = '', ...props }) => (
  <div
    className={`rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-xl
      transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export default GlassCard;
