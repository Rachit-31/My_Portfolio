import React, { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import { MenuToggle } from "./MenuToggle";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            ".sidebar",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
          [
            ".backdrop",
            { opacity: 0.5 },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.5 },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          [".sidebar", { transform: "translateX(100%)" }, { at: "-0.1" }],
          [".backdrop", { opacity: 0 }, { at: "<" }],
        ];

    animate([...menuAnimations]);
  }, [isOpen, animate]);

  return scope;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope} className="relative">
      <div className="bg-tertiary w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Links */}
            <div className="flex items-center space-x-4 gap-14">
              <div className="flex-shrink-0">
                <a href="#" className="text-black text-xl font-bold"><img src="src/assets/Jaguar.png" alt="" className="w-12"/></a>
              </div>
              <div className="hidden md:flex space-x-3">
                <a href="#experience" className="text-black  px-2 py-2 rounded-md text-sm font-medium">
                  Experience
                </a>
                <a href="#projects" className="text-black px-2 py-2 rounded-md text-sm font-medium">
                  Projects
                </a>
                <a href="#aboutme" className="text-black  px-2 py-2 rounded-md text-sm font-medium">
                  About Me
                </a>
              </div>
            </div>

            {/* Contact and Mobile Menu Button */}
            <div className="hidden md:block">
              <a href="#contact" className="text-black  px-3 py-2 rounded-md text-sm font-medium">
                Contact Me
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div
        className={`backdrop fixed inset-0 bg-black transition-opacity ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
        style={{ opacity: 0 }}
      ></div>

      {/* Sidebar Menu */}
      <nav
        className={`sidebar fixed right-0 top-0 w-64 h-full bg-gray-900 transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="space-y-4 p-4">
          <li>
            <a href="#experience" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Projects
            </a>
          </li>
          <li>
            <a href="#aboutme" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              About Me
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
