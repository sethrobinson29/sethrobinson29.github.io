const variants = {
  glass: 'bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200',
  accent: 'bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-500/50',
  outline: 'border border-indigo-500/40 text-indigo-300 hover:bg-indigo-500/10',
};

// `as` lets you render as any element (e.g. as="a" for link buttons).
const Button = ({ children, variant = 'glass', className = '', as: Tag = 'button', ...props }) => (
  <Tag
    className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium
      transition-all duration-200 cursor-pointer ${variants[variant]} ${className}`}
    {...props}
  >
    {children}
  </Tag>
);

export default Button;
