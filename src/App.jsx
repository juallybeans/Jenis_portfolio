import React, { useState } from "react";

// You can easily update your information by editing the arrays below.
// Contact details and links. Check these before publishing.
const contactLinks = [
  {
    label: "Email",
    value: "jenisonn04@gmail.com",
    href: "mailto:jenisonn04@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jenis-onn-383564280",
    href: "https://www.linkedin.com/in/jenis-onn-383564280",
  },
  {
    label: "GitHub",
    value: "github.com/juallybeans",
    href: "https://github.com/juallybeans",
  },
];

const skills = [
  {
    name: "Languages",
    items: ["Python", "JavaScript", "Java", "SQL", "HTML & CSS"],
  },
  {
    name: "Web development",
    items: ["React", "Vue.js", "Node.js", "Express", "Flask", "FastAPI"],
  },
  {
    name: "Data & databases",
    items: ["Power BI", "tableau", "MongoDB", "Firebase", "Supabase"],
  },
  {
    name: "Tools & ways of working",
    items: [
      "Git & GitHub",
      "Microsoft Visio",
      "REST APIs",
      "Agile teamwork",
      "Requirements analysis",
      "Excel",
      "Powerpoint",
      "Power Automate",
      "ClipChamp",
      "Jira",
    ],
  },
];

const experiences = [
  {
    period: "Jan – Jun 2026",
    position: "Enterprise Architect Internship",
    organization: "KPMG Services Pte Ltd",
    description:
      "Worked across technology architecture, business analysis and project coordination.",
    points: [
      "Created system and business capability maps in Microsoft Visio using TOGAF and ArchiMate concepts.",
      "Supported technology-to-application and application-to-capability mapping, including Power BI dashboards for analysis.",
      "Coordinated with stakeholders, vendors and internal teams while monitoring project timelines and processes.",
    ],
  },
  {
    period: "May – Aug 2025",
    position: "Enterprise Architect Analyst Internship",
    organization: "Income Insurance Limited",
    description:
      "Worked across the Enterprise Architecture and Software Development Life Cycle (SDLC) teams, supporting system analysis, process improvement and technology change initiatives.",
    points: [
      "Reviewed proposed technology solutions to identify system dependencies and enterprise-wide impacts.",
      "Improved reporting workflows by transitioning from PowerPoint-based reporting to structured Excel templates.",
      "Created system interdependency visualisations to support faster assessment of potential downtime impacts.",
      "Contributed to SDLC automation and standardisation initiatives, and developed end-user video guides for system migration.",
    ],
  },
];

const projects = [
  {
    number: "01",
    name: "HabitBuddy",
    github: "https://github.com/juallybeans/HabitBuddy",
    link: "https://habitbuddy.vercel.app/",
    siteNote:
      "The original deployment is no longer fully functional as the database is offline. Please refer to the project slides and walkthrough video.",
    label: "Full-stack development",
    status: "Completed",
    image: "/images/habitBuddyPic.png",
    slides: "/docs/HabitBuddySlides.pdf",
    demo: "https://youtu.be/MyalAEkzeMo",
    summary:
      "A habit and wellness tracker designed to make small daily wins feel rewarding.",
    detail:
      "Built habit tracking, streaks, mood journaling, community features and a customizable pet avatar with a coin rewards system.",
    stack: ["Vue.js", "Node.js", "Express", "MongoDB", "Phaser.js"],
    visual: "habits",
    tone: "lilac",
  },
  {
    number: "02",
    name: "Taerae Tickets",
    github: "https://github.com/juallybeans/taeraeticketsDeployed",
    link: "https://taeraetickets.vercel.app/",
    siteNote:
      "The original deployment is no longer fully functional as the database is offline.",
    label: "Full-stack development",
    status: "Completed",
    summary:
      "A resale marketplace designed for safer concert ticket transactions.",
    detail:
      "Implemented features including AI-assisted OCR, image and PDF processing, user authentication and real-time updates.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "FastAPI",
      "Supabase",
    ],
    visual: "tickets",
    tone: "rose",
  },

  {
    number: "03",
    name: "Health Clinic Management System",
    github: "https://github.com/juallybeans/OOP_project",
    label: "Full-stack development · Team project",
    status: "Completed",
    image: "/images/oopPic.jpg",
    slides: "/docs/OOPSlides.pdf",
    summary:
      "A clinic management system for patient appointments, queues and staff workflows.",
    detail:
      "Built with React and Spring Boot, the application supports clinic booking, queue management, notifications and real-time updates.",
    stack: [
      "Java",
      "Spring Boot",
      "React",
      "Supabase",
      "PostgreSQL",
      "WebSockets",
    ],
    visual: "clinic",
    tone: "sky",
  },
  {
    number: "04",
    name: "NomNomGo",
    github: "https://github.com/juallybeans/ESD_FoodDelivery",
    demo: "https://youtu.be/JcsmFzwhh3M",
    label: "Microservices · Team project",
    status: "Completed",
    image: "/images/nomNomGoPic.png",
    slides: "/docs/NomNomGoSlides.pdf",
    summary:
      "A food-delivery application that coordinates payments, orders and drivers across services.",
    detail:
      "The team designed wallet top-ups via Stripe, driver assignment and reassignment, cancellations and refunds, with notifications and unified routing through Kong.",
    stack: ["Microservices", "REST APIs", "Kong", "Stripe", "AMQP", "Twilio"],
    visual: "nomnom",
    tone: "coral",
  },

  {
    number: "05",
    name: "Team Task Management App",
    label: "Agile & Scrum · Full-stack Team Project",
    status: "Completed",
    image: "/images/spmPic.png",
    slides: "/docs/spmSlides.pdf",
    summary:
      "A collaborative task management application developed using Agile and Scrum methodologies, with sprint-based development and Continuous Integration (CI).",
    detail:
      "Developed task assignments, priorities, tags, subtasks, recurring tasks, and file attachments using Vue.js, Flask, and Firebase. Applied Scrum practices to organise development into sprints and implemented a CI pipeline using GitHub Actions and pytest to automate backend testing and validate code changes.",
    stack: [
      "Vue.js",
      "Flask",
      "Firebase",
      "Firestore",
      "Agile",
      "Scrum",
      "GitHub Actions",
      "pytest",
      "CI",
    ],
    visual: "tasks",
    tone: "butter",
  },
  {
    number: "06",
    name: "Love, Bonito Process Innovation",
    label: "Business process analysis · Team project",
    status: "Case study",
    image: "/images/bpasPic.png",
    slides: "/docs/bpasSlides.pdf",
    github: "",
    figma: "",
    summary:
      "Proposed a process innovation roadmap to streamline Love, Bonito's e-commerce fulfilment and after-sales operations.",
    detail:
      "Modelled to-be workflows and evaluated RFID-enabled warehouse automation, robotic picking, customer notifications and rule-based refunds, considering implementation trade-offs.",
    stack: [
      "BPMN",
      "Process Modelling",
      "Business Model Canvas",
      "Automation Strategy",
      "RFID",
    ],
    tone: "rose",
  },
  {
    number: "07",
    name: "RWS Digital Transformation — MICE SuperApp",
    label: "Digital strategy · Team project",
    status: "Concept & prototype",
    image: "/images/dbttPic.png",
    slides: "/docs/dbttSlides.pdf",
    github: "",
    figma: "https://www.figma.com/design/xsXqD8QettPW9TOB45oV1s/dbtt-project?node-id=0-1&t=79Nwv2dXyST36zwC-1",
    summary:
      "Proposed a unified digital experience for event organisers and attendees at Resorts World Sentosa.",
    detail:
      "Analysed fragmented booking journeys and proposed a MICE SuperApp with venue previews, an AI helpbot, real-time bookings and tailored recommendations, supported by a phased DevOps plan.",
    stack: [
      "Digital Transformation",
      "Porter's Five Forces",
      "UX Prototyping",
      "DevOps Planning",
    ],
    tone: "blue",
  },
  {
    number: "08",
    name: "Retail Sentinel — Smart 7-Eleven Dashboard",
    label: "GoSoft Hackathon · Retail analytics prototype",
    status: "Prototype",
    image: "/images/goSoftPic.png",
    link: "https://retail-sentinel.vercel.app/",
    linkLabel: "View prototype",
    slides: "/docs/goSoftHackathonSlides.pdf",
    github: "",
    figma: "",
    summary:
      "A dashboard concept to help 7-Eleven Thailand reduce near-expiry stock and make smarter pricing decisions.",
    detail:
      "Demonstrated inventory KPIs, at-risk stock monitoring and discount recommendations with manager approval. Explored future ideas including weather-aware promotions and branch-specific offers.",
    stack: [
      "Retail Analytics",
      "Dashboards",
      "Discount Recommendations",
      "Human-in-the-loop",
    ],
    tone: "mint",
  },
  {
    number: "09",
    name: "EcoPals — Sustainable Living UX",
    label: "UI/UX design · Team project",
    status: "Figma prototype",
    image: "/images/idpPic.png",
    slides: "/docs/idpSlides.pdf",
    github: "",
    figma: "",
    summary:
      "Designed a mobile experience to motivate students to adopt sustainable habits through events, challenges and rewards.",
    detail:
      "Created a high-fidelity Figma prototype informed by user personas and empathy research, then compared two interface designs in a 30-participant within-subject A/B study.",
    stack: [
      "Figma",
      "User Research",
      "Design Thinking",
      "A/B Testing",
      "UX Evaluation",
    ],
    tone: "peach",
  },
  {
    number: "10",
    name: "SMU Global Exposure Hub",
    label: "Service design · Process improvement",
    status: "Concept proposal",
    image: "/images/mcraPic.png",
    slides: "/docs/mcraSlides.pdf",
    github: "",
    figma: "",
    summary:
      "A proposed one-stop platform simplifying students' global exposure applications and credit mapping.",
    detail:
      "Mapped the end-to-end student journey, identified information and administrative pain points, and defined measurable service-quality goals for programme discovery, module mapping and progress tracking.",
    stack: [
      "Journey Mapping",
      "CTQ Analysis",
      "Process Improvement",
      "Service Design",
      "UX Concept",
    ],
    tone: "butter",
  },

  // {
  //   number: '04',
  //   name: 'KYB Compliance Prototype',
  //   label: 'Industry capstone · MONEA',
  //   status: 'In progress',
  //   summary: 'Designing an end-to-end business onboarding and compliance workflow for financial institutions.',
  //   detail: 'Working on a modular prototype covering document intake, risk classification, alert review, case management and audit trails.',
  //   stack: ['React', 'Python', 'FastAPI', 'Supabase', 'API design'],
  //   visual: 'kyb',
  //   tone: 'peach',
  // },
  {
    number: "11",
    name: "AI Merge Conflict Resolver",
    label: "AI & software engineering",
    status: "In progress",
    github: "https://github.com/juallybeans/SE201-AI-Assisted-Merge-Conflict-Resolver",
    summary:
      "Investigating how LLMs can resolve code conflicts while preserving developer intent.",
    detail:
      "Exploring retrieval from commit context, LLM-generated resolutions, code verification and a human-in-the-loop approval step.",
    stack: ["Python", "RAG", "LLMs", "Git", "Testing"],
    visual: "merge",
    tone: "blue",
  },
  {
    number: "12",
    name: "Butter — Mental Wellness Buddy",
    github: "https://github.com/juallybeans/techSeries2025_Butter",
    label: "Ellipsis Tech Series 2025 · Team project",
    demo: "https://youtu.be/FGsluHQX0g0",
    status: "Prototype",
    summary:
      "A digital companion concept supporting youth mental wellbeing through approachable check-ins.",
    detail:
      "Explored a playful virtual mascot, mood and lifestyle tracking, peer encouragement and access to wellbeing support resources in a team-built prototype.",
    stack: ["Vue.js", "JavaScript", "Python", "Node.js", "Supabase"],
    visual: "butter",
    tone: "lilac",
  },
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function ProjectVisual({ kind }) {
  if (kind === "butter") {
    return (
      <div className="visual-art butter-art" aria-hidden="true">
        <div className="butter-glow" />
        <div className="butter-face"><span>•ᴗ•</span></div>
        <div className="butter-title">butter<span>✦</span></div>
        <div className="butter-subtitle">a little check-in goes a long way</div>
      </div>
    );
  }
  if (kind === "habits") {
    return (
      <div className="visual-art habit-art" aria-hidden="true">
        <div className="float-chip chip-top">✦ little wins add up</div>
        <div className="mini-card habit-panel">
          <div className="mini-eyebrow">TODAY'S HABITS</div>
          <div className="habit-row">
            <span className="tick">✓</span>
            <span>Morning routine</span>
            <span className="soft-line" />
          </div>
          <div className="habit-row">
            <span className="tick">✓</span>
            <span>Read 10 pages</span>
            <span className="soft-line short" />
          </div>
          <div className="habit-row">
            <span className="empty-tick" />
            <span>Go for a walk</span>
            <span className="soft-line short" />
          </div>
        </div>
        <div className="pet-bubble">=^.^=</div>
      </div>
    );
  }

  if (kind === "clinic") {
    return (
      <div className="visual-art clinic-art" aria-hidden="true">
        <div className="clinic-window">
          <div className="clinic-head">
            <span>✚ HEALTH CLINIC</span>
            <small>Patient queue</small>
          </div>

          <div className="clinic-ticket">
            <small>YOUR QUEUE NUMBER</small>
            <strong>A-024</strong>
            <span>Waiting for consultation</span>
          </div>

          <div className="clinic-minirow">
            <span>Now serving</span>
            <strong>A-021</strong>
          </div>
        </div>

        <div className="clinic-bubble">● Live updates</div>
      </div>
    );
  }

  if (kind === "nomnom") {
    return (
      <div className="visual-art nomnom-art" aria-hidden="true">
        <div className="nomnom-receipt">
          <div className="nomnom-head">
            ◉ nomnom<span>go</span>
          </div>

          <div className="nomnom-text">
            ORDER #1042
            <span>PAID ✓</span>
          </div>

          <div className="nomnom-route">
            <span>🍜</span>
            <i>● ━━━ ● ━━━ ●</i>
            <span>🛵</span>
          </div>

          <div className="nomnom-foot">
            <span>Wallet</span>
            <b>→</b>
            <span>Driver assigned</span>
          </div>
        </div>

        <div className="nomnom-chip">Stripe · Kong</div>
      </div>
    );
  }

  if (kind === "stocks") {
    return (
      <div className="visual-art stock-art" aria-hidden="true">
        <div className="mini-card chart-panel">
          <div className="chart-top">
            <span>Market outlook</span>
            <span className="green-pill">↗ TREND</span>
          </div>
          <svg
            className="stock-chart"
            viewBox="0 0 340 145"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 125H340M0 85H340M0 45H340"
              stroke="#dce7e2"
              strokeDasharray="4 6"
            />
            <path
              d="M5 116C35 100 39 119 70 85S115 91 143 65 180 83 207 47 258 58 277 27 318 37 337 12"
              stroke="#368b72"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <circle
              cx="337"
              cy="12"
              r="6"
              fill="#368b72"
              stroke="white"
              strokeWidth="3"
            />
          </svg>
          <div className="chart-footer">
            <span>ARIMA</span>
            <span>XGBoost</span>
            <span>LSTM</span>
            <span>+ News</span>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "kyb") {
    return (
      <div className="visual-art kyb-art" aria-hidden="true">
        <div className="kyb-step step-one">
          <span className="kyb-symbol">▤</span>
          <span>Business onboarding</span>
          <span className="step-dot">✓</span>
        </div>
        <div className="step-connector" />
        <div className="kyb-step step-two">
          <span className="kyb-symbol">◇</span>
          <span>Risk screening</span>
          <span className="step-dot">✓</span>
        </div>
        <div className="step-connector" />
        <div className="kyb-step step-three">
          <span className="kyb-symbol">◎</span>
          <span>Compliance review</span>
          <span className="pending-dot">•••</span>
        </div>
      </div>
    );
  }
  if (kind === "merge") {
    return (
      <div className="visual-art merge-art" aria-hidden="true">
        <div className="mini-card code-panel">
          <div className="code-bar">
            <i />
            <i />
            <i />
            <span>resolve-conflict.py</span>
          </div>
          <div className="code-row">
            <span>01</span>
            <b className="code-purple">def</b> merge_changes():
          </div>
          <div className="code-row code-removed">
            <span>02</span>− &nbsp;return ours
          </div>
          <div className="code-row code-added">
            <span>03</span>+ &nbsp;return resolved
          </div>
          <div className="code-row">
            <span>04</span>&nbsp;&nbsp;# verified ✓
          </div>
        </div>
        <div className="float-chip code-success">✓ Tests passed</div>
      </div>
    );
  }
  return (
    <div className="visual-art task-art" aria-hidden="true">
      <div className="kanban-board">
        <div className="kanban-col">
          <div className="kanban-heading">
            TO DO <span>2</span>
          </div>
          <div className="kanban-ticket">
            <i />
            <b />
            <small />
          </div>
          <div className="kanban-ticket tiny">
            <i />
            <b />
            <small />
          </div>
        </div>
        <div className="kanban-col">
          <div className="kanban-heading">
            IN PROGRESS <span>1</span>
          </div>
          <div className="kanban-ticket">
            <i />
            <b />
            <small />
          </div>
        </div>
        <div className="kanban-col">
          <div className="kanban-heading">
            DONE <span>2</span>
          </div>
          <div className="kanban-ticket">
            <i />
            <b />
            <small />
          </div>
          <div className="kanban-ticket tiny">
            <i />
            <b />
            <small />
          </div>
        </div>
      </div>
    </div>
  );
}


function ProjectMedia({ project, total }) {
  const [imageError, setImageError] = useState(false);
  return (
    <div className="project-image">
      {project.image && !imageError ? (
        <img
          className="project-screenshot"
          src={project.image}
          alt={`${project.name} project preview`}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : project.visual ? (
        <ProjectVisual kind={project.visual} />
      ) : (
        <div className="project-image-fallback" aria-hidden="true">
          <span>✦</span>
          <strong>{project.name}</strong>
        </div>
      )}
      <span className="project-index">
        {project.number} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

function Header() {
  const [isOpen, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="site-header">
      <div className="nav-wrap container">
        <a
          className="wordmark"
          href="#home"
          aria-label="Jenis Onn, back to top"
        >
          jenis<span className="logo-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
        <nav
          className={isOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <span className="nav-meta">
          <span className="meta-star">✳</span> Singapore, SG
        </span>
      </div>
    </header>
  );
}

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <section
          id="home"
          className="hero container"
          aria-labelledby="hero-heading"
        >
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> HEY, NICE TO MEET YOU
            </div>
            <h1 id="hero-heading">
              Hi, I’m <span className="name-underline">Jenis.</span>
              <br />I build things <span className="outline-spark">✳</span>
              <br />
              that <em>make sense.</em>
            </h1>

            <p className="hero-description">
              I’m an Information Systems undergraduate at Singapore Management
              University, <strong>graduating in May 2027</strong>. I'm
              passionate about connecting{" "}
              <strong>technology, data and people</strong> to solve real-world
              problems. I'm currently seeking{" "}
              <strong>full-time opportunities</strong> after graduation and am{" "}
              <strong>open to relocating internationally</strong>.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                Explore my work <Arrow diagonal />
              </a>
              <a className="text-link" href="#about">
                A little about me <Arrow />
              </a>
            </div>
            <div className="hero-bottom">
              <span className="status-dot" /> Exploring software, project &
              product opportunities <span className="mini-asterisk">✳</span>
            </div>
          </div>
          <div
            className="hero-illustration"
            aria-label="Decorative illustration of a workspace card"
          >
            <div className="illustration-orbit orbit-one" />
            <div className="illustration-orbit orbit-two" />
            <div className="hero-star star-one">✳</div>
            <div className="hero-star star-two">✦</div>
            <div className="profile-sheet">
              <div className="profile-sheet-top">
                <span className="window-dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span>hello_world.jsx</span>
                <span className="tiny-symbol">↗</span>
              </div>
              <div className="profile-sheet-body">
                <div className="avatar-bubble">
                  <span>
                    j<span>o</span>
                  </span>
                  <span className="avatar-spark">✳</span>
                </div>
                <div className="hello-graphic">
                  ideas <span>→</span> impact.
                </div>
                <div className="sheet-subtitle">
                  a little bit of everything, a lot of curiosity.
                </div>
                <div className="interest-tags">
                  <span>✦ Code</span>
                  <span>◉ Data</span>
                  <span>⌁ Design</span>
                </div>
              </div>
              <div className="profile-sheet-footer">
                <span>Currently learning & creating</span>
                <span>↗ 2026</span>
              </div>
            </div>
            <div className="floating-label">
              Always building <span>✿</span>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="section about-section"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div>
              <div className="section-kicker">
                <span>01 /</span> ABOUT ME
              </div>
              <h2 id="about-title" className="section-title">
                A curious mind,
                <br />
                <span className="accent-italic">a practical approach.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                I enjoy turning complex problems into practical, meaningful
                solutions. Whether it's developing an application, analysing
                data, or understanding how business processes and systems work
                together, I enjoy exploring different ways technology can make a
                difference.
              </p>

              <p>
                Through my internships and university projects, I've gained
                hands-on experience in enterprise architecture, full-stack
                development, data analytics, and process improvement. I'm
                constantly looking for opportunities to expand my skills,
                explore new technologies, and take on new challenges.
              </p>

              <div className="about-facts">
                <span>📍 Based in Singapore · Open to Relocation</span>
                <span>🎓 SMU · Information Systems · May 2027</span>
                <span>💼 Seeking Full-Time Opportunities</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="section skills-section"
          aria-labelledby="skills-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="section-kicker">
                  <span>02 /</span> SKILLS
                </div>
                <h2 id="skills-title" className="section-title">
                  My toolkit<span className="accent-period">.</span>
                </h2>
              </div>
              <p>A mix of technical skills and hands-on project experience.</p>
            </div>
            <div className="skill-grid">
              {skills.map((group, i) => (
                <article className="skill-card" key={group.name}>
                  <div className="skill-card-top">
                    <span className="skill-icon">
                      {["⌘", "〈/〉", "▥", "✳"][i]}
                    </span>
                    <span className="skill-number">0{i + 1}</span>
                  </div>
                  <h3>{group.name}</h3>
                  <div className="skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="section experience-section"
          aria-labelledby="experience-title"
        >
          <div className="container experience-grid">
            <div className="experience-intro">
              <div className="section-kicker">
                <span>03 /</span> EXPERIENCE
              </div>
              <h2 id="experience-title" className="section-title">
                Learning by
                <br />
                <span className="accent-italic">doing.</span>
              </h2>
              <p>
                Where I’ve applied my skills in real-world and collaborative
                settings.
              </p>
            </div>
            <div className="timeline">
              {experiences.map((job, index) => (
                <article className="timeline-entry" key={job.position}>
                  <div className="timeline-axis">
                    <span className="timeline-circle" />
                    <span className="timeline-line" />
                  </div>
                  <div className="timeline-content">
                    <span className="experience-date">{job.period}</span>
                    <h3>{job.position}</h3>
                    <div className="experience-company">{job.organization}</div>
                    <p>{job.description}</p>
                    <ul>
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="section projects-section"
          aria-labelledby="projects-title"
        >
          <div className="container">
            <div className="section-heading project-heading">
              <div>
                <div className="section-kicker">
                  <span>04 /</span> SELECTED PROJECTS
                </div>
                <h2 id="projects-title" className="section-title">
                  Things I’ve <span className="accent-italic">worked on.</span>
                </h2>
              </div>
              <p>From full-stack apps to data and AI experiments.</p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article
                  className={`project-card project-${project.tone}`}
                  key={project.number}
                >
                  <ProjectMedia project={project} total={projects.length} />

                  <div className="project-content">
                    <div className="project-overline">
                      <span>{project.label}</span>
                      <span className="project-status">{project.status}</span>
                    </div>

                    <h3>{project.name}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <p className="project-detail">{project.detail}</p>

                    <div className="project-tags">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    {project.siteNote && (
                      <p className="project-site-note">
                        <span aria-hidden="true">ⓘ</span>
                        {project.siteNote}
                      </p>
                    )}

                    <div className="project-resource-links">
                      {project.link && (
                        <a
                          className="project-live-link"
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {project.linkLabel ||
                            (project.siteNote
                              ? "Original website"
                              : "View live project")}
                          <Arrow diagonal />
                        </a>
                      )}
                      {project.slides && (
                        <a
                          className="project-live-link"
                          href={project.slides}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View slides (PDF) <Arrow diagonal />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          className="project-live-link"
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Watch walkthrough <Arrow diagonal />
                        </a>
                      )}
                      {project.github && (
                        <a
                          className="project-live-link"
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub repository <Arrow diagonal />
                        </a>
                      )}
                      {project.figma && (
                        <a
                          className="project-live-link"
                          href={project.figma}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Figma design <Arrow diagonal />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="section contact-section"
          aria-labelledby="contact-title"
        >
          <div className="container contact-wrap">
            <div className="contact-heading">
              <div className="section-kicker">
                <span>05 /</span> CONTACT
              </div>
              <h2 id="contact-title" className="section-title">
                Let's <span className="accent-italic">connect.</span>
              </h2>
              <p>
                Have a project, opportunity or idea in mind? Feel free to reach
                out.
              </p>
            </div>
            <div className="contact-links">
              {contactLinks.map(({ label, value, href }) => (
                <a
                  className="contact-link"
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                >
                  <span>
                    <strong>{label}</strong>
                    <small>{value}</small>
                  </span>
                  <span className="contact-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div className="footer-signoff">
              Thanks for stopping by <span>✳</span>
            </div>
            <p>Always happy to learn, build and collaborate.</p>
          </div>
          <div className="footer-right">
            <a href="#home">Back to top ↑</a>
            <span>© 2026 Jenis Onn</span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
