"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { DualMarquee } from "@/components/infinite-marquee"
import { PillCta } from "@/components/pill-cta"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { site } from "@/lib/site"

export function HeroSection() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.8])
  const opacity = useTransform(scrollYProgress, [0, 1], [0.16, 0.03])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#B2A598] text-[#1a1a1a]"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-t from-black via-black/75 to-transparent" />

      <motion.div
        style={shouldReduceMotion ? undefined : { scale, opacity }}
        className="pointer-events-none absolute inset-x-0 bottom-[8%] z-0 flex justify-center"
      >
        <span className="select-none text-[18vw] font-black leading-none tracking-tighter text-white/90">
          KRISHNA
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-56 pt-28 sm:pb-64">
        <motion.div
          className="relative z-20 max-w-md space-y-6 lg:max-w-lg"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUp}
            className="text-xl leading-snug text-[#1a1a1a] sm:text-2xl md:text-[28px] md:leading-snug"
          >
            Hello there, I&apos;m Krishna, an AI engineer and a Digital
            Craftsman who Turns Data into Intelligence.
          </motion.p>

          <motion.div variants={fadeUp}>
            <PillCta href={site.resume} label="View Resume" external />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-30 mx-auto mt-2 w-[min(96vw,40rem)] md:w-[min(78vw,48rem)] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:w-[min(72vw,56rem)] lg:-translate-x-1/2"
          whileHover={{
            scale: 1.03,
            filter: "drop-shadow(0 0 28px rgba(0,0,0,0.35))",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="pointer-events-none absolute left-1/2 top-[12%] h-64 w-64 -translate-x-1/2 rounded-full bg-white/30 blur-3xl" />
          <Image
            src={site.portrait}
            alt="Krishna H, Machine Learning and Generative AI Engineer"
            width={1200}
            height={1500}
            priority
            className="hero-cutout relative h-[68vh] w-full object-contain object-bottom grayscale contrast-125 drop-shadow-[0_24px_40px_rgba(0,0,0,0.45)] md:h-[86vh]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-transparent" />
        </motion.div>
      </div>

      <DualMarquee />
    </section>
  )
}
