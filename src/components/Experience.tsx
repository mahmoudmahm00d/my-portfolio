"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Buildings,
  Calendar,
  Medal,
  GraduationCap,
} from "@phosphor-icons/react";

const experiences = [
  {
    title: "Full Stack Developer",
    company: "ErtiqaSoft",
    location: "Damascus, Syria",
    period: "2021 - 2025",
    description:
      "Lead developer for enterprise-level applications using .NET 8. Managed a team of 3 developers.",
    achievements: [
      "Developed and maintained the Syrian National Insurance recording and contributions system, that services millions of Syrian citizens, reducing the processes required time by more than 80%. Fix existing system data constraints, and update database opertaions allowing it to handle 50% more requests",
      "Worked on analyzing, developing, and maintaining Full Stack web and mobile applications and web APIs using C# and .NET framework",
      "Supervised the process of creating, developing, and maintaining mobile applications using Dart and Flutter framework",
      "Mentored junior developers and established coding standards across the team",
    ],
  },
  {
    title: "College Instructor",
    company: "Damascus University",
    location: "Damascus, Syria",
    period: "2022 - Present",
    description:
      "Teaching fundamental principles of Software Engineering and advanced programming concepts using C#. Leading curriculum development and implementation for computer science programs.",
    achievements: [
      "Successfully mentored over 500 students across multiple academic terms",
      "Supervised and guided 15+ graduation projects focusing on practical software solutions",
      "Developed and implemented an attendance tracker app utilizing QR code technology to reduce administrative overhead by 60%",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Damascus University",
    period: "2021 - Present",
    description: "Focused on software development methodologies and computer systems architecture",
    achievements: [
      "Completed comprehensive software engineering curriculum",
      "Built multiple personal projects"
    ]
  },
  {
    degree: "Associate Degree in Software Engineering",
    institution: "Damascus University",
    period: "2019 - 2021",
    description: "Foundation in programming principles and software development fundamentals",
    achievements: [
      "Graduated at the top of my class",
      "Mastered core programming languages",
      "Developed fundamental software engineering skills",
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-justify text-muted-foreground max-w-2xl mx-auto">
            My journey through the software development landscape, focusing on
            .NET technologies and enterprise solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Timeline line */}
          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="lg:col-span-4 relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-[-30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 to-indigo-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-[-38px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30"></div>

                <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-justify text-xl font-bold flex items-center">
                      <Briefcase
                        weight="duotone"
                        className="text-primary mr-2"
                        size={20}
                      />
                      {exp.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar weight="duotone" className="mr-1" size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Buildings
                      weight="duotone"
                      className="text-primary mr-2"
                      size={18}
                    />
                    <span className="font-medium">{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-muted-foreground text-sm">
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-justify text-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                      <Medal weight="duotone" className="mr-2" size={16} />
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground pl-1">
                      {exp.achievements.map((achievement, i) => (
                        <li className="text-justify" key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
          Academic foundation that supports my professional expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Timeline line */}
          <div className="hidden lg:block lg:col-span-1"></div>

          <div className="lg:col-span-4 relative">
            {/* Vertical line for desktop */}
            <div className="hidden lg:block absolute left-[-30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-600 to-indigo-600"></div>

            {education.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12 relative"
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-[-38px] top-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/30"></div>

                <div className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold flex items-center">
                      <GraduationCap
                        weight="duotone"
                        className="text-primary mr-2"
                        size={20}
                      />
                      {exp.degree}
                    </h3>
                    <div className="flex items-center text-muted-foreground mt-2 md:mt-0">
                      <Calendar weight="duotone" className="mr-1" size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center mb-4">
                    <Buildings
                      weight="duotone"
                      className="text-primary mr-2"
                      size={18}
                    />
                    <span className="font-medium">{exp.institution}</span>
                  </div>

                  <p className="text-foreground mb-4">
                    {exp.description}
                  </p>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-primary mb-2 flex items-center">
                      <Medal weight="duotone" className="mr-2" size={16} />
                      Key Achievements
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground pl-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
