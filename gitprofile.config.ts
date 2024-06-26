// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jmande1', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['jmande1/Bioinformatics', 'jmande1/AwesomeSauce'],
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CSUBIOTECH',
          description:
            'Presented at the CSUBIOTECH conference on the poster: Investigating the role of transcription on CCTG large-scale contractions.',
          imageUrl:
            'https://github.com/jmande1/jmande1.github.io/raw/main/pdf/CSUBIOTECH%20Logo%20Design%20Concept.jpg',
          link: 'https://www.calstate.edu/impact-of-the-csu/research/csubiotech/symposium/Pages/about-us.aspx',
        },
        {
          title: 'Research Experience for Undergraduates',
          description:
            'Applied to and accepted a Summer 2023 Internship at California State University, San Marcos. For 10 weeks, I rigorously participated in research with Dr. Jane Kim, investigating the roles of transcription and DNA repair on DNA repeat CCTG large-scale contractions.',
          imageUrl:
            'https://github.com/jmande1/jmande1.github.io/raw/main/pdf/png2pdf.jpg',
          link: 'https://csusmbioreu.weebly.com/blog',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Janelle Mande',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'jmande07',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://jmande1.github.io',
    phone: '',
    email: 'jmande1@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/jmande1/jmande1.github.io/raw/main/pdf/JMandeCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR', 'Bioinformatics', 'Tutoring', 'Genome Assembly', 'Genome Annotation', 
  ],
  experiences: [
    {
      company: 'Calfornia State University, Stanislaus',
      position: 'Supplemental Instruction Leader',
      from: 'January 2022',
      to: 'Present',
      companyLink: 'https://www.csustan.edu/learning-commons',
    },
    {
      company: 'California State University, Stanislaus',
      position: 'Peer Tutor',
      from: 'November 2022',
      to: 'Present',
      companyLink: 'https://www.csustan.edu/learning-commons',
    },
    {
      company: 'California State University, Stanislaus',
      position: 'STEM Ambassador Internship',
      from: 'March 2023',
      to: 'May 2023',
      companyLink: 'https://www.csustan.edu/events/stem-ambassador-recruitment',
    },
    {
      company: 'California State University, San Marcos',
      position: 'Undergraduate Researcher',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://csusmbioreu.weebly.com/blog',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  education: [
    {
      institution: 'California State University, Stanislaus',
      degree: 'B.S. Biological Sciences',
      from: 'Fall 2018',
      to: 'Spring 2024',
    },
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'Autumn',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
