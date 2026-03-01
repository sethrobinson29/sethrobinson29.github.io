// Update this file with your personal information before deploying.
export const profile = {
  name: 'Seth Robinson',
  role: 'Software Developer',
  tagline: 'Building clean, interactive web experiences.',
  github: 'https://github.com/sethrobinson29',
  linkedin: 'https://linkedin.com/in/', // TODO: add your LinkedIn profile slug
  resumeUrl: '/resume.pdf', // Add resume.pdf to /public before deploying

  about:
    'Software developer with a passion for building clean, interactive web experiences. ' +
    'I enjoy turning ideas into polished products — from full-stack applications to interactive games. ' +
    'Currently open to new opportunities.',

  // Group skills by category. Add, remove, or rename categories freely.
  skills: {
    Languages: ['JavaScript', 'HTML', 'CSS'],
    Frameworks: ['React', 'Node.js', 'Tailwind CSS'],
    Tools: ['Git', 'GitHub', 'VS Code'],
  },

  // Add a new object here for each project.
  projects: [
    {
      name: 'Jeo Party',
      description:
        'A Jeopardy-style trivia game built for competing with friends. Features custom categories, real-time scoring, and a host-controlled game flow.',
      tech: ['React', 'Node.js'],
      liveUrl: null, // Set to the live URL once deployed
      githubUrl: 'https://github.com/sethrobinson29/jeo-party',
    },
  ],
};
