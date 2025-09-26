// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// Experience Section Logo's
import azad from "./assets/company_logo/azad_logo.png";
import doxia from "./assets/company_logo/doxia_logo.png";
import aptidude from "./assets/company_logo/theaptidude_logo.png";

// Education Section Logo's
import dav from "./assets/education_logo/dav.png";
import dini from "./assets/education_logo/dini.png";
import iitkgp from "./assets/education_logo/iitkgp.png";

// Project Section Logo's
import whiteBoard from "./assets/work_logo/whiteBoard.png";
import expenseTracker from "./assets/work_logo/expenseTracker.png";


export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: doxia,
    role: "Fullstack Developer",
    link: "https://www.doxiamultispecialityhospital.com/",
    company: "DOXIA Hospital",
    date: "June 2025 - July 2025",
    desc: "Developed and deployed a responsive hospital website using React, TypeScript, Vite, and Tailwind CSS to deliver a clean, mobile-first UI. Implemented dynamic routing with React Router and animations via Framer Motion for seamless navigation. Deployed on Vercel with a secure custom domain and managed version control using Git/GitHub.",
    skills: [
      "ReactJS",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Framer Motion",
      "Vercel",
      "Git",
      "GitHub",
      "Responsive Design",
      "UI/UX",
      "Deployment",
    ],
  },
  {
    id: 1,
    img: azad,
    role: "Developer & Manager",
    company: "Azad Hall of Residence",
    date: "August 2023 - April 2024",
    desc: "Developed and maintained a responsive website using HTML, CSS, and React, enhancing user experience with dynamic design and intuitive UI components. I managed code integration with Git/GitHub for smooth collaboration, ensured seamless frontend-backend connectivity, led regular updates, and added new features to improve functionality and maintain site performance.",
    skills: [
      "ReactJS",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "UI/UX",
      "Responsive Design",
      "Integration",
      "Maintenance",
      "Collaboration",
    ],
  },
  {
    id: 2,
    img: aptidude,
    role: "Web Developer",
    company: "AptiDude",
    date: "May 2025 - June 2025",
    desc: "Collaborated on product ideas and transformed them into deployed features, driving platform growth. Built and maintained scalable MERN stack applications with a focus on performance and reliability. Wrote clean, modular code, managed GitHub repositories, optimized applications for stability, and contributed to team success through problem-solving and collaboration.",
    skills: [
      "MongoDB",
      "Express.js",
      "ReactJS",
      "Node.js",
      "JavaScript",
      "Git",
      "GitHub",
      "Problem-Solving",
      "Collaboration",
      "Debugging",
      "Optimization",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: iitkgp,
    school: "IIT KHARAGPUR",
    date: "November 2022 - April 2027",
    grade: "7.69 CGPA",
    desc: "Pursuing a Dual Degree (B.Tech + M.Tech) at IIT Kharagpur (Nov 2022 – Apr 2027) with a current CGPA of 7.69. Developing strong technical expertise through coursework, projects, and research, while building problem-solving and analytical skills for impactful contributions in technology and engineering.",
    degree: "Dual Degree (B.Tech + M.Tech)",
  },
  {
    id: 1,
    img: dini,
    school: "DINI INTERNATIONAL SCHOOL",
    date: "2019 - 2021",
    grade: "83.4%",
    desc: "Completed Higher Secondary Education (CBSE XII) in Science (PCM) at Dini International School (2019–2021), achieving 83.4%. Gained a solid foundation in Physics, Chemistry, and Mathematics while strengthening analytical and problem-solving skills essential for further studies in technology and engineering.",
    degree: "Higher Secondary Education CBSE(XII)",
  },
  {
    id: 2,
    img: dav,
    school: "DAV PUBLIC SCHOOL",
    date: "2009 - 2019",
    grade: "89.6%",
    desc: "Completed Secondary Education (CBSE X) at DAV Public School (2009–2019) with an aggregate score of 89.6%. Built a strong academic foundation and developed key skills in mathematics, science, and language, preparing for higher education with consistent performance and active participation in school activities.",
    degree: "Secondary Education CBSE(X)",
  },
];

export const projects = [
  {
  id: 0,
  title: "Collaborative Whiteboard",
  description:
    "A dynamic MERN whiteboard app with drawing tools, text, shapes, and undo/redo powered by Context API. Features real-time collaboration using Socket.IO with sub-second latency, secure JWT authentication, and optimized MongoDB queries for fast API responses. Deployed frontend on Vercel and backend on Render for scalable performance and high availability.",
  image: whiteBoard,
  tags: ["MERN", "React JS", "HTML5 Canvas", "Tailwind CSS", "Socket.IO", "JWT", "MongoDB", "Vercel", "Render"],
  github: "https://github.com/dhatrikk/whiteBoard",  
  webapp: "https://canvaswhiteboard.vercel.app/",
}
,
  {
  id: 1,
  title: "Expense Tracker",
  description:
    "A full-stack MERN Expense Tracker with secure authentication, allowing users to log, manage, and track expenses. Features intuitive dashboards with Ant Design, offering both tabular and interactive graph views. Built with scalable REST APIs and MongoDB for reliable CRUD operations and smooth performance.",
  image: expenseTracker,
  tags: ["MERN", "React JS", "Ant Design", "MongoDB", "Express", "Node.js", "REST API", "Charts"],
  github: "https://github.com/dhatrikk/expenseTracker",  
  webapp: "https://expensestrak.vercel.app/",
}
];
