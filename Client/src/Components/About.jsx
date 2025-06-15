import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import {
  techStack,
  profiles,
  achievements,
  AboutDetail,
} from "../static/Content.jsx";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const AboutMe = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div>
              <h1 className="text-4xl font-medium mb-6">About Me</h1>
              <p className="text-gray-600 leading-relaxed">
                <AboutDetail />
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg shadow-md hover:bg-gray-800 transition"
              >
                View Resume
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 opacity-70 text-black px-4 py-2 rounded-lg"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">Coding Profiles</h2>
              <div className="flex flex-col gap-4">
                {profiles.map((profile, index) => (
                  <a
                    key={index}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition"
                  >
                    <img
                      src={profile.icon}
                      alt={`${profile.platform} Icon`}
                      className="w-10 h-10"
                    />
                    <span className="text-lg font-medium">
                      {profile.platform}
                    </span>
                    <ArrowUpRight className="ml-auto text-gray-500" />
                  </a>
                ))}
              </div>
            </div>

            <div className="hidden md:block opacity-10" variants={fadeIn}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/724/724972.png"
                alt="arrow"
                className="w-[15rem] filter brightness-150"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-sm"
              variants={fadeIn}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path d="M12 6v12M6 12h12" strokeWidth="2" />
                  </svg>
                </div>
                <div className="text-5xl font-semibold mb-4">1+ Years</div>
                <p className="text-gray-600">
                  Experience in Web Development and Competitive Programming.
                </p>
              </div>

              <motion.div className="relative" variants={fadeIn}>
                <img
                  src="/Rachit2.png"
                  alt="Rachit Jain"
                  className="w-full h-auto rounded-xl"
                />
              </motion.div>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeIn}>
              {achievements.map((achievement, index) => (
                <div className="flex gap-4" key={index}>
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Plus className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-600">{achievement}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
