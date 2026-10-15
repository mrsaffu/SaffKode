// import herobgimage from '../../public/images/hero-bg.png';

export const projects = [
  {
    slug: 'booth-management-system',
    title: 'Booth Management System',
    category: 'Full Stack',
    eyebrow: 'Political Management Platform',
    shortDescription:
      'A political management platform with hierarchical geography, RBAC, and scalable APIs.',
    description:
      'A comprehensive political management platform with hierarchical geography, role-based access control, and scalable APIs to manage booths, members, and election workflows efficiently.',
    liveDemo: 'https://your-live-demo-url.com',
    viewCode: 'https://github.com/officeofab/booth-management-system',
    heroImage: "/images/booth-management-system-dashboard.png",

    technologies: ['React', 'Node.js', 'MongoDB', 'RBAC'],
    featured: true,
    liveUrl: null,
    githubUrl: null,
    order: 1,

    stats: [
      { value: 'RBAC', label: 'Access Control' },
      { value: '10K+', label: 'Records Handled' },
      { value: 'Scalable', label: 'Architecture' },
    ],

    goal: 'To build a scalable, secure, and user-friendly platform that simplifies political organization management and improves ground-level coordination.',

    overviewDetails: `The Booth Management System(BMS) is a full- stack political organization management platform designed to simplify geographical administration, user management, and booth - level coordination through a centralized interface.

    The platform organizes electoral geography into a structured hierarchy: State → Lok Sabha → District → Vidhan Sabha → Block → Panchayat → Booth.This enables systematic geographical management and connects users with their respective administrative areas.

    Built with React.js, Node.js, Express.js, and MongoDB, the system uses RESTful APIs for data management and JWT - based authentication with OTP verification.Role - Based Access Control(RBAC) supports multiple user roles, helping ensure that access to resources and operations aligns with assigned responsibilities.

   Key capabilities include geographical management, user administration, role - based permissions, dynamic assignments, and operational reporting.The modular architecture provides a foundation for maintainability, data consistency, and future scalability.

  Overall, BMS aims to improve administrative efficiency, simplify organizational workflows, and strengthen coordination across different levels of political organization.`,

    keyFeatures: [
      {
        title: 'Hierarchical Geography',
        description: 'State → District → Assembly → Booth',
      },
      {
        title: 'Role-Based Access Control',
        description: 'Multiple user roles and permissions',
      },
      {
        title: 'Member Management',
        description: 'Add, update, and manage members efficiently',
      },
      {
        title: 'Dynamic Assignments',
        description: 'Assign users and geography at multiple levels',
      },
      {
        title: 'Reports & Analytics',
        description: 'Real-time data and insights',
      },
      {
        title: 'Scalable APIs',
        description: 'Built to handle large datasets',
      },
    ],

    techStackDetailed: [
      { name: 'React.js', role: 'Frontend' },
      { name: 'Node.js', role: 'Backend' },
      { name: 'Express.js', role: 'Framework' },
      { name: 'MongoDB', role: 'Database' },
      { name: 'JWT', role: 'Authentication' },
      { name: 'RBAC', role: 'Access Control' },
      { name: 'Docker', role: 'Deployment' },
      { name: 'AWS EC2', role: 'Cloud Hosting' },
    ],

    screenshots: [
      { title: 'Dashboard', description: 'Overview and key metrics' },
      { title: 'Geography Management', description: 'Manage state, district, assembly and booths' },
      { title: 'Member Management', description: 'Add and manage members' },
      { title: 'Role & Permissions', description: 'Control access with different roles' },
    ],

    challenges: [
      'Handling large hierarchical data with performance in mind.',
      'Implementing flexible role-based access control.',
      'Designing scalable APIs for real-world usage.',
      'Learned best practices in database design, API security, and system scalability.',
    ],

    results: [
      '10K+ data records handled efficiently.',
      'Improved ground-level coordination.',
      'Secure and scalable architecture.',
      'Positive feedback from users and stakeholders.',
    ],
  },
  {
    slug: 'al-qalam-academy-web-application',
    title: 'Al-Qalam Academy Web Application',
    category: 'Full Stack',
    eyebrow: 'Educational Website & School Management',
    shortDescription:
      'A responsive educational web application showcasing academic programs, faculty, admissions, events, and school activities.',
    description:
      'A modern educational web application designed to present Al-Qalam Academy’s academic programs, faculty profiles, admissions information, school events, campus gallery, and institutional activities through an interactive and responsive interface.',
    liveDemo: 'https://al-qalam-academy.vercel.app/',
    viewCode: 'https://github.com/mrsaffu/Al-Qalam-Academy-Web-Application',
    heroImage: '/images/al-qalam-academy-dashboard.png',

    technologies: ['React', 'JavaScript', 'CSS', 'Vite', 'React Router', 'Framer Motion'],
    featured: true,
    liveUrl: null,
    githubUrl: null,
    order: 2,

    stats: [
      { value: 'Responsive', label: 'Multi-Device Experience' },
      { value: 'Reusable', label: 'Component Architecture' },
      { value: 'Interactive', label: 'User Experience' },
    ],

    goal: 'To establish a professional digital presence for Al-Qalam Academy by making academic information, admissions details, faculty profiles, and school activities easily accessible to students, parents, and visitors.',

    overviewDetails: `The Al-Qalam Academy Web Application is a responsive educational platform designed to establish a strong digital presence for the institution and provide easy access to essential school information.

The application organizes academic programs, curriculum details, faculty profiles, admissions information, school events, testimonials, and campus galleries into a structured and user-friendly interface.

Built with React.js, JavaScript, Vite, CSS, React Router, and Framer Motion, the application uses reusable components, responsive layouts, client-side navigation, and smooth animations to deliver a consistent experience across desktop, tablet, and mobile devices.

Its modular frontend architecture supports maintainability, organized content presentation, and future enhancements. The platform provides a centralized online destination for students, parents, and visitors to explore the academy's educational offerings and institutional activities.`,

    keyFeatures: [
      {
        title: 'Responsive Website',
        description: 'Optimized layouts for desktop, tablet, and mobile devices',
      },
      {
        title: 'Academic Information',
        description: 'Present curriculum details and educational programs',
      },
      {
        title: 'Faculty & Admissions',
        description: 'Display faculty profiles and admission information',
      },
      {
        title: 'Events & Activities',
        description: 'Showcase school events and institutional activities',
      },
      {
        title: 'Gallery & Testimonials',
        description: 'Present campus photographs and community feedback',
      },
      {
        title: 'Interactive User Interface',
        description: 'Reusable React components, dynamic navigation, and animations',
      },
    ],

    techStackDetailed: [
      { name: 'React.js', role: 'Frontend' },
      { name: 'JavaScript', role: 'Application Logic' },
      { name: 'Vite', role: 'Build Tool' },
      { name: 'CSS3', role: 'Styling & Responsive Design' },
      { name: 'React Router DOM', role: 'Routing' },
      { name: 'Framer Motion', role: 'Animations' },
      { name: 'Vercel', role: 'Deployment' },
      { name: 'Git & GitHub', role: 'Version Control' },
    ],

    screenshots: [
      { title: 'Dashboard', description: 'Homepage overview and key institutional information' },
      { title: 'Academic Information', description: 'Curriculum details and educational programs' },
      { title: 'Faculty & Admissions', description: 'Faculty profiles and admission-related information' },
      { title: 'Events & Gallery', description: 'School activities, events, and campus photographs' },
    ],

    challenges: [
      'Creating a responsive interface for multiple screen sizes.',
      'Organizing educational content into a clear navigation structure.',
      'Developing reusable components for maintainable frontend code.',
      'Integrating animations while maintaining a smooth user experience.',
    ],

    results: [
      'Established a centralized digital presence for the academy.',
      'Improved accessibility of academic and institutional information.',
      'Delivered a responsive interface with reusable components.',
      'Published the website using Vercel deployment.',
    ],
  },
  {
    slug: 'bus-booking-api',
    title: 'Bus Booking System API',
    category: 'Backend Development',
    eyebrow: 'Transportation & Reservation Platform',
    shortDescription:
      'A RESTful bus booking API with JWT authentication, seat reservations, booking management, and admin-controlled bus operations.',
    description:
      'A backend application built with Node.js, Express.js, and MongoDB to manage user authentication, bus search, seat reservations, booking cancellation, and administrative bus and route management through RESTful APIs.',
    liveDemo: 'https://your-live-demo-url.com',
    viewCode: 'https://github.com/mrsaffu/bus-booking-api',
    heroImage: '/images/bus-booking-api-dashboard.png',

    technologies: ['Node.js', 'Express.js', 'MongoDB', 'JWT', 'Docker'],
    featured: true,
    liveUrl: null,
    githubUrl: null,
    order: 3,

    stats: [
      { value: 'JWT', label: 'Authentication' },
      { value: 'RESTful', label: 'API Architecture' },
      { value: 'Docker', label: 'Containerization' },
    ],

    goal: 'To develop a secure and maintainable bus reservation backend that simplifies bus discovery, seat booking, reservation management, and administrative control through structured RESTful APIs.',

    overviewDetails: `The Bus Booking System API is a backend application designed to manage bus reservations, user accounts, seat bookings, and administrative operations through a centralized RESTful API.

Built with Node.js, Express.js, and MongoDB, the system provides endpoints for user registration, login, JWT-based authentication, bus search by source and destination, seat booking, booking cancellation, and reservation history. Access and refresh tokens support authenticated sessions.

The application separates user and administrator operations. Users can search for available buses, reserve seats, cancel bookings, and review their reservations, while authorized administrators can add buses, update bus details, and manage routes.

MongoDB stores user, bus, and booking records, with relationships connecting reservations to their respective users and buses. The modular structure organizes configuration, models, controllers, routes, middleware, and utility functions for maintainability.

Docker and Docker Compose configuration support containerized setup, while the included Postman collection simplifies API testing. Overall, the project provides a foundation for a bus ticket reservation service with structured APIs, authentication, and booking management workflows.`,

    keyFeatures: [
      {
        title: 'User Authentication',
        description: 'User registration, login, and JWT access and refresh tokens',
      },
      {
        title: 'Bus Search',
        description: 'Find buses using source and destination locations',
      },
      {
        title: 'Seat Booking',
        description: 'Reserve selected seats and create booking records',
      },
      {
        title: 'Booking Management',
        description: 'View booking history and cancel existing reservations',
      },
      {
        title: 'Admin Management',
        description: 'Add buses, update bus information, and manage routes',
      },
      {
        title: 'API Testing & Deployment',
        description: 'Postman collection and Docker-based application setup',
      },
    ],

    techStackDetailed: [
      { name: 'Node.js', role: 'Runtime Environment' },
      { name: 'Express.js', role: 'Backend Framework' },
      { name: 'MongoDB', role: 'Database' },
      { name: 'Mongoose', role: 'Data Modeling' },
      { name: 'JWT', role: 'Authentication' },
      { name: 'Middleware', role: 'Request Processing & Authorization' },
      { name: 'Docker', role: 'Containerization' },
      { name: 'Docker Compose', role: 'Multi-Container Setup' },
      { name: 'Postman', role: 'API Testing' },
      { name: 'AWS EC2', role: 'Cloud Hosting Configuration' },
    ],

    screenshots: [
      { title: 'API Documentation', description: 'Available endpoints, request parameters, and response formats' },
      { title: 'Authentication APIs', description: 'Registration, login, and token refresh workflows' },
      { title: 'Booking APIs', description: 'Bus search, seat reservation, cancellation, and booking history' },
      { title: 'Admin APIs', description: 'Bus creation, bus updates, and route management endpoints' },
    ],

    challenges: [
      'Designing structured RESTful endpoints for users, buses, and reservations.',
      'Implementing JWT access-token and refresh-token authentication workflows.',
      'Managing relationships between users, buses, and booking records.',
      'Handling seat availability and reservation consistency during concurrent booking requests.',
      'Organizing backend modules and configuring Docker-based development and deployment.',
    ],

    results: [
      'Developed APIs for user authentication and session token renewal.',
      'Implemented bus search, seat booking, cancellation, and booking history endpoints.',
      'Created administrative endpoints for bus and route management.',
      'Provided a Postman collection for testing API requests and responses.',
      'Added Docker and Docker Compose configuration for application setup.',
    ],
  },
  {
    slug: 'gamified-employee-induction-lms',
    title: 'Gamified Employee Induction LMS',
    category: 'Frontend Development',
    eyebrow: 'Employee Learning & Development Platform',
    shortDescription:
      'A gamified employee induction application with interactive learning levels, quizzes, progress tracking, and SCORM 1.2 integration.',
    description:
      'An interactive employee onboarding and training application that combines progressive learning challenges, quizzes, scoring, badges, and completion certificates with SCORM 1.2 integration for Learning Management Systems.',
    liveDemo: 'https://your-live-demo-url.com',
    viewCode: 'https://github.com/mrsaffu/Gamified-Employee-Induction-LMS-SCORM-1.2-Compliant-',
    heroImage: '/images/gamified-employee-induction-lms.png',

    technologies: ['React', 'JavaScript', 'Vite', 'Context API', 'SCORM 1.2', 'CSS'],
    featured: true,
    liveUrl: null,
    githubUrl: null,
    order: 4,

    stats: [
      { value: 'SCORM 1.2', label: 'LMS Integration' },
      { value: 'Gamified', label: 'Learning Experience' },
      { value: 'Persistent', label: 'Progress Tracking' },
    ],

    goal: 'To make employee onboarding more engaging and effective through interactive learning challenges, measurable progress, and SCORM-compatible integration with existing Learning Management Systems.',

    overviewDetails: `The Gamified Employee Induction LMS is an interactive web application designed to make employee onboarding more engaging through structured learning levels, quizzes, and gamified challenges.

Built with React.js, JavaScript, Vite, and CSS, the application guides employees through company introductions, technology solutions, learning and development content, and a final assessment. Points, badges, timed quizzes, and completion certificates encourage participation and provide feedback on learning progress.

The application integrates the SCORM 1.2 API to communicate with compatible Learning Management Systems, reporting learning status, scores, session time, and progress data. Its SCORM service manages LMS communication and falls back to localStorage when the SCORM API is unavailable, allowing the application to run locally during development and testing.

React Context API manages shared learning state, while reusable components, custom hooks, and modular CSS support maintainability and consistent user interactions.

Overall, the project demonstrates how gamification and SCORM integration can transform employee induction into a structured, interactive, and trackable digital learning experience.`,

    keyFeatures: [
      {
        title: 'Progressive Learning Levels',
        description: 'Structured employee induction through company overview, technology, and learning challenges',
      },
      {
        title: 'Interactive Quizzes & Games',
        description: 'Knowledge checks, matching activities, and a timed final challenge',
      },
      {
        title: 'Points & Badges',
        description: 'Gamified scoring and achievement feedback to encourage participation',
      },
      {
        title: 'SCORM 1.2 Integration',
        description: 'Communicate learning status, scores, session time, and progress to compatible LMS platforms',
      },
      {
        title: 'Progress Persistence',
        description: 'Save and restore learning progress using SCORM suspend data or localStorage',
      },
      {
        title: 'Completion & Certificate',
        description: 'Display final assessment results and a completion certificate',
      },
    ],

    techStackDetailed: [
      { name: 'React.js', role: 'Frontend UI Development' },
      { name: 'JavaScript (ES6)', role: 'Application Logic' },
      { name: 'Vite', role: 'Development & Build Tool' },
      { name: 'Context API', role: 'Global State Management' },
      { name: 'SCORM 1.2 API', role: 'LMS Integration & Reporting' },
      { name: 'localStorage', role: 'Fallback Progress Persistence' },
      { name: 'CSS3', role: 'Styling, Layouts & Animations' },
    ],

    screenshots: [
      { title: 'Welcome & Mission Briefing', description: 'Introduction to the employee induction experience and learning journey' },
      { title: 'Learning Challenges', description: 'Progressive learning levels with interactive games and knowledge checks' },
      { title: 'Final Assessment', description: 'Timed video-based quiz with scoring and challenge completion' },
      { title: 'Completion & Results', description: 'Final score, achievement summary, and certificate presentation' },
    ],

    challenges: [
      'Integrating SCORM 1.2 communication with a React-based learning application.',
      'Persisting and restoring learning progress across LMS sessions.',
      'Maintaining consistent scoring, completion status, and session-time reporting.',
      'Supporting both LMS-based execution and standalone local development.',
      'Managing shared learning state, quiz interactions, and timed challenges across multiple levels.',
    ],

    results: [
      'Developed a structured, multi-level employee induction experience.',
      'Integrated SCORM 1.2 reporting for learning progress, scores, and completion status.',
      'Implemented fallback progress persistence using localStorage.',
      'Combined interactive quizzes, gamification, and completion feedback in one application.',
      'Provided a foundation for integrating interactive training content with compatible LMS platforms.',
    ],
  },
  {
    slug: 'fylo-assessment',
    title: 'Fylo Fertilizer Supply Chain Dashboard',
    category: 'Frontend Development',
    eyebrow: 'Fertilizer Supply Chain Analytics',
    shortDescription:
      'An interactive analytics dashboard for monitoring fertilizer requirements, availability, and supply trends across Indian states.',
    description:
      'A React-based data visualization dashboard designed to analyze fertilizer demand and availability across states and time periods, featuring interactive charts, KPI cards, product-level filtering, and searchable data tables.',
    liveDemo: 'https://your-live-demo-url.com',
    viewCode: 'https://github.com/mrsaffu/Fylo-Assessment',
    heroImage: '/images/fylo-fertilizer-dashboard.png',

    technologies: ['React', 'JavaScript', 'Recharts', 'AG Grid', 'CSS3'],
    featured: true,
    liveUrl: null,
    githubUrl: null,
    order: 6,

    stats: [
      { value: 'Interactive', label: 'Data Visualization' },
      { value: 'Multi-Level', label: 'Supply Analysis' },
      { value: 'AG Grid', label: 'Data Management' },
    ],

    goal: 'To provide a centralized analytics dashboard that helps fertilizer companies understand product demand, monitor availability, compare supply trends, and make informed supply chain planning decisions.',

    overviewDetails: `The Fylo Fertilizer Supply Chain Dashboard is a React-based analytics application designed to visualize fertilizer requirements and availability across Indian states and different time periods.

The dashboard presents key metrics, top fertilizer comparisons, and requirement-versus-availability trends through interactive charts and data tables. Users can filter data by fertilizer product, state, and year to explore supply patterns and identify potential gaps between demand and availability.

Built with React.js, JavaScript, Recharts, AG Grid, and CSS3, the application uses reusable components and modular data-processing logic to deliver an interactive and maintainable interface. Recharts powers the visual analytics, while AG Grid provides searchable, sortable, and filterable tabular data.

The project currently uses mock JSON data to demonstrate dashboard functionality and visualization workflows. Its modular frontend architecture provides a foundation for future integration with live APIs and production supply chain data.

Overall, the dashboard demonstrates how interactive data visualization can simplify fertilizer supply analysis and support data-driven operational planning.`,

    keyFeatures: [
      {
        title: 'Dashboard Overview',
        description: 'Display key metrics for fertilizers, states covered, and tracked records',
      },
      {
        title: 'Fertilizer Ranking Analysis',
        description: 'Compare the five most-required fertilizers and the five least-available fertilizers',
      },
      {
        title: 'Year-Wise Comparison',
        description: 'Analyze fertilizer requirements versus availability across years',
      },
      {
        title: 'Month-Wise Trends',
        description: 'Visualize monthly requirement and availability patterns with interactive area charts',
      },
      {
        title: 'Interactive Data Table',
        description: 'Search, sort, and filter fertilizer records using AG Grid',
      },
      {
        title: 'Dynamic Filters',
        description: 'Update analytical visualizations based on selected products, states, and years',
      },
    ],

    techStackDetailed: [
      { name: 'React.js', role: 'Frontend UI Development' },
      { name: 'JavaScript (ES6)', role: 'Application Logic & Data Processing' },
      { name: 'Recharts', role: 'Data Visualization' },
      { name: 'AG Grid', role: 'Interactive Data Tables' },
      { name: 'CSS3', role: 'Styling & Responsive Layouts' },
      { name: 'JSON', role: 'Mock Data Source' },
      { name: 'Node.js & npm', role: 'Development Environment & Package Management' },
    ],

    screenshots: [
      { title: 'Dashboard Overview', description: 'Key metrics and a summary of fertilizer supply data' },
      { title: 'Fertilizer Analysis', description: 'Comparative charts highlighting fertilizer requirements and availability' },
      { title: 'Year & Month Trends', description: 'Interactive visualizations of supply patterns over time' },
      { title: 'Product Data Table', description: 'Searchable, sortable, and filterable fertilizer records' },
    ],

    challenges: [
      'Transforming structured fertilizer records into useful analytical visualizations.',
      'Implementing coordinated filters for product, state, and time-based comparisons.',
      'Presenting requirement and availability trends in clear, readable charts.',
      'Managing reusable chart components and shared data-processing logic.',
      'Designing a responsive dashboard with an interactive data table.',
    ],

    results: [
      'Developed a centralized dashboard for fertilizer supply chain analysis.',
      'Implemented interactive charts for requirement and availability comparisons.',
      'Added product, state, and time-based filtering for analytical exploration.',
      'Integrated AG Grid for searchable, sortable, and filterable records.',
      'Established a modular frontend foundation for future live-data integration.',
    ],
  },
  {
    slug: 'student-teacher-booking-appointment',
    title: 'Student–Teacher Appointment Booking System',
    category: 'Backend Development',
    eyebrow: 'Education & Appointment Management',
    shortDescription:
      'A role-based appointment booking API that enables students to connect with teachers, schedule appointments, and manage academic consultations.',
    description:
      'A backend application built with Node.js, Express.js, and MongoDB to manage student registration, teacher discovery, appointment scheduling, availability, messaging, and administrative approvals through secure RESTful APIs.',
    liveDemo: 'https://your-live-demo-url.com',
    viewCode: 'https://github.com/mrsaffu/Student-Teacher-Booking-Appointment',
    heroImage: '/images/student-teacher-booking-dashboard.png',

    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs'],
    featured: true,
    liveUrl: null,
    githubUrl: null,
    order: 5,

    stats: [
      { value: '3 Roles', label: 'Role-Based Access' },
      { value: 'RESTful', label: 'API Architecture' },
      { value: 'JWT', label: 'Authentication' },
    ],

    goal: 'To simplify academic appointment scheduling by providing a centralized platform where students can connect with teachers, request consultations, manage appointments, and communicate efficiently.',

    overviewDetails: `The Student–Teacher Appointment Booking System is a backend application designed to streamline academic consultations through structured appointment scheduling and role-based management.

Built with Node.js, Express.js, and MongoDB, the application provides RESTful APIs for authentication, teacher discovery, appointment booking, availability management, messaging, and registration approvals.

The system supports three roles: Admin, Teacher, and Student. Administrators manage teacher records and approve student registrations. Students can search for teachers, book appointments, and send messages, while teachers can manage availability, review appointment requests, approve or cancel bookings, and respond to student inquiries.

JWT-based authentication and authorization middleware protect restricted API endpoints, while bcryptjs supports password hashing. Mongoose models organize users, appointments, messages, and availability records. The modular MVC architecture separates routes, controllers, models, middleware, and database configuration to improve maintainability.

Overall, the project provides a structured foundation for academic appointment management, helping reduce manual scheduling and improve coordination between students, teachers, and administrators.`,

    keyFeatures: [
      {
        title: 'Role-Based Authentication',
        description: 'JWT authentication and protected access for Admin, Teacher, and Student roles',
      },
      {
        title: 'Student Registration Approval',
        description: 'Manage student registrations through an administrator approval workflow',
      },
      {
        title: 'Teacher Management',
        description: 'Create, update, delete, and search teacher records',
      },
      {
        title: 'Appointment Scheduling',
        description: 'Allow students to request appointments and teachers to approve or cancel them',
      },
      {
        title: 'Availability Management',
        description: 'Enable teachers to configure their available appointment time slots',
      },
      {
        title: 'Messaging & Communication',
        description: 'Allow students to send messages to teachers and support academic coordination',
      },
    ],

    techStackDetailed: [
      { name: 'Node.js', role: 'Runtime Environment' },
      { name: 'Express.js', role: 'Backend Framework' },
      { name: 'MongoDB', role: 'Database' },
      { name: 'Mongoose', role: 'Data Modeling' },
      { name: 'JWT', role: 'Authentication & Authorization' },
      { name: 'bcryptjs', role: 'Password Hashing' },
      { name: 'Nodemon', role: 'Development Server' },
      { name: 'Postman', role: 'API Testing' },
    ],

    screenshots: [
      { title: 'Authentication APIs', description: 'Registration, login, and token-based authentication workflows' },
      { title: 'Teacher Management', description: 'Teacher creation, updates, deletion, and teacher discovery endpoints' },
      { title: 'Appointment Management', description: 'Appointment booking, approval, cancellation, and history endpoints' },
      { title: 'Availability & Messaging', description: 'Teacher availability configuration and student-teacher messaging APIs' },
    ],

    challenges: [
      'Implementing role-based authentication and authorization across protected API endpoints.',
      'Managing student registration approvals before granting access.',
      'Structuring appointment requests, teacher availability, and booking status transitions.',
      'Maintaining relationships between users, appointments, messages, and availability records.',
      'Organizing the backend using a modular MVC architecture for easier maintenance and extension.',
    ],

    results: [
      'Implemented RESTful APIs for student, teacher, and administrator workflows.',
      'Established JWT-based authentication and role-specific authorization.',
      'Developed appointment scheduling, approval, cancellation, and availability management workflows.',
      'Organized application data using dedicated MongoDB models.',
      'Documented API workflows and provided a structured approach to testing endpoints with Postman.',
    ],
  },

  {
    slug: 'second-hand-car-buying-application',
    title: 'Second-Hand Car Buying Application',
    category: 'Full Stack',
    eyebrow: 'Automotive Marketplace Platform',
    shortDescription:
      'A used-car marketplace designed to help users explore vehicle listings, compare specifications, and connect with sellers.',
    description:
      'A web application for second-hand car discovery and buying, designed to organize vehicle listings, display car specifications and pricing, and simplify the process of finding suitable pre-owned vehicles through an intuitive interface.',
    liveDemo: 'https://your-live-demo-url.com',
    viewCode: 'https://github.com/mrsaffu/Second-hand_Car_Buying_Application',
    heroImage: '/images/second-hand-car-buying-dashboard.png',

    technologies: ['React', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    featured: true,
    liveUrl: null,
    githubUrl: null,
    order: 7,

    stats: [
      { value: 'User-Friendly', label: 'Browsing Experience' },
      { value: 'Vehicle Listings', label: 'Car Discovery' },
      { value: 'Full Stack', label: 'Application Architecture' },
    ],

    goal: 'To simplify second-hand car discovery by providing a centralized platform where users can explore vehicle listings, review important specifications, compare available options, and make informed purchasing decisions.',

    overviewDetails: `The Second-Hand Car Buying Application is a web-based automotive marketplace designed to simplify the process of discovering and evaluating pre-owned vehicles.

The platform focuses on presenting vehicle listings with relevant information such as make, model, price, year, and other available specifications. A structured browsing experience helps users explore available cars and identify options that match their requirements.

The application is intended to combine an interactive frontend with backend services for managing vehicle information and marketplace data. Its modular structure provides a foundation for extending listing management, search and filtering, user accounts, and seller interactions as required.

The project demonstrates the application of modern web development practices to an automotive use case, with an emphasis on clear information presentation, maintainable components, and a straightforward vehicle discovery experience.

Overall, the application aims to make second-hand car exploration more organized and accessible through a centralized digital marketplace.`,

    keyFeatures: [
      {
        title: 'Vehicle Listings',
        description: 'Present available second-hand cars with relevant details and pricing',
      },
      {
        title: 'Car Details',
        description: 'Display vehicle specifications and information to support purchasing decisions',
      },
      {
        title: 'Vehicle Discovery',
        description: 'Provide a structured interface for browsing available cars',
      },
      {
        title: 'Search & Filtering',
        description: 'Support vehicle discovery using relevant criteria where implemented',
      },
      {
        title: 'Responsive Interface',
        description: 'Provide a consistent browsing experience across different screen sizes',
      },
      {
        title: 'Vehicle Data Management',
        description: 'Organize vehicle information for presentation and maintenance',
      },
    ],

    techStackDetailed: [
      { name: 'React.js', role: 'Frontend UI Development' },
      { name: 'JavaScript', role: 'Application Logic' },
      { name: 'Node.js', role: 'Backend Runtime' },
      { name: 'Express.js', role: 'Backend Framework' },
      { name: 'MongoDB', role: 'Database' },
      { name: 'REST APIs', role: 'Frontend-Backend Communication' },
      { name: 'Git & GitHub', role: 'Version Control' },
    ],

    screenshots: [
      { title: 'Home Page', description: 'Main interface introducing the vehicle marketplace' },
      { title: 'Car Listings', description: 'Browse available second-hand vehicles and their details' },
      { title: 'Vehicle Details', description: 'Explore individual car specifications and pricing' },
      { title: 'Search & Discovery', description: 'Explore vehicle discovery controls and available filtering options' },
    ],

    challenges: [
      'Organizing vehicle information into a clear and consistent listing structure.',
      'Designing an intuitive interface for browsing and evaluating used cars.',
      'Maintaining consistent presentation of vehicle specifications and pricing.',
      'Structuring application components for maintainability and future expansion.',
    ],

    results: [
      'Established a structured interface for second-hand car discovery.',
      'Organized vehicle information for easier browsing and evaluation.',
      'Created a foundation for extending marketplace functionality.',
      'Applied modern web development concepts to an automotive marketplace use case.',
    ],
  },
];

export const projectFilters = ['All Projects', 'Web Applications', 'APIs & Backend', 'Full Stack', 'Personal'];

export const projectStats = [
  { label: 'Projects Completed', value: '10+' },
  { label: 'Hands-on Development', value: '100%' },
  { label: 'Problem Solving', value: 'Real-world' },
];

export const developmentProcess = [
  { step: 1, title: 'Understand', description: 'Analyze requirements and define goals' },
  { step: 2, title: 'Plan', description: 'Design architecture and tech stack' },
  { step: 3, title: 'Build', description: 'Write clean, scalable and maintainable code' },
  { step: 4, title: 'Test', description: 'Ensure quality, security and performance' },
  { step: 5, title: 'Deploy', description: 'Launch and monitor for continuous improvement' },
];

export const technologiesUsed = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',

  'React',
  'React Router',
  'Context API',
  'Redux Toolkit',
  'Vite',
  'Tailwind CSS',
  'Framer Motion',
  'Axios',
  'Chart.js',
  'Responsive Design',
  'Reusable Component Architecture',

  'Node.js',
  'Express.js',
  'REST APIs',
  'Mongoose',
  'MVC Architecture',
  'CRUD APIs',

  'JWT',
  'JWT Authentication',
  'Role-Based Access Control (RBAC)',
  'Protected Routes',
  'Authentication Middleware',
  'Authorization Middleware',
  'bcryptjs',
  'Environment-Based Configuration',

  'MongoDB',
  'MongoDB Atlas',
  'MongoDB Compass',
  'MySQL',

  'Docker',
  'Docker Compose',
  'AWS',
  'AWS EC2',
  'Vercel',
  'Render',

  'Git',
  'GitHub',
  'Postman',
  'VS Code',
  'npm',
  'dotenv',

  'SCORM 1.2',
  'LMS Integration',
  'localStorage',
  'Data Visualization',
  'Performance Optimization',
];

export default {
  projects,
  projectFilters,
  projectStats,
  developmentProcess,
  technologiesUsed,
};
