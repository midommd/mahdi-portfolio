export const portfolioData = {
  en: {
    nav: { light: "Light", dark: "Dark", langToggle: "FR" },
    hero: {
      name: "Daifi Mohammed ElMahdi",
      title: "Full Stack Engineer",
      email: "mohammedelmahdidaifi@gmail.com",
      phone: "+212 6 43 84 10 08",
    },
    terminal: {
      readyBadge: "System Ready",
      prompt: "mahdi@dev:~$",
      rootPrompt: "root@mahdi-dev:~",
      boot: [
        "[ OK ] Booting MahdiOS v2.0.26...",
        "[ OK ] Loading bilingual modules (EN/FR)...",
        "[ OK ] Mounting /dev/brain/fullstack...",
        "[ OK ] Starting Laravel API service...",
        "[ OK ] Establishing MySQL connection...",
        "[ OK ] Compiling React components...",
        "System Online. Type 'help' to see available commands."
      ],
      commands: {
        help: [
          { type: 'output', text: 'AVAILABLE COMMANDS:' },
          { type: 'output', text: '  whoami      - Detailed personal profile' },
          { type: 'output', text: '  education   - Academic journey & degrees' },
          { type: 'output', text: '  experience  - Professional roles' },
          { type: 'output', text: '  skills      - Output technical stack as JSON' },
          { type: 'output', text: '  projects    - List deployed architectures' },
          { type: 'output', text: '  contact     - Execute recruitment protocol' },
          { type: 'output', text: '  clear       - Clear the terminal screen' },
          { type: 'output', text: '  coffee      - Initialize caffeine intake' }
        ],
        whoami: [
          { type: 'system', text: 'Fetching profile data from Kenitra, Morocco...' },
          { type: 'output', text: 'USER: Daifi Mohammed ElMahdi' },
          { type: 'output', text: 'ROLE: Full Stack Developer (React & Laravel)' },
          { type: 'output', text: 'BIO: I am a passionate developer currently in the Excellence Class at CMC Rabat. My foundation is built on a DEUG in Fundamental Computer Science from Ibn Tofail University, followed by rigorous digital development training at ISTA Maamora. I specialize in architecting scalable backend APIs with Laravel and building fluid, dynamic frontends with React. Beyond coding, I am a recognized CMC Ambassador and have handled high-stress logistics as a Stadium Steward for AFCON 2025/2026.' }
        ],
        education: [
          { type: 'code', text: '2025-2026 | CMC Rabat - Classe d\'Excellence' },
          { type: 'output', text: '  -> Selected for the elite group. Intensive specialization in React, Laravel, and advanced database architecture.' },
          { type: 'code', text: '2024-2025 | ISTA Maamora' },
          { type: 'output', text: '  -> Digital Development with a strong mastery of OOP and Algorithms.' },
          { type: 'code', text: '2021-2024 | Université Ibn Tofail' },
          { type: 'output', text: '  -> Fundamental Computer Science Degree (DEUG).' },
          { type: 'code', text: '2021 | Baccalauréat (Physics Option)' }
        ],
        experience: [
          { type: 'code', text: 'Jul-Aug 2025 | Web Developer @ DRCA' },
          { type: 'output', text: '  -> Engineered a bilingual multiservice web app (HR, Finance). Developed an interactive vehicle geolocation mapping module using PHP, JS, and Tailwind.' },
          { type: 'code', text: '2025-2026 | Ambassador @ CMC Rabat' },
          { type: 'output', text: '  -> Official representative managing logistics for major technical forums and training sessions.' },
          { type: 'code', text: '2025-2026 | Stadium Steward @ AFCON 2025/2026' },
          { type: 'output', text: '  -> Executed critical crowd orientation and security protocols in a multicultural, high-pressure environment.' }
        ],
        projects: [
          { type: 'code', text: '-------------------------------------------------------------------------' },
          { type: 'code', text: '[1] ReGenAI                 | Laravel, React.js' },
          { type: 'output', text: '    Total refactor of a smart content generation platform (API & UI).' },
          { type: 'code', text: '[2] CarNect                 | PHP, MySQL, Tailwind' },
          { type: 'output', text: '    Dynamic carpooling engine linking drivers and passengers.' },
          { type: 'code', text: '[3] DRCA Multiservices      | PHP, JS, Tailwind' },
          { type: 'output', text: '    Centralized ERP digitalizing HR, Finance, and fleet tracking.' },
          { type: 'code', text: '[4] Ambassadors App         | React, Node.js, NoSQL' },
          { type: 'output', text: '    Telemetry dashboard for event tracking and stats generation.' },
          { type: 'code', text: '[5] Stagix                  | PHP, MySQL' },
          { type: 'output', text: '    Digital portal automating the internship lifecycle & report validation.' },
          { type: 'code', text: '[6] Gestion Internat (OCR)  | React, OCR Tech' },
          { type: 'output', text: '    Optical Character Recognition app to scan student boarding cards.' },
          { type: 'code', text: '[7] DevOps & CI/CD Lab      | GitLab CI, SonarQube' },
          { type: 'output', text: '    Implemented automated pipelines and code quality analysis workflows.' },
          { type: 'code', text: '-------------------------------------------------------------------------' }
        ],
        contact: [
          { type: 'system', text: 'Initiating communication protocols...' },
          { type: 'output', text: 'Email: mohammedelmahdidaifi@gmail.com' },
          { type: 'output', text: 'Phone: +212 6 43 84 10 08' }
        ],
        coffee: [
          { type: 'error', text: 'Error 418: I am a teapot.' },
          { type: 'output', text: 'Caffeine reserves depleted. Please send espresso.' }
        ],
        sudo: [
          { type: 'error', text: 'mahdi is not in the sudoers file. This incident will be reported.' }
        ],
        errorMsg: "command not found. Type 'help'."
      }
    },
    education: { title: "Academic Engine", items: [ { year: "2021", title: "Baccalauréat", desc: "Physics Option." }, { year: "2021 - 2024", title: "Université Ibn Tofail", desc: "Fundamental Computer Science Degree (DEUG)." }, { year: "2024 - 2025", title: "ISTA Maamora", desc: "Digital Development fundamentals (OOP, Algorithms)." }, { year: "2025 - 2026", title: "CMC Rabat - Classe d'Excellence", desc: "Intensive Full-Stack specialization (React, Laravel, Advanced DBs)." } ] },
    experience: { title: "Field Experience", items: [ { date: "Jul - Aug 2025", title: "DRCA - Full Stack Developer", desc: "Engineered a bilingual ERP (HR, Finance) with a real-time vehicle geolocation module via PHP & JS." }, { date: "2025 - 2026", title: "AFCON 2025/2026 - Stadium Steward", desc: "Executed critical logistics and security protocols in a high-stress, international environment." }, { date: "2025 - 2026", title: "CMC Rabat - Ambassador", desc: "Official representative coordinating major technical forums and training sessions." } ] },
    projects: { title: "Deployed Systems", items: [ { name: "Gestion Internat (OCR)", stack: "React, OCR Tech", desc: "Built an Optical Character Recognition app to scan and identify student boarding cards." }, { name: "Gestion Multiservices (DRCA)", stack: "PHP, Tailwind, JS", desc: "Centralized ERP for the DRCA to digitalize HR, Finance, and real-time fleet tracking." }, { name: "ReGenAI", stack: "Laravel, React.js", desc: "Architected a total refactor of an intelligent content generation platform for ultra-fast performance." }, { name: "CarNect", stack: "PHP, MySQL, Tailwind", desc: "Dynamic carpooling engine linking drivers and passengers with a direct booking algorithm." }, { name: "Ambassadors App", stack: "React, Node.js, NoSQL", desc: "Centralized telemetry dashboard for event tracking and statistical analysis.", link: "https://cmc-app-eg3g.onrender.com/" }, { name: "Stagix", stack: "PHP, MySQL", desc: "Digital portal automating the internship lifecycle, from report submissions to validation workflows." } ] },
    skills: { title: "Technical Stack", backend: "PHP (Expert), Node.js, Laravel, MySQL, NoSQL, PL/SQL", frontend: "HTML5, CSS3, JS ES6+, React.js, Vite, Tailwind", tools: "Git/GitHub, GitLab CI, SonarQube, Linux, UML, Agile/Scrum", languages: "Arabic (Native), French (Fluent), English (Technical)" },
    footer: { text: "Built with React, Tailwind, and high expectations." }
  },
  fr: {
    nav: { light: "Clair", dark: "Sombre", langToggle: "EN" },
    hero: {
      name: "Daifi Mohammed ElMahdi",
      title: "Ingénieur Full Stack",
      email: "mohammedelmahdidaifi@gmail.com",
      phone: "+212 6 43 84 10 08",
    },
    terminal: {
      readyBadge: "Système Prêt",
      prompt: "mahdi@dev:~$",
      rootPrompt: "root@mahdi-dev:~",
      boot: [
        "[ OK ] Démarrage de MahdiOS v2.0.26...",
        "[ OK ] Chargement des modules bilingues (FR/EN)...",
        "[ OK ] Montage de /dev/brain/fullstack...",
        "[ OK ] Démarrage du service API Laravel...",
        "[ OK ] Établissement de la connexion MySQL...",
        "[ OK ] Compilation des composants React...",
        "Système Opérationnel. Tapez 'help' pour voir les commandes."
      ],
      commands: {
        help: [
          { type: 'output', text: 'COMMANDES DISPONIBLES:' },
          { type: 'output', text: '  whoami      - Profil personnel détaillé' },
          { type: 'output', text: '  education   - Parcours académique et diplômes' },
          { type: 'output', text: '  experience  - Rôles professionnels et stages' },
          { type: 'output', text: '  skills      - Afficher la stack technique en JSON' },
          { type: 'output', text: '  projects    - Liste des architectures déployées' },
          { type: 'output', text: '  contact     - Exécuter le protocole de recrutement' },
          { type: 'output', text: '  clear       - Nettoyer l\'écran du terminal' },
          { type: 'output', text: '  coffee      - Initialiser la prise de caféine' }
        ],
        whoami: [
          { type: 'system', text: 'Récupération des données depuis Kénitra, Maroc...' },
          { type: 'output', text: 'UTILISATEUR: Daifi Mohammed ElMahdi' },
          { type: 'output', text: 'RÔLE: Développeur Full Stack (React & Laravel)' },
          { type: 'output', text: 'BIO: Développeur passionné actuellement en Classe d\'Excellence au CMC Rabat. Titulaire d\'un DEUG en Informatique Fondamentale (Univ. Ibn Tofail) et formé au Développement Digital à l\'ISTA Maamora. Mon expertise couvre la création d\'API robustes avec Laravel et d\'interfaces interactives avec React. Je suis également Ambassadeur CMC et j\'ai géré la logistique sous haute pression en tant que Stadier pour la CAN 2025/2026.' }
        ],
        education: [
          { type: 'code', text: '2025-2026 | CMC Rabat - Classe d\'Excellence' },
          { type: 'output', text: '  -> Sélectionné parmi les meilleurs profils. Spécialisation intensive en React, Laravel, et BDD avancées.' },
          { type: 'code', text: '2024-2025 | ISTA Maamora' },
          { type: 'output', text: '  -> Développement Digital avec une solide maîtrise de la POO et de l\'Algorithmique.' },
          { type: 'code', text: '2021-2024 | Université Ibn Tofail' },
          { type: 'output', text: '  -> Licence Informatique Fondamentale (DEUG).' },
          { type: 'code', text: '2021 | Baccalauréat (Option Physique)' }
        ],
        experience: [
          { type: 'code', text: 'Juil-Aout 2025 | Développeur Web @ DRCA' },
          { type: 'output', text: '  -> Ingénierie d\'une application ERP multiservices (RH, Finance). Développement d\'un module de géolocalisation de parc auto sur carte interactive (PHP, JS, Tailwind).' },
          { type: 'code', text: '2025-2026 | Ambassadeur @ CMC Rabat' },
          { type: 'output', text: '  -> Représentant officiel chargé de l\'organisation d\'événements majeurs (forums, séminaires).' },
          { type: 'code', text: '2025-2026 | Stadier @ CAN 2025/2026' },
          { type: 'output', text: '  -> Accueil, orientation et support logistique dans un environnement multiculturel.' }
        ],
        projects: [
          { type: 'code', text: '-------------------------------------------------------------------------' },
          { type: 'code', text: '[1] ReGenAI                 | Laravel, React.js' },
          { type: 'output', text: '    Refonte totale d\'une plateforme de génération de contenu intelligent.' },
          { type: 'code', text: '[2] CarNect                 | PHP, MySQL, Tailwind' },
          { type: 'output', text: '    Application de covoiturage dynamique avec système de réservation direct.' },
          { type: 'code', text: '[3] DRCA Multiservices      | PHP, JS, Tailwind' },
          { type: 'output', text: '    ERP centralisé numérisant les RH, Finances, et le suivi de flotte.' },
          { type: 'code', text: '[4] Ambassadors App         | React, Node.js, NoSQL' },
          { type: 'output', text: '    Dashboard de pilotage pour centraliser le suivi des événements.' },
          { type: 'code', text: '[5] Stagix                  | PHP, MySQL' },
          { type: 'output', text: '    Portail digitalisant le cycle de vie des stages et le dépôt des rapports.' },
          { type: 'code', text: '[6] Gestion Internat (OCR)  | React, Tech OCR' },
          { type: 'output', text: '    Application OCR pour scanner et identifier les cartes d\'internat.' },
          { type: 'code', text: '[7] DevOps & Pipeline CI/CD | GitLab CI, SonarQube' },
          { type: 'output', text: '    Implémentation de pipelines automatisés et analyse de qualité du code.' },
          { type: 'code', text: '-------------------------------------------------------------------------' }
        ],
        contact: [
          { type: 'system', text: 'Initialisation des protocoles de communication...' },
          { type: 'output', text: 'Email: mohammedelmahdidaifi@gmail.com' },
          { type: 'output', text: 'Téléphone: +212 6 43 84 10 08' }
        ],
        coffee: [
          { type: 'error', text: 'Erreur 418: Je suis une théière.' },
          { type: 'output', text: 'Réserves de caféine épuisées. Veuillez envoyer un espresso.' }
        ],
        sudo: [
          { type: 'error', text: 'mahdi n\'est pas dans le fichier sudoers. Cet incident sera signalé.' }
        ],
        errorMsg: "commande introuvable. Tapez 'help'."
      }
    },
    education: { title: "Moteur Académique", items: [ { year: "2021", title: "Baccalauréat", desc: "Option Physique." }, { year: "2021 - 2024", title: "Université Ibn Tofail", desc: "Licence Informatique Fondamentale (DEUG)." }, { year: "2024 - 2025", title: "ISTA Maamora", desc: "Développement Digital avec une solide maîtrise des fondamentaux (POO)." }, { year: "2025 - 2026", title: "CMC Rabat - Classe d'Excellence", desc: "Spécialisation Full-Stack intensive (React, Laravel, BDD avancées)." } ] },
    experience: { title: "Expérience Terrain", items: [ { date: "Juil - Aout 2025", title: "DRCA - Développeur Web", desc: "Ingénierie d'un ERP multiservices (RH, Finance) avec géolocalisation de parc auto en temps réel." }, { date: "2025 - 2026", title: "CAN 2025/2026 - Stadier", desc: "Exécution de la logistique et des protocoles de sécurité dans un environnement international sous haute pression." }, { date: "2025 - 2026", title: "CMC Rabat - Ambassadeur", desc: "Coordination et organisation de forums techniques et séminaires majeurs." } ] },
    projects: { title: "Systèmes Déployés", items: [ { name: "Gestion Internat (OCR)", stack: "React, OCR Tech", desc: "Application avec Reconnaissance Optique de Caractères pour scanner les cartes d'internat." }, { name: "Gestion Multiservices (DRCA)", stack: "PHP, Tailwind, JS", desc: "ERP centralisé pour la DRCA numérisant les RH, les finances et le suivi du parc automobile." }, { name: "ReGenAI", stack: "Laravel, React.js", desc: "Refonte architecturale d'une plateforme de génération de contenu intelligent." }, { name: "CarNect", stack: "PHP, MySQL, Tailwind", desc: "Moteur de covoiturage dynamique avec algorithme de réservation directe." }, { name: "Ambassadors App", stack: "React, Node.js, NoSQL", desc: "Dashboard de télémétrie centralisé pour le suivi des événements.", link: "https://cmc-app-eg3g.onrender.com/" }, { name: "Stagix", stack: "PHP, MySQL", desc: "Portail digital automatisant le cycle de vie des stages et les flux de validation." } ] },
    skills: { title: "Stack Technique", backend: "PHP (Expert), Node.js, Laravel, MySQL, NoSQL, PL/SQL", frontend: "HTML5, CSS3, JS ES6+, React.js, Vite, Tailwind", tools: "Git/GitHub, GitLab CI, SonarQube, Linux, UML, Agile/Scrum", languages: "Arabe (Maternelle), Français (Courant), Anglais (Technique)" },
    footer: { text: "Développé avec React, Tailwind, et de hautes exigences." }
  }
};