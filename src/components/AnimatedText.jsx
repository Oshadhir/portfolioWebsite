// import React from "react";
// import { motion } from "framer-motion";
// const AnimatedText = ({ sentence, styling }) => {
//   const words = sentence.split(" ");
//   const container = {
//     hidden: { opacity: 0 },
//     visible: (i = 1) => ({
//       opacity: 1,
//       transition: { staggerChildren: 0.12, delayChildren: 0.4 * i },
//     }),
//   };
//   const child = {
//     hidden: {
//       opacity: 0,
//       y: 20,
//       transition: { type: "spring", damping: 10, stiffness: 120 },
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", damping: 10, stiffness: 120 },
//     },
//   };
//   return (
//     <motion.div
//       className="flex flex-wrap overflow-hidden break-all"
//       variants={container}
//       initial="hidden"
//       animate="visible"
//     >
//       {words.map((word, index) => (
//         <motion.span
//           className={styling}
//           variants={child}
//           style={{ marginRight: "5px" }}
//           key={index}
//         >
//           {word}
//         </motion.span>
//       ))}
//     </motion.div>
//   );
// };

// export default AnimatedText;

import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ sentence, styling }) => {
  const words = sentence.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.4 * i }, // adjusted delay for smoother stagger
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30, // starting lower for a better "pop-up" effect
      scale: 0.5, // adding scale for a "pop" effect
      transition: { type: "spring", damping: 15, stiffness: 100 }, // smoother spring effect
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // return to normal scale
      transition: { type: "spring", damping: 15, stiffness: 100 },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap overflow-hidden break-all"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          className={styling}
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
