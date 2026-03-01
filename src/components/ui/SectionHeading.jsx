const SectionHeading = ({ children }) => (
  <div className="mb-8">
    <h2 className="font-display text-2xl font-bold text-slate-100 tracking-tight">
      {children}
    </h2>
    <div className="mt-2 h-px w-12 bg-gradient-to-r from-indigo-500 to-transparent" />
  </div>
);

export default SectionHeading;
