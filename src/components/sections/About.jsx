import GlassCard from '../ui/GlassCard';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '../../data/profile';

const About = () => (
  <section id="about" className="mb-20">
    <SectionHeading>About</SectionHeading>
    <GlassCard className="p-6">
      <p className="text-slate-300 leading-relaxed">{profile.about}</p>
    </GlassCard>
  </section>
);

export default About;
