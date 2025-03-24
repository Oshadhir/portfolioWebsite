import React from "react";
import '../App.css';
import { Element } from 'react-scroll';
import resume from '../assets/Resume.pdf';
import oshadhi from '../assets/me3.jpeg';
import { FaLinkedinIn , FaGithub} from "react-icons/fa"
import { useSpring, animated } from 'react-spring';
import {motion} from 'framer-motion';
import AnimatedText from "./AnimatedText";
function About() {
  const cards = [
    { name: "Web Development" },
    { name: "Hardware development" },
    { name: "Backend development" },
    { name: "Game development" }
  ];

  const styles = useSpring({
    loop: true,
    to: [
        { y: 0 },
        {  y: -20 },
        { y: 0 }
    ],
    from: { y: 0 },
    config: { duration: 2000 },
});

const bounce = {
  whileHover: { scale: 1.1, transition: { type: 'spring', stiffness: 300 } }
};


  return (
    <Element name="about">
      <section className="px-20 pt-20 bg-primary relative w-full h-screen mx-auto flex md:flex-row flex-col items-center justify-between">


        <div>
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>

          <h1 className="text-6xl pt-20 font-bold text-white">
            
            A little bit
            <span> </span>
            <span className="gradient bg-gradient-to-r from-[#88193e] to-[#220dab] bg-clip-text text-transparent z-0">
              about me.
            </span>
          </h1>
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
            <p className="pt-8 text-2xl text-white whitespace-normal w-full md:w-4/6">
             IIT's code maestro, future <></>
            <span className="gradient bg-gradient-to-r from-[#88193e] to-[#220dab] bg-clip-text text-transparent">
             AI Engineer
             </span> <></>
             (paycheck to come later). Fueled by instant noodles and by passion, I'm a <></>
            <span className="gradient bg-gradient-to-r from-[#88193e] to-[#220dab] bg-clip-text text-transparent">
              BSc Computer Science 
            </span> student on a mission to conquer code and the <></>
            <span className="gradient bg-gradient-to-r from-[#88193e] to-[#220dab] bg-clip-text text-transparent">
          World of Tech
         </span>.
          (figuratively, for now). <br></br>
          
           When my fingers aren't flying across the keyboard, you'll find me creating questionable art (but my flowcharts are legendary) 
          or unleashing my inner Graphic designer/video editor (because multi-tasking is my middle name... well, not really, but it should be).
           </p>    
          </motion.div>
          
          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>

          <div className= "mx-auto flex flex-row items-center relative gap-x-12 pt-4">
          <motion.div
                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    {...bounce}>
                      <a href= "https://www.linkedin.com/in/oshadhi-rajakaruna/" target="_blank">
          <button >
            <FaLinkedinIn size={30}/></button></a>
          </motion.div>
          <motion.div
                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    {...bounce}>
          <a href= "https://github.com/Oshadhir" target="_blank">
          <button><FaGithub size={30}/></button></a>
          </motion.div> 
          
          {/* <motion.div
                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    {...bounce}>
                      <a href= "https://www.youtube.com/@jlau04/" target="_blank">
          <button> <FaYoutube size={30}/> </button></a>
          </motion.div> */}
          </div>
          </motion.div>
          <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
>
          <h1 className="pt-8 text-2xl font-light text-white text-left">
            <a
              href={resume} 
              target="_blank"
              rel="noopener noreferrer"
              className="gradient bg-gradient-to-r from-[#88193e] to-[#220dab] rounded-full text-white inline-block text-center py-4 px-4 hover:translate-y-[-8px] transition-transform duration-200 glow-effect"
            >
              See my resume
            </a>
          </h1>
          </motion.div>
        </div>
        
        <div className="flex-shrink-0 w-4/6 sm:w-2/6 pt-4 sm:pt-0">
        <motion.div
                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    {...bounce}>
          <animated.img style={styles} className="w-full h-auto object-cover project-img-rounded" src={oshadhi} alt="Oshadhi" />
          </motion.div>
        </div>
        
      </section>
      
    </Element>
  );
}

export default About
