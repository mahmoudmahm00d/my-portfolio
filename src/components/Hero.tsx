"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  GithubLogo,
  LinkedinLogo,
  Code,
  Download,
} from "@phosphor-icons/react";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <motion.p
              className="text-primary mb-2 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Hello, I&apos;m
            </motion.p>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Mahmoud Mahmoud
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl font-medium mb-6 text-foreground/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              .NET Software Engineer
            </motion.h2>
            <motion.p
              className="text-muted-foreground mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Specialized in building robust, scalable applications using
              ASP.NET Core, C#, and cloud technologies. Passionate about clean
              code, microservices, and delivering high-quality software
              solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link
                href="#contact"
                className="px-6 py-3 outline outline-md outline-purple-600 hover:bg-purple-600/80 hover:text-white rounded-md transition-colors flex items-center gap-2"
              >
                <Code weight="duotone" /> Let&apos;s work together
              </Link>
              <Link
                href="/resume.pdf"
                className="px-6 py-3 text-white bg-purple-700 hover:bg-purple-600/80 rounded-md transition-colors flex items-center gap-2"
                target="_blank"
              >
                <Download weight="duotone" /> Download CV
              </Link>
            </motion.div>

            <motion.div
              className="flex items-center gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Link
                href="https://github.com/mahmoudmahm00d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubLogo
                  size={40}
                  weight="duotone"
                  className="text-primary outline outline-md outline-purple-600 rounded-md p-2 hover:bg-purple-600 hover:text-white transition-colors"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/mahmoud-darwish-mahmoud"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinLogo
                  size={40}
                  weight="duotone"
                  className="text-primary outline outline-md outline-purple-600 rounded-md p-2 hover:bg-purple-600 hover:text-white transition-colors"
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 2.25 }}
            >
              <Tilt className="relative">
                <Image
                  src="/frame.webp"
                  alt="Minimal API Code Frame"
                  width={690}
                  height={338}
                  className="drop-shadow-lg drop-shadow-indigo-500/30"
                  priority
                />
                <div className="absolute top-2 left-0 w-full h-full flex items-center justify-center">
                  <Image
                    src="/code.webp"
                    alt="Minimal API Code"
                    width={630}
                    height={308}
                    className="transform transition duration-700 hover:scale-117 hover:scale-117 hover:drop-shadow-sm hover:drop-shadow-indigo-500/20"
                    priority
                  />
                </div>
              </Tilt>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="lg:my-8 mx-auto hidden md:flex flex-col items-center cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          onClick={() => {
            document
              .querySelector("#skills")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-sm text-muted-foreground mb-2">
            Scroll down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} weight="bold" className="text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
