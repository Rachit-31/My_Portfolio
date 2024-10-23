// src/Homepage.js
import React from 'react';
import { motion, useCycle } from 'framer-motion';

const Homepage = () => {
  // Array of taglines to cycle through
  const taglines = [
    "I am a Software Developer",
    "I am a Full stack Web Developer",
    "I am a competitive programmer",
    "I am a Tech Enthusiast"
  ];

  // Cycling through taglines using useCycle hook
  const [currentTagline, cycleTagline] = useCycle(...taglines);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden bg-tertiary">
      {/* Text Section */}
      <div className="flex-1 flex flex-col justify-center items-start md:items-end ml-4 md:ml-11">
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
      </div>
      
      {/* Image Section */}
      <div className="flex-1 h-[50vh] md:h-full w-full overflow-hidden mt-8 md:mt-0">
        <img
          src="/src/assets/Me.png" // Replace with the path to your image
          alt="Rachit Jain"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Homepage;
