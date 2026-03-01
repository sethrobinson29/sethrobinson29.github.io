import { useMemo } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import GlassCard from './ui/GlassCard';
import Badge, { BADGE_COLOR_SCHEMES } from './ui/Badge';
import Button from './ui/Button';

const ProjectCard = ({ name, description, tech, liveUrl, githubUrl }) => {
  const colorMap = useMemo(() => {
    const shuffled = [...BADGE_COLOR_SCHEMES].sort(() => Math.random() - 0.5);
    return Object.fromEntries(tech.map((t, i) => [t, shuffled[i % shuffled.length]]));
  }, [tech]);

  return (
    <GlassCard className="p-6 flex flex-col gap-4 hover:border-white/[0.15] hover:bg-white/[0.07] transition-all duration-300">
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <Badge key={t} colorScheme={colorMap[t]}>{t}</Badge>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {liveUrl && (
          <Button as="a" href={liveUrl} target="_blank" rel="noreferrer" variant="accent">
            <FiExternalLink size={14} />
            Live Demo
          </Button>
        )}
        {githubUrl && (
          <Button as="a" href={githubUrl} target="_blank" rel="noreferrer" variant="glass">
            <FiGithub size={14} />
            Source
          </Button>
        )}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
