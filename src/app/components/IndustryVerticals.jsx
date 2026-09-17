"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const ITEMS = [
  {
    title: "Payments",
    description:
      "Payment services comprise a variety of solutions that facilitate secure and efficient financial transactions. The aim is to provide fast, reliable, and scalable options for both individuals and businesses.",
    image: "/assets/home/industry-verticals/payments.jpg",
    href: "/what-we-do/industry-verticals/payments",
  },
  {
    title: "Banking",
    description:
      "Banking encompasses a broad spectrum of financial services including personal and business accounts, loans, deposit services, fund transfers, and e-banking.",
    image: "/assets/home/industry-verticals/banking.jpg",
    href: "/what-we-do/industry-verticals/banking",
  },
  {
    title: "Payments Fraud & AML",
    description:
      "Payments Fraud & Anti-Money Laundering (AML) services implement rigorous mechanisms to detect and prevent financial crime.",
    image: "/assets/home/industry-verticals/pay-fraud.jpg",
    href: "/what-we-do/industry-verticals/payments-fraud-and-aml",
  },
  {
    title: "Governance Risk & Compliance",
    description:
      "Governance Risk & Compliance (GRC) refers to frameworks and solutions that help organizations meet regulatory requirements, manage risks, and ensure ethical practices.",
    image: "/assets/home/industry-verticals/risk-compliance.jpg",
    href: "/what-we-do/industry-verticals/governance-risk-compliance",
  },
  {
    title: "Insurance",
    description:
      "Insurance services provide financial protection against various risks such as accidents, health issues, property loss, and business liability.",
    image: "/assets/home/industry-verticals/insurance.jpg",
    href: "/what-we-do/industry-verticals/insurance",
  },
  {
    title: "Capital Markets",
    description:
      "Capital Markets consist of platforms and products that enable investment, trading, and the allocation of equity and debt.",
    image: "/assets/home/industry-verticals/capital-markets.jpg",
    href: "/what-we-do/industry-verticals/capital-markets",
  },
];

export default function IndustryVerticals() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex((i) => (i === 0 ? ITEMS.length - 1 : i - 1));
  const handleNext = () =>
    setCurrentIndex((i) => (i === ITEMS.length - 1 ? 0 : i + 1));

  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % ITEMS.length);
    }, 4500);
    return () => clearInterval(id);
  }, [isHovered]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") setCurrentIndex((i) => (i === 0 ? ITEMS.length - 1 : i - 1));
      if (e.key === "ArrowRight") setCurrentIndex((i) => (i + 1) % ITEMS.length);
    };
    globalThis.addEventListener("keydown", handleKey);
    return () => globalThis.removeEventListener("keydown", handleKey);
  }, []);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      className="w-full py-14 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{ background: "#F4F7FF" }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,57,144,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(42,57,144,0.05) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Ghost slide number — decorative */}
      <div
        className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-bold leading-none"
        style={{ fontSize: "22vw", color: "#212d74", opacity: 0.04 }}
      >
        {String(currentIndex + 1).padStart(2, "0")}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-9 sm:mb-11"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span style={{ color: "#212d74" }}>Industry </span>
            <span
              style={{
                background:
                  "linear-gradient(130deg, #d23369 0%, #9b4fc7 50%, #3d5fdb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Verticals
            </span>
          </h2>

          <motion.div
            className="h-0.5 w-16 mx-auto mt-4 rounded-full"
            style={{
              background: "linear-gradient(90deg, #d23369, #3d5fdb)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          />
        </motion.div>

        {/* ── Carousel ── */}
        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className="flex flex-col lg:flex-row items-center gap-8 lg:gap-14"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* Image column — smaller than the original 55%/4:3 so it no
              longer dominates the card; 3:2 keeps a natural photo crop. */}
          <div className="w-full lg:w-[42%] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${currentIndex}`}
                initial={{ opacity: 0, x: -40, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 40, scale: 0.97 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
                style={{ aspectRatio: "3/2" }}
              >
                <Image
                  src={ITEMS[currentIndex].image}
                  alt={ITEMS[currentIndex].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                {/* Rose accent corner */}
                <div
                  className="absolute top-0 left-0 w-24 h-1"
                  style={{ background: "linear-gradient(90deg, #d23369, transparent)" }}
                />
                <div
                  className="absolute top-0 left-0 w-1 h-24"
                  style={{ background: "linear-gradient(180deg, #d23369, transparent)" }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Progress bar */}
            <div
              className="mt-4 h-0.5 w-full rounded-full overflow-hidden"
              style={{ background: "rgba(42,57,144,0.12)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #d23369, #3d5fdb)",
                  width: `${((currentIndex + 1) / ITEMS.length) * 100}%`,
                }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
              />
            </div>
          </div>

          {/* Text column */}
          <div className="w-full lg:w-[58%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${currentIndex}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Slide counter */}
                <div
                  className="font-sans text-[11px] tracking-[0.18em] uppercase mb-3"
                  style={{ color: "rgba(33,45,116,0.4)" }}
                >
                  {String(currentIndex + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}
                </div>

                <h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
                  style={{ color: "#212d74" }}
                >
                  {ITEMS[currentIndex].title}
                </h3>

                <div
                  className="h-0.5 w-12 rounded-full mb-5"
                  style={{ background: "linear-gradient(90deg, #d23369, #3d5fdb)" }}
                />

                <p
                  className="text-base sm:text-lg leading-relaxed mb-8"
                  style={{ color: "rgba(33,45,116,0.7)" }}
                >
                  {ITEMS[currentIndex].description}
                </p>

                {/* Was a bare <button> with no href — now a real Link to
                    each vertical's own detail page. */}
                <Link
                  href={ITEMS[currentIndex].href}
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-200 hover:gap-3"
                  style={{ color: "#d23369" }}
                >
                  Read more <span className="text-base">→</span>
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* ── Navigation ── */}
            <div className="flex items-center gap-4 mt-10">
              {/* Prev */}
              <motion.button
                aria-label="Previous"
                onClick={handlePrev}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-colors duration-200"
                style={{
                  borderColor: "rgba(33,45,116,0.25)",
                  color: "#212d74",
                  background: "rgba(33,45,116,0.04)",
                }}
              >
                ←
              </motion.button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {ITEMS.map((item, i) => (
                  <button
                    key={item.title}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setCurrentIndex(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === currentIndex ? "24px" : "6px",
                      height: "6px",
                      background:
                        i === currentIndex
                          ? "linear-gradient(90deg, #d23369, #3d5fdb)"
                          : "rgba(33,45,116,0.25)",
                    }}
                  />
                ))}
              </div>

              {/* Next */}
              <motion.button
                aria-label="Next"
                onClick={handleNext}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="w-11 h-11 rounded-full border-2 flex items-center justify-center transition-colors duration-200"
                style={{
                  borderColor: "rgba(33,45,116,0.25)",
                  color: "#212d74",
                  background: "rgba(33,45,116,0.04)",
                }}
              >
                →
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
