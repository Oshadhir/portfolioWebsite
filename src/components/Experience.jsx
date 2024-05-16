import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaShip, FaGamepad, FaHospital, FaUser, FaChartBar } from "react-icons/fa";
import { motion} from "framer-motion";

const Experience = () => {
  const experienceData = [
    {
      label: "Sync Agency",
      date: "Sep. 2022 - present",
      title: "Video Editor",
      link: "https://www.linkedin.com/company/sync-agency/",
      icon: <FaChartBar />,
      description:
        "Collaborated with marketing and creative teams to develop engaging video content for [platforms/purposes, e.g., social media campaigns, product explainer videos].Edited raw footage from various sources, including interviews, B-roll, and graphics, into compelling narratives.",
        
    },
    {
      label: "Freelance",
      date: "May 2023 - present",
      title: "Graphic Designer/ Animator",
      link: "",
      icon: <FaShip />,
      description:
        "Delivered high-quality design solutions for projects such as [ logos, brochures, social media graphics, website mockups]. Maintained open communication with clients throughout the design process, ensuring their feedback and revisions were incorporated seamlessly.Managed multiple projects simultaneously while meeting deadlines consistently.",
    },
    // {
    //   label: "Legion Studios",
    //   date: "Nov 2020 - Jun 2022",
    //   title: "Software Developer (Game Systems)",
    //   link: "https://www.linkedin.com/company/legionstudios/",
    //   icon: <FaGamepad />,
    //   description:
    //     "Developed Lua games, coordinated agile scrum standups with 10+ developers, and led the team to gain 100K+ game plays and 1000+ asset sales.",
    // },
    {
      label: "Rotaract Club",
      date: "May 2022 - present",
      title: "Volunteer",
      link: "https://www.facebook.com/iitrotaract/",
      icon: <FaHospital />,
      description:
        "My time with the Rotaract Club of IIT has been a valuable learning experience. Volunteering on various initiatives has allowed me to develop strong leadership and communication skills. Working collaboratively with diverse teams has further honed my ability to effectively convey ideas and work seamlessly towards a common goal. It's been a rewarding experience that has fostered both personal growth and a passion for making a positive impact.",
    },
  ];

  const [selectedTab, setSelectedTab] = useState(experienceData[0]);
  const bounce = {
    whileHover: { scale: 1.025, transition: { type: "ease", stiffness: 300 } },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative lg:-top-20">
      <h1 className="text-center text-6xl font-bold text-white">
        Places I've
        <span> </span>
        <span className="gradient bg-gradient-to-r from-[#884019] to-[#779a42] bg-clip-text text-transparent">
          learned
        </span>
        <span> </span>
        and
        <> </>
        <span className="gradient bg-gradient-to-r from-[#884019] to-[#779a42] bg-clip-text text-transparent">
          worked.
        </span>
      </h1>

      <div className="flex justify-center">
        <p className="pt-8 text-2xl text-white text-center place-content-center max-w-4xl">
          Acquiring Industry Skills at Impactful Businesses
        </p>
      </div>


        <div className="mt-10 gradient bg-gradient-to-r from-[#884019] to-[#779a42] lg:w-1/2 sm:w-full shadow-lg rounded-lg p-4 flex overflow-hidden justify-center items-center">
          <nav className="flex-none w-1/3">
            <ul className="list-none">
              {experienceData.map((item) => (
                <motion.div
                  key={item.label}
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  initial="hidden"
                  animate="visible"
                  align="center"
                  {...bounce}
                >
                  <button
                    className={`mb-2 px-2 py-1 cursor-pointer flex justify-start rounded hover:bg-black ${
                      item.title === selectedTab.title ? "bg-black" : "bg-transparent"
                    }`}
                    onClick={() => setSelectedTab(item)}
                  >
                    <div className="flex items-center">
                      <span className="mr-2">{item.icon}</span>
                      <span className = "break-all sm:break-normal">{item.label}</span>
                    </div>
                    {item === selectedTab ? (
                      <motion.div
                        className="underline mt-1 bg-black rounded-full"
                        layoutId="underline"
                      />
                    ) : null}
                  </button>
                </motion.div>
              ))}
            </ul>
          </nav>

          <div className="flex-grow mt-[-8]">

              <motion.div className=""
                key={selectedTab ? selectedTab.label : "empty"}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  opacity: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
                  y: { type: "spring", stiffness: 200, damping: 20 },
                }}
              >
                <div className="flex flex-col justify-start bg-black-200 p-2 rounded">
                  {selectedTab ? (
                    <div className="h-12 w-12 text-white">
                      {selectedTab.icon}
                    </div>
                  ) : (
                    <div className="h-12 w-12 text-white">😋</div>
                  )}
                  <h2 className="font-bold">
                    {selectedTab
                      ? selectedTab.title
                      : "Some of my past experiences"}
                  </h2>
                  <span>{selectedTab ? selectedTab.date : ""}</span>
                  <p className="font-extralight">
                    {selectedTab ? selectedTab.description : ""}
                  </p>
                </div>
              </motion.div>

          </div>
        </div>
      </div>
  );
};

export default Experience;
