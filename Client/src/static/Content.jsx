// about section
export const AboutDetail = () => (
  <>
    My name is Rachit Jain. I am currently pursuing a Bachelor's degree in{" "}
    <span className="font-semibold text-primary">
      Electronics and Communication Engineering
    </span>{" "}
    at IIIT Una. Alongside my studies, I specialize in{" "}
    <span className="font-semibold text-primary">
      Full Stack Web Development
    </span>
    , and I am a dedicated{" "}
    <span className="font-semibold text-primary">Competitive Programmer</span>.
  </>
);

export const techStack = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C++",
  "SQL",
  "PostgreSQL",
  "Git",
  "Github",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "Python",
  "Django"
];

export const profiles = [
  {
    platform: "LeetCode",
    url: "#",
    icon: "/CodingProfile/Leetcode.svg",
  },
  {
    platform: "Codeforces",
    url: "#",
    icon: "/CodingProfile/Codeforces.svg",
  },
  {
    platform: "CodeChef",
    url: "https://www.codechef.com/users/rachit_31",
    icon: "/CodingProfile/Codechef.svg",
  },
  {
    platform: "Codolio",
    url: "#",
    icon: "/CodingProfile/Codolio.svg",
  },
];

export const achievements = [
  <>
    <span className="font-semibold">Successfully Launched 3 Websites</span> – Built and deployed production-ready websites actively used by users.
  </>,
  <>
    <span className="font-semibold">CodeChef</span>: 2★  Rated competitive programmer.
  </>,
  <>
    <span className="font-semibold">Technical Head</span> - EIC, IIIT Una: Leading technical initiatives and fostering innovation.
  </>,
];

// experience section
export const experiences = [
  {
    company: "Ernst & Young (EY), Gurugram",
    period: "May 2025 - July 2025",
    role: "Software Development & Testing Intern",
    tags: ["Python", "GenAI"],
    certificate: "https://drive.google.com/file/d/1sU0VpOvAU-87QK__TRg8rryBF9JEFA4N/view?usp=sharing"
  },
  {
    company: "Amvit Pharmaceuticals, Delhi",
    period: "October 2024 - December 2024",
    role: "Full Stack Developer Intern",
    tags: ["React", "GraphQL", "Full Stack Development", "Tailwind css"],
  },  
  {
    company: "Indian Institute of Information Technology, Una (IIIT Una)",
    period: "April 2024 - June 2024",
    role: "Full Stack Developer",
    tags: [
      "Mongodb",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind css",
      "HTML",
    ],
    certificate: "https://drive.google.com/file/d/1TCTz1iLBLAbJ9IpS6cxnwVlZbnQ2rHVC/view",
  },
];

// projects
export const works = [
  {
    image:"/Portfolio/Janhit.png",
    title:"Janhit",
    websiteLink:"https://janhit.vercel.app/",
    githubLink:"https://github.com/Rachit-31/Janhit",
  },
  {
    image:"/Portfolio/Esummit.png",
    title:"E-Summit 2025 IIIT Una",
    websiteLink:"https://esummit.iiitu.ac.in/",
    githubLink:"",
  },
  {
    image: "/Portfolio/SethiHospital.png",
    title: "Sethi Hospital",
    websiteLink: "https://sethihospital.com/",
    githubLink: "",
  },
  {
    image: "/Portfolio/IIIT_Una.png",
    title: "IIIT Una",
    websiteLink: "https://iiitu.ac.in/",
    githubLink: "",
  },
  {
    image: "/Portfolio/TryOn.png",
    title: "Advance-e-commerece Platform with virtual-try-on",
    websiteLink: "https://advance-ecommerce-beta.vercel.app/",
    githubLink: "https://github.com/Rachit-31/Advance-Ecommerce",
  },
];
