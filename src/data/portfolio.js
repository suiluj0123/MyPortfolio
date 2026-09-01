export const portfolioData = {
  profile: {
    name: "Suiluj Anunciado",
    title: "Software Engineer & Full-Stack Developer",
    subtitle: "BSIT Graduate focused on Full-Stack Development and Generative AI integrations.",
    bio: "Fresh BSIT graduate from STI College Novaliches. I build full-stack web apps and enjoy integrating AI into real projects. My capstone project TrustElect won Best Capstone Project, and I completed a software engineering internship where I helped ship a cross-platform mobile app.",
    images: [
      "/profile8.png"
    ],
    email: "anunciadosuiluj012@gmail.com  ",
    github: "https://github.com/suiluj0123?tab=repositories",
    linkedin: "https://www.linkedin.com/in/suiluj-anunciado-308107405/",
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
      highlights: [
        "Lead Developer for Capstone Project: TrustElect (Secure Web-Based Voting System)",
        "Best Capstone Project Award",
        "Software Engineer Intern at CMV Software Development Corp.",
      ]
    },
    {
      degree: "Technical-Vocational-Livelihood - Information and Communications Technology (TVL-ICT)",
      institution: "Gardner College Diliman",
      period: "August 2020 — July 2022",
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
      title: "FreshCart-AI: Online Grocery & Store Management System",
      badge: "Generative AI Web App",
      tags: ["Next.js 16 (App Router)", "React", "TypeScript", "Tailwind CSS", "Next.js API Routes", "Supabase (PostgreSQL)", "Supabase Auth", "Google Gemini API", "Vercel"],
      objective: "The goal of FreshCart is to make grocery shopping and meal planning easier for families and Filipinos while helping store owners track inventory in real time, fulfill orders faster, and reduce perishable food waste by discounting near-expiry produce.",
      description: "FreshCart is a full-stack grocery web application that connects the customer online store with back-office warehouse operations. Customers can shop for fresh groceries, plan weekly recipes, and track deliveries. At the same time, store staff can manage stock batches, process live orders, and review sales reports.",
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
      aiHighlight: {
        title: "AI Meal Planner & Recipe-to-Cart Engine (Google Gemini API)",
        summary: "Integrated Google Gemini API to dynamically generate personalized Filipino meal recipes, calculate exact ingredient portions, handle intelligent out-of-stock substitutions, and batch-add all required items directly into the user's cart with a single click."
      },
      customerFeatures: [
        "AI-Powered Meal Planner (Google Gemini API): Plan weekly meals with personalized recipe recommendations, calculate required ingredients, and add all items straight to cart with one click.",
        "Intelligent AI Item Substitutions (Google Gemini API): Real-time context-aware ingredient alternatives and culinary suggestions when an item is out of stock.",
        "Grocery Catalog: Browse products by category (Vegetables, Fruits, Meat, Dairy, Pantry) with live stock counts and prices.",
        "Cart & Checkout: Choose between home delivery or store pickup, with Cash on Delivery (COD) or online payment options.",
        "Live Order Tracking: Track order progress in real time (Placed ➔ Packed ➔ Out for Delivery / Ready for Pickup ➔ Completed).",
        "Account Security: Easy sign-in drawer with 4-attempt password protection (10-minute lockout) and forgot password recovery."
      ],
      adminFeatures: [
        "Operations Dashboard (/admin): View total sales, active orders, online users, inventory value, and cash collected.",
        "Inventory & Expiry Tracking (/admin/inventory): Record new stock with cost prices and expiration dates, using First-In, First-Out (FIFO) stock rotation and waste logging.",
        "Order Processing (/admin/orders): Live board to pack, dispatch, and complete customer orders step by step.",
        "Clearance Deals (/admin/clearance): Automatically discounts items expiring in 1 to 7 days to sell them before they spoil.",
        "User Management (/admin/users): View customers and staff, edit user roles, see locked accounts, and unlock accounts with one click.",
        "Reports & Analytics (/admin/reports): View sales, inventory health, food waste, and login activity with date filters and CSV downloads.",
        "Audit Trail (/admin/audit): Logs store actions like stock receipts, order status changes, and user updates for accountability.",
        "Admin Settings (/admin/settings): Update admin profile info and log out securely."
      ],
      keyFeatures: [
        "Google Gemini API Integration: Dynamic AI meal planner, conversational recipe generation, and automated recipe-to-cart ingredient parsing.",
        "Intelligent AI-driven item substitutions for out-of-stock grocery produce.",
        "Server-rendered and edge-optimized architecture leveraging Next.js 16 App Router, React, and TypeScript.",
        "Real-time inventory synchronization, authentication, and PostgreSQL database powered by Supabase.",
        "Store Operations & Performance Dashboard with live shopper tracking and stock radar.",
        "Automated Clearance Discount Engine for near-expiry produce reduction.",
        "Continuous deployment and global edge distribution with Vercel."
      ]
    },
    {
      title: "TrustElect: A Web based voting system with MFA and Content Management System",
      badge: "Capstone Project",
      tags: ["Next.js", "React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL", "AES-256", "JWT"],
      objective: "Replace manual paper-based school elections with a secure online voting system featuring live vote counts, voter privacy, printable receipts with verification codes, and campus lab network restrictions.",
      description: "A full-stack election management and online voting web app built for STI College Novaliches. It handles multiple elections, partylists, custom ballots, and real-time result reports with built-in security and content management.",
      githubUrl: "https://github.com/suiluj0123/TrustElect",
      imageUrl: "/trustelect/login/Login page.png",
      modules: [
        {
          id: "auth",
          name: "01. Authentication & Access Gate",
          badge: "Security Gateway",
          summary: "Role-based authentication gateway enforcing student & administrator credential verification, lab precinct routing, and secure JWT session authentication.",
          screenshots: [
            {
              title: "Authentication & Login Portal",
              caption: "Secure Role-Based Student & Administrator Login Gateway with Session Authentication",
              src: "/trustelect/login/Login page.png"
            }
          ]
        },
        {
          id: "admin",
          name: "02. System Admin Operations",
          badge: "Operations Hub",
          summary: "Centralized operational control panel for monitoring live voter turnout, system analytics, and administrator profile security.",
          screenshots: [
            {
              title: "System Admin Overview Dashboard",
              caption: "Centralized Election Operations Hub with Live Statistics, Voter Turnout, and Quick Action Panels",
              src: "/trustelect/login/system admin/System admin dashboard.png"
            },
            {
              title: "System Admin Profile & Security",
              caption: "Administrator Account Management, Security Settings, and Profile Details",
              src: "/trustelect/login/system admin/System admin profile.png"
            }
          ]
        },
        {
          id: "departments",
          name: "03. Department Management",
          badge: "Organization Mapping",
          summary: "Academic and System department management panel allowing administrators to organize faculties, assign department admins, and manage archive folders.",
          screenshots: [
            {
              title: "Department Operations & Academic Mapping",
              caption: "Manage Academic (BAA, ICT, THM) and System Departments with Admin Assignment and Archival Controls",
              src: "/trustelect/departments/departments-management.png"
            }
          ]
        },
        {
          id: "admin-rbac",
          name: "04. Admin Management & RBAC Permissions",
          badge: "Granular RBAC",
          summary: "Role-Based Access Control (RBAC) engine enabling root administrators to create staff accounts with granular User and Election CRUD permissions.",
          screenshots: [
            {
              title: "Admin Accounts Directory & Roles",
              caption: "Administrator Directory with Role Badging (Root Admin / Staff), Status Monitoring, and Lifecycle Controls",
              src: "/trustelect/admin-management/admin-management-table.png"
            },
            {
              title: "Admin Registration Form",
              caption: "Administrator Onboarding Modal with Employee Identification, Faculty Email Verification, and Department Assignment",
              src: "/trustelect/admin-management/add-new-admin-form.png"
            },
            {
              title: "Granular RBAC Permissions Modal",
              caption: "Role-Based Access Control configuration with granular User & Election CRUD privileges and automated secure password generation",
              src: "/trustelect/admin-management/admin-rbac-permissions.png"
            }
          ]
        },
        {
          id: "students",
          name: "05. Student & Voter Management",
          badge: "Voter Registry & Analytics",
          summary: "Comprehensive student roster and voter eligibility registry with course/strand demographic breakdowns, academic term switching, and batch CSV operations.",
          screenshots: [
            {
              title: "Student Directory & Demographic Breakdown",
              caption: "Student Voter Registry with Course, Strand & Year-Level Distribution Analytics and Batch Processing Tools (CSV Upload, Archival, Deletion)",
              src: "/trustelect/students/student-management-analytics.png"
            }
          ]
        },
        {
          id: "cms",
          name: "06. Content Management & Theming",
          badge: "CMS & Theming Engine",
          summary: "Customizable frontend CMS engine enabling administrators to update campus branding, hero carousel banners, feature proposition cards, call-to-actions, and global color themes.",
          screenshots: [
            {
              title: "Institutional Logo & Branding",
              caption: "Dynamic Institution Logo Customization with live preview and multi-format image upload handler",
              src: "/trustelect/cms/cms-logo-management.png"
            },
            {
              title: "Hero Banner & Carousel Manager",
              caption: "Customizable Hero Banner with color pickers, typography controls, and rotating 5-second image carousel manager",
              src: "/trustelect/cms/cms-banner-carousel.png"
            },
            {
              title: "Feature Proposition Cards",
              caption: "Dynamic Feature Card Editor enabling administrators to customize value propositions, icons, and election highlights",
              src: "/trustelect/cms/cms-feature-cards.png"
            },
            {
              title: "Voter Engagement & Video CTA",
              caption: "Call-to-Action section with dynamic headline editors, video background upload, and custom action button routing",
              src: "/trustelect/cms/cms-engagement-cta.png"
            },
            {
              title: "Global Theme Customizer",
              caption: "Full System Theme Builder with granular HEX color pickers for headers, hero sections, cards, and interactive CTA elements",
              src: "/trustelect/cms/cms-theme-customizer.png"
            }
          ]
        },
        {
          id: "maintenance",
          name: "07. System Maintenance & Master Data",
          badge: "Data Dictionary Engine",
          summary: "Administrative master-data dictionary for configuring academic programs, election classifications, student year levels, demographic gender options, academic terms, voting precincts, lab IP security restrictions, partylists, and election positions.",
          screenshots: [
            {
              title: "Academic Programs Master List",
              caption: "Master directory of STI College academic courses and Senior High strands with full CRUD administration",
              src: "/trustelect/maintenance/maintenance-programs.png"
            },
            {
              title: "Election Categories & Classifications",
              caption: "Configurable election classification (Club Organizations, Student Council, Symposium, Mr & Ms STI)",
              src: "/trustelect/maintenance/maintenance-election-types.png"
            },
            {
              title: "Academic Year Levels & Strands",
              caption: "Configurable college year levels (1st–4th Year) and Senior High School grade levels (Grade 11 & 12)",
              src: "/trustelect/maintenance/maintenance-year-levels.png"
            },
            {
              title: "Gender Demographic Classifiers",
              caption: "Demographic gender classification maintenance supporting voter distribution analytics",
              src: "/trustelect/maintenance/maintenance-genders.png"
            },
            {
              title: "Academic Semesters & Term Management",
              caption: "Active semester switcher and term configuration manager with instant current-term designation",
              src: "/trustelect/maintenance/maintenance-semesters.png"
            },
            {
              title: "Precincts Master Directory",
              caption: "Physical laboratory and voting precinct directory (Lab 101 to Lab 211) with dynamic add, edit, and deletion actions",
              src: "/trustelect/maintenance/maintenance-precincts.png"
            },
            {
              title: "Laboratory Precincts & IP Security Management",
              caption: "Granular IP-to-Precinct security gateway controlling campus lab IP white-listing to block remote voting tampering",
              src: "/trustelect/maintenance/maintenance-lab-precincts-ip.png"
            },
            {
              title: "Departments Master Configuration",
              caption: "Master data table for academic and system department classifications with quick management controls",
              src: "/trustelect/maintenance/maintenance-departments.png"
            },
            {
              title: "Partylist Registration & Platform Directory",
              caption: "Student partylist registry with official branding logos, campaign slogans, advocacy platforms, and archival status",
              src: "/trustelect/maintenance/maintenance-partylists.png"
            },
            {
              title: "Election Position Hierarchy & Builder",
              caption: "Dynamic position configuration per election type (e.g. Best Capstone, Best Thesis, Executive Positions) with custom ordering",
              src: "/trustelect/maintenance/maintenance-positions.png"
            }
          ]
        },
        {
          id: "election-builder",
          name: "08. Election & Ballot Management",
          badge: "Configuration Wizard",
          summary: "End-to-end election configuration workflow featuring multi-criteria voter eligibility filters, precinct assignments, position & candidate builders, and real-time ballot previews.",
          screenshots: [
            {
              title: "Election Configuration Wizard",
              caption: "Multi-Criteria Election Setup with Department, Year-Level, Semester, and Lab Precinct Demographic Filtering",
              src: "/trustelect/login/system admin/creating election/Sytemadmin_Creating election.png"
            },
            {
              title: "Election Parameters Verification",
              caption: "Pre-Flight Election & Voter Eligibility Verification Modal before Database Commitment",
              src: "/trustelect/login/system admin/creating election/election created preview.png"
            },
            {
              title: "Active Election Overview & Voter Analytics",
              caption: "Ongoing Election Dashboard with Real-Time Voter Participation & Precinct Breakdown",
              src: "/trustelect/login/system admin/creating election/election created.png"
            },
            {
              title: "Ballot & Candidate Builder",
              caption: "Dynamic Position & Candidate Setup with Voting Type (Single/Multi-Choice) and Image Uploads",
              src: "/trustelect/login/system admin/creating election/election ballot.png"
            },
            {
              title: "Live Ballot Interactive Preview",
              caption: "Generated Digital Ballot Layout Preview for Administrative Review prior to Publishing",
              src: "/trustelect/login/system admin/creating election/election ballot preview.png"
            },
            {
              title: "Ballot Position & Candidates Breakdown",
              caption: "Detailed Candidate Ranking, Project Descriptions, and Live Vote Percentage Indicators",
              src: "/trustelect/login/system admin/creating election/Screenshot 2026-08-31 192433.png"
            }
          ]
        },
        {
          id: "student-voting",
          name: "09. Voter Experience & Cryptographic Receipts",
          badge: "Zero-Trust Voting Flow",
          summary: "Student voting experience featuring multi-election directories, dynamic ballot rendering, pre-commitment vote reviews, and cryptographically generated vote receipts with unique 6-character verification audit codes.",
          screenshots: [
            {
              title: "Active Elections Directory (Student View)",
              caption: "Student portal displaying eligible active, upcoming, and completed elections with dynamic precinct eligibility checks",
              src: "/trustelect/student-voting/student-elections-dashboard.png"
            },
            {
              title: "Interactive Digital Ballot Interface",
              caption: "Real-time digital ballot with live progress indicators and candidate project cards",
              src: "/trustelect/student-voting/student-ballot-interface.png"
            },
            {
              title: "Candidate Selection & Progress State",
              caption: "Intuitive candidate selection with active visual checkmark indicators and completed progress bar",
              src: "/trustelect/student-voting/student-ballot-selection.png"
            },
            {
              title: "Vote Summary & Pre-Submission Review",
              caption: "Pre-commitment vote verification review allowing students to double-check their selections before cryptographic submission",
              src: "/trustelect/student-voting/student-vote-review-confirm.png"
            },
            {
              title: "Cryptographic Vote Receipt & Verification Code",
              caption: "Verifiable Vote Receipt with unique Receipt ID and 6-character verification code for zero-knowledge vote auditing",
              src: "/trustelect/student-voting/student-vote-receipt-verification.png"
            }
          ]
        },
        {
          id: "reports",
          name: "10. Reports & Auditing Intelligence",
          badge: "Analytics & Export Hub",
          summary: "Comprehensive reporting engine generating filtered operational exports, including Election Summaries, Role-Based user rosters, Failed Login security logs, Activity Audit logs, and Live Vote counts.",
          screenshots: [
            {
              title: "System Reports & Export Intelligence Center",
              caption: "Centralized reporting dashboard categorized by Election, Users, Security, Audit, and System health metrics with PDF/CSV export capabilities",
              src: "/trustelect/reports/system-reports-analytics-hub.png"
            }
          ]
        }
      ],
      previews: [
        {
          title: "Authentication & Login Portal",
          caption: "Secure Role-Based Student & Administrator Login Gateway with Session Authentication",
          src: "/trustelect/login/Login page.png"
        },
        {
          title: "System Admin Overview Dashboard",
          caption: "Centralized Election Operations Hub with Live Statistics, Voter Turnout, and Quick Action Panels",
          src: "/trustelect/login/system admin/System admin dashboard.png"
        },
        {
          title: "System Admin Profile & Security",
          caption: "Administrator Account Management, Security Settings, and Profile Details",
          src: "/trustelect/login/system admin/System admin profile.png"
        },
        {
          title: "Department Operations & Academic Mapping",
          caption: "Manage Academic (BAA, ICT, THM) and System Departments with Admin Assignment and Archival Controls",
          src: "/trustelect/departments/departments-management.png"
        },
        {
          title: "Admin Accounts Directory & Roles",
          caption: "Administrator Directory with Role Badging (Root Admin / Staff), Status Monitoring, and Lifecycle Controls",
          src: "/trustelect/admin-management/admin-management-table.png"
        },
        {
          title: "Admin Registration Form",
          caption: "Administrator Onboarding Modal with Employee Identification, Faculty Email Verification, and Department Assignment",
          src: "/trustelect/admin-management/add-new-admin-form.png"
        },
        {
          title: "Granular RBAC Permissions Modal",
          caption: "Role-Based Access Control configuration with granular User & Election CRUD privileges and automated secure password generation",
          src: "/trustelect/admin-management/admin-rbac-permissions.png"
        },
        {
          title: "Student Directory & Demographic Breakdown",
          caption: "Student Voter Registry with Course, Strand & Year-Level Distribution Analytics and Batch Processing Tools (CSV Upload, Archival, Deletion)",
          src: "/trustelect/students/student-management-analytics.png"
        },
        {
          title: "Institutional Logo & Branding",
          caption: "Dynamic Institution Logo Customization with live preview and multi-format image upload handler",
          src: "/trustelect/cms/cms-logo-management.png"
        },
        {
          title: "Hero Banner & Carousel Manager",
          caption: "Customizable Hero Banner with color pickers, typography controls, and rotating 5-second image carousel manager",
          src: "/trustelect/cms/cms-banner-carousel.png"
        },
        {
          title: "Feature Proposition Cards",
          caption: "Dynamic Feature Card Editor enabling administrators to customize value propositions, icons, and election highlights",
          src: "/trustelect/cms/cms-feature-cards.png"
        },
        {
          title: "Voter Engagement & Video CTA",
          caption: "Call-to-Action section with dynamic headline editors, video background upload, and custom action button routing",
          src: "/trustelect/cms/cms-engagement-cta.png"
        },
        {
          title: "Global Theme Customizer",
          caption: "Full System Theme Builder with granular HEX color pickers for headers, hero sections, cards, and interactive CTA elements",
          src: "/trustelect/cms/cms-theme-customizer.png"
        },
        {
          title: "Academic Programs Master List",
          caption: "Master directory of STI College academic courses and Senior High strands with full CRUD administration",
          src: "/trustelect/maintenance/maintenance-programs.png"
        },
        {
          title: "Election Categories & Classifications",
          caption: "Configurable election classification (Club Organizations, Student Council, Symposium, Mr & Ms STI)",
          src: "/trustelect/maintenance/maintenance-election-types.png"
        },
        {
          title: "Academic Year Levels & Strands",
          caption: "Configurable college year levels (1st–4th Year) and Senior High School grade levels (Grade 11 & 12)",
          src: "/trustelect/maintenance/maintenance-year-levels.png"
        },
        {
          title: "Gender Demographic Classifiers",
          caption: "Demographic gender classification maintenance supporting voter distribution analytics",
          src: "/trustelect/maintenance/maintenance-genders.png"
        },
        {
          title: "Academic Semesters & Term Management",
          caption: "Active semester switcher and term configuration manager with instant current-term designation",
          src: "/trustelect/maintenance/maintenance-semesters.png"
        },
        {
          title: "Precincts Master Directory",
          caption: "Physical laboratory and voting precinct directory (Lab 101 to Lab 211) with dynamic add, edit, and deletion actions",
          src: "/trustelect/maintenance/maintenance-precincts.png"
        },
        {
          title: "Laboratory Precincts & IP Security Management",
          caption: "Granular IP-to-Precinct security gateway controlling campus lab IP white-listing to block remote voting tampering",
          src: "/trustelect/maintenance/maintenance-lab-precincts-ip.png"
        },
        {
          title: "Departments Master Configuration",
          caption: "Master data table for academic and system department classifications with quick management controls",
          src: "/trustelect/maintenance/maintenance-departments.png"
        },
        {
          title: "Partylist Registration & Platform Directory",
          caption: "Student partylist registry with official branding logos, campaign slogans, advocacy platforms, and archival status",
          src: "/trustelect/maintenance/maintenance-partylists.png"
        },
        {
          title: "Election Position Hierarchy & Builder",
          caption: "Dynamic position configuration per election type (e.g. Best Capstone, Best Thesis, Executive Positions) with custom ordering",
          src: "/trustelect/maintenance/maintenance-positions.png"
        },
        {
          title: "Election Configuration Wizard",
          caption: "Multi-Criteria Election Setup with Department, Year-Level, Semester, and Lab Precinct Demographic Filtering",
          src: "/trustelect/login/system admin/creating election/Sytemadmin_Creating election.png"
        },
        {
          title: "Election Parameters Verification",
          caption: "Pre-Flight Election & Voter Eligibility Verification Modal before Database Commitment",
          src: "/trustelect/login/system admin/creating election/election created preview.png"
        },
        {
          title: "Active Election Overview & Voter Analytics",
          caption: "Ongoing Election Dashboard with Real-Time Voter Participation & Precinct Breakdown",
          src: "/trustelect/login/system admin/creating election/election created.png"
        },
        {
          title: "Ballot & Candidate Builder",
          caption: "Dynamic Position & Candidate Setup with Voting Type (Single/Multi-Choice) and Image Uploads",
          src: "/trustelect/login/system admin/creating election/election ballot.png"
        },
        {
          title: "Live Ballot Interactive Preview",
          caption: "Generated Digital Ballot Layout Preview for Administrative Review prior to Publishing",
          src: "/trustelect/login/system admin/creating election/election ballot preview.png"
        },
        {
          title: "Ballot Position & Candidates Breakdown",
          caption: "Detailed Candidate Ranking, Project Descriptions, and Live Vote Percentage Indicators",
          src: "/trustelect/login/system admin/creating election/Screenshot 2026-08-31 192433.png"
        },
        {
          title: "Active Elections Directory (Student View)",
          caption: "Student portal displaying eligible active, upcoming, and completed elections with dynamic precinct eligibility checks",
          src: "/trustelect/student-voting/student-elections-dashboard.png"
        },
        {
          title: "Interactive Digital Ballot Interface",
          caption: "Real-time digital ballot with live progress indicators and candidate project cards",
          src: "/trustelect/student-voting/student-ballot-interface.png"
        },
        {
          title: "Candidate Selection & Progress State",
          caption: "Intuitive candidate selection with active visual checkmark indicators and completed progress bar",
          src: "/trustelect/student-voting/student-ballot-selection.png"
        },
        {
          title: "Vote Summary & Pre-Submission Review",
          caption: "Pre-commitment vote verification review allowing students to double-check their selections before cryptographic submission",
          src: "/trustelect/student-voting/student-vote-review-confirm.png"
        },
        {
          title: "Cryptographic Vote Receipt & Verification Code",
          caption: "Verifiable Vote Receipt with unique Receipt ID and 6-character verification code for zero-knowledge vote auditing",
          src: "/trustelect/student-voting/student-vote-receipt-verification.png"
        },
        {
          title: "System Reports & Export Intelligence Center",
          caption: "Centralized reporting dashboard categorized by Election, Users, Security, Audit, and System health metrics with PDF/CSV export capabilities",
          src: "/trustelect/reports/system-reports-analytics-hub.png"
        }
      ],
      keyFeatures: [
        "Led a team to build a secure voting website for 3,000+ students using Next.js, Node.js, and PostgreSQL.",
        "Created a system to count votes in real time, replacing slow manual counting with instant results.",
        "Protected voter identities and encrypted ballots to prevent vote tampering.",
        "Developed a secure login system using one-time passwords (OTP) sent via email and SMS.",
        "Restricted voting access so students can only vote from authorized campus computer labs using IP verification.",
        "Printable vote receipts with unique Receipt IDs and 6-character verification codes for audit proof.",
        "Role-Based Access Control (RBAC) to set specific permissions for admins and staff.",
        "Built-in Content Management System (CMS) to update logos, carousel banners, feature cards, and theme colors.",
        "Reports module with downloadable PDF and CSV exports for voter turnout, vote counts, and activity audit logs."
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
      title: "Best Capstone Project",
      issuer: "STI College Novaliches",
      verifyUrl: "#",
      logoUrl: "/certificates/best-capstone-project.jpg"
    },
    {
      title: "Students' Choice Award",
      issuer: "STI College Novaliches — ICT-COE Project Symposium & Exhibit 2025",
      verifyUrl: "#",
      logoUrl: "/certificates/students-choice-award.jpg"
    }
  ]
};
