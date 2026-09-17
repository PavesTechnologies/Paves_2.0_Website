"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const TICKER_ITEMS = [
  "AI-Powered Analytics",
  "Cloud-Native Architecture",
  "FinTech Transformation",
  "Enterprise Security",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function HeroSection() {
  const [particles, setParticles] = useState([]);
  const [tickerIndex, setTickerIndex] = useState(0);

  useEffect(() => {
    const COLORS = ["#d23369", "#3d5fdb", "#a78bfa"];
    setParticles(
      Array.from({ length: 20 }, (_, i) => ({
        id: Math.random().toString(36).slice(2),
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2.2 + 0.8,
        duration: Math.random() * 5 + 4,
        delay: Math.random() * 5,
        driftX: (Math.random() - 0.5) * 80,
        driftY: -(Math.random() * 140 + 50),
        color: COLORS[i % 3],
      }))
    );
  }, []);

  useEffect(() => {
    const id = setInterval(
      () => setTickerIndex((n) => (n + 1) % TICKER_ITEMS.length),
      2800
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative flex items-center min-h-screen text-white overflow-hidden pt-20"
      style={{ background: "var(--background-dark, #0b0f27)" }}
    >
      {/* ── Background image at very low opacity ── */}
      <Image
        src="/assets/home/hero/hero-background.png"
        alt=""
        fill
        priority
        quality={50}
        sizes="100vw"
        className="object-cover object-center"
        style={{ opacity: 0.12 }}
      />

      {/* ── Radial glow — primary (accent rose, left-center) ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 58% 68% at 22% 55%, rgba(210,51,105,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ── Radial glow — secondary (deep blue, right) ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 52% 62% at 78% 45%, rgba(33,45,116,0.52) 0%, transparent 70%)",
        }}
      />

      {/* ── Top/bottom vignette ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(11,15,39,0.4) 0%, transparent 28%, transparent 68%, rgba(11,15,39,0.65) 100%)",
        }}
      />

      {/* ── Subtle grid texture ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.032) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.032) 1px, transparent 1px)
          `,
          backgroundSize: "58px 58px",
        }}
      />

      {/* ── Floating particles ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 5}px ${p.color}70`,
            }}
            animate={{
              x: [0, p.driftX, 0],
              y: [0, p.driftY, 0],
              opacity: [0, 0.78, 0],
              scale: [0.3, 1, 0.3],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* ════════════════════════════════
          Main layout — split grid
          ════════════════════════════════ */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_520px] gap-10 lg:gap-14 items-center py-14 lg:py-0">

          {/* ── LEFT: Text column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            {/* Badge
            <motion.div variants={itemVariants} className="mb-7">
              <span
                className="inline-flex items-center gap-2.5 border px-4 py-1.5 font-mono text-[10px] tracking-[0.2em] uppercase font-medium"
                style={{
                  borderColor: "rgba(210,51,105,0.38)",
                  color: "#f9a8c9",
                  background: "rgba(210,51,105,0.07)",
                  letterSpacing: "0.2em",
                }}
              > */}
                {/* <motion.span
                  className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#d23369" }}
                  animate={{ opacity: [1, 0.22, 1] }}
                  transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut" }}
                />
                AI &amp; Cloud · Financial Technology
              </span>
            </motion.div> */}

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="font-bold leading-[1.07] tracking-tight">
                <span
                  className="block text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[3.2rem] xl:text-[3.8rem]"
                  style={{ color: "#F0F2FA" }}
                >
                  Paving the Bridge Between
                </span>
                <span
                  className="block text-4xl sm:text-5xl md:text-[3.4rem] lg:text-[3.2rem] xl:text-[3.8rem] mt-1"
                  style={{
                    background:
                      "linear-gradient(130deg, #d23369 0%, #9b4fc7 46%, #3d5fdb 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Tech &amp; Trust
                </span>
              </h1>
            </motion.div>

            {/* Gradient accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.72, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                transformOrigin: "left",
                height: "3px",
                background:
                  "linear-gradient(90deg, #d23369 0%, #9b4fc7 50%, #3d5fdb 100%)",
              }}
              className="mt-4 rounded-full w-44"
            />

            {/* Cycling ticker */}
            <motion.div
              variants={itemVariants}
              className="mt-7 flex items-center gap-3"
            >
              <span
                className="font-mono text-[10px] tracking-[0.16em] uppercase flex-shrink-0"
                style={{ color: "rgba(240,242,250,0.38)" }}
              >
                We deliver:
              </span>
              <div className="relative h-5 overflow-hidden" style={{ width: "230px" }}>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={tickerIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 font-mono text-[11px] tracking-[0.1em] font-semibold uppercase"
                    style={{ color: "#f472b6" }}
                  >
                    {TICKER_ITEMS[tickerIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="mt-6 text-base sm:text-lg leading-relaxed max-w-[30rem]"
              style={{ color: "rgba(240,242,250,0.65)" }}
            >
              Transforming ideas into{" "}
              <span style={{ color: "#f9a8c9", fontWeight: 600 }}>
                scalable solutions
              </span>{" "}
              with cutting-edge AI and cloud technologies
            </motion.p>

            {/* CTA — `self-start` keeps the wrapper hugging the button. As a
                flex-column child it would otherwise stretch to the full column
                width, which is what made the old pulsing ring read as a box. */}
            <motion.div variants={itemVariants} className="mt-9 self-start">
              <Link href="/what-we-do/services">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 48px rgba(210,51,105,0.55)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white overflow-hidden"
                  style={{
                    background:
                      "linear-gradient(135deg, #d23369 0%, #9b4fc7 100%)",
                    boxShadow: "0 0 24px rgba(210,51,105,0.32)",
                  }}
                >
                  <span className="relative z-10">Explore Services</span>
                  <ArrowRight
                    size={15}
                    className="relative z-10 transition-transform duration-200 group-hover:translate-x-1"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                    style={{ background: "rgba(255,255,255,0.12)" }}
                  />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Visual column ── */}
          <motion.div
            initial={{ opacity: 0, x: 55, scale: 0.93 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1.1,
              delay: 0.22,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:flex justify-center items-center relative"
          >
            {/* Glow blob behind image */}
            <div
              className="absolute rounded-full"
              style={{
                inset: "-15%",
                background:
                  "radial-gradient(circle, rgba(210,51,105,0.22) 0%, rgba(33,45,116,0.35) 45%, transparent 72%)",
                filter: "blur(72px)",
              }}
            />

            {/* Hexagonal clipped image */}
            <div
              className="relative clip-hexagon overflow-hidden"
              style={{ width: "400px", height: "460px" }}
            >
              <Image
                src="/assets/home/hero/hero-visual.png"
                alt="Futuristic AI Technology — Paves Technologies"
                fill
                priority
                quality={80}
                sizes="(max-width: 1280px) 400px, 460px"
                className="object-cover object-center"
                style={{ transform: "scale(1.08)" }}
              />

              {/* Scanline overlay — the deliberate aesthetic risk:
                  hairline horizontal rules at rose tint, ~4% opacity with
                  overlay blend, making the photo feel processed / engineered */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(210,51,105,0.045) 2px, rgba(210,51,105,0.045) 3px)",
                  mixBlendMode: "overlay",
                  pointerEvents: "none",
                }}
              />

              {/* Edge vignette — blends hexagon into background */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, transparent 45%, rgba(11,15,39,0.6) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Accent ring orbiting the hexagon */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-18px",
                border: "1px solid rgba(210,51,105,0.14)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: "-40px",
                border: "1px solid rgba(61,95,219,0.1)",
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.1, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5 cursor-default select-none"
          style={{ color: "rgba(240,242,250,0.52)" }}
        >
          <span className="font-mono text-[10px] tracking-[0.18em] uppercase">
            Scroll to explore
          </span>
          <ChevronDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
