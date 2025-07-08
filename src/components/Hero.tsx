"use client";
import { motion } from "framer-motion";
import {
  ArrowDown,
  GithubLogo,
  LinkedinLogo,
  Code,
  Download,
} from "@phosphor-icons/react";
import Link from "next/link";
import TiltedCard from "./TiltedCard";
import RotatingText from "./RotatingText";
import Magnet from "./Magnet";

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
              <div className="w-[20rem] transition">
                <RotatingText
                  texts={[
                    "Software Engineer",
                    ".NET Full-Stack Developer",
                    "Full-Stack Web Developer",
                    "Mobile Developer",
                  ]}
                  mainClassName="px-2 text-md sm:px-2 md:px-3 bg-indigo-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md"
                  staggerFrom={"first"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>
            </motion.h2>
            <motion.p
              className="text-justify text-muted-foreground mb-8 max-w-lg"
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
              <Magnet padding={10} magnetStrength={8}>
                <Link
                  href="#contact"
                  className="me-4 px-6 py-3 outline outline-md outline-purple-600 hover:bg-purple-600/80 hover:text-white rounded-md transition-colors flex items-center gap-2"
                >
                  <Code weight="duotone" /> Let&apos;s work together
                </Link>
              </Magnet>
              <Magnet padding={10} magnetStrength={8}>
                <Link
                  href="/MahmoudMahmoudResume.pdf"
                  className="px-6 py-3 text-white bg-purple-700 hover:bg-purple-600/80 rounded-md transition-colors flex items-center gap-2"
                  target="_blank"
                >
                  <Download weight="duotone" /> Download CV
                </Link>
              </Magnet>
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
            <div className="md:display-block w-24"></div>
            <motion.div
              className="xs:w-90 scale-60 sm:scale-70 md:scale-80 lg:scale-80 xl:scale-90 2xl:scale-100 transition-transform"
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 2.25 }}
            >
              <TiltedCard
                content={
                  <div className="bg-[#1E1E2E] w-[660px] h-[308px] top-0 left-0 rounded-lg py-8 p-4 transform font-mono text-base">
                    <div className="flex items-center justify-between">
                      <div className="grid grid-cols-3 gap-2 w-[56px]">
                        <div className="rounded-full w-[16px] h-[16px] bg-[#aaa] hover:bg-red"></div>
                        <div className="rounded-full w-[16px] h-[16px] bg-[#aaa] hover:bg-yellow"></div>
                        <div className="rounded-full w-[16px] h-[16px] bg-[#aaa] hover:bg-green"></div>
                      </div>
                      <p className="text-white">Program.cs</p>
                      <p className="opacity-0">Program.cs</p>
                    </div>
                  </div>
                }
                captionText=".NET minimal API app"
                containerHeight="308px"
                containerWidth="660px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <div className="scale-120 font-mono text-base">
                    <div className="flex mt-8">
                      <span className="text-[#F5E0DC] w-8">1</span>
                      <span className="text-[#CBA6F7]">var</span>
                      <span className="text-[#F9E2AF] ml-2">builder</span>
                      <span className="text-[#CDD6F4] ml-2">=</span>
                      <span className="text-[#89B4FA] ml-2">
                        WebApplication
                      </span>
                      <span className="text-[#CDD6F4]">.</span>
                      <span className="text-[#89B4FA]">CreateBuilder</span>
                      <span className="text-[#CDD6F4]">(</span>
                      <span className="text-[#CDD6F4]">args</span>
                      <span className="text-[#CDD6F4]">);</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-[#F5E0DC] w-8">2</span>
                      <span className="text-[#CBA6F7]">var</span>
                      <span className="text-[#F9E2AF] ml-2">app</span>
                      <span className="text-[#CDD6F4] ml-2">=</span>
                      <span className="text-[#F9E2AF] ml-2">builder</span>
                      <span className="text-[#CDD6F4]">.</span>
                      <span className="text-[#89B4FA]">Build</span>
                      <span className="text-[#CDD6F4]">(</span>
                      <span className="text-[#CDD6F4]">);</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-[#F5E0DC] w-8">3</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-[#F5E0DC] w-8">4</span>
                      <span className="text-[#F9E2AF]">app</span>
                      <span className="text-[#CDD6F4]">.</span>
                      <span className="text-[#89B4FA]">MapGet</span>
                      <span className="text-[#CDD6F4]">(</span>
                      <span className="text-[#A6E3AB]">&quot;/&quot;</span>
                      <span className="text-[#CDD6F4]">,</span>
                      <span className="text-[#CDD6F4] ml-2">()</span>
                      <span className="text-[#CBA6F7] ml-2">=&gt; </span>
                      <span className="text-[#A6E3AB]">
                        &quot;Hello I am Mahmoud!&quot;
                      </span>
                      <span className="text-[#CDD6F4]">);</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-[#F5E0DC] w-8">5</span>
                    </div>
                    <div className="flex mt-2">
                      <span className="text-[#F5E0DC] w-8">6</span>
                      <span className="text-[#F9E2AF]">app</span>
                      <span className="text-[#CDD6F4]">.</span>
                      <span className="text-[#89B4FA]">Run</span>
                      <span className="text-[#CDD6F4]">(</span>
                      <span className="text-[#CDD6F4]">);</span>
                    </div>
                  </div>

                  // <Image
                  //   src="/code.webp"
                  //   alt="Minimal API Code"
                  //   width={660}
                  //   height={308}
                  //   className=""
                  //   priority
                  // />
                }
              />
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
