"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 
      sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        With a fascination towards <span className="font-medium ">IoT</span>, I
        worked on building practical and innovative solutions. I have brought my
        ideas to life through projects like{" "}
        <span className="font-medium ">MirrorSync</span> and{" "}
        <span className="font-medium ">NaviX</span>, and I especially enjoy the
        problem-solving aspect of building these systems. I am currently
        exploring <span className="underline ">web development</span> to create
        robust websites that can help me create more interesting systems in the
        future. I am always eager to learn about new technologies and I am
        currently looking for a{" "}
        <span className="font-medium ">full-time position</span> as a{" "}
        <span className="font-semibold">software developer</span>.
        {/**My core stack is{" "}
    <span className="font-medium">
      React, Next.js, Node.js, and MongoDB
    </span>*/}
      </p>

      <p>
        Beyond coding, I enjoy <span className="italic">chess</span>,{" "}
        <span className="font-medium italic">tennis</span>, and exploring the
        wonders of <span className="font-medium italic">astronomy</span>.
        Inspired by breakthroughs like{" "}
        <span className="font-bold ">AlphaZero</span>, I am fascinated by AI and
        aim to build integrated solutions that improve quality of life for
        others.
        {/* others. Let’s{" "}
        <span className="text-green-500">create something extraordinary</span>{" "}
        together! */}
      </p>
    </motion.section>
  );
}

// About me

/* <span className="font-bold"></span>I’m Samarth Shah, a recent graduate with a BS in Computer Engineering, aspiring to become a software engineer. 
        I have hands-on experience leading projects like MirrorSync, a smart mirror system integrating PostgreSQL, and NaviX, an indoor navigation robot 
        using ROS and SLAM. Proficient in Java, Python, C, and tools like Linux and SQL, 
        I’m passionate about building innovative, scalable software solutions. My leadership roles and 
        technical expertise position me to tackle complex challenges and deliver impactful results. */
