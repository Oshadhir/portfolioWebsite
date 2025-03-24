import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import { styles } from '../styles';
import AnimatedText from './AnimatedText';

// Import your video
import VIDBG from '../assets/VIDBG.mp4';

const ThreeDim = () => {
    const [isMobile, setIsMobile] = useState(false);
    const roles = ["Computer Science student", "Software Engineer", "AI Engineer", "Data Science Enthusiast", "Video editor"];
    const [currentRole, setCurrentRole] = useState(0);

    // Update role every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prevIndex) => (prevIndex + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Mobile responsiveness
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };
        mediaQuery.addEventListener('change', handleMediaQueryChange);
        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    const textVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const floatVariants = {
        floatUp: {
            y: -10,
            opacity: 0,
        },
        floatDown: {
            y: 10,
            opacity: 1,
        },
    };

    return (
        <section className="relative w-full h-screen">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={VIDBG} type="video/mp4" />
            </video>

            {/* <div className={`${styles.paddingX} absolute inset-0 mt-200 sm:mt-200 md:mt-200 lg:mt-200 mx-auto flex flex-col items-center gap-1 z-10`}>
                <AnimatedText
                    sentence="Hello, I'm Oshadhi!"
                    styling="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-40 font-bold gradient bg-gradient-to-t from-white to-gray-300 bg-clip-text text-transparent"
                /> */}

              <div className={`${styles.paddingX} absolute inset-0 mt-200 sm:mt-200 md:mt-200 lg:mt-200 mx-auto flex flex-col items-center gap-1 z-10`}>
                
                {/* Animated Text with Nice Animation */}
                <motion.div
                    className="flex flex-wrap justify-center"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatedText
                        sentence="Hello, I'm Oshadhi!"
                        styling="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-40 font-bold gradient bg-gradient-to-t from-white to-gray-300 bg-clip-text text-transparent"
                    />
                </motion.div>

                <AnimatedText
                    sentence={`I'm an aspiring`}
                    styling="p-1 text-4xl font-medium text-white mt-10 text-center"
                />

                <motion.span
                    key={currentRole}
                    className="text-4xl font-medium text-white text-center"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={textVariants}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    {roles[currentRole]}
                </motion.span>

                <motion.div
                    variants={floatVariants}
                    initial="floatUp"
                    animate="floatDown"
                    exit="floatUp"
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", repeatType: 'reverse' }}
                    className="mt-6"
                >
                    <FaArrowDown size={40} />
                </motion.div>
            </div>
        </section>
    );
};

export default ThreeDim;
