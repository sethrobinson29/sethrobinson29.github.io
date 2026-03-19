import { FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';
import Button from '../ui/Button';
import { profile } from '../../data/profile';

const SECTIONS = ['About', 'Skills', 'Projects'];

const TopNav = ({ currentIndex, onNavigate }) => (
  <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-4 lg:px-10
    border-b border-white/[0.06] bg-[#0c1022]/80 backdrop-blur-md">

    {/* Identity */}
    <div className="flex items-baseline gap-3 flex-1 min-w-0">
      <span className="font-display font-bold text-slate-100 tracking-tight whitespace-nowrap">
        {profile.name}
      </span>
      <span className="text-indigo-400 text-sm font-medium hidden md:inline truncate">
        {profile.role}
      </span>
    </div>

    {/* Nav */}
    <nav className="flex items-center gap-1">
      {SECTIONS.map((section, i) => (
        <button
          key={section}
          onClick={() => onNavigate(i)}
          className={`px-3 py-1.5 text-xs font-semibold tracking-widest uppercase transition-colors rounded
            ${currentIndex === i
              ? 'text-orange-400'
              : 'text-slate-500 hover:text-slate-200'}`}
        >
          {section}
        </button>
      ))}
    </nav>

    {/* Social + Resume */}
    <div className="flex items-center justify-end gap-4 flex-1 min-w-0">
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="text-slate-400 hover:text-slate-100 transition-colors hidden sm:block"
      >
        <FiGithub size={18} />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        className="text-slate-400 hover:text-slate-100 transition-colors hidden sm:block"
      >
        <FiLinkedin size={18} />
      </a>
      <Button as="a" href={profile.resumeUrl} download variant="outline" className="!py-1 !px-3 !text-xs">
        <FiDownload size={12} />
        Resume
      </Button>
    </div>
  </header>
);

export default TopNav;
