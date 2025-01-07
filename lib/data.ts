import React from "react";
import { GiMirrorMirror } from "react-icons/gi";
import { GiTrackedRobot } from "react-icons/gi";
import { LuGraduationCap } from "react-icons/lu";
import NaviXImg from "@/public/NaviXrobot.jpg";
import MirrorSyncImg from "@/public/Mirror-sync(2).jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Secured MirrorSync funding",
    location: "Mankato, MN",
    description:
      "Secured MirrorSync funding from Undergraduate Research Center(URC) and worked on it for an year.",
    icon: React.createElement(GiMirrorMirror),
    date: "August 2023",
  },
  {
    title: "Secured NaviX funding",
    location: "Mankato, MN",
    description:
      "Recieved funding from URC and Electrical and Computer Engineering Technology (ECET) Department and currently working on it.",
    icon: React.createElement(GiTrackedRobot),
    date: "May 2024",
  },
  {
    title: "Graduated College",
    location: "Mankato, MN",
    description:
      "Graduated from MNSU with a BS in Computer Engineering and started focusing on Web Development to explore future avenues.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2024",
  },
  
] as const;

export const projectsData = [
  {
    title: "NaviX",
    description:
      " Led development of an automated indoor navigation robot integrating ROS, SLAM, and Raspberry Pi.",
    tags: ["ROS", "Python", "Power-Systems", "Linux", "Raspi"],
    imageUrl: NaviXImg,
  },
  {
    title: "MirrorSync",
    description:
      " Led development of website controlled Smart-Mirror. Served as the project leader, developed GUI, maintained database and designed the project.",
    tags: ["Python", "PostgreSQL", "Tkinter", "IoT", "Raspi"],
    imageUrl: MirrorSyncImg,
  },
  
] as const;

export const skillsData = [
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "VScode",
  "PostgreSQL",
  "Framer Motion",
  "C",
] as const;