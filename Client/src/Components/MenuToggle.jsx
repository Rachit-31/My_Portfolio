import { motion } from "framer-motion";

const Path = ({ color = "black", ...props }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={color} 
    strokeLinecap="round"
    {...props}
  />
);


// export const MenuToggle = ({ toggle, isOpen }) => (
//   <button
//     onClick={toggle}
//     className="flex items-center justify-center p-2 text-white"
//   >
//     <svg width="23" height="18" viewBox="0 0 23 18">
//       <Path
//         animate={isOpen ? "open" : "closed"}
//         initial={false}
//         variants={{
//           closed: { d: "M 2 2.5 L 20 2.5" },
//           open: { d: "M 3 16.5 L 17 2.5" },
//         }}
//       />
//       <Path
//         animate={isOpen ? "open" : "closed"}
//         initial={false}
//         opacity={isOpen ? 0 : 1}
//         d="M 2 9.423 L 20 9.423"
//       />
//       <Path
//         animate={isOpen ? "open" : "closed"}
//         initial={false}
//         variants={{
//           closed: { d: "M 2 16.346 L 20 16.346" },
//           open: { d: "M 3 2.5 L 17 16.346" },
//         }}
//       />
//     </svg>
//   </button>
// );



export const MenuToggle = ({ toggle, isOpen }) => {
  const color = isOpen ? "white" : "black"; 
  return (
    <button
        onClick={toggle}
        className="flex items-center justify-center p-2 text-white"
      >
        <svg width="23" height="18" viewBox="0 0 23 18">
          <Path
            color={color}
            animate={isOpen ? "open" : "closed"}
            initial={false}
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path
            animate={isOpen ? "open" : "closed"}
            initial={false}
            opacity={isOpen ? 0 : 1}
            d="M 2 9.423 L 20 9.423"
          />
          <Path
            animate={isOpen ? "open" : "closed"}
            color={color}
            initial={false}
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
  );
};
