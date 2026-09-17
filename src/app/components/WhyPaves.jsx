"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const ITEMS = [
  {
    heading: "Always Ahead of the Curve",
    title: "Innovating Financial Services",
    desc: "Our AI-first solutions are revolutionizing the financial services landscape, empowering institutions to operate faster, smarter, and more efficiently.",
    image: "/assets/home/why-paves/tunnel-light-ceiling.png",
  },
  {
    heading: "A Culture Built to Innovate",
    title: "Trusted Innovation",
    desc: "The financial world thrives on trust and innovation. At Paves Technologies, we've built a culture that embraces both, ensuring that every solution.",
    image: "/assets/home/why-paves/creative-designers-team.png",
  },
  {
    heading: "Transformative Solutions",
    title: "Impactful Results",
    desc: "Whether it's enabling instant payments, embedding financial services into everyday ecosystems, or creating AI-driven capital market strategies.",
    image: "/assets/home/why-paves/office-finance-graphs.png",
  },
  {
    heading: "Human-Driven Intelligence",
    title: "Meaningful Impact",
    desc: "At the heart of AI-driven innovation is human intelligence. Paves Technologies believes in AI that augments human decision-making.",
    image: "/assets/home/why-paves/ai-cognitive-computing.png",
  },
];

function FlipCard({ item, flipped, onClick }) {
  return (
    <motion.div
      className="w-full aspect-square max-w-[260px] sm:max-w-none cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={onClick}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* ── Front: image + heading ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 260px, (max-width: 1024px) 50vw, 25vw"
          />
          {/* Dark gradient bottom overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(11,15,39,0.82) 0%, rgba(11,15,39,0.12) 55%, transparent 100%)",
            }}
          />
          {/* Title at bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-white font-bold text-sm sm:text-base leading-tight">
              {item.title}
            </h4>
          </div>
          {/* Flip hint badge */}
          <motion.div
            className="absolute top-3 right-3 w-7 h-7 rounded-full flex items-center justify-center text-xs text-white font-bold"
            style={{ background: "rgba(210,51,105,0.85)" }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(210,51,105,0)",
                "0 0 14px rgba(210,51,105,0.7)",
                "0 0 0px rgba(210,51,105,0)",
              ],
            }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            ↻
          </motion.div>
        </div>

        {/* ── Back: gradient + description ── */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl flex flex-col items-center justify-center p-5 text-center"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(145deg, #d23369 0%, #9b4fc7 50%, #212d74 100%)",
          }}
        >
          <h3 className="text-white font-bold text-base sm:text-lg mb-3 leading-tight">
            {item.title}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
            {item.desc}
          </p>
          <div
            className="mt-4 h-px w-10 rounded-full"
            style={{ background: "rgba(255,255,255,0.35)" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function WhyPavesSection() {
  const [activeCard, setActiveCard] = useState(null);
  const timerRef = useRef(null);

  const handleCardClick = (index) => {
    if (activeCard === index) {
      setActiveCard(null);
      clearTimeout(timerRef.current);
      return;
    }
    setActiveCard(index);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setActiveCard(null), 5000);
  };

  return (
    <section
      className="w-full pt-8 pb-6 sm:pt-10 sm:pb-8 md:pt-12 md:pb-10 relative overflow-hidden"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span style={{ color: "#212d74" }}>Why </span>
            <span
              style={{
                background:
                  "linear-gradient(130deg, #d23369 0%, #9b4fc7 50%, #3d5fdb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Paves
            </span>
          </h2>

          <motion.div
            className="h-0.5 w-16 mx-auto mt-4 mb-5 rounded-full"
            style={{
              background: "linear-gradient(90deg, #d23369, #3d5fdb)",
              transformOrigin: "left",
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          />

          <p
            className="text-base sm:text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(33,45,116,0.62)" }}
          >
            Explore our values and solutions that drive innovation and impact.
          </p>
        </motion.div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 place-items-center">
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.heading}
              className="relative flex flex-col items-center w-full max-w-sm sm:max-w-none"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Ghost index */}
              <div
                className="absolute -top-4 right-1 select-none pointer-events-none font-bold leading-none"
                style={{ fontSize: "5.5rem", color: "#212d74", opacity: 0.055 }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Heading above card */}
              <h3
                className="font-mono text-[11px] tracking-[0.12em] uppercase text-center px-2 mb-3 relative z-10 font-semibold"
                style={{ color: "#212d74" }}
              >
                {item.heading}
              </h3>

              <FlipCard
                item={item}
                flipped={activeCard === index}
                onClick={() => handleCardClick(index)}
              />

              <p
                className="mt-2 text-center font-mono text-[10px] tracking-[0.12em] uppercase select-none pointer-events-none"
                style={{ color: "rgba(33,45,116,0.35)" }}
              >
                Tap to explore
              </p>

              {/* Accent underline */}
              <motion.div
                className="mt-3 h-px w-10 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #d23369, #3d5fdb)",
                  transformOrigin: "left",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 + 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
