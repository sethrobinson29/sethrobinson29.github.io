import { profile } from '../../data/profile';

const Footer = () => (
  <footer className="pb-12 text-center text-sm text-slate-600">
    <p>
      Built with React &amp; Tailwind CSS &mdash;{' '}
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="hover:text-slate-400 transition-colors"
      >
        View on GitHub
      </a>
    </p>
  </footer>
);

export default Footer;
