"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WhoWeArePage() {
  const zoomIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  };

  const Hero = () => (
    <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center justify-center text-center overflow-hidden">
      <Image
        src="/assets/shared/team-meeting-office.jpg"
        alt="Who We Are"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={zoomIn}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl px-4 sm:px-6 text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Who We Are
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-gray-300">
          At <span className="font-semibold">Paves Technologies</span>, our mission
          is to simplify digital transformation with clarity, precision, and
          innovation.
        </p>
      </motion.div>
    </section>
  );

  const InfoCard = ({ title, text, href }) => (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition border"
    >
      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-[#2a3990]">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{text}</p>

      <Link href={href} className="inline-flex items-center text-[#2a3990] font-medium hover:underline">
        Read More <ArrowRight size={18} className="ml-1" />
      </Link>
    </motion.div>
  );

  return (
    <div className="bg-[#F7FAFF]">
      <Hero />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-[#2a3990]">
          Our Identity
        </h2>

        <p className="text-gray-700 text-base sm:text-lg mb-12 leading-relaxed">
          At Paves Technologies, we blend innovation, vision, and leadership to
          create a future-ready technology ecosystem. Our journey is powered by
          experienced professionals, a strong advisory board, and a
          forward-thinking technology council that drives research, strategy, and
          transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <InfoCard
            title="About Us"
            text="Learn our story, mission, and how we aim to reshape the digital future through engineering excellence and innovation."
            href="/who-we-are/about"
          />

          <InfoCard
            title="Management & Advisory Board"
            text="A team of experienced leaders offering strategic direction to drive Paves' long-term growth and global vision."
            href="/who-we-are/management-advisory-board"
          />

          <InfoCard
            title="Technology Council"
            text="A visionary group of experts guiding research, assessing emerging trends, and shaping Paves’ innovation roadmap."
            href="/who-we-are/technology-council"
          />
        </div>
      </section>
    </div>
  );
}
