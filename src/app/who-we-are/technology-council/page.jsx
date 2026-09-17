"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";

// ---------------------------------------------------
// PAGE ANIMATION VARIANT
// ---------------------------------------------------
const pageVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

// ---------------------------------------------------
// 1️⃣ HEADER SECTION
// ---------------------------------------------------
function TechCouncilHeader() {
  return (
    <motion.section
      variants={pageVariant}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col md:flex-row w-full overflow-hidden bg-gray-50 min-h-[70vh]"
    >
      {/* Left side */}
      <div className="relative z-10 md:w-1/2 flex flex-col justify-center px-6 md:px-16 py-16 bg-gradient-to-r from-indigo-100 to-indigo-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2a3990] leading-snug mb-4">
          Technology Council
        </h1>
        <Breadcrumb
        items={[
          { label: "Paves Technologies", href: "/" },
          { label: "technology-council" }
        ]}
      />
        </div>

      {/* Right side Image */}
      <div className="relative md:w-1/2 h-[500px] md:h-auto">
        <Image
          src="/assets/who-we-are/development-collage.jpg"
          alt="About Paves Technologies"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>
    </motion.section>
  );
}

// ---------------------------------------------------
// 2️⃣ EXPERTISE CARDS SECTION
// ---------------------------------------------------
function TechCouncilExpertise() {
  const expertise = [
    {
      title: "AI-First Strategy",
      description:
        "Adopt AI and data-driven decision-making to boost efficiency and unlock new business opportunities.",
      
    },
    {
      title: "Cloud & DevOps",
      description:
        "Migrate to cloud, improve deployment speed, and enhance scalability using modern DevOps practices.",
      
    },
    {
      title: "Open Banking & APIs",
      description:
        "Build secure APIs and open banking solutions that power fintech innovation and integrations.",
      
    },
    {
      title: "Cybersecurity",
      description:
        "Strengthen your digital ecosystem with strong security frameworks and fraud prevention systems.",
      
    },
  ];

  return (
    <motion.section
      variants={pageVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-20 bg-[#2a3990]"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-white">
          Future-Ready Tech & Innovation Expertise
        </h2>

        <p className="text-center text-lg md:text-xl mb-14 text-white leading-relaxed max-w-3xl mx-auto">
          Our Technology Council brings together AI pioneers, cloud architects,
          API innovators, and cybersecurity specialists to guide organizations
          toward next-generation digital transformation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertise.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-5 bg-pink-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-4xl">{item.icon}</div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          {/* {/* <button className="bg-primary hover:bg-indigo-900 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center gap-3">
            Our Expertise
            <span className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full">
              ➔
            </span> */}
          {/* </button> */} 
        </div>
      </div>
    </motion.section>
  );
}

// ---------------------------------------------------
// 3️⃣ STATS SECTION
// ---------------------------------------------------
function TechCouncilStats() {
  const [experience, setExperience] = useState(150);
  const [projects, setProjects] = useState(350);
  const [triggerCount, setTriggerCount] = useState(false);

  const startCount = () => setTriggerCount(true);

  useEffect(() => {
    let expInterval, projInterval;

    if (triggerCount) {
      expInterval = setInterval(() => {
        setExperience((prev) => (prev >= 200 ? 200 : prev + 1));
      }, 30);

      projInterval = setInterval(() => {
        setProjects((prev) => (prev >= 500 ? 500 : prev + 5));
      }, 20);
    }

    return () => {
      clearInterval(expInterval);
      clearInterval(projInterval);
    };
  }, [triggerCount]);

  return (
    <motion.section
      variants={pageVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      onMouseEnter={startCount}
      className="py-20 bg-blue-50"
    >
      <div className="container mx-auto px-4 text-center max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
          Our Reach & Achievements
        </h2>

        <p className="text-lg md:text-xl text-semibold text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
          <b>Paves Technologies</b> has partnered with numerous companies,
          delivering innovation in <b>AI</b>, <b>cloud</b>, <b>fintech</b>, and
          <b> cybersecurity</b>. Our experience and dedication have powered major
          transformations across industries.
        </p>

        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-8">
          {/* Experience Box */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-indigo-900 w-82 h-82 flex flex-col items-center justify-center text-white shadow-lg rounded-xl transition"
          >
            <p className="text-6xl font-bold mb-4">{experience}+ yrs</p>
            <p className="text-lg md:text-xl font-semibold">
              Companies Served
            </p>
          </motion.div>

          {/* Projects Box */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-pink-700 w-72 h-72 flex flex-col items-center justify-center text-white shadow-lg rounded-xl transition"
          >
            <p className="text-6xl font-bold">{projects}+</p>
            <p className="text-lg md:text-xl font-semibold mt-1">
              Projects Completed
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// ---------------------------------------------------
// 4️⃣ FINAL PAGE — All Sections Combined
// ---------------------------------------------------
export default function Page() {
  return (
    <main className="overflow-hidden">
      <TechCouncilHeader />
      <TechCouncilExpertise />
      <TechCouncilStats />
    </main>
  );
}
