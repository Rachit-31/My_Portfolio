import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Amvit Pharmaceuticals, Delhi",
      period: "October 2024 - Present",
      role: "Full Stack Developer Intern",
      tags: ["React", "GraphQL", "Full Stack Development","Tailwind css"]
    },
    {
      company: "Indian Institute of Information Technology, Una (IIIT Una)",
      period: "April 2024 - June 2024",
      role: "Full Stack Developer",
      tags: ["MERN Stack", "Full Stack Development", "Tailwind css"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-[#FFFFFF]">
      <div className="mb-8">
        <div className="text-sm text-gray-600 font-semibold">• Experiences</div>
        <h1 className="text-4xl font-medium mt-2 mb-4">Explore My Tech Journey</h1>
        <p className="text-gray-600 mb-4">
          Over the past years, I've worked on several full stack development projects, gaining extensive experience in various technologies and collaborating with teams to deliver impactful software solutions.
        </p>
        <a href="#" className="text-black hover:underline inline-flex items-center">
          Contact Me
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="border-t pt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-normal mb-2">{exp.company}</h3>
              <p className="text-gray-600 text-sm">{exp.period}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-4">{exp.role}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-1 rounded-full bg-gray-100 text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
