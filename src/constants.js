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
import githubdetLogo from "./assets/work_logo/github_det.png";
import csprepLogo from "./assets/work_logo/cs_prep.png";
import movierecLogo from "./assets/work_logo/movie_rec.png";
import taskremLogo from "./assets/work_logo/task_rem.png";
import npmLogo from "./assets/work_logo/npm.png";
import webverLogo from "./assets/work_logo/web_dig.png";
import cmLogo from "./assets/work_logo/cm.png";
import imagesearchLogo from "./assets/work_logo/image_search.png";
import removebgLogo from "./assets/work_logo/remove_bg.png";

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
    title: "GitHub Profile Detective",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/dhatrikk",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "CS Prep",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: csprepLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "HTML",
      "CSS",
      "JavaScript",
    ],
   github: "https://github.com/dhatrikk",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
   github: "https://github.com/dhatrikk",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "Email Validator NPM Package",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
   github: "https://github.com/dhatrikk",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Task Reminder Chrome Extension Tool",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
   github: "https://github.com/dhatrikk",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Webverse Digital",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
   github: "https://github.com/dhatrikk",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
   github: "https://github.com/dhatrikk",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
   github: "https://github.com/dhatrikk",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
   github: "https://github.com/dhatrikk",    webapp: "https://removeyourbg.netlify.app/",
  },
];
