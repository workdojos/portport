import { NavlinksProps, ProjectProps } from '../types'

export const aboutData = {
  title: 'About Us',
  description: 'We help startups, start up right, using free and open-source tech.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'OnePlace'
    },
    {
      fieldName: 'Phone',
      fieldValue: '8885101788'
    },
    {
      fieldName: 'Email',
      fieldValue: 'support@oneplace.press'
    },
    {
      fieldName: 'Location',
      fieldValue: 'Chicago'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, German, Chinese, Spanish'
    },
    {
      fieldName: 'Hobbies',
      fieldValue: '3D mapping, Aerial Photography'
    },  
    {
      fieldName: 'Interests',
      fieldValue: 'Self-Hosting, Open-Source Technology'
    },
    {
      fieldName: 'Startup Building, Consulting, Direct Hire',
      fieldValue: 'All Available'
    }
  ]
}

export const experienceData = {
  title: 'our capabilities',
  description: 'I have worked as a web developer at XYZ company for 2 years.',
  items: [
    {
      id: 4,
      title: "Digital Marketing",
      company: "Worldwide",
      duration: "WebOps",
      description: "Improved platform usability by 20.6%, increased user engagement by 26.53%, and led UI design initiatives.",
    },
    {
      id: 5,
      title: "Deployments",
      company: "Worldwide",
      duration: "DevOps",
      description: "Enhanced AI proficiency, crafted a chatbot increasing user interaction by 50%, and actively participated in AI sessions.",
    },
    {
      id: 6,
      title: "Open-Source",
      company: "Worldwide",
      duration: "Hosting",
      description: "Outperformed 91% of users, engaged in AI challenges, and enhanced AI technology proficiency by 30%.", 
    },
    {
      id: 7,
      title: "AI",
      company: "Worldwide",
      duration: "Automation",
      description: "Contributed 4 PRs accepted in open source projects, collaborated with global developers, improving community engagement.",
    }
  ]
}
// Project Data
export const Project_Data: ProjectProps[] = [
  // {
  //   id: 1,
  //   title: "Bookies",
  //   description: "Bookies is a web platform designed for sharing books. It provides a space for users to post and explore various books that can be used for reading, brainstorming, or any context that requires a starting point.",
  //   imgUrl: "/images/projects/11.png",
  //   tag: ["All","ML"],
  //   gitUrl: "",
  //   previewUrl: "",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
  //   challengesFaced: ["Challenge 1", "Challenge 2"],
  //   lessonsLearned: ["Lesson 1", "Lesson 2"],
  //   contributionType: "Team",
  //   duration: "1 month",
  // },
  // {
  //   id: 2,
  //   title: "Matrix",
  //   description: "Experience a new era in metro travel with Matrix. Seamlessly enter using your smartphone, enjoy precise fare calculation, and receive real-time updates. This project is a testament to my participation and innovation at Hack-BVP@5.0. Elevate your urban commute with Matrix.",
  //   imgUrl: "/images/projects/8.png",
  //   tag: ["All","Web"],
  //   gitUrl: "",
  //   previewUrl: "https://matrix-hackbvp.vercel.app/",
  //   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
  //   challengesFaced: ["Challenge 1", "Challenge 2"],
  //   lessonsLearned: ["Lesson 1", "Lesson 2"],
  //   contributionType: "Team",
  //   duration: "1 month",
  // },
// {
//   id: 3,
//   title: "FileShare",
//   description: "The project is a user-friendly file-sharing platform. It's built with React on the frontend and Node.js with Express on the backend. Users can easily upload files, keep track of downloads, and retrieve them using convenient links. It's all about hassle-free file sharing!",
//   imgUrl: "/images/projects/7.png",
//   tag: ["All","Web"],
//   gitUrl: "",
//   previewUrl: "",
//   techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript"],
//   challengesFaced: ["Challenge 1", "Challenge 2"],
//   lessonsLearned: ["Lesson 1", "Lesson 2"],
//   contributionType: "Solo",
//   duration: "2 week",
// },
  // {
  //   id: 4,
  //   title: "Bloggies",
  //   description: "A Blogging platform built with React JS, MongoDB, and Tailwind CSS. It allows users to create, read, update, and delete blog posts. Users can also like and comment on posts.",
  //   imgUrl: "/images/projects/6.png",
  //   tag: ["All"],
  //   gitUrl: "",
  //   previewUrl: "",
  //   techStack: ["React", "Node.js", "Express", "MongoDB"],
  //   challengesFaced: ["Challenge 1", "Challenge 2"],
  //   lessonsLearned: ["Lesson 1", "Lesson 2"],
  //   contributionType: "Solo",
  //   duration: "1 month",
  // },

  {
    id: 8,
    title: "GoPinIt",
    description: "GoPinit is an innovative platform, a mobile app creating a HUB for outdoor advertisers and their customers to connect and do business better!",
    imgUrl: "/images/projects/gopinit.png",
    tag: ["All","Advertising", "Local"],
    gitUrl: "https://www.linkedin.com/in/mike-lilge-56713b32/",
    previewUrl: 'https://gopinit.com/',
    techStack: ["Python", "TensorFlow", "Keras"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 year"
  },
  {
    id: 9,
    title: "GoRaqt",
    description: "Access the best racquet & sports gear right where the action is. Courtside.",
    imgUrl: "/images/projects/goraqt.png",
    tag: ["All","Local", "Sports"],
    gitUrl: "https://www.linkedin.com/in/john-p-missale-004a20/",
    previewUrl: 'https://goraqt.com/',
    techStack: ["Python", "TensorFlow", "Keras"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "4 months"
  },
  {
    id: 10,
    title: "Homestalgia",
    description: "Every home has a history that goes untold when you buy it. Our mission is to change that, to tell the stories before they’re lost - to create a living record of the places we live, how our homes define us and how we define them.",
    imgUrl: "/images/projects/homestalgia2.png",
    tag: ["All","SaaS", "Local"],
    gitUrl: "https://www.linkedin.com/in/chasehoyt/",
    previewUrl: "https://homestalgia.com/",
    techStack: ["Nextjs", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "2 months",
  },
  {
    id: 11,
    title: "Tech Leadership Lab",
    description: "On a mission to solve the SDGs in TIME",
    imgUrl: "/images/projects/tll.png",
    tag: ["All","Training"],
    gitUrl: "https://www.linkedin.com/in/cristinaimre/",
    previewUrl: "https://techleadershiplab.org/",
    techStack: ["Next.js", "Tailwind CSS", "Clerksjs", "Shadcn"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "6 months",
  },
  {
    id: 12,
    title: "TurboTabs",
    description: "We let you build fully customized newsletters for yourself so that you can get the information you need from the internet,  without the distractions.",
    imgUrl: "/images/projects/turbotabs2.png",
    tag: ["All","SaaS"],
    gitUrl: "https://www.linkedin.com/in/brian-burns-b9107921/",
    previewUrl: "https://turbotabs.com/",
    techStack: ["Python", "groq", "llama-3-base"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "3 weeks",
  },
  {
    id: 13,
    title: "Voucher",
    description: "Stake Game Simulation is a project that simulates a game involving stakes and outcomes based on random patterns. The project includes frontend and backend components to create a visual representation of the game simulation.",
    imgUrl: "/images/projects/voucher.png",
    tag: ["All","Local"],
    gitUrl: "https://www.linkedin.com/in/rashad-fares/",
    previewUrl: "https://thevoucherapp.com/",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "5 months",
  },
  {
    id: 14,
    title: "The Manifesto",
    description: "Startup ecosystem transformation concept.",
    imgUrl: "/images/projects/balls.png",
    tag: ["All","Training"],
    gitUrl: "https://www.linkedin.com/in/sergej-kittel-mba-8695973a/",
    previewUrl: "https://1drv.ms/b/c/78bd1b5ec9c94cb6/EUb-RLv1M5lDmgEqInpnn6sBN435q28KH_X9nKYI135WLg?e=WV8W74",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "3 years",
  },
  {
    id: 15,
    title: "Where in the Fair",
    description: "WitF empowers customers to have their best day at their town's temporary event. Search for and save their favorite spots, and quickly locate them on a map.",
    imgUrl: "/images/projects/fair2.png",
    tag: ["All","Entertainment"],
    gitUrl: "https://www.linkedin.com/in/linkedinscotcopeland/",
    previewUrl: "https://witf-test.glideapp.io/",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "5 months",
  },
  {
    id: 16,
    title: "The Slicing Pie",
    description: "Slicing Pie is a universal, one-size-fits all model that creates a perfectly fair equity split in an early-stage, bootstrapped startup company.",
    imgUrl: "/images/projects/slice.png",
    tag: ["All","Training"],
    gitUrl: "https://www.linkedin.com/in/aaronpritzlaff/",
    previewUrl: "https://slicingpie.com/",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 year",
  },
  {
    id: 17,
    title: "25care",
    description: "Our platform brings all the services right to your place. This saves time and hassle searching for and booking different companies and service providers.",
    imgUrl: "/images/projects/25care2.png",
    tag: ["All","Local", "Delivery"],
    gitUrl: "https://www.linkedin.com/in/andriy-zahaiko/",
    previewUrl: "https://25care.com/",
    techStack: ["Python", "Streamlit", "Openai"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "1 month"
  },
  {
    id: 18,
    title: "Delivit",
    description: "Pedaling towards something big! Exciting things are in motion at Delivit. We are gearing up to revolutionize the way you experience deliveries.",
    imgUrl: "/images/projects/delivit.png",
    tag: ["All","Delivery", "Local"],
    gitUrl: "https://www.linkedin.com/in/emilio-simon/",
    previewUrl: "https://delivit.online/",
    techStack: ["Python", "Gemini AI", "ChatBot"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "3 months",
  },
  {
    id: 19,
    title: "Ancestry Host",
    description: "The open-source ancestry.",
    imgUrl: "/images/projects/ancestry2.png",
    tag: ["All","SaaS"],
    gitUrl: "https://www.linkedin.com/in/dojos/",
    previewUrl: "https://ancestry.host",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Rapid API"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "2 months",
  },
  {
    id: 20,
    title: "FaastX",
    description: "Our company offers a frugal alternative to traditional apps like Uber eats, designed for local businesses. Our service provides a low-cost digital focusing on autonomy and fairness, we empower local businesses, especially in rural areas, to succeed in the digital economy.",
    imgUrl: "/images/projects/faastx.png",
    tag: ["All","Local", "Delivery"],
    gitUrl: "https://www.linkedin.com/in/ronaldlox/",
    previewUrl: "https://faastx.com/",
    techStack: ["Python", "TensorFlow"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "4 years"
  },
  {
    id: 21,
    title: "Dojos",
    description: "Start up right with free and open-source technology.",
    imgUrl: "/images/projects/dojos2.png",
    tag: ["All","SaaS"],
    gitUrl: "https://www.linkedin.com/in/dojos/",
    previewUrl: "https://workdojos.com",
    techStack: ["Python", "Streamlit", "Openai", "gtts"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Team",
    duration: "2 years",
  },
  { 
    id: 22,
    title: "BFFL.ai",
    description: "Where AI goes to meet humanity.",
    imgUrl: "/images/projects/bffl2.png",
    tag: ["All","AI"],
    gitUrl: "https://www.linkedin.com/in/jeffhampson/",
    previewUrl: "https://bffl.ai/",
    techStack: ["React", "Node JS", "Python", "ComfyUI", "Open-Source Generative AI"],
    challengesFaced: ["Challenge 1", "Challenge 2"],
    lessonsLearned: ["Lesson 1", "Lesson 2"],
    contributionType: "Solo",
    duration: "3 months",
  }


  // {
  //   id: 15,
  //   title: "CodexSphere",
  //   description: "CodexSphere is a web application built using Vite.js and Node.js that offers a platform for selling and accessing a wide range of books. Whether you're looking to purchase books or access free resources, CodexSphere provides a convenient and user-friendly experience.",
  //   imgUrl: "/images/projects/15.png",
  //   tag: ["All","Web"],
  //   gitUrl: "https://github.com/coderx85/CodexSpehere.git",
  //   previewUrl: "https://codexsphere.vercel.app/",
  //   techStack: ["Vite.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "TypeScript", "Authjs", "Openai", "gtts"],
  //   challengesFaced: ["Challenge 1", "Challenge 2"],
  //   lessonsLearned: ["Lesson 1", "Lesson 2"],
  //   contributionType: "Solo",
  //   duration: "1 month",
  // },


]

export const navLinks: NavlinksProps[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/resume",
    },
    {
      title: 'Startups',
      href: '/work'
    },
    {
      title: 'Services',
      href: '/service'
    },
    {
      title: 'Contact',
      href: '/contact'
    },
  ]

export const educationData = {
  title: 'technologies',
  description: 'We work with a whole suite of self-hostable open-source technologies.  Perfect for any startup or digital endeavor.',
  items: [
    {
      title: 'Vikunja',
      duration: 'Project Management',
    },
    {
      title: 'Stable Diffusion',
      duration: 'AI',
    },
    {
      title: 'MiroTalk',
      duration: 'Web-Conferencing',
    },
    {
      title: 'Moodle',
      duration: 'Learning Management',
    },
    {
      title: 'WordPress',
      duration: 'Websites',
    },
    {
      title: 'Element - Matrix',
      duration: 'Chat',
    },
    {
      title: 'Authentik',
      duration: 'Security',
    },
    {
      title: 'VaultWarden',
      duration: 'Password Management',
    },
    {
      title: 'Plausible',
      duration: '2021-25',
    },
    {
      title: 'n8n',
      duration: 'Automation',
    },
    {
      title: 'Tortoise-TTS',
      duration: 'Text-to-Speech',
    },
    {
      title: 'Flame',
      duration: 'Dashboards',
    },
    {
      title: 'Paperless-ngx',
      duration: 'Document Management',
    },
    {
      title: 'Silverbullet',
      duration: 'Note-taking',
    },
    {
      title: 'Fasten',
      duration: 'Medical Records',
    },
    {
      title: 'Mealie',
      duration: 'Recipe Management',
    },
    {
      title: 'MeshCentral',
      duration: 'Remote Access',
    },
    {
      title: 'DocAssemble',
      duration: 'Guided Interviews',
    },
    {
      title: 'WikiJS',
      duration: 'Wiki',
    },
    {
      title: 'Ghost',
      duration: 'Blogging',
    }

  ]
}
  
export const services = [
  {
    num: "01",
    title: "Startup Full Stack Web Development",
    description: "We've perfected the art of the boot-strapped startup.  Thanks in no small part to free and open-source technology.  There is a way to bringing your ideas to life without breaking the bank.",
  },
  {
    num: "02",
    title: "Startup Backend Development and Database Management",
    description: "From front-end to back-end, our growing founder team covers a lot of bases.  Build a team through our growing community.",
  },
  {
    num: "03",
    title: "Startup DevOps Implementation",
    description: "DevOps is about quick deployments.  Something we've collectively spent a decade refining (in the challenging open-soucre space to boot).",
  },
  {
    num: "04",
    title: "Startup UI/UX Design",
    description: "Our growing team of co-founders have amazing design skills throughout both the physical and digital worlds.",
  },
  {
    num: "05",
    title: "AI Automation",
    description: "Create responsive and user-friendly interfaces, ensuring optimal performance and user experience.",
  },
  {
    num: "06",
    title: "AI Animation",
    description: "Open-source AI has taught us a thing or two.  For one how to save money as any startup should.",
  },
  {
    num: "07",
    title: "Youtube & Social Media",
    description: "From audio to video to livestreaming across all media.  Make your startup the ultimate influencer.",
  },
  {
    num: "08",
    title: "Digital Media & Advertising",
    description: "From billboards to tablets on headrests in Uber cars, we deliver unique opportunities for outreach to hard-to-reach crowds.",
  }
]