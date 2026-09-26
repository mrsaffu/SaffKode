/**
 * services.data.js
 *
 * Static service data source for:
 * GET /api/v1/services
 * GET /api/v1/services/:slug
 *
 * Designed for both:
 * 1. Services listing/card page
 * 2. Dynamic Service Details page
 */

const commonProcess = [
  {
    step: 1,
    title: 'Understand Your Needs',
    shortTitle: 'Discovery',
    description:
      'We discuss your idea, business goals, users, technical requirements, and project expectations in detail.',
  },
  {
    step: 2,
    title: 'Plan & Strategize',
    shortTitle: 'Planning',
    description:
      'I define the project scope, architecture, technology stack, priorities, milestones, and delivery approach.',
  },
  {
    step: 3,
    title: 'Design & Develop',
    shortTitle: 'Development',
    description:
      'The solution is designed and developed using clean, scalable, maintainable, and secure engineering practices.',
  },
  {
    step: 4,
    title: 'Test & Optimize',
    shortTitle: 'Testing',
    description:
      'The implementation is tested for functionality, responsiveness, performance, reliability, and security.',
  },
  {
    step: 5,
    title: 'Deploy & Support',
    shortTitle: 'Launch',
    description:
      'The completed solution is prepared for production, deployed, and supported for future improvements and maintenance.',
  },
];

export const services = [
  // ============================================================
  // 01. WEB APPLICATION DEVELOPMENT
  // ============================================================

  {
    slug: 'web-application-development',
    number: '01',
    title: 'Web Application Development',
    category: 'Web Development',

    icon: 'monitor',

    shortDescription:
      'End-to-end web applications using modern technologies, scalable architecture, and user-focused design.',

    description:
      'I design and build complete web applications from the ground up — from business requirements and database architecture to a polished, responsive frontend and production deployment. Every application is developed with maintainability, performance, security, scalability, and real user needs in mind.',

    hero: {
      eyebrow: 'SERVICE 01',
      headline: 'Build scalable web applications around your business.',
      description:
        'From idea to production, I create modern web applications that combine thoughtful user experiences with reliable backend architecture.',
        
      primaryCta: 'Start a Project',
      secondaryCta: 'View My Work',
    },

    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      
    ],

    overview: {
      title: 'What is Web Application Development?',
      description:
        'Web application development is the process of building powerful, interactive, and scalable applications that run in the browser. I combine frontend engineering, backend development, database design, API integration, and deployment to create complete digital products.',
      secondaryDescription:
        'Whether you are launching a new product, replacing an outdated system, or building an internal business platform, the solution is structured around your users, workflows, and long-term goals.',
    },

    whyItMatters: [
      {
        title: 'Stronger Online Presence',
        description:
          'Create a professional digital experience that represents your product or business effectively.',
      },
      {
        title: 'Automate Business Processes',
        description:
          'Reduce repetitive manual work by turning important workflows into reliable digital processes.',
      },
      {
        title: 'Scalable Architecture',
        description:
          'Build a technical foundation that can evolve as your users, data, and requirements grow.',
      },
      {
        title: 'Better User Experience',
        description:
          'Deliver modern, responsive, and intuitive interfaces across desktop, tablet, and mobile devices.',
      },
    ],

    problemsSolved: [
      {
        title: 'Slow Performance',
        description:
          'Applications that feel slow or inefficient can be optimized across frontend, API, and database layers.',
      },
      {
        title: 'Outdated Technology',
        description:
          'Legacy or difficult-to-maintain applications can be modernized with a cleaner architecture.',
      },
      {
        title: 'Poor User Experience',
        description:
          'Unclear navigation, inconsistent interfaces, and poor responsiveness can be redesigned.',
      },
      {
        title: 'Scalability Limitations',
        description:
          'Architecture and database decisions can be improved to better support future growth.',
      },
      {
        title: 'Disconnected Systems',
        description:
          'APIs and integrations can connect different services and business workflows.',
      },
      {
        title: 'Security Concerns',
        description:
          'Authentication, authorization, validation, and secure API practices can be incorporated into the system.',
      },
    ],

    benefits: [
      'Modern and responsive user experience',
      'Maintainable component-based architecture',
      'Secure backend and API architecture',
      'Scalable database structure',
      'Production-ready deployment',
      'Clear technical documentation',
    ],

    deliverables: [
      'Responsive React frontend',
      'Reusable component architecture',
      'RESTful backend API',
      'MongoDB database integration',
      'Authentication and authorization',
      'API validation and error handling',
      'Deployment-ready production build',
      'Technical documentation',
    ],

    capabilities: [
      {
        title: 'Custom Design & Development',
        description:
          'Applications are designed around your business requirements rather than forcing your workflow into a generic template.',
      },
      {
        title: 'Responsive & Mobile-First',
        description:
          'Interfaces are optimized for mobile, tablet, laptop, and large desktop screens.',
      },
      {
        title: 'Secure Backend & APIs',
        description:
          'Backend systems include structured APIs, validation, authentication, authorization, and error handling.',
      },
      {
        title: 'Database Integration',
        description:
          'Data models and database operations are designed for reliability, maintainability, and efficient access.',
      },
      {
        title: 'Third-Party Integrations',
        description:
          'External APIs and services can be integrated according to project requirements.',
      },
      {
        title: 'Deployment & Support',
        description:
          'Applications can be prepared for production deployment with ongoing technical support.',
      },
    ],

    process: commonProcess,

    idealFor: [
      {
        title: 'Startups',
        description:
          'Build and validate a new digital product without unnecessary technical complexity.',
      },
      {
        title: 'Small Businesses',
        description:
          'Automate workflows and improve digital operations with custom software.',
      },
      {
        title: 'Growing Companies',
        description:
          'Create scalable applications that can evolve with increasing users and requirements.',
      },
      {
        title: 'Organizations',
        description:
          'Develop custom internal platforms, dashboards, portals, and workflow systems.',
      },
    ],

    scope: {
      included: [
        'Frontend development',
        'Backend API development',
        'Database integration',
        'Responsive implementation',
        'Authentication when required',
        'API integration',
        'Production build',
      ],
      optional: [
        'Admin dashboard',
        'Payment gateway integration',
        'Advanced analytics',
        'Third-party integrations',
        'Cloud infrastructure setup',
      ],
      excluded: [
        'Paid third-party subscriptions',
        'Third-party service fees',
        'Content creation unless separately agreed',
      ],
    },

    timeline: {
      label: 'Typical project duration',
      value: '2–8 Weeks',
      description:
        'Timeline depends on project scope, number of features, integrations, design requirements, and feedback cycles.',
    },

    quality: {
      security: [
        'Secure authentication',
        'Role-based authorization',
        'Input validation',
        'Protected API routes',
        'Environment-based secrets',
      ],
      performance: [
        'Optimized API requests',
        'Efficient database queries',
        'Responsive UI rendering',
        'Asset optimization',
        'Production build optimization',
      ],
      testing: [
        'Functional testing',
        'Responsive testing',
        'API testing',
        'Cross-browser testing',
        'Production verification',
      ],
    },

    caseStudies: [
      {
        title: 'Booth Management System',
        category: 'Full-Stack Web Application',
        description:
          'A comprehensive management platform with user management, geography hierarchy, authentication, dashboards, and REST API integration.',
        technologies: [
          'React.js',
          'Node.js',
          'MongoDB',
          'JWT',
          'REST API',
        ],
        ctaLabel: 'View Case Study',
        slug: 'booth-management-system',
      },
    ],

    faqs: [
      {
        question: 'How long does it take to build a web application?',
        answer:
          'The timeline depends on the scope and complexity of the application. A focused application may take a few weeks, while a larger platform with multiple modules and integrations can take longer.',
      },
      {
        question: 'Can you work with an existing application?',
        answer:
          'Yes. I can work with existing frontend, backend, database, or deployment infrastructure and improve, extend, or modernize the application.',
      },
      {
        question: 'Do you provide UI/UX implementation?',
        answer:
          'Yes. I can implement responsive interfaces from existing designs or help structure the UI based on your product requirements.',
      },
      {
        question: 'Will the application be mobile responsive?',
        answer:
          'Yes. Responsive behavior is considered during development so the application works across mobile, tablet, laptop, and desktop screen sizes.',
      },
      {
        question: 'Do you provide deployment and support?',
        answer:
          'Yes. Production deployment, environment configuration, and ongoing maintenance can be included depending on the project scope.',
      },
      {
        question: 'Can you integrate third-party services?',
        answer:
          'Yes. External APIs, payment services, authentication providers, analytics platforms, and other integrations can be incorporated when required.',
      },
    ],

    cta: {
      eyebrow: "LET'S BUILD SOMETHING GREAT",
      title: 'Have a web application in mind?',
      description:
        'Tell me about your idea, requirements, or existing application and we can discuss the right technical approach.',
      primaryLabel: "Let's Talk",
      secondaryLabel: 'Send an Email',
    },

    relatedServices: [
      'responsive-frontend-development',
      'backend-api-development',
      'database-design-optimization',
      'deployment-cloud-solutions',
    ],

    featured: true,
    order: 1,
  },

  // ============================================================
  // 02. RESPONSIVE FRONTEND DEVELOPMENT
  // ============================================================

  {
    slug: 'responsive-frontend-development',
    number: '02',
    title: 'Responsive Frontend Development',
    category: 'Frontend Development',

    icon: 'smartphone',

    shortDescription:
      'Pixel-perfect, responsive, and interactive interfaces built with React.js, modern JavaScript, and scalable component architecture.',

    description:
      'I build modern frontend experiences that remain visually consistent and functional across mobile, tablet, desktop, and large screens. The focus is on clean component architecture, responsive layouts, accessibility, performance, and purposeful interactions.',

    hero: {
      eyebrow: 'SERVICE 02',
      headline: 'Responsive interfaces that feel right on every screen.',
      description:
        'Turn your design or product idea into a polished, responsive, and maintainable frontend experience.',
      primaryCta: 'Start a Project',
      secondaryCta: 'View My Work',
    },

    technologies: [
      'React.js',
      'JavaScript',
      'TypeScript',
      'Tailwind CSS',
      'UI/UX',
    ],

    overview: {
      title: 'What is Responsive Frontend Development?',
      description:
        'Responsive frontend development focuses on transforming designs, requirements, or product ideas into fast, interactive, accessible, and responsive web interfaces.',
      secondaryDescription:
        'Every component is structured to remain maintainable as the application grows, while the interface adapts naturally across different screen sizes and devices.',
    },

    whyItMatters: [
      {
        title: 'Consistent User Experience',
        description:
          'Users receive a consistent experience regardless of the device they use.',
      },
      {
        title: 'Better Mobile Experience',
        description:
          'Interfaces are designed and tested for smaller screens rather than simply shrinking desktop layouts.',
      },
      {
        title: 'Maintainable Components',
        description:
          'Reusable components reduce duplication and make future changes easier.',
      },
      {
        title: 'Improved Performance',
        description:
          'Frontend structure and assets are optimized for efficient loading and rendering.',
      },
    ],

    problemsSolved: [
      {
        title: 'Broken Mobile Layouts',
        description:
          'Fix layouts that work on desktop but fail on mobile or tablet devices.',
      },
      {
        title: 'Inconsistent UI',
        description:
          'Create reusable components and consistent design patterns.',
      },
      {
        title: 'Poor Performance',
        description:
          'Reduce unnecessary rendering and optimize frontend assets.',
      },
      {
        title: 'Difficult Maintenance',
        description:
          'Refactor duplicated or tightly coupled UI code into reusable components.',
      },
      {
        title: 'Accessibility Issues',
        description:
          'Improve semantic structure, keyboard navigation, and accessible interaction patterns.',
      },
      {
        title: 'Weak Interaction Design',
        description:
          'Introduce meaningful states, transitions, and micro-interactions.',
      },
    ],

    benefits: [
      'Responsive mobile-first layouts',
      'Reusable React components',
      'Clean component architecture',
      'Accessible semantic markup',
      'Purposeful animations and interactions',
      'Cross-browser compatibility',
    ],

    deliverables: [
      'Responsive React frontend',
      'Reusable component system',
      'Mobile, tablet, and desktop layouts',
      'Interactive UI states',
      'Accessible semantic markup',
      'Frontend performance optimization',
      'Cross-browser testing',
      'Production-ready frontend build',
    ],

    capabilities: [
      {
        title: 'React Development',
        description:
          'Reusable and maintainable component architecture for modern applications.',
      },
      {
        title: 'Responsive Design',
        description:
          'Layouts that adapt smoothly from mobile devices to large desktop screens.',
      },
      {
        title: 'UI Implementation',
        description:
          'Accurate implementation of existing UI designs with attention to spacing, typography, and interaction.',
      },
      {
        title: 'Animation & Interaction',
        description:
          'Purposeful transitions and animations that improve the user experience without distracting from content.',
      },
      {
        title: 'Accessibility',
        description:
          'Semantic HTML and accessible interaction patterns are considered throughout development.',
      },
      {
        title: 'Performance',
        description:
          'Frontend rendering, assets, loading behavior, and component structure are optimized where appropriate.',
      },
    ],

    process: commonProcess,

    idealFor: [
      {
        title: 'Startups',
        description:
          'Launch polished product interfaces quickly and establish a maintainable frontend foundation.',
      },
      {
        title: 'Businesses',
        description:
          'Modernize an existing website or application interface.',
      },
      {
        title: 'Design Teams',
        description:
          'Convert UI designs and prototypes into production-ready React interfaces.',
      },
      {
        title: 'Existing Products',
        description:
          'Improve responsiveness, component architecture, and frontend performance.',
      },
    ],

    scope: {
      included: [
        'React component development',
        'Responsive layouts',
        'UI implementation',
        'Interactive states',
        'Frontend optimization',
        'Browser testing',
      ],
      optional: [
        'Animation systems',
        'Design system implementation',
        'State management',
        'API integration',
        'Frontend architecture refactoring',
      ],
      excluded: [
        'Backend infrastructure unless separately included',
        'Paid design assets',
        'Third-party subscription costs',
      ],
    },

    timeline: {
      label: 'Typical project duration',
      value: '1–5 Weeks',
      description:
        'Timeline varies depending on number of screens, complexity, animations, API integration, and design readiness.',
    },

    quality: {
      security: [
        'Safe API integration patterns',
        'Environment-based configuration',
        'Protected client-side flows',
      ],
      performance: [
        'Code splitting where appropriate',
        'Asset optimization',
        'Efficient rendering',
        'Responsive image handling',
      ],
      testing: [
        'Responsive testing',
        'Cross-browser testing',
        'Interaction testing',
        'Accessibility checks',
      ],
    },

    caseStudies: [],

    faqs: [
      {
        question: 'Can you convert a Figma design into React?',
        answer:
          'Yes. Existing UI designs can be converted into responsive, reusable, and production-ready React components.',
      },
      {
        question: 'Will the frontend work on mobile?',
        answer:
          'Yes. Responsive behavior is designed for mobile, tablet, desktop, and larger screens.',
      },
      {
        question: 'Can you improve an existing React project?',
        answer:
          'Yes. Existing React applications can be refactored, optimized, redesigned, or extended.',
      },
      {
        question: 'Do you provide animations?',
        answer:
          'Yes. Appropriate transitions, hover states, scroll animations, and micro-interactions can be implemented when they improve the experience.',
      },
      {
        question: 'Can you connect the frontend to my existing API?',
        answer:
          'Yes. Existing REST APIs and other supported services can be integrated into the frontend.',
      },
    ],

    cta: {
      eyebrow: 'BUILD A BETTER INTERFACE',
      title: 'Have a design or frontend idea?',
      description:
        'Let’s turn your design into a responsive, polished, and production-ready experience.',
      primaryLabel: "Let's Talk",
      secondaryLabel: 'View My Work',
    },

    relatedServices: [
      'web-application-development',
      'backend-api-development',
      'authentication-access-control',
      'maintenance-support',
    ],

    featured: false,
    order: 2,
  },

  // ============================================================
  // 03. BACKEND API DEVELOPMENT
  // ============================================================

  {
    slug: 'backend-api-development',
    number: '03',
    title: 'Backend API Development',
    category: 'Backend Development',

    icon: 'server',

    shortDescription:
      'Scalable and secure REST APIs using Node.js and Express.js with validation, authentication, authorization, and database integration.',

    description:
      'I design and develop structured backend APIs that provide reliable communication between applications, databases, and external services. The architecture focuses on clean separation of concerns, validation, security, error handling, maintainability, and scalability.',

    hero: {
      eyebrow: 'SERVICE 03',
      headline: 'Reliable backend APIs built for real applications.',
      description:
        'Design clean, secure, and maintainable APIs that provide a dependable foundation for your web or mobile application.',
      primaryCta: 'Discuss Your API',
      secondaryCta: 'View My Work',
    },

    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'JWT',
    ],

    overview: {
      title: 'What is Backend API Development?',
      description:
        'Backend API development involves building the server-side systems that handle application logic, authentication, database operations, integrations, and communication between different services.',
      secondaryDescription:
        'The goal is to create APIs that are predictable, secure, documented, and easy for frontend or external applications to consume.',
    },

    whyItMatters: [
      {
        title: 'Reliable Data Flow',
        description:
          'Create predictable communication between frontend applications, databases, and services.',
      },
      {
        title: 'Secure Access',
        description:
          'Protect sensitive resources through authentication, authorization, and validation.',
      },
      {
        title: 'Scalable Architecture',
        description:
          'Structure backend systems so additional features can be introduced without unnecessary complexity.',
      },
      {
        title: 'Maintainable Code',
        description:
          'Separate routes, controllers, services, validation, and data access responsibilities.',
      },
    ],

    problemsSolved: [
      {
        title: 'Unstructured APIs',
        description:
          'Improve inconsistent endpoints and unclear backend architecture.',
      },
      {
        title: 'Poor Error Handling',
        description:
          'Introduce consistent validation and meaningful API error responses.',
      },
      {
        title: 'Security Gaps',
        description:
          'Strengthen authentication, authorization, validation, and protected routes.',
      },
      {
        title: 'Slow Queries',
        description:
          'Review database access patterns and improve inefficient operations.',
      },
      {
        title: 'Difficult Maintenance',
        description:
          'Refactor tightly coupled backend logic into clearer modules.',
      },
      {
        title: 'Integration Challenges',
        description:
          'Build reliable API connections between your application and external services.',
      },
    ],

    benefits: [
      'Clean REST API architecture',
      'Consistent API responses',
      'Secure authentication and authorization',
      'Structured validation and error handling',
      'Database integration',
      'API documentation',
    ],

    deliverables: [
      'Versioned REST API',
      'Route and controller architecture',
      'Business logic services',
      'Request validation',
      'Authentication and authorization',
      'Database integration',
      'Error handling',
      'API documentation',
    ],

    capabilities: [
      {
        title: 'REST API Architecture',
        description:
          'Design predictable endpoints and resource structures for frontend and external consumers.',
      },
      {
        title: 'Authentication',
        description:
          'Implement secure login and protected API access when required.',
      },
      {
        title: 'Authorization',
        description:
          'Control access to resources based on roles and permissions.',
      },
      {
        title: 'Validation',
        description:
          'Validate incoming data before it reaches business logic or the database.',
      },
      {
        title: 'Database Integration',
        description:
          'Connect backend services with appropriate data models and database operations.',
      },
      {
        title: 'API Documentation',
        description:
          'Document endpoints, request structures, responses, and authentication requirements.',
      },
    ],

    process: commonProcess,

    idealFor: [
      {
        title: 'Web Applications',
        description:
          'Build the backend foundation required by a modern frontend application.',
      },
      {
        title: 'Mobile Applications',
        description:
          'Provide APIs for mobile applications and client applications.',
      },
      {
        title: 'Existing Products',
        description:
          'Extend or refactor an existing backend system.',
      },
      {
        title: 'Third-Party Integrations',
        description:
          'Create API integrations between your product and external services.',
      },
    ],

    scope: {
      included: [
        'REST API development',
        'Route architecture',
        'Business logic',
        'Request validation',
        'Database integration',
        'Authentication',
        'API documentation',
      ],
      optional: [
        'Role-based access control',
        'Third-party integrations',
        'File uploads',
        'Email services',
        'Advanced logging',
      ],
      excluded: [
        'Third-party service subscription costs',
        'Infrastructure costs unless separately agreed',
      ],
    },

    timeline: {
      label: 'Typical project duration',
      value: '1–6 Weeks',
      description:
        'Timeline depends on the number of endpoints, integrations, authentication requirements, and database complexity.',
    },

    quality: {
      security: [
        'Protected routes',
        'Request validation',
        'Authentication',
        'Authorization',
        'Environment-based secrets',
      ],
      performance: [
        'Efficient database operations',
        'Pagination',
        'Query optimization',
        'Appropriate indexing',
      ],
      testing: [
        'API endpoint testing',
        'Validation testing',
        'Authentication testing',
        'Error handling testing',
      ],
    },

    caseStudies: [],

    faqs: [
      {
        question: 'Can you build APIs for an existing frontend?',
        answer:
          'Yes. I can design and implement APIs that match the requirements of an existing React, mobile, or other client application.',
      },
      {
        question: 'Do you provide API documentation?',
        answer:
          'Yes. API endpoints, request formats, response structures, authentication requirements, and relevant usage details can be documented.',
      },
      {
        question: 'Can you add authentication?',
        answer:
          'Yes. Authentication and authorization can be implemented using appropriate approaches such as JWT-based authentication.',
      },
      {
        question: 'Can you integrate third-party APIs?',
        answer:
          'Yes. External APIs and services can be integrated into the backend where required.',
      },
      {
        question: 'Can you optimize an existing API?',
        answer:
          'Yes. Existing APIs can be reviewed for architecture, query efficiency, validation, error handling, and performance issues.',
      },
    ],

    cta: {
      eyebrow: 'BUILD A STRONG BACKEND',
      title: 'Need a reliable API for your application?',
      description:
        'Let’s discuss your data, integrations, authentication requirements, and backend architecture.',
      primaryLabel: 'Discuss Your API',
      secondaryLabel: 'View My Work',
    },

    relatedServices: [
      'web-application-development',
      'authentication-access-control',
      'database-design-optimization',
      'deployment-cloud-solutions',
    ],

    featured: false,
    order: 3,
  },

  // ============================================================
  // 04. AUTHENTICATION & ACCESS CONTROL
  // ============================================================

  {
    slug: 'authentication-access-control',
    number: '04',
    title: 'Authentication & Access Control',
    category: 'Security',

    icon: 'shield',

    shortDescription:
      'Secure authentication, authorization, JWT, OAuth, and role-based access control for multi-level applications.',

    description:
      'I implement authentication and authorization systems that control who can access your application and what they are allowed to do. The architecture can support simple user roles as well as complex multi-level organizational permissions.',

    hero: {
      eyebrow: 'SERVICE 04',
      headline: 'Secure access built around your application.',
      description:
        'Protect users, resources, and application workflows with structured authentication and permission systems.',
      primaryCta: 'Secure Your Application',
      secondaryCta: 'Discuss Requirements',
    },

    technologies: [
      'JWT',
      'OAuth',
      'RBAC',
      'Node.js',
      'Express.js',
    ],

    overview: {
      title: 'Authentication & Access Control',
      description:
        'Authentication verifies who a user is, while authorization determines what that user is allowed to access or perform.',
      secondaryDescription:
        'I can design access systems ranging from simple user authentication to multi-role applications with different permissions across organizational levels.',
    },

    whyItMatters: [
      {
        title: 'Protect User Accounts',
        description:
          'Control access to authenticated areas and sensitive application resources.',
      },
      {
        title: 'Control Permissions',
        description:
          'Ensure users can only perform actions appropriate to their assigned role.',
      },
      {
        title: 'Support Multiple Roles',
        description:
          'Handle applications with administrators, managers, users, agents, or other roles.',
      },
      {
        title: 'Reduce Security Risks',
        description:
          'Use structured validation and access-control patterns to protect application resources.',
      },
    ],

    problemsSolved: [
      {
        title: 'Unprotected Routes',
        description:
          'Secure private application routes and API endpoints.',
      },
      {
        title: 'Incorrect Permissions',
        description:
          'Prevent users from accessing actions or resources outside their permissions.',
      },
      {
        title: 'Complex User Hierarchies',
        description:
          'Structure role and permission systems for multi-level organizations.',
      },
      {
        title: 'Authentication Complexity',
        description:
          'Create clearer and more maintainable authentication flows.',
      },
    ],

    benefits: [
      'Secure user authentication',
      'Role-based authorization',
      'Protected application resources',
      'Structured permission management',
      'Scalable role hierarchy',
      'Security-focused API architecture',
    ],

    deliverables: [
      'Authentication flow',
      'JWT-based authentication where appropriate',
      'Protected routes',
      'Role-based access control',
      'Permission management',
      'Authorization middleware',
      'Security configuration review',
    ],

    capabilities: [
      {
        title: 'JWT Authentication',
        description:
          'Implement token-based authentication for supported application architectures.',
      },
      {
        title: 'Role-Based Access Control',
        description:
          'Define access permissions based on application roles.',
      },
      {
        title: 'OAuth Integration',
        description:
          'Integrate supported OAuth authentication providers when required.',
      },
      {
        title: 'Protected APIs',
        description:
          'Restrict sensitive backend resources through authentication and authorization middleware.',
      },
      {
        title: 'Permission Architecture',
        description:
          'Design permission structures that can evolve with application requirements.',
      },
      {
        title: 'Security Review',
        description:
          'Review authentication and access-control implementation for common configuration and architecture issues.',
      },
    ],

    process: commonProcess,

    idealFor: [
      {
        title: 'SaaS Products',
        description:
          'Applications where different users require different levels of access.',
      },
      {
        title: 'Admin Platforms',
        description:
          'Dashboards and internal systems with administrative permissions.',
      },
      {
        title: 'Organizations',
        description:
          'Systems with multiple departments, teams, or organizational levels.',
      },
      {
        title: 'Existing Applications',
        description:
          'Applications that need stronger or more structured access control.',
      },
    ],

    scope: {
      included: [
        'Authentication architecture',
        'Protected routes',
        'Authorization middleware',
        'Role management',
        'Permission structure',
        'Security configuration',
      ],
      optional: [
        'OAuth integration',
        'OTP authentication',
        'Multi-factor authentication',
        'Advanced audit logging',
      ],
      excluded: [
        'Identity provider subscription costs',
        'External authentication provider fees',
      ],
    },

    timeline: {
      label: 'Typical implementation',
      value: '3–10 Days',
      description:
        'Implementation time depends on the number of roles, permissions, authentication methods, and existing application architecture.',
    },

    quality: {
      security: [
        'Protected routes',
        'Role-based authorization',
        'Token validation',
        'Input validation',
        'Secure environment configuration',
      ],
      performance: [
        'Efficient authorization checks',
        'Minimal unnecessary authentication requests',
        'Structured middleware',
      ],
      testing: [
        'Login flow testing',
        'Protected route testing',
        'Role permission testing',
        'Unauthorized access testing',
      ],
    },

    caseStudies: [],

    faqs: [
      {
        question: 'Can you add role-based access control?',
        answer:
          'Yes. Roles and permissions can be structured according to the requirements of your application.',
      },
      {
        question: 'Can you implement JWT authentication?',
        answer:
          'Yes. JWT-based authentication can be implemented where it fits the application architecture.',
      },
      {
        question: 'Can different users have different permissions?',
        answer:
          'Yes. Role and permission structures can control access to routes, resources, and actions.',
      },
      {
        question: 'Can you work with an existing authentication system?',
        answer:
          'Yes. Existing authentication systems can be reviewed, extended, or refactored.',
      },
    ],

    cta: {
      eyebrow: 'SECURE YOUR APPLICATION',
      title: 'Need structured access control?',
      description:
        'Let’s design an authentication and permission system that fits your application and user hierarchy.',
      primaryLabel: 'Discuss Security',
      secondaryLabel: 'Start a Project',
    },

    relatedServices: [
      'backend-api-development',
      'web-application-development',
      'database-design-optimization',
      'maintenance-support',
    ],

    featured: false,
    order: 4,
  },

  // ============================================================
  // 05. DATABASE DESIGN & OPTIMIZATION
  // ============================================================

  {
    slug: 'database-design-optimization',
    number: '05',
    title: 'Database Design & Optimization',
    category: 'Database Engineering',

    icon: 'database',

    shortDescription:
      'Well-structured database design, query optimization, indexing, and scalable data handling for growing applications.',

    description:
      'I design and optimize database structures with a focus on reliable data relationships, efficient queries, appropriate indexing, maintainability, and application performance. Existing databases can also be reviewed and improved when performance or scalability becomes a concern.',

    hero: {
      eyebrow: 'SERVICE 05',
      headline: 'Build a database foundation that scales with your application.',
      description:
        'Design reliable data structures and optimize database operations for maintainability, performance, and future growth.',
      primaryCta: 'Optimize My Database',
      secondaryCta: 'Discuss Your Project',
    },

    technologies: [
      'MongoDB',
      'Mongoose',
      'MySQL',
      'Database Design',
      'Indexing',
    ],

    overview: {
      title: 'What is Database Design & Optimization?',
      description:
        'Database engineering focuses on how application data is structured, stored, accessed, validated, and maintained.',
      secondaryDescription:
        'A well-designed database reduces unnecessary complexity and provides a stronger foundation for APIs, reporting, dashboards, and growing application workloads.',
    },

    whyItMatters: [
      {
        title: 'Reliable Data Structure',
        description:
          'Create clear data models that match application requirements.',
      },
      {
        title: 'Faster Queries',
        description:
          'Improve inefficient database operations and access patterns.',
      },
      {
        title: 'Scalable Data Handling',
        description:
          'Prepare data structures for increasing records and application usage.',
      },
      {
        title: 'Easier Maintenance',
        description:
          'Keep data models understandable and aligned with application architecture.',
      },
    ],

    problemsSolved: [
      {
        title: 'Slow Queries',
        description:
          'Identify inefficient database operations and improve query performance.',
      },
      {
        title: 'Poor Data Structure',
        description:
          'Redesign problematic schemas and relationships.',
      },
      {
        title: 'Missing Indexes',
        description:
          'Identify appropriate indexes for frequently accessed data.',
      },
      {
        title: 'Growing Dataset',
        description:
          'Improve data access patterns as the application grows.',
      },
    ],

    benefits: [
      'Clear database architecture',
      'Efficient query patterns',
      'Appropriate indexing',
      'Scalable data structures',
      'Improved maintainability',
      'Better application performance',
    ],

    deliverables: [
      'Database schema design',
      'Data model documentation',
      'Index strategy',
      'Query optimization',
      'Migration support',
      'Database performance review',
      'Integration with backend APIs',
    ],

    capabilities: [
      {
        title: 'Schema Design',
        description:
          'Create data structures based on application requirements and relationships.',
      },
      {
        title: 'Query Optimization',
        description:
          'Review database operations and identify opportunities for more efficient queries.',
      },
      {
        title: 'Indexing',
        description:
          'Design indexes around important query patterns and access requirements.',
      },
      {
        title: 'MongoDB Development',
        description:
          'Design MongoDB collections, documents, relationships, and Mongoose models.',
      },
      {
        title: 'MySQL Development',
        description:
          'Work with relational database structures and SQL-based data operations.',
      },
      {
        title: 'Migration Support',
        description:
          'Help plan and implement data changes while minimizing disruption.',
      },
    ],

    process: commonProcess,

    idealFor: [
      {
        title: 'New Applications',
        description:
          'Establish a clean data foundation before application development grows.',
      },
      {
        title: 'Existing Applications',
        description:
          'Review databases that have become difficult to maintain or slow under load.',
      },
      {
        title: 'Growing Products',
        description:
          'Improve data access as records and application usage increase.',
      },
      {
        title: 'API Projects',
        description:
          'Create database structures that support reliable backend APIs.',
      },
    ],

    scope: {
      included: [
        'Schema review',
        'Data modeling',
        'Index analysis',
        'Query review',
        'Performance recommendations',
        'Backend integration',
      ],
      optional: [
        'Data migration',
        'Database refactoring',
        'Advanced performance analysis',
        'Reporting queries',
      ],
      excluded: [
        'Database hosting fees',
        'Managed database subscription costs',
      ],
    },

    timeline: {
      label: 'Typical project duration',
      value: '2–14 Days',
      description:
        'Timeline depends on database size, number of collections/tables, application complexity, and optimization requirements.',
    },

    quality: {
      security: [
        'Controlled database access',
        'Environment-based credentials',
        'Input validation',
        'Sensitive data handling',
      ],
      performance: [
        'Query optimization',
        'Index analysis',
        'Efficient data access',
        'Pagination strategies',
      ],
      testing: [
        'Query testing',
        'Data integrity testing',
        'Performance testing',
        'Migration validation',
      ],
    },

    caseStudies: [],

    faqs: [
      {
        question: 'Can you optimize an existing MongoDB database?',
        answer:
          'Yes. Existing schemas, queries, indexes, and access patterns can be reviewed and optimized.',
      },
      {
        question: 'Can you work with MySQL?',
        answer:
          'Yes. MySQL database design and optimization can be included where the project requires a relational database.',
      },
      {
        question: 'Can you migrate existing data?',
        answer:
          'Yes. Data migration can be planned and implemented as part of the project scope.',
      },
      {
        question: 'How do you improve slow queries?',
        answer:
          'The process can include reviewing query patterns, indexes, data structures, pagination, and application-level access patterns.',
      },
    ],

    cta: {
      eyebrow: 'OPTIMIZE YOUR DATA',
      title: 'Is your database slowing you down?',
      description:
        'Let’s review your schema, queries, indexes, and application data flow.',
      primaryLabel: 'Optimize My Database',
      secondaryLabel: 'Discuss Your Project',
    },

    relatedServices: [
      'backend-api-development',
      'web-application-development',
      'deployment-cloud-solutions',
      'maintenance-support',
    ],

    featured: false,
    order: 5,
  },

  // ============================================================
  // 06. DEPLOYMENT & CLOUD SOLUTIONS
  // ============================================================

  {
    slug: 'deployment-cloud-solutions',
    number: '06',
    title: 'Deployment & Cloud Solutions',
    category: 'DevOps & Cloud',

    icon: 'cloud',

    shortDescription:
      'Production deployment on AWS, Vercel, or your preferred platform with Docker, environment configuration, and health monitoring.',

    description:
      'I help move applications from local development to reliable production environments. This includes deployment configuration, environment variables, Docker where appropriate, domain and platform configuration, and basic application health monitoring.',

    hero: {
      eyebrow: 'SERVICE 06',
      headline: 'Take your application from local development to production.',
      description:
        'Deploy your application with a clean production setup, environment configuration, and practical cloud infrastructure.',
      primaryCta: 'Deploy My Application',
      secondaryCta: 'Discuss Infrastructure',
    },

    technologies: [
      'AWS',
      'Docker',
      'Vercel',
      'GitHub',
      'CI/CD',
    ],

    overview: {
      title: 'What are Deployment & Cloud Solutions?',
      description:
        'Deployment is the process of preparing an application and its infrastructure to run reliably in a production environment.',
      secondaryDescription:
        'The setup can include frontend deployment, backend hosting, environment configuration, Docker containers, domains, SSL, health checks, and basic operational monitoring.',
    },

    whyItMatters: [
      {
        title: 'Reliable Production',
        description:
          'Move from a local development environment to a properly configured live application.',
      },
      {
        title: 'Repeatable Deployments',
        description:
          'Use structured configuration and deployment workflows to reduce manual errors.',
      },
      {
        title: 'Secure Configuration',
        description:
          'Keep environment variables and application secrets outside source code.',
      },
      {
        title: 'Operational Visibility',
        description:
          'Use health checks and basic monitoring to identify common production issues.',
      },
    ],

    problemsSolved: [
      {
        title: 'Deployment Errors',
        description:
          'Resolve common configuration and environment issues preventing successful deployments.',
      },
      {
        title: 'Environment Problems',
        description:
          'Separate local, staging, and production configuration where required.',
      },
      {
        title: 'Docker Configuration',
        description:
          'Containerize applications that benefit from a consistent runtime environment.',
      },
      {
        title: 'Production Setup',
        description:
          'Configure application hosting, domains, environment variables, and basic health checks.',
      },
    ],

    benefits: [
      'Production-ready deployment',
      'Environment configuration',
      'Docker support',
      'Cloud platform setup',
      'Domain and SSL configuration',
      'Basic health monitoring',
    ],

    deliverables: [
      'Production deployment',
      'Environment configuration',
      'Docker configuration',
      'Cloud/server configuration',
      'Domain configuration',
      'SSL setup where supported',
      'Basic health checks',
      'Deployment documentation',
    ],

    capabilities: [
      {
        title: 'AWS Deployment',
        description:
          'Deploy supported applications and services using appropriate AWS infrastructure.',
      },
      {
        title: 'Vercel Deployment',
        description:
          'Deploy frontend applications and supported server-side workloads through Vercel.',
      },
      {
        title: 'Docker',
        description:
          'Containerize applications to provide a more consistent runtime environment.',
      },
      {
        title: 'Environment Configuration',
        description:
          'Configure environment variables and application settings for deployment.',
      },
      {
        title: 'Domain & SSL',
        description:
          'Configure supported domain and HTTPS requirements for production applications.',
      },
      {
        title: 'Health Monitoring',
        description:
          'Set up basic health checks and practical monitoring mechanisms.',
      },
    ],

    process: commonProcess,

    idealFor: [
      {
        title: 'New Applications',
        description:
          'Deploy a newly developed application to production.',
      },
      {
        title: 'Existing Applications',
        description:
          'Move an existing application to a more suitable hosting environment.',
      },
      {
        title: 'Startups',
        description:
          'Establish a practical initial cloud setup without unnecessary infrastructure complexity.',
      },
      {
        title: 'Development Teams',
        description:
          'Get assistance with deployment configuration and production setup.',
      },
    ],

    scope: {
      included: [
        'Deployment configuration',
        'Environment setup',
        'Docker configuration where appropriate',
        'Domain configuration',
        'Production verification',
      ],
      optional: [
        'CI/CD pipeline',
        'AWS infrastructure',
        'Advanced monitoring',
        'Backup configuration',
        'Load balancing',
      ],
      excluded: [
        'Cloud provider charges',
        'Domain registration fees',
        'Paid third-party monitoring subscriptions',
      ],
    },

    timeline: {
      label: 'Typical deployment duration',
      value: '1–5 Days',
      description:
        'Timeline depends on the application architecture, hosting platform, infrastructure complexity, and deployment requirements.',
    },

    quality: {
      security: [
        'Environment-based secrets',
        'HTTPS configuration',
        'Restricted access',
        'Production configuration review',
      ],
      performance: [
        'Production build optimization',
        'Appropriate hosting configuration',
        'Asset delivery optimization',
      ],
      testing: [
        'Deployment verification',
        'Health check testing',
        'Environment validation',
        'Production smoke testing',
      ],
    },

    caseStudies: [],

    faqs: [
      {
        question: 'Can you deploy my React application?',
        answer:
          'Yes. React applications can be deployed to suitable platforms such as Vercel or other supported hosting environments.',
      },
      {
        question: 'Can you deploy a Node.js backend?',
        answer:
          'Yes. Node.js applications can be deployed using an appropriate cloud or server environment.',
      },
      {
        question: 'Do you work with Docker?',
        answer:
          'Yes. Docker can be used when containerization provides a practical benefit for the project.',
      },
      {
        question: 'Can you configure environment variables?',
        answer:
          'Yes. Production environment configuration and application secrets can be configured according to the selected hosting platform.',
      },
    ],

    cta: {
      eyebrow: 'GO LIVE WITH CONFIDENCE',
      title: 'Ready to deploy your application?',
      description:
        'Let’s get your application from local development into a properly configured production environment.',
      primaryLabel: 'Deploy My Application',
      secondaryLabel: 'Discuss Infrastructure',
    },

    relatedServices: [
      'web-application-development',
      'backend-api-development',
      'maintenance-support',
      'database-design-optimization',
    ],

    featured: false,
    order: 6,
  },

  // ============================================================
  // 07. MAINTENANCE & SUPPORT
  // ============================================================

  {
    slug: 'maintenance-support',
    number: '07',
    title: 'Maintenance & Support',
    category: 'Application Support',

    icon: 'code',

    shortDescription:
      'Ongoing support, bug fixes, performance improvements, technical maintenance, and feature enhancements for existing applications.',

    description:
      'I provide ongoing technical support for applications that are already in production. This can include bug investigation, performance improvements, dependency updates, small feature enhancements, monitoring, and general application maintenance.',

    hero: {
      eyebrow: 'SERVICE 07',
      headline: 'Keep your application reliable as it grows.',
      description:
        'Maintain, improve, and extend your existing application without disrupting the functionality your users already depend on.',
      primaryCta: 'Get Support',
      secondaryCta: 'Discuss Your Application',
    },

    technologies: [
      'Monitoring',
      'Optimization',
      'Bug Fixing',
      'Performance',
      'Support',
    ],

    overview: {
      title: 'What Does Maintenance & Support Include?',
      description:
        'Application maintenance keeps existing software secure, functional, performant, and aligned with changing business requirements.',
      secondaryDescription:
        'Support can range from individual fixes to ongoing technical assistance and incremental feature development.',
    },

    whyItMatters: [
      {
        title: 'Reduce Downtime',
        description:
          'Address application issues before they become larger operational problems.',
      },
      {
        title: 'Improve Performance',
        description:
          'Identify and resolve slow pages, inefficient APIs, or problematic database operations.',
      },
      {
        title: 'Keep Dependencies Updated',
        description:
          'Maintain application dependencies and address compatibility issues where required.',
      },
      {
        title: 'Continue Improving',
        description:
          'Add features and improvements without rebuilding the entire application.',
      },
    ],

    problemsSolved: [
      {
        title: 'Production Bugs',
        description:
          'Investigate and resolve application issues affecting users.',
      },
      {
        title: 'Performance Problems',
        description:
          'Identify bottlenecks across frontend, backend, and database layers.',
      },
      {
        title: 'Outdated Dependencies',
        description:
          'Review and update dependencies where appropriate.',
      },
      {
        title: 'Small Feature Requests',
        description:
          'Implement incremental changes and improvements.',
      },
    ],

    benefits: [
      'Ongoing technical assistance',
      'Faster bug resolution',
      'Performance improvements',
      'Incremental feature development',
      'Application health monitoring',
      'Long-term maintainability',
    ],

    deliverables: [
      'Bug investigation and fixes',
      'Performance improvements',
      'Dependency maintenance',
      'Small feature enhancements',
      'Technical troubleshooting',
      'Application health review',
      'Maintenance documentation',
    ],

    capabilities: [
      {
        title: 'Bug Fixing',
        description:
          'Investigate application errors and implement targeted fixes.',
      },
      {
        title: 'Performance Optimization',
        description:
          'Review frontend, backend, API, and database performance issues.',
      },
      {
        title: 'Feature Enhancements',
        description:
          'Add incremental functionality to an existing application.',
      },
      {
        title: 'Dependency Maintenance',
        description:
          'Review and update project dependencies where appropriate.',
      },
      {
        title: 'Technical Troubleshooting',
        description:
          'Investigate issues across the application stack.',
      },
      {
        title: 'Ongoing Support',
        description:
          'Provide continued technical assistance based on an agreed support scope.',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Application Review',
        shortTitle: 'Review',
        description:
          'Understand the existing application, architecture, issue history, and current requirements.',
      },
      {
        step: 2,
        title: 'Identify Priorities',
        shortTitle: 'Prioritize',
        description:
          'Separate urgent bugs, performance issues, technical debt, and feature requests.',
      },
      {
        step: 3,
        title: 'Implement Changes',
        shortTitle: 'Fix',
        description:
          'Implement fixes and improvements while minimizing disruption to existing functionality.',
      },
      {
        step: 4,
        title: 'Test & Verify',
        shortTitle: 'Verify',
        description:
          'Test changes and verify that existing functionality continues to work correctly.',
      },
      {
        step: 5,
        title: 'Monitor & Improve',
        shortTitle: 'Support',
        description:
          'Continue supporting the application based on the agreed maintenance requirements.',
      },
    ],

    idealFor: [
      {
        title: 'Existing Applications',
        description:
          'Applications that need regular maintenance or technical improvements.',
      },
      {
        title: 'Startups',
        description:
          'Teams that need technical support without hiring a full-time developer.',
      },
      {
        title: 'Growing Products',
        description:
          'Applications requiring ongoing feature development and optimization.',
      },
      {
        title: 'Businesses',
        description:
          'Business-critical systems that need reliable technical assistance.',
      },
    ],

    scope: {
      included: [
        'Bug investigation',
        'Bug fixes',
        'Performance improvements',
        'Technical troubleshooting',
        'Small feature changes',
      ],
      optional: [
        'Monthly support',
        'Priority support',
        'Major feature development',
        'Infrastructure monitoring',
        'Application modernization',
      ],
      excluded: [
        'Third-party subscription costs',
        'Large rebuilds unless separately scoped',
      ],
    },

    timeline: {
      label: 'Support model',
      value: 'Flexible',
      description:
        'Support can be arranged as a one-time fix, project-based engagement, or ongoing maintenance depending on your requirements.',
    },

    quality: {
      security: [
        'Controlled production access',
        'Environment protection',
        'Dependency review',
        'Secure configuration practices',
      ],
      performance: [
        'Frontend optimization',
        'API optimization',
        'Database optimization',
        'Asset optimization',
      ],
      testing: [
        'Regression testing',
        'Bug verification',
        'Responsive testing',
        'Production verification',
      ],
    },

    caseStudies: [],

    faqs: [
      {
        question: 'Can you maintain an application you did not build?',
        answer:
          'Yes. The application can first be reviewed to understand its architecture, dependencies, deployment setup, and current issues.',
      },
      {
        question: 'Do you offer ongoing monthly support?',
        answer:
          'Yes. Ongoing support can be structured around an agreed scope and response requirements.',
      },
      {
        question: 'Can you fix production bugs?',
        answer:
          'Yes. Production issues can be investigated, prioritized, fixed, and verified based on their impact.',
      },
      {
        question: 'Can you add new features?',
        answer:
          'Yes. Feature enhancements can be implemented when they fit the existing architecture or after the required refactoring.',
      },
    ],

    cta: {
      eyebrow: 'KEEP YOUR PRODUCT MOVING',
      title: 'Need help maintaining an existing application?',
      description:
        'Share your current challenges and I can help identify the right technical approach.',
      primaryLabel: 'Get Support',
      secondaryLabel: 'Discuss Your Application',
    },

    relatedServices: [
      'web-application-development',
      'backend-api-development',
      'deployment-cloud-solutions',
      'database-design-optimization',
    ],

    featured: false,
    order: 7,
  },

  // ============================================================
  // 08. CONSULTATION & TECHNICAL GUIDANCE
  // ============================================================

  {
    slug: 'consultation-technical-guidance',
    number: '08',
    title: 'Consultation & Technical Guidance',
    category: 'Consulting',

    icon: 'lightbulb',

    shortDescription:
      'Technical guidance on technology selection, application architecture, project planning, scope, and product development strategy.',

    description:
      "Before writing code, I help founders, teams, and businesses think through the technical direction of their product. The goal is to make practical architecture and technology decisions early, reducing unnecessary complexity and costly rework later.",

    hero: {
      eyebrow: 'SERVICE 08',
      headline: 'Make better technical decisions before you build.',
      description:
        'Get practical guidance on architecture, technology selection, project scope, development strategy, and technical risks.',
      primaryCta: 'Book a Consultation',
      secondaryCta: 'Discuss Your Idea',
    },

    technologies: [
      'Architecture',
      'Tech Stack',
      'Planning',
      'System Design',
      'Strategy',
    ],

    overview: {
      title: 'What is Technical Consultation?',
      description:
        'Technical consultation helps turn a product idea or existing technical challenge into a clearer development direction.',
      secondaryDescription:
        'The discussion can cover architecture, technology selection, project scope, development priorities, risks, integrations, and practical implementation strategies.',
    },

    whyItMatters: [
      {
        title: 'Avoid Costly Rework',
        description:
          'Identify architectural and technology decisions before they become expensive to change.',
      },
      {
        title: 'Choose the Right Stack',
        description:
          'Select technologies based on actual product requirements rather than trends alone.',
      },
      {
        title: 'Clarify Scope',
        description:
          'Break a large idea into realistic features, priorities, and milestones.',
      },
      {
        title: 'Reduce Technical Risk',
        description:
          'Identify potential architecture, integration, performance, and implementation challenges early.',
      },
    ],

    problemsSolved: [
      {
        title: 'Unclear Technology Stack',
        description:
          'Evaluate technologies based on the actual requirements of the product.',
      },
      {
        title: 'Uncertain Architecture',
        description:
          'Create a clearer technical structure before development begins.',
      },
      {
        title: 'Uncontrolled Scope',
        description:
          'Break product requirements into practical phases and priorities.',
      },
      {
        title: 'Technical Debt',
        description:
          'Identify architecture decisions that may create future maintenance problems.',
      },
    ],

    benefits: [
      'Clear technical direction',
      'Technology stack recommendations',
      'Architecture guidance',
      'Project roadmap',
      'Risk identification',
      'Practical development priorities',
    ],

    deliverables: [
      'Technology stack recommendation',
      'Architecture review',
      'Technical requirements analysis',
      'Project roadmap',
      'Feature prioritization',
      'Technical risk assessment',
      'Consultation summary',
    ],

    capabilities: [
      {
        title: 'Technology Selection',
        description:
          'Compare technology options based on project requirements, complexity, team capability, and long-term needs.',
      },
      {
        title: 'Architecture Review',
        description:
          'Review proposed or existing architecture and identify potential improvements.',
      },
      {
        title: 'Project Scoping',
        description:
          'Turn broad product ideas into clearer technical requirements and development phases.',
      },
      {
        title: 'Technical Roadmapping',
        description:
          'Create a practical sequence for building, testing, launching, and improving the product.',
      },
      {
        title: 'Risk Assessment',
        description:
          'Identify technical risks related to integrations, scalability, security, performance, or implementation.',
      },
      {
        title: 'Codebase Review',
        description:
          'Review an existing codebase and identify technical debt, architecture issues, and improvement opportunities.',
      },
    ],

    process: [
      {
        step: 1,
        title: 'Understand the Product',
        shortTitle: 'Discovery',
        description:
          'Understand the business idea, users, goals, requirements, and current technical situation.',
      },
      {
        step: 2,
        title: 'Analyze Requirements',
        shortTitle: 'Analysis',
        description:
          'Break requirements into technical components, priorities, dependencies, and risks.',
      },
      {
        step: 3,
        title: 'Recommend Direction',
        shortTitle: 'Strategy',
        description:
          'Recommend suitable architecture, technology choices, development approach, and priorities.',
      },
      {
        step: 4,
        title: 'Create Roadmap',
        shortTitle: 'Roadmap',
        description:
          'Define practical phases, milestones, and next steps for implementation.',
      },
      {
        step: 5,
        title: 'Follow-Up',
        shortTitle: 'Support',
        description:
          'Answer follow-up questions and help refine the technical direction where required.',
      },
    ],

    idealFor: [
      {
        title: 'Founders',
        description:
          'Validate the technical direction of a new product before investing heavily in development.',
      },
      {
        title: 'Startups',
        description:
          'Define an MVP architecture and practical technology stack.',
      },
      {
        title: 'Businesses',
        description:
          'Plan custom software projects and digital transformation initiatives.',
      },
      {
        title: 'Development Teams',
        description:
          'Get an additional technical perspective on architecture or implementation challenges.',
      },
    ],

    scope: {
      included: [
        'Requirements discussion',
        'Technology recommendations',
        'Architecture guidance',
        'Project scope discussion',
        'Technical roadmap',
      ],
      optional: [
        'Codebase review',
        'Architecture audit',
        'Technical documentation',
        'Ongoing advisory support',
      ],
      excluded: [
        'Development work unless separately agreed',
        'Third-party consultation fees',
      ],
    },

    timeline: {
      label: 'Typical consultation',
      value: '60–90 Minutes',
      description:
        'Consultation length depends on the complexity of the product, technical challenge, and expected discussion scope.',
    },

    quality: {
      security: [
        'Security considerations',
        'Access-control recommendations',
        'Environment configuration guidance',
      ],
      performance: [
        'Scalability considerations',
        'Performance architecture review',
        'Efficient technology selection',
      ],
      testing: [
        'Technical feasibility review',
        'Architecture validation',
        'Risk identification',
      ],
    },

    caseStudies: [],

    faqs: [
      {
        question: 'Can you help me choose the right technology stack?',
        answer:
          'Yes. Technology choices can be evaluated against your product requirements, expected scale, complexity, budget, and development needs.',
      },
      {
        question: 'Can you review an existing architecture?',
        answer:
          'Yes. Existing architecture and codebases can be reviewed to identify technical risks and improvement opportunities.',
      },
      {
        question: 'Can you help scope an MVP?',
        answer:
          'Yes. Features can be organized into practical priorities and development phases.',
      },
      {
        question: 'Do I need to have technical knowledge?',
        answer:
          'No. The discussion can focus on your business goals and product requirements while the technical options are explained in practical terms.',
      },
    ],

    cta: {
      eyebrow: 'START WITH THE RIGHT DIRECTION',
      title: 'Have an idea but not sure how to build it?',
      description:
        'Let’s discuss your product, technical challenges, and possible development approach.',
      primaryLabel: 'Book a Consultation',
      secondaryLabel: 'Discuss Your Idea',
    },

    relatedServices: [
      'web-application-development',
      'responsive-frontend-development',
      'backend-api-development',
      'deployment-cloud-solutions',
    ],

    featured: false,
    order: 8,
  },
];

// ============================================================
// GLOBAL DEVELOPMENT PROCESS
// ============================================================

export const developmentProcess = commonProcess;

// ============================================================
// TECHNOLOGIES
// ============================================================

export const technologiesUsed = [
  {
    name: 'React.js',
    category: 'Frontend',
    icon: 'react',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    icon: 'node',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: 'express',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    icon: 'mongodb',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    icon: 'typescript',
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    icon: 'javascript',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    icon: 'tailwind',
  },
  {
    name: 'Redux Toolkit',
    category: 'Frontend',
    icon: 'redux',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    icon: 'docker',
  },
  {
    name: 'AWS',
    category: 'Cloud',
    icon: 'aws',
  },
  {
    name: 'MySQL',
    category: 'Database',
    icon: 'mysql',
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    icon: 'git',
  },
];

// ============================================================
// HELPERS
// ============================================================

export function getAllServices() {
  return [...services].sort((a, b) => a.order - b.order);
}

export function getFeaturedServices() {
  return services
    .filter((service) => service.featured)
    .sort((a, b) => a.order - b.order);
}

export function getServiceBySlug(slug) {
  return (
    services.find((service) => service.slug === slug) || null
  );
}

export function getRelatedServices(slugs = []) {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);
}

export function getServicesByCategory(category) {
  return services
    .filter((service) => service.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getServiceCategories() {
  return [...new Set(services.map((service) => service.category))];
}

export default {
  services,
  developmentProcess,
  technologiesUsed,
  getAllServices,
  getFeaturedServices,
  getServiceBySlug,
  getRelatedServices,
  getServicesByCategory,
  getServiceCategories,
};
