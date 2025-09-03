// commands.ts
export type Command = (typeText: (text: string) => Promise<void>) => Promise<void>;

export const commands: Record<string, Command> = {
  help: async (typeText) => {
    await typeText("Available Commands\n");
    await typeText("about       - Learn about me");
    await typeText("projects    - View my projects");
    await typeText("skills      - See my technical skills");
    await typeText("experience  - My work experience");
    await typeText("contact     - How to reach me");
    await typeText("education   - My educational background");
    await typeText("clear       - Clear the terminal\n");
    await typeText("Type any command to continue...");
  },

  about: async (typeText) => {
    await typeText("👋  Hello! My name is SACROUD Riad\n");
    await typeText("I'm a Digital Engineering student specializing in software engineering, with a strong");
    await typeText("foundation in web and mobile development, software architecture, and problem-solving.\n")
    await typeText("Background\n")
    await typeText("- Currently a Fullstack Intern at Wheels&Trade.co, contributing to their platform development");
    await typeText("- Previously a Fullstack Intern at Inovteam, improving their merchandising platform  ");
    await typeText("- Pursuing a Master of Science in Digital Engineering at \x1b[94m\x1b]8;;https://www.isen.fr\x07ISEN Brest\x1b]8;;\x07\x1b[0m, France");
    await typeText("- Focus on building Web and mobile applications\n");
    await typeText("When I'm not coding I enjoy reading manga or playing video games with my friends\n");
    await typeText("Feel free to explore more using the 'projects', 'skills', or 'contact' commands");
  },

  projects: async (typeText) => {
    await typeText("🚀  My Projects\n");
    await typeText("1. My Portfolio");
    await typeText("   Interactive terminal-style portfolio website");
    await typeText("   Technologies: React, TypeScript, CSS, Vercel");
    await typeText("   Link to Github:\x1b[94m\x1b[4mhttps://github.com/sacroudr/Portfolio\x1b[0m\n");
    await typeText("2. Taskflow");
    await typeText("   Project Management Web Platform & Mobile App");
    await typeText("   Technologies: React, React Native, TypeScript, Material UI, AWS, PostgreSQL, Nest.js");
    await typeText("   Link to Github:\x1b[94m\x1b[4mhttps://github.com/sacroudr/Taskflow\x1b[0m\n");
    await typeText("3. ThermX");
    await typeText("   Heating Simulation and Regulation");
    await typeText("   Technologies: C, STM32 Microcontroller\n");
    await typeText("4. AcciTrack")
    await typeText("   Road Safety Prevention");
    await typeText("   Technologies: R, Python, HTML/CSS, JavaScript, PHP\n");
  },

  skills: async (typeText) => {
    await typeText("💻  Technical Skills:");

    await typeText("\nProgramming Languages:");
    await typeText(" - JavaScript/TypeScript");
    await typeText(" - Python");
    await typeText(" - C");

    await typeText("\nFrontend:");
    await typeText(" - React.js/Next.js");
    await typeText(" - Material UI");

    await typeText("\nBackend:");
    await typeText(" - Node.js/Express");
    await typeText(" - PHP/Laravel");
    await typeText(" - FastAPI");
    await typeText(" - SQL (PostgreSQL/MySQL/MariaDB)");

    await typeText("\nCloud:");
    await typeText(" - Supabase");
    await typeText(" - Vercel");
    await typeText(" - Railway");
    await typeText(" - AWS");
  },

  experience: async (typeText) => {
    await typeText("💼  My experience \n");

    await typeText("Software Engineer Intern | Wheels&Trade.co (May 2025 - Now, Casablanca, Morocco)");
    await typeText("- Building a truck transportation platform from scratch")
    await typeText("- Design and implemented database architecture using Supabase")
    await typeText("- Developed backend services with FastApi, deployed via Railway")
    await typeText("- Built fronted with React + TypeScript, deployed in Vercel");
    await typeText("- Developed the  mobile app with React Native to support drivers and logistics operations\n");

    await typeText("Fullstack Intern | Inovteam (April 2024 - September 2024, Casablanca, Morocco)");
    await typeText("- Integrated frontend and backend interfaces to improve application functionality and performance")
    await typeText("- Enhanced UI/UX by optimizing design and usability for a merchandising platform")
    await typeText("- Developed and maintained features using React, TypeScript, Next.js and Laravel");
    await typeText("- Managed version control and team collaboration via Github\n");
    await typeText("Type 'projects' to see my recent work.")
  },

  contact: async (typeText) => {
    await typeText("📬  Get in Touch \n");
    await typeText("Email: sacroudr@gmail.com");
    await typeText("Phone: +33 7 80 71 38 08");
    await typeText("Github: \x1b[94m\x1b[4mhttps://github.com/sacroudr\x1b[0m");
    await typeText("LinkedIn: \x1b[94m\x1b[4mhttps://www.linkedin.com/in/riad-sacroud-7a5b73166/\x1b[0m\n");
    await typeText("Feel free to reach out!")
  },

  education: async (typeText) => {
    await typeText("🎓  Education\n");
    await typeText("Master of Science in Digital Engineering");
    await typeText("- Focused on software engineering and digital systems");
    await typeText(
      `- Institution: Higher Institute of Electronics and Digital \x1b[94m(\x1b]8;;https://www.isen.fr\x07ISEN Brest\x1b]8;;\x07)\x1b[0m, France`
    );
    await typeText("- Expected completion: November 2025\n");
    await typeText("Preparatory Class - PCSI/PSI (Physics, Chemistry, Engineering Science)");
    await typeText("- Specialized in mathematics, physics, and engineering foundations");
    await typeText("- Institution: ELBILIA SUP, Casablnca, Morocco");
    await typeText("- Completed: April 2022");
  },
};
