import React from 'react';
import { Tilt } from 'react-tilt';
import {motion} from 'framer-motion';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import project1 from '../assets/chat1.png';
import project2 from '../assets/raven.png';
import project3 from '../assets/Healthcare.png';
import project4 from '../assets/shoping.png';
import '../App.css';



const Projects = () => {
    const animation = useSpring({
        from: { opacity: 0.5, marginTop: 0 },
        to: async (next) => {
            while (0.05) {
                await next({ opacity: 1 });
                await next({ opacity: 0.7 });
                await next({ opacity: 1 });
            }
        },
        config: { duration: 2000 },
    });
    const bounce = {
        whileHover: { scale: 1.025, transition: { type: 'spring', stiffness: 300 } }
      };

      const slideInFromBottom = {
        hidden: { y: 100, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            type: 'spring',
            stiffness: 30,
            damping: 20
          }
        }
      };

    return (
        <Element name="projects" className='relative lg:-top-20'>
            <h1 className="sm:pt-10 lg:pt-0 text-6xl font-bold text-white text-center ">
                See some of my
                <span> </span>
                <span className="gradient bg-gradient-to-r from-[#88193e] to-[#19328f] bg-clip-text text-transparent">
                    projects!
                </span><> </>
                Come take a look!
            </h1>
            <div className="flex justify-center">
                <p className="pt-4 text-2xl text-white text-center place-content-center max-w-4xl">
                    recent projects i've been doing
                </p>
            </div>
            <div className="pt-13 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-x-0 justify-items-center mx-auto max-w-screen-lg">

            <motion.div
          
                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    variants={slideInFromBottom}
                    {...bounce}
                >
                    <div className="mt-6 w-full md:w-96 block rounded-lg shadow-lg overflow-hidden mx-0">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-56">
                                <img src={project1} alt="IntelliPaint" className="object-cover w-full h-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Conversax</div>
                                <p className="text-gray-700 text-base">
                                A full-stack, real-time chat application built using MERN stack (MongoDB, Express, React, Node.js).
                                features secure user authentication, instant real-time messaging, dynamic online user status, efficient global
                                state management
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-[#881952] hover:bg-[#42449a] text-white font-normal py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </a>
                    </div>
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
                    variants={slideInFromBottom}
                    {...bounce}
                >

                    <div className="mt-6 w-full md:w-96 block rounded-lg shadow-lg overflow-hidden mx-0">
                        <a href="https://github.com/AlthafNazeel/R.A.V.E.N" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-56">
                                <img src={project2} alt="raven" className="object-cover w-full h-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Raven</div>
                                <p className="text-gray-700 text-base">
                                a real-time fall detection and emergency hand gesture recognition system using machine learning (TensorFlow). This Python and Flutter app integrates with Firebase for real-time notifications and alerts, 
                                ensuring swift response in emergency situations. (Tools: Git, Figma)
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-[#88195c] hover:bg-[#311988] text-white font-normal py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </a>
                    </div>
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
                    variants={slideInFromBottom}
                    {...bounce}
                >
                
                    <div className="mt-6 w-full md:w-96 block rounded-lg shadow-lg overflow-hidden mx-0">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-56">
                                <img src={project3} alt="ReadRight" className="object-cover w-full h-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Healthcare System API</div>
                                <p className="text-gray-700 text-base">
                                Built a secure Health System API using Java and JAX-RS for managing healthcare data. The API handles patient records, appointments, and medical history, all while prioritizing data security. (Tools: Maven, Postman)
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-[#88195c] hover:bg-[#311988] text-white font-normal py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </a>
                    </div></motion.div>
                    <motion.div

                    m={4} 
                    p={4} 
                    borderRadius="lg" 
                    overflow="hidden" 
                    boxShadow="lg"
                    initial="hidden"
                    animate="visible"
                    align="center"
                    variants={slideInFromBottom}
                    {...bounce}
                >
                    <div className="mt-6 w-full md:w-96 block rounded-lg shadow-lg overflow-hidden mx-0">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <div className="relative h-56">
                                <img src={project4} alt="IntelliPaint" className="object-cover w-full h-full" />
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Shopping Cart</div>
                                <p className="text-gray-700 text-base">
                                Created a Java shopping cart application with separate interfaces for admins (console) and customers (Swing UI). the console leverage OOP principles to manage products (add, delete, print, save). Customers can browse products, check availability, add items to cart, and complete purchases. (Java, Swing)
                                </p>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                <button className="bg-[#88194f] hover:bg-[#311988] text-white font-normal py-2 px-4 rounded">
                                    Read More
                                </button>
                            </div>
                        </a>
                    </div>
                    </motion.div>
            </div>
        </Element>
    );
};

export default Projects;

