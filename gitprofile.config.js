// gitprofile.config.js

const config = {
  github: {
    username: 'wisdak', // Your GitHub org/user name. (Required)
    sortBy: 'updated', // stars | updated
    limit: 10, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'wisdak',
    twitter: 'wisdak_dart',
    facebook: 'wisdak_dart',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: 'wisdak',
    dev: 'wisdak',
    stackoverflow: '', // format: userid/username
    website: 'https://wisdak.github.io',
    phone: '233249771777',
    email: 'wisdak7@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    //'PHP',
    //'Laravel',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'MongoDB',
    //'PostgreSQL',
    'Git',
    'Docker',
    //'PHPUnit',
    'CSS',
    //'Antd',
    'Tailwind',
    'Flutter',
    'Dart',
    'Firebase',
    'AWS',
    'Linux',
    'Marketing',
    'Python',
    'Django',
    'C++',
    'C#',
    'Java',
    'Kotlin',
    'Android',
    'IOS',
    'Automation',
    'Testing',

    
  ],
  experiences: [
    {
      company: 'Company Name',
      position: 'Position',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://example.com',
    },
    {
      company: 'Company Name',
      position: 'Position',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://example.com',
    },
  ],
   certifications: [
    {
      name: 'Degree',
      body: 'BSc. Computer Science',
      year: 'Sept 2025',
      link: 'https://uew.edu.gh'
    },
  ], 
  education: [
    {
      institution: 'University of Education, Winneba',
      degree: 'Degree',
      from: '2021',
      to: 'Present',
    },
    {
      institution: 'School of Code',
      degree: 'Certificate',
      from: '2019',
      to: '2021',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'wisdak', // to hide blog section, keep it empty
    limit: 3, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: 'G-344529404', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '3293301',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: '',//'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true, //false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
};

export default config;
