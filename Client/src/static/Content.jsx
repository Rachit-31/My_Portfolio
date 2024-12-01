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
  "GraphQL",
  "GitHub",
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
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
];

export const achievements = [
  <>
    Currently pursuing a degree in{" "}
    <span className="font-semibold">
      Electronics and Communication Engineering
    </span>{" "}
    at IIIT Una.
  </>,
  <>
    Experienced <span className="font-semibold">Full Stack Web Developer</span>{" "}
    with proficiency in building scalable web applications.
  </>,
  <>
    Passionate about{" "}
    <span className="font-semibold">Competitive Programming</span>, with a drive
    to solve complex algorithms and challenges.
  </>,
];

// experience section
export const experiences = [
  {
    company: "Amvit Pharmaceuticals, Delhi",
    period: "October 2024 - Present",
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
  },
];

// projects
export const works = [
  {
    image: "/Portfolio/IIIT_Una.png",
    title: "IIIT Una",
    websiteLink: "https://iiitu.ac.in/",
    githubLink: "",
  },
  {
    image: "/Portfolio/Portfolio.png",
    title: "Portfolio Website",
    websiteLink: "https://rachitjain-31.vercel.app/",
    githubLink: "",
  },
  {
    image: "/Portfolio/Code.png",
    title: "AI Summarizer",
    websiteLink: "",
    githubLink: "https://github.com/Rachit-31/AI_Summarizer",
  },
  {
    image: "/Portfolio/Gym.png",
    title: "Evogym",
    websiteLink: "",
    githubLink: "https://github.com/Rachit-31/FitJourney",
  },
];
