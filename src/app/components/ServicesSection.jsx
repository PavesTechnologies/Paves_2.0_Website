"use client";

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Business & Technology Advisory Consulting",
    desc: "We help organizations align business goals with advanced technology strategies to drive operational excellence.",
    image: "/assets/home/services/business-and-technology-advisory.png",
    href: "/what-we-do/services/business-and-technology",
  },
  {
    title: "Artificial Intelligence",
    desc: "We build AI systems that automate workflows, enhance predictions, and accelerate decision-making.",
    image: "/assets/home/services/artificial-intelligence.png",
    href: "/what-we-do/services/artificial-intelligence",
  },
  {
    title: "Cloud Engineering And DevOps",
    desc: "We architect scalable cloud systems with automated CI/CD pipelines for faster deployments.",
    image: "/assets/home/services/cloud-engineering-and-devops.png",
    href: "/what-we-do/services/cloud-and-devops",
  },
  {
    title: "Data And Analytics",
    desc: "We deliver analytics platforms, dashboards, and predictive modeling to power data-driven decisions.",
    image: "/assets/home/services/data-analytics.png",
    href: "/what-we-do/services/data-and-analytics",
  },
  {
    title: "Product Management & Engineering",
    desc: "We build scalable digital products focused on usability, engineering excellence, and innovation.",
    image: "/assets/home/services/product-management-and-engineering.png",
    href: "/what-we-do/services/product-management",
  },
  {
    title: "Enterprise Automation",
    desc: "We automate repetitive workflows using AI, bots, and workflow orchestration tools.",
    image: "/assets/home/services/enterprise-automation.png",
    href: "/what-we-do/services/enterprise-automation",
  },
  {
    title: "Legacy Support & Modernization",
    desc: "We modernize legacy apps, refactor systems, and migrate workloads to modern platforms.",
    image: "/assets/home/services/legacy-support-and-modernisation.png",
    href: "/what-we-do/services/legacy-support",
  },
  {
    title: "Cyber Security",
    desc: "We implement secure architectures, access control, and threat detection systems.",
    image: "/assets/home/services/cyber-security.png",
    href: "/what-we-do/services/cyber-security",
  },
  {
    title: "Identity And Access Management",
    desc: "We deploy SSO, MFA, and RBAC to secure identity access across applications.",
    image: "/assets/home/services/identity-and-access-management.png",
    href: "/what-we-do/services/identity-and-access-management",
  },
  {
    title: "Next Gen Technologies",
    desc: "We build solutions using IoT, Blockchain, AR/VR, and intelligent edge systems.",
    image: "/assets/home/services/next-gen-technologies.png",
    href: "/what-we-do/services/next-gen-technologies",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /* The card stack is driven by scroll progress, so its speed is set by how
     tall the section is: the pinned viewport eats 100vh, leaving
     (section height - 100vh) of travel spread across all 10 services.
     At the original 300vh that was only ~20vh of scrolling per service, which
     is what made the stack fly past. 600vh gives ~50vh each. */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 24,
    mass: 0.35,
    restDelta: 0.0005,
  });

  const cardsY = useTransform(smoothProgress, [0, 1], ["0%", "-73%"]);

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const clamped = Math.min(Math.max(latest, 0), 0.999);
    setCurrentServiceIndex(Math.floor(clamped * SERVICES.length));
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-[600vh] w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/home/services/services-bg.png')" }}
    >
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden"
        style={{ background: "rgba(11,15,39,0.9)" }}
      >
        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-4 lg:gap-12 xl:gap-16 py-6 sm:py-10 lg:py-0 relative z-10">

          {/* Mobile heading */}
          <div className="lg:hidden text-white text-center flex-shrink-0 pt-6">
            <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#F0F2FA" }}>
              Empowering Businesses Through Technology
            </h2>
          </div>

          {/* ── LEFT: Desktop sidebar ── */}
          <div className="hidden lg:flex flex-col justify-center max-w-full lg:max-w-lg xl:max-w-xl text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
              <span style={{ color: "#F0F2FA" }}>
                Empowering Businesses Through{" "}
              </span>
              <span
                style={{
                  background:
                    "linear-gradient(130deg, #d23369 0%, #9b4fc7 50%, #3d5fdb 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Technology &amp; Innovation
              </span>
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
              className="text-sm sm:text-base md:text-lg max-w-md"
              style={{ color: "rgba(240,242,250,0.58)" }}
            >
              Discover our powerful range of services designed to accelerate
              digital transformation and enable future-ready businesses.
            </p>

            {/* Live service counter */}
            <div className="mt-8 pt-6 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div
                className="font-mono text-[10px] tracking-[0.16em] uppercase mb-3"
                style={{ color: "rgba(240,242,250,0.3)" }}
              >
                Currently showing
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentServiceIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-mono text-sm font-bold"
                      style={{ color: "#d23369" }}
                    >
                      {String(currentServiceIndex + 1).padStart(2, "0")} / {String(SERVICES.length).padStart(2, "0")}
                    </span>
                    <span
                      className="text-sm leading-snug"
                      style={{ color: "rgba(240,242,250,0.65)" }}
                    >
                      {SERVICES[currentServiceIndex].title}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── RIGHT: Scrolling cards ── */}
          <motion.div
            style={{ y: cardsY }}
            className="space-y-4 sm:space-y-5 pt-4 sm:pt-8 lg:pt-20 w-full lg:w-[460px] xl:w-[500px] flex-shrink-0 lg:self-start"
          >
            {SERVICES.map((service, index) => (
              <Link key={service.title} href={service.href} className="block">
                <motion.div
                  className="group overflow-hidden rounded-xl border transition-colors duration-300"
                  style={{
                    background: "rgba(11,15,39,0.92)",
                    borderColor: "rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(210,51,105,0.28)",
                    boxShadow: "0 0 32px rgba(210,51,105,0.14)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Image */}
                  <div className="w-full h-40 sm:h-44 overflow-hidden relative">
                    <Image
                      src={service.image}
                      width={800}
                      height={580}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      alt={service.title}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 500px"
                    />
                    {/* Service number badge */}
                    <div
                      className="absolute top-3 left-3 font-mono text-[11px] tracking-[0.12em] px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(11,15,39,0.75)",
                        color: "#d23369",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(210,51,105,0.25)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Text */}
                  <div className="px-5 pb-5 pt-4">
                    <h3
                      className="font-semibold text-base sm:text-lg leading-tight mb-1.5"
                      style={{ color: "#F0F2FA" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm leading-relaxed mb-3"
                      style={{ color: "rgba(240,242,250,0.5)" }}
                    >
                      {service.desc}
                    </p>
                    <span
                      className="inline-flex items-center gap-1 font-mono text-[11px] tracking-wide group-hover:gap-2 transition-all duration-200"
                      style={{ color: "#d23369" }}
                    >
                      Learn more <span>→</span>
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
