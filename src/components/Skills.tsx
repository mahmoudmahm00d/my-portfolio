"use client";

import { motion } from "framer-motion";
import {
  Database,
  Cloud,
  BracketsCurly,
  DesktopTower,
  Devices,
  SealCheck,
} from "@phosphor-icons/react";
import { JSX } from "react";
import portfolio from "@/data/portfolio";
import type { SkillGroup } from "@/types/portfolio";

const iconMap: Record<string, JSX.Element> = {
  Database: <Database size={32} weight="duotone" className="text-purple-600" />,
  Cloud: <Cloud size={32} weight="duotone" className="text-purple-600" />,
  BracketsCurly: <BracketsCurly size={32} weight="duotone" className="text-purple-600" />,
  DesktopTower: <DesktopTower size={32} weight="duotone" className="text-purple-600" />,
  Devices: <Devices size={32} weight="duotone" className="text-purple-600" />,
};

function getIcon(iconName: string): JSX.Element {
  return iconMap[iconName] || <BracketsCurly size={32} weight="duotone" className="text-purple-600" />;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-primary/2">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 "
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            With over 5 years of experience in .NET development, I&apos;ve honed a
            variety of skills across the Microsoft ecosystem and beyond.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
        >
          {portfolio.skills.map((skillGroup: SkillGroup, index: number) => skill(index, skillGroup))}
        </motion.div>
      </div>
    </section>
  );
}

function skill(index: number, skillGroup: SkillGroup) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 20 + (index % 2 * -40) }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-card rounded-lg p-6 shadow-md"
    >
      <div className="flex items-center mb-4">
        {getIcon(skillGroup.icon)}
        <h3 className="text-xl font-semibold ml-3">{skillGroup.category}</h3>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {skillGroup.skills.map((skill, i) => (
          <div key={i} className="flex items-center">
            <SealCheck
              size={16}
              weight="fill"
              className="text-purple-700 mr-2"
            />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
