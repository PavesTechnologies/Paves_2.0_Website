"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const STEPS = [
  { step: 1, title: "Apply",    description: "Submit your profile and area of expertise" },
  { step: 2, title: "Connect",  description: "Meet our team and explore opportunities" },
  { step: 3, title: "Innovate", description: "Join a culture that builds what's next" },
];

export default function JoinUs() {
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const imageX      = useTransform(scrollYProgress, [0, 1],   ["0%", "55%"]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const textY       = useTransform(scrollYProgress, [0.2, 0.6], [50, 0]);

  return (
    <section
      className="relative w-full text-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 overflow-hidden"
      style={{ background: "#0b0f27" }}
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.024) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.024) 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

      {/* Radial glow — rose, bottom-left */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 20% 80%, rgba(210,51,105,0.1) 0%, transparent 70%)",
        }}
      />

      <div
        ref={wrapperRef}
        className="relative max-w-6xl mx-auto min-h-[340px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[560px] flex items-center"
      >
        {/* ── Parallax image ── */}
        <motion.div
          style={{ x: imageX }}
          className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden"
        >
          <Image
            src="/assets/home/join-us/businesswoman-holding-plan.png"
            alt="Team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
          {/* Dark overlay so text stays readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(11,15,39,0.92) 0%, rgba(11,15,39,0.6) 55%, rgba(11,15,39,0.2) 100%)",
            }}
          />
        </motion.div>

        {/* ── Content overlay ── */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-20 w-full flex flex-col lg:flex-row items-start gap-10 lg:gap-20"
        >
          {/* Left: Heading + CTA */}
          <div className="max-w-xs sm:max-w-sm md:max-w-md">
            {/* <span
              className="inline-flex items-center gap-2 border px-4 py-1.5 font-sans text-[10px] tracking-[0.2em] uppercase font-medium mb-5"
              style={{
                borderColor: "rgba(210,51,105,0.35)",
                color: "#f9a8c9",
                background: "rgba(210,51,105,0.07)",
              }}
            >
              Join Our Team
            </span> */}

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
              <span style={{ color: "#F0F2FA" }}>Build the </span>
              <span
                style={{
                  background:
                    "linear-gradient(130deg, #d23369 0%, #9b4fc7 50%, #3d5fdb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Future
              </span>
              <span style={{ color: "#F0F2FA" }}> With Us</span>
            </h1>

            <motion.div
              className="h-0.5 w-14 rounded-full mb-5"
              style={{
                background: "linear-gradient(90deg, #d23369, #3d5fdb)",
                transformOrigin: "left",
              }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />

            <p
              className="text-sm sm:text-base md:text-lg mb-7 leading-relaxed"
              style={{ color: "rgba(240,242,250,0.65)" }}
            >
              Be part of a culture that values innovation, growth, creativity,
              and meaningful impact.
            </p>

            <motion.a
              href={
                process.env.NEXT_PUBLIC_CAREERS_URL ||
                "https://careers.pavestechnologies.com"
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(210,51,105,0.4)",
              }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white"
              style={{
                background:
                  "linear-gradient(135deg, #d23369 0%, #9b4fc7 100%)",
              }}
            >
              Join Us <span>→</span>
            </motion.a>
          </div>

          {/* Right: Process steps */}
          <div className="hidden md:block pt-1">
            <p
              className="font-sans text-[11px] tracking-[0.16em] uppercase mb-6"
              style={{ color: "rgba(240,242,250,0.38)" }}
            >
              How It Works
            </p>

            <div className="space-y-0">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  {/* Step indicator + connector */}
                  <div className="flex flex-col items-center">
                    <span
                      className="font-semibold text-lg shrink-0"
                      style={{ color: "#d23369" }}
                    >
                      {s.step}
                    </span>
                    {i < STEPS.length - 1 && (
                      <div
                        className="w-px mt-1"
                        style={{
                          height: "2.2rem",
                          background:
                            "linear-gradient(to bottom, rgba(210,51,105,0.5), transparent)",
                        }}
                      />
                    )}
                  </div>

                  {/* Step text */}
                  <div className="pb-6">
                    <motion.div
                      className="border rounded-lg px-4 py-3"
                      style={{
                        borderColor: "rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(8px)",
                      }}
                      whileHover={{
                        scale: 1.02,
                        background: "rgba(255,255,255,0.08)",
                        borderColor: "rgba(210,51,105,0.25)",
                        boxShadow: "0 0 20px rgba(210,51,105,0.1)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <h4
                        className="font-semibold text-sm mb-0.5"
                        style={{ color: "#F0F2FA" }}
                      >
                        {s.title}
                      </h4>
                      <p
                        className="text-xs leading-relaxed"
                        style={{ color: "rgba(240,242,250,0.55)" }}
                      >
                        {s.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
