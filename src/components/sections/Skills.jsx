import { useMemo } from 'react';
import GlassCard from '../ui/GlassCard';
import Badge, { BADGE_COLOR_SCHEMES } from '../ui/Badge';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '../../data/profile';

const Skills = () => {
  // Assign a random color scheme to each skill once per page load.
  const colorMap = useMemo(() => {
    const allSkills = Object.values(profile.skills).flat();
    const shuffled = [...BADGE_COLOR_SCHEMES].sort(() => Math.random() - 0.5);
    return Object.fromEntries(
      allSkills.map((skill, i) => [skill, shuffled[i % shuffled.length]])
    );
  }, []);

  return (
    <section id="skills" className="mb-20">
      <SectionHeading>Skills</SectionHeading>
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {Object.entries(profile.skills).map(([category, items]) => (
          <GlassCard key={category} className="p-5">
            <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge key={skill} colorScheme={colorMap[skill]}>
                  {skill}
                </Badge>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;
