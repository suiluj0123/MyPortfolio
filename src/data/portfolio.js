export const portfolioData = {
  profile: {
    name: "Suiluj Anunciado",
    title: "Software Engineer & Full-Stack Developer",
    subtitle: "BSIT Graduate focused on Full-Stack Development and Generative AI integrations.",
    bio: "I'm a BSIT student graduate with experience in building web and mobile applications.  ",
    images: [
      "/profile8.png"
    ],
    email: "anunciadosuiluj012@gmail.com",
    github: "https://github.com/suiluj0123",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },

  sections: [
    { id: "education", label: "01 — education" },
    { id: "techstack", label: "02 — tech stack" },
    { id: "projects", label: "03 — projects" },
    { id: "experience", label: "04 — experience" },
    { id: "certifications", label: "05 — certifications" },
  ],
  education: [
    {
      degree: "Bachelor of Science in Information Technology (BSIT)",
      institution: "STI College Novaliches",
      period: "August 2022 — July 2026",
      status: "Graduated",
      location: "Quezon City, Philippines",
      description: "Solid academic and hands-on skills in software engineering, database management systems, web & mobile applications, and network security.",
      highlights: [
        "Lead Developer for Capstone Project: TrustElect (Secure Web-Based Voting System)",
        "Best Capstone Project Award",
        "Software Engineer Intern at CMV Software Development Corp.",
      ]
    }
  ],
  techStack: [
    {
      category: "Frontend",
      skills: ["HTML5", "CSS", "JavaScript", "React.js", "Next.js", "Tailwind CSS", "TypeScript"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "Express.js", "PostgreSQL", "MySQL", "Supabase", "OAuth", "JWT", "REST"]
    },
    {
      category: "AI & Generative AI",
      skills: ["Google Gemini API", "OpenAI", "Anthropic", "Claude Code", "Prompt Engineering",]
    },

    {
      category: "Developer Tools & Cloud",
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman", "Discord", "Hostinger"]
    },
    {
      category: "Other Skills",
      skills: ["Software and Hardware Troubleshooting", "UI/UX Design", "Problem Solving", "Basic Network Troubleshooting", "Software Testing"]
    }
  ],
  projects: [
    {
      title: "FreshCart-AI",
      badge: "AI Web App",
      tags: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "Google Gemini API", "Vercel"],
      description: "FreshCart is a full-stack grocery platform that connects online consumer shopping with back-office warehouse operations. It allows shoppers to order groceries item, plan recipes, and track deliveries, while giving store managers tools to handle stock, fulfill orders, and reduce perishable food waste.",
      liveUrl: "https://fresh-cart-ai-nine.vercel.app/",
      githubUrl: "https://github.com/suiluj0123/FreshCart-AI",
      imageUrl: "/freshcart/landing.png",
      previews: [
        {
          title: "Landing Page",
          caption: "Smart Filipino Meal Planning & Local Produce Storefront",
          src: "/freshcart/landing.png"
        },
        {
          title: "Authentication & Login",
          caption: "Slide-over Modal for Customer Sign-In and Account Access",
          src: "/freshcart/login.png"
        },
        {
          title: "System Admin Dashboard",
          caption: "Store Performance & Operations Hub with Live Inventory & Fulfillment Pipeline",
          src: "/freshcart/admin.png"
        }
      ],
      keyFeatures: [
        "AI-powered shopping assistant and intelligent recipe-to-cart generation powered by Google Gemini API.",
        "Server-rendered and edge-optimized architecture leveraging Next.js 16 App Router and TypeScript.",
        "Real-time inventory synchronization, authentication, and PostgreSQL database powered by Supabase.",
        "Store Operations & Performance Dashboard with live shopper tracking and stock radar.",
        "Automated continuous deployment and global edge distribution with Vercel."
      ]
    },
    {
      title: "TrustElect: Web Based Voting System",
      badge: "Capstone Project",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
      description: "A highly secure, automated electronic voting web app built for school elections.",
      githubUrl: "#",
      imageUrl: "https://api.dicebear.com/9.x/shapes/svg?seed=trustelect",
      keyFeatures: [
        "Interactive Candidate Administration Panel for quick management.",
        "Double-Voting prevention logic with absolute voter anonymity.",
        "Secure JWT session states coupled with One-Time Password (OTP) verification steps.",
        "IP origin verification restricting votes strictly to verified computer lab gateways."
      ]
    },
    {
      title: "Bakas Mobile App",
      badge: "Internship Project",
      tags: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL"],
      description: "A cross-platform mobile application transitioned from an existing web platform, featuring messaging and transaction ledgers.",
      githubUrl: "#",
      imageUrl: "https://api.dicebear.com/9.x/shapes/svg?seed=bakas",
      keyFeatures: [
        "Real-time database integration mapping in-app client messaging.",
        "Flutter frontend components optimized for smooth, platform-independent mobile scaling.",
        "Secured transaction ledger logging key data variables locally."
      ]
    }
  ],
  experiences: [
    {
      year: "2026",
      role: "Software Engineering Intern",
      company: "CMV Software Development Corp.",
      period: "January — April 2026",
      skills: ["Flutter", "Dart", "Node.js", "Express.js", "MySQL"],
      details: {
        subtitle: "Bakas Mobile App — Software Engineering Intern: Led a development team to transition an existing web platform into a cross-platform mobile application, providing users with a much smoother and more convenient experience directly from their phones.",
        contributions: [
          "Backend Architecture: Built the core database and server logic to handle real-time in-app messaging, user accounts, and a secure internal transaction ledger.",
          "Frontend Development: Assisted in developing key mobile interfaces using Flutter to ensure the app was highly responsive, user-friendly, and easy to navigate.",
          "Leadership & Delivery: Bridged the gap between the frontend and backend, successfully ensuring the on-time delivery of a fully functional, mobile-optimized application."
        ]
      }
    },
    {
      year: "2025",
      role: "Lead Full-Stack Developer",
      company: "Capstone Project (STI College Novaliches)",
      period: "January — November 2025",
      title: "TrustElect: A Secure Web-Based Voting System",
      skills: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
      details: {
        subtitle: "TrustElect – Secure Web-Based Voting System: Designed and built a highly secure, automated web application to replace the school's slow and vulnerable manual election process with a modernized digital platform.",
        contributions: [
          "UI/UX Design: Built a clean, modern interface for both students and administrators using Next.js and Tailwind CSS.",
          "Security & Verification: Engineered a secure login system using One-Time Passwords (OTP) and programmed cryptography features to completely protect voter anonymity.",
          "Network Restrictions: Wrote custom security logic to block off-campus access, restricting voting strictly to authorized school computer labs to prevent tampering.",
          "Backend & Database: Designed the PostgreSQL database schema and Node.js server logic to seamlessly handle live voting and candidate management."
        ],
        impacts: [
          "Impact: Successfully modernized the school's elections by replacing slow manual counting with a secure platform that provides instant real-time results, completely preventing duplicate votes and unauthorized access."
        ]
      }
    }
  ],
  certifications: [
    {
      title: "Generative AI Leader",
      issuer: "Google",
      verifyUrl: "#",
      logoUrl: "https://api.dicebear.com/9.x/initials/svg?seed=G"
    },
    {
      title: "Neo4j Certified Professional",
      issuer: "Neo4j",
      verifyUrl: "#",
      logoUrl: "https://api.dicebear.com/9.x/initials/svg?seed=N"
    }
  ]
};
