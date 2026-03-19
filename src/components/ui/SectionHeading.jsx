const SectionHeading = ({ children }) => (
  <div className="mb-8 text-center">
    <h2
      className="font-display text-2xl font-bold text-slate-100 tracking-tight"
      style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8), 0 0 40px rgba(99,102,241,0.35)' }}
    >
      {children}
    </h2>
    <div className="mt-2 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </div>
);

export default SectionHeading;
