import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { experiences } from "../static/Content";
import { ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const Experience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-[#FFFFFF]">
      <div className="mb-8">
        <div className="inline-block px-4 py-1 rounded-full bg-gray-100 text-sm font-semibold">
          • Experiences
        </div>
        <h1 className="text-4xl font-medium mt-2 mb-4">
          Explore My Tech Journey
        </h1>
        <p className="text-gray-600 mb-4">
          Over the past years, I've worked on several full stack development
          projects, gaining extensive experience in various technologies and
          collaborating with teams to deliver impactful software solutions.
        </p>
        <div className="hidden md:block">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-black px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
          >
            <span className="inline-flex items-center">
              Contact Me
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      <motion.div
        className="space-y-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="border-t pt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-xl font-normal mb-2">{exp.company}</h3>
              <p className="text-gray-600 text-sm">{exp.period}</p>
              {exp.certificate && (
                <a
                  href={exp.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 px-4 py-1.5 text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 rounded-full transition-colors duration-200"
                >
                  View Certificate <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

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
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
