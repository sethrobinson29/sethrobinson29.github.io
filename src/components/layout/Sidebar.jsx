import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Button from '../ui/Button';
import { profile } from '../../data/profile';

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="inline-block text-slate-500 hover:text-orange-400 transition-all duration-200
      text-sm font-medium tracking-widest uppercase hover:translate-x-1"
  >
    {children}
  </a>
);

const Sidebar = () => (
  <aside className="relative z-10 flex flex-col gap-8 px-8 py-12
    lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-72 lg:overflow-y-auto
    lg:border-r lg:border-white/[0.06]">

    {/* Identity */}
    <div>
      <h1 className="font-display text-3xl font-bold text-slate-100 leading-tight tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-1 text-indigo-400 font-medium text-sm tracking-wide">
        {profile.role}
      </p>
      <p className="mt-4 text-slate-400 text-sm leading-relaxed">
        {profile.tagline}
      </p>
    </div>

    {/* Nav — row on mobile, column on desktop */}
    <nav className="flex flex-row gap-6 lg:flex-col lg:gap-4">
      <NavLink href="#about">About</NavLink>
      <NavLink href="#skills">Skills</NavLink>
      <NavLink href="#projects">Projects</NavLink>
    </nav>

    {/* Social icons + resume — pushed to bottom on desktop */}
    <div className="flex flex-col gap-4 lg:mt-auto">
      <div className="flex items-center gap-5">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-slate-400 hover:text-slate-100 transition-colors"
        >
          <FiGithub size={20} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-slate-400 hover:text-slate-100 transition-colors"
        >
          <FiLinkedin size={20} />
        </a>
      </div>
      <Button as="a" href={profile.resumeUrl} download variant="outline" className="w-fit">
        <FiDownload size={14} />
        Resume
      </Button>
    </div>
  </aside>
);

export default Sidebar;
