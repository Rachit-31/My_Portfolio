// src/Homepage.js
import React from 'react';
import { motion, useCycle } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'; 

const Homepage = () => {

  const taglines = [
    "I am a Software Developer",
    "I am a Full stack Web Developer",
    "I am a competitive programmer",
    "I am a Tech Enthusiast"
  ];

  const [currentTagline, cycleTagline] = useCycle(...taglines);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden bg-tertiary">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-start md:items-end ml-4 md:ml-11 relative">
        <h1 className="text-9xl md:text-[13rem] tracking-tighter px-4">Hello</h1>
        
        {/* Typing effect for taglines */}
        <motion.p
          className="mt-2 text-3xl md:text-2xl"
          key={currentTagline}
          animate={{ opacity: [0, 1], y: [-20, 0] }}
          transition={{ duration: 0.8 }}
          onAnimationComplete={() => {
            setTimeout(cycleTagline, 2000); // Cycle tagline after 2 seconds
          }}
        >
          - {currentTagline}
        </motion.p>
        
        {/* Social Links Section */}
        <div className="absolute left-0 bottom-0 mb-4 flex items-center">
          {/* Vertical Line */}
          <div className="h-10 w-[2px] bg-gray-300 mr-4"></div>
          
          <div className="flex flex-col space-y-2">
            <a href="https://github.com/Rachit-31" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-black">
              <FaGithub className="mr-2" />
            </a>
            <a href="https://www.linkedin.com/in/rachit-jain-697914256/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-black">
              <FaLinkedin className="mr-2" />
            </a>
            <a href="https://www.instagram.com/thisisrachitjain/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-black">
              <FaInstagram className="mr-2" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="flex-1 h-[50vh] md:h-full w-full overflow-hidden mt-8 md:mt-0">
        <img
          src="/Rachit2.png" 
          alt="Rachit Jain"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Homepage;
