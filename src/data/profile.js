// Update this file with your personal information before deploying.
export const profile = {
  name: 'Seth Robinson',
  role: 'Software Developer',
  tagline: 'A passion for learning and developing.',
  github: 'https://github.com/sethrobinson29',
  linkedin: 'https://www.linkedin.com/in/seth-robinson-9a2940279/',
  resumeUrl: '/resume.pdf',

  about:
    'Software developer with a love of problem solving. ' +
    'I enjoy turning ideas into polished products and tackling difficult tasks. ' +
    'Open to new opportunities to learn and contribute to great products.',

  // Group skills by category. Add, remove, or rename categories freely.
  skills: {
    Languages: ['PHP', 'JavaScript', 'HTML', 'CSS', 'C++', 'Python', 'Typescript', 'MySQL'],
    Frameworks: ['React', 'Node.js', 'Tailwind CSS'],
    Tools: ['Git', 'GitHub', 'PhpStorm', 'CLI', 'Bash', 'Claude Code', 'GitLab', 'Jira', 'Splunk'],
  },

  // Add a new object here for each project.
  projects: [
    {
      name: 'Jeo Party',
      description:
        'A Jeopardy-style trivia game built for competing with friends. Features custom categories, real-time scoring, and a host-controlled game flow.',
      tech: ['PHP', 'React', 'Node.js'],
      liveUrl: 'https://jeo-party.sethrobinson29.com/',
      githubUrl: 'https://github.com/sethrobinson29/jeo-party',
    },
  ],
};
