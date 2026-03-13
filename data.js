const portfolioData = {
  experiences: [
    {
      company: "Handshake",
      companyUrl: "https://joinhandshake.com/fellowship-program",
      current: true,
      description: "Contract position working on AI training and expertise development through the Handshake AI Fellowship Program.",
      endDate: null,
      location: "Remote",
      position: "AI Fellow",
      responsibilities: [
        "Participated in paid, remote AI training work as part of the Handshake AI Fellowship Program",
        "Contributed expertise to AI model training and development initiatives",
        "Engaged in specialized AI fellowship curriculum and practical applications"
      ],
      startDate: "2025-11-01",
      technologies: ["AI", "Machine Learning"]
    },
    {
      company: "Stealth Startup",
      companyUrl: null,
      current: true,
      description: "Founded and building a stealth-mode startup, developing innovative solutions in the technology space.",
      endDate: null,
      location: "Remote",
      position: "Founder",
      responsibilities: [
        "Leading product development and strategic direction for a new technology venture",
        "Building and managing cross-functional teams to execute on product vision",
        "Developing go-to-market strategies and establishing initial customer relationships"
      ],
      startDate: "2025-10-01",
      technologies: []
    },
    {
      company: "Educative",
      companyUrl: "https://www.educative.io/unlimited?aff=x0Ja",
      current: true,
      description: "Partnered with Educative to promote AI-powered learning and educational content.",
      endDate: null,
      location: "Remote",
      position: "Affiliate",
      responsibilities: [
        "Promoted Educative Unlimited AI-powered learning platform",
        "Created content and materials to support developer education",
        "Engaged with developer community to share learning resources"
      ],
      startDate: "2024-12-01",
      technologies: ["AI", "Education Technology", "Content Marketing"]
    },
    {
      company: "CodePath",
      companyUrl: "https://www.codepath.org/tech-fellow-program",
      current: false,
      description: "Teaching fellowship focused on technical interview preparation and web development.",
      endDate: "2025-06-01",
      location: "Remote",
      position: "Tech Fellow",
      responsibilities: [
        "Conducted office hours and technical interview preparation sessions",
        "Taught Python data structures and algorithms to cohorts of students",
        "Mentored students in React.js, Supabase, and modern web development",
        "Created educational content including TIP101 Office Hours video series"
      ],
      startDate: "2024-06-01",
      technologies: ["Teaching", "Python", "Data Structures", "Algorithms", "React.js", "Supabase", "API", "CSS", "Tailwind CSS", "JavaScript"]
    },
    {
      company: "MLH Fellowship x Meta",
      companyUrl: null,
      current: false,
      description: "Developed SRE skills with Meta Engineers, building containerized applications with comprehensive testing and monitoring.",
      endDate: "2024-09-30",
      location: "Remote",
      position: "Production Engineer",
      responsibilities: [
        "Developed advanced SRE skills including infrastructure automation and incident response while collaborating with Meta Engineers",
        "Developed a containerized Flask application with 100% test coverage in Pytest to minimize risks due to changes",
        "Reduced deployment time by 75% by optimizing an automated CI/CD pipeline with build caching in GitHub Actions",
        "Integrated Prometheus, Grafana, and NGINX for real-time container monitoring"
      ],
      startDate: "2024-06-01",
      technologies: ["Flask", "Python", "Pytest", "Docker", "GitHub Actions", "Prometheus", "Grafana", "NGINX", "SRE"]
    },
    {
      company: "Farmingdale State College",
      companyUrl: null,
      current: true,
      description: "Conducted research on chaos and fractals in neural networks, presenting findings at IEEE conference.",
      endDate: null,
      location: "Farmingdale, NY",
      position: "Undergraduate Researcher",
      responsibilities: [
        "Researched complex dynamics of chaos and fractals in neural networks",
        "Published findings on TechRxiv platform",
        "Presented research at 2024 IEEE Long Island Systems, Applications and Technology Conference (LISAT)"
      ],
      startDate: "2024-02-01",
      technologies: ["Machine Learning", "Bash", "Python", "Algorithms", "Neural Networks", "MatLab", "CNN"]
    },
    {
      company: "Campaign 180",
      companyUrl: null,
      current: false,
      description: "Developed cross-platform applications with modern DevOps practices, improving system reliability and organic traffic.",
      endDate: "2024-09-30",
      location: "Remote",
      position: "Software Engineer",
      responsibilities: [
        "Developed cross-platform applications using Flutter, Go, and Dart, integrating with MongoDB and AWS",
        "Implemented CI/CD practices using Bitbucket and CircleCI, reducing deployment errors by 75%",
        "Optimized SEO strategies that resulted in a 50% increase in organic traffic"
      ],
      startDate: "2023-09-01",
      technologies: ["Flutter", "Go", "Dart", "MongoDB", "AWS", "Bitbucket", "CircleCI"]
    },
    {
      company: "Waffle Hacks",
      companyUrl: null,
      current: false,
      description: "Built and optimized hackathon platform, developed SaaS applications, and led technical workshops empowering developers.",
      endDate: "2025-06-30",
      location: "Remote",
      position: "Software Engineer",
      responsibilities: [
        "Built and optimized the hackathon website using Next.js, TypeScript, and JavaScript",
        "Designed and developed a SaaS application using BeautifulSoup, Django, Flask, and jQuery",
        "Led technical workshops on GCP, Firebase, Expo, React Native, Flutter, Supabase, and Dart"
      ],
      startDate: "2023-08-01",
      technologies: ["Next.js", "TypeScript", "JavaScript", "MUI", "TailwindCSS", "SCSS", "Django", "Flask", "BeautifulSoup", "jQuery", "React Native", "Flutter", "Firebase", "GCP", "Supabase", "Dart"]
    },
    {
      company: "Elysium",
      companyUrl: "https://github.com/ElysiumOSS",
      current: true,
      description: "Developed portfolio websites, custom applications, and contributed to open-source projects, serving millions of users globally.",
      endDate: null,
      location: "Remote",
      position: "Full Stack Developer",
      responsibilities: [
        "Developed 10+ portfolio websites and custom applications using JS, TS, React, Node, Flutter, and .NET",
        "Delivered 15+ commissioned projects reducing client turnaround time by 25%",
        "Contributed to 5+ open-source repositories reaching 1,000,000+ users globally"
      ],
      startDate: "2023-05-01",
      technologies: ["JavaScript", "TypeScript", "React.js", "Node.js", "Flutter", ".NET", "Python"]
    },
    {
      company: "Think Round, Inc.",
      companyUrl: null,
      current: false,
      description: "Built Progressive Web App with containerized deployment, supervising multi-team development workflows.",
      endDate: "2023-12-31",
      location: "Remote",
      position: "Software Engineer",
      responsibilities: [
        "Build a Progressive Web App (PWA) using Next.js, TypeScript, and JavaScript",
        "Developed three Docker containers for standardization",
        "Supervised 20+ developers ensuring effective collaboration"
      ],
      startDate: "2023-05-01",
      technologies: ["Next.js", "TypeScript", "JavaScript", "MillionJS", "Webpack", "Docker", "Unity"]
    },
    {
      company: "Social PayMe",
      companyUrl: null,
      current: false,
      description: "Enhanced mobile application UI/UX and developed reusable OAuth components with AWS backend integration.",
      endDate: "2023-09-30",
      location: "Remote",
      position: "Frontend Developer",
      responsibilities: [
        "Partnered with 20 developers to enhance UI/UX designs using Figma for a new mobile application",
        "Developed reusable components for OAuth section integration with AWS/DynamoDB/NodeJS"
      ],
      startDate: "2023-05-01",
      technologies: ["TypeScript", "JavaScript", "React Native", "Expo", "TailwindCSS", "MUI", "Figma", "AWS", "DynamoDB", "Node.js"]
    },
    {
      company: "District 1 Youth Advisory Board",
      companyUrl: null,
      current: false,
      description: "Designed UI/UX improvements, optimized site performance, and ensured accessibility compliance.",
      endDate: "2024-01-31",
      location: "Islip, NY",
      position: "Software Engineer",
      responsibilities: [
        "Designed and implemented UI/UX improvements/revamp creating 10+ new pages",
        "Monitored and optimized site performance for 3,000+ new users",
        "Ensured compliance with WCAG 2.1 and Section 508"
      ],
      startDate: "2023-03-01",
      technologies: ["HTML", "CSS", "JavaScript", "Google Analytics", "Google Search Console", "WCAG", "SEO"]
    }
  ],
  projects: [
    {
      title: "Fraud Guard - AI-Powered Transaction Monitoring",
      description: "AI-powered dual-stack fraud detection system (Python ML & TypeScript API Gateway) using Logistic Regression, TensorFlow, and LLaMA models with Convex.dev for scalable data persistence.",
      technologies: ["Next.js", "Clerk", "Convex.dev", "TypeScript", "Python", "FastAPI", "Express.js", "scikit-learn", "TensorFlow", "LLaMA", "Docker", "Sentry"],
      githubUrl: "https://github.com/WomB0ComB0/hackmit-2024",
      liveUrl: "https://www.fraudguard.tech"
    },
    {
      title: "SparkMind - AI-Driven Personalized Learning Hub",
      description: "An AI-driven platform that processes diverse learning materials (Video, Text, URL), generates personalized study guides, Q&A, and action items using Gemini AI and Google Cloud services.",
      technologies: ["Next.js", "React", "TypeScript", "Supabase", "Google Gemini API", "Google Cloud Storage", "Google Speech-to-Text", "FFmpeg", "Tailwind CSS", "Clerk (Auth)"],
      githubUrl: "https://github.com/lluciiiia/sparkmind",
      liveUrl: "https://sparkmind.vercel.app"
    },
    {
      title: "Personal Portfolio & Blog",
      description: "Modern portfolio website with integrated blog, showcasing projects, experience, and technical articles with real-time analytics and PWA support.",
      technologies: ["Next.js", "TypeScript", "React", "TailwindCSS", "Sanity CMS", "Firebase", "Vercel", "PWA", "Sentry", "Google Analytics"],
      githubUrl: "https://github.com/WomB0ComB0/portfolio",
      liveUrl: "https://mikeodnis.dev"
    },
    {
      title: "Enterprise AI Recursive Web Scraper",
      description: "Advanced AI-powered recursive web scraper utilizing Groq LLMs, Playwright, and Puppeteer for intelligent, structured content extraction and risk assessment.",
      technologies: ["TypeScript", "Node.js", "Bun", "Playwright", "Puppeteer", "Google Gemini LLM", "Groq (LLMs)", "Token Bucket Rate Limiting", "LRU Cache", "Commander CLI", "BiomeJS", "Vitest / Codecov", "GitHub Actions"],
      githubUrl: "https://github.com/ElysiumOSS/enterprise-ai-recursive-web-scraper",
      liveUrl: "http://npmjs.com/package/enterprise-ai-recursive-web-scraper"
    },
    {
      title: "GDG on Campus FSC Website",
      description: "Fully responsive student developer community hub built with React, Elysia.js, and Bun, featuring PWA, View Transitions API, and robust testing.",
      technologies: ["React 19", "TypeScript", "Vite", "Bun", "Elysia.js", "Tailwind CSS", "Shadcn UI", "Zustand", "React Query", "Cypress", "Playwright", "Vitest", "BiomeJS", "OpenTelemetry", "PWA", "View Transitions API"],
      githubUrl: "https://github.com/GDSC-FSC/gdg-fsc-website",
      liveUrl: "https://gdg-fsc.web.app"
    },
    {
      title: "SlayerOS Documentation Site (VitePress)",
      description: "The official documentation site for SlayerOS, a lightweight, x86_64 operating system kernel, detailing its architecture and development process.",
      technologies: ["VitePress", "UnoCSS", "Markdown", "Vue 3", "Node.js / pnpm / Bun", "GitHub Actions", "GitHub Pages", "Freestanding C/C++", "x86_64 Assembly", "Limine Bootloader"],
      githubUrl: "https://github.com/slayer-os/slayer-os.github.io",
      liveUrl: "https://slayer-os.github.io/"
    },
    {
      title: "Purple Geckos File Management System (PG-FMS)",
      description: "An advanced, Python-based Command Line Interface (CLI) tool for efficient, batch file management, filtering, parsing, and text processing.",
      technologies: ["Python 3.12", "Click (CLI)", "Flask (Web Docs)", "Jinja2", "Custom Data Structures (Trie, Queue, Stack, PriorityQueue)", "PDM", "GitLab CI/CD", "pytest", "pytest-benchmark", "Sentry SDK", "Docker / Docker Compose"],
      githubUrl: "https://gitlab.com/WomB0ComB0/pg-fms",
      liveUrl: "https://pg-fms.vercel.app"
    },
    {
      title: "Brain Tumor Segmentation & Classification (CNN/U-Net)",
      description: "Deep Learning models for Brain MRI image segmentation and multi-class tumor classification, focusing on Glioma, Meningioma, and Pituitary tumors.",
      technologies: ["Python 3.11", "TensorFlow / Keras", "U-Net", "Xception (Transfer Learning)", "NumPy", "scikit-learn", "NIfTI (nibabel, nilearn)", "Kaggle API", "Jupyter", "ROCm"],
      githubUrl: "https://github.com/WomB0ComB0/ml-models-win-25",
      liveUrl: "N/A"
    },
    {
      title: "Product Decoder",
      description: "A visual product recognition and metadata extraction experience: upload a product photo and receive nutrition facts, price history, store availability, and other structured information.",
      technologies: ["Next.js 15", "Bun", "Elysia.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB", "Clerk Auth", "Google Vision API", "Effect-TS", "ArkType", "TurboRepo", "Cypress", "Playwright", "OpenTelemetry"],
      githubUrl: "https://github.com/WomB0ComB0/product-decoder",
      liveUrl: "https://product-decoder-frontend.vercel.app/"
    },
    {
      title: "WaffleHacks Website 2024",
      description: "The official 2024 website for WaffleHacks, a 48-hour student-organized virtual hackathon.",
      technologies: ["Next.js 14", "TypeScript", "React", "Tailwind CSS", "NextUI", "framer-motion", "zustand", "@ducanh2912/next-pwa", "SASS", "SVG"],
      githubUrl: "https://github.com/wafflehacks/website-2024",
      liveUrl: "https://wafflehacks.org"
    },
    {
      title: "Kappa Theta Pi National Website",
      description: "The official national website for Kappa Theta Pi, a co-ed professional technology fraternity.",
      technologies: ["Next.js 15", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "NextAuth.js", "Elysia"],
      githubUrl: "https://github.com/ktpnational/kappa-theta-pi",
      liveUrl: "https://www.kappathetapi.org"
    },
    {
      title: "Hack for LA - TDM Calculator",
      description: "Traffic Demand Management (TDM) calculator tool for LADOT to help planners and real estate developers meet Mobility Plan 2035 goals.",
      technologies: ["React", "Vite", "Node.js", "Express", "Microsoft SQL Server", "Flyway", "Jest", "JSS"],
      githubUrl: "https://github.com/hackforla/tdm-calculator",
      liveUrl: "https://tdm.ladot.lacity.org"
    },
    {
      title: "In2ne - AI-Driven Music Recommendation",
      description: "A dual-mode app using AWS Rekognition, OpenAI, Pinecone vector search, and a multi-agent system to recommend on-trend, contextually relevant music based on a user-uploaded image.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Flask", "Python", "AWS Rekognition", "AWS SageMaker", "AWS Polly", "OpenAI", "Pinecone", "AgencySwarm"],
      githubUrl: "https://github.com/WomB0ComB0/hackbrown-25-nextjs",
      liveUrl: null
    },
    {
      title: "Timeframe - AR Historical Landmark Viewer",
      description: "An Expo/React Native AR mobile app that overlays historical context on landmarks by analyzing photos and location data using OpenAI GPT-4 Vision and Groq Mixtral-8x7b via a Python Flask backend.",
      technologies: ["Expo", "React Native", "Flask", "Python", "OpenAI GPT-4 Vision", "Groq Mixtral-8x7b", "JWT", "Flask-SQLAlchemy", "React Native Reanimated"],
      githubUrl: "https://github.com/WomB0ComB0/hackdartmouth2024",
      liveUrl: "http://www.timeframe.study"
    },
    {
      title: "Genie - AI Financial Insight Browser Extension",
      description: "A browser extension (WXT/React) for personalized spending insights, delivering real-time alerts and suggestions by tracking online purchases and transactions via a secured extension context.",
      technologies: ["WXT", "React", "TypeScript", "Tailwind CSS", "Shadcn/ui", "Firebase (Auth)", "Zod"],
      githubUrl: "https://github.com/WomB0ComB0/hacknyu-25",
      liveUrl: null
    },
    {
      title: "AI-BITS - AI Search and RAG Tool",
      description: "A RAG-powered app providing interactive search over Web Articles, Images, Documents, and Videos using Python/Reflex, Azure AI Search, OpenAI, and custom voice models.",
      technologies: ["Python", "Reflex", "Azure AI Search", "OpenAI GPT-4", "Azure Cognitive Services", "youtube-transcript-api", "Selenium"],
      githubUrl: "https://github.com/WomB0ComB0/hackathon-innovation-challenge-v3",
      liveUrl: null
    },
    {
      title: "Cerebrix - Adaptive Cognitive Games for Dementia Care",
      description: "An AI-powered web app for dementia care featuring adaptive cognitive minigames, a voice-to-voice AI companion (Hume AI) for emotional support, and caretaker progress tracking.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Clerk", "Supabase", "Hume AI (Voice)","Vercel"],
      githubUrl: "https://github.com/WomB0ComB0/hackru-2024",
      liveUrl: "https://hackru-2024-rouge.vercel.app"
    },
    {
      title: "MedChain - Patient-Controlled Healthcare Blockchain",
      description: "A Flask-based blockchain API for secure, encrypted medical record storage, featuring patient consent management and digital signature verification for data access control.",
      technologies: ["Flask", "Python", "PyCryptodome (RSA)", "Cryptography (Fernet)", "JWT", "Next.js", "React", "Tailwind CSS", "Web3Auth"],
      githubUrl: "https://github.com/WomB0ComB0/hack-knight-25",
      liveUrl: null
    },
    {
      title: "FaceCrime - AI Facial Recognition Offender Registry Search",
      description: "Full-stack facial recognition portal that compares user images against a large offender database using Jina CLIP embeddings and a fast vector search via Postgres/pgvector.",
      technologies: ["React", "Vite", "TypeScript", "FastAPI", "Python", "PostgreSQL", "pgvector", "Jina CLIP", "Docker"],
      githubUrl: "https://github.com/hem9984/facecrime_backend",
      liveUrl: "https://www.facecrime.io"
    },
    {
      title: "FinPlanner - AI-Driven Financial Planner and Report Generator",
      description: "An intelligent financial planning tool that generates customizable reports and interactive charts using an OpenAI chatbot to create and execute SQL queries against a Databricks financial database.",
      technologies: ["React", "TanStack Router", "GraphQL", "Go", "Databricks SQL", "OpenAI GPT-3.5-turbo", "Python", "Flask", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/WomB0ComB0/hack-princeton-24",
      liveUrl: null
    }
  ],
  skills: [
    "JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "Rust", "SQL", "React", "Next.js", "Node.js", "Flutter", "Django", "FastAPI", "Docker", "AWS", "Google Cloud", "TensorFlow", "scikit-learn", "MongoDB", "PostgreSQL", "Tailwind CSS", "Next.js"
  ],
  certifications: [
    "Google Data Analytics", "Advanced Google Data Analytics", "Google Analytics", "CodePath Advanced Web Development"
  ],
  leadership: [
    {
      role: "Founding Lead",
      org: "Google Developer Group on Campus",
      date: "Aug 2023 - Present",
      details: "Events"
    },
    {
      role: "Campus Expert",
      org: "GitHub Campus Expert",
      date: "Oct 2023 - Present",
      details: "Events"
    },
    {
      role: "Alpha Ambassador",
      org: "Microsoft Learn Student Ambassador",
      date: "Jan 2024 - Present",
      details: "Events"
    },
    {
      role: "Tech Fellow",
      org: "CodePath",
      date: "Jun 2024 - Jun 2025",
      details: "TIP101, WEB102, TIP102"
    }
  ],
  hobbies: [
    {
      icon: "code",
      title: "Open Source",
      description: "I love contributing to open-source projects and giving back to the community. It's a great way to learn and collaborate with developers worldwide."
    },
    {
      icon: "book-open",
      title: "Reading",
      description: "Whether it's technical documentation, sci-fi novels, or self-improvement books, I'm always looking to expand my knowledge and perspective."
    },
    {
      icon: "gamepad-2",
      title: "Gaming",
      description: "When I need to unwind, I enjoy playing strategy and role-playing games. They challenge my problem-solving skills in a fun, interactive way."
    },
    {
      icon: "plane",
      title: "Traveling",
      description: "Exploring new places, trying different cuisines, and experiencing diverse cultures is something I deeply value and try to do whenever possible."
    }
  ]
};

