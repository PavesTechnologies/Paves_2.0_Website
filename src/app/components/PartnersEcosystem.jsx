"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const PARTNERSHIPS = [
  {
    title: "Your Success Is Our Success",
    desc: "We believe that true partnership begins with shared success. Our mission is to fully align with your vision, challenges, and long-term goals so we can co-create solutions that deliver measurable, sustainable impact.",
  },
  {
    title: "Seeing Through Your Lens",
    desc: "Every business is unique, and so are the challenges and opportunities it encounters. We immerse ourselves in your world to understand your priorities and create meaningful solutions.",
  },
  {
    title: "Building Trust Through Transparency",
    desc: "Trust is the foundation of every long-lasting relationship. We communicate openly, share progress proactively, and keep transparency at the core of everything we do.",
  },
];

function PartnerCard({ title, desc, flipped, onClick }) {
  return (
    <div
      className="
        w-[310px] h-[150px]
        sm:w-[340px] sm:h-[155px]
        md:w-[370px] md:h-[165px]
        lg:w-[390px] lg:h-[170px]
        cursor-pointer
        flex-shrink-0
      "
      style={{ perspective: "1200px" }}
      onClick={onClick}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* =====================================================
            FRONT
        ====================================================== */}
        <div
          className="
            absolute inset-0
            rounded-xl
            overflow-hidden
            flex items-center
            px-6 sm:px-7
          "
          style={{
            backfaceVisibility: "hidden",
            background: "rgba(15, 21, 53, 0.28)",
            border: "1px solid rgba(255, 255, 255, 0.14)",
            backdropFilter: "blur(4px)",
            WebkitBackdropFilter: "blur(4px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.14)",
          }}
        >
          {/* Quote mark */}
          <div
            className="
              absolute
              top-4
              left-5
              text-5xl
              font-bold
              leading-none
              select-none
            "
            style={{
              background:
                "linear-gradient(135deg, #d23369, #9b4fc7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            &ldquo;
          </div>

          {/* Card content */}
          <div className="w-full mt-5">
            <h3
              className="
                font-bold
                text-base
                sm:text-lg
                md:text-lg
                leading-tight
                whitespace-nowrap
              "
              style={{
                color: "#F0F2FA",
              }}
            >
              {title}
            </h3>

            {/* Accent line */}
            <div
              className="h-px w-10 mt-3 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, #d23369, #3d5fdb)",
              }}
            />
          </div>

          {/* Flip button */}
          <motion.div
            className="
              absolute
              bottom-4
              right-4
              w-7
              h-7
              rounded-full
              flex
              items-center
              justify-center
              text-xs
              text-white
              font-bold
            "
            style={{
              background: "rgba(210, 51, 105, 0.72)",
            }}
            animate={{
              boxShadow: [
                "0 0 0px rgba(210,51,105,0)",
                "0 0 12px rgba(210,51,105,0.65)",
                "0 0 0px rgba(210,51,105,0)",
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↻
          </motion.div>

          {/* Subtle glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-xl
            "
            style={{
              background:
                "radial-gradient(ellipse 80% 80% at 20% 80%, rgba(210,51,105,0.07) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* =====================================================
            BACK
        ====================================================== */}
        <div
          className="
            absolute inset-0
            rounded-xl
            overflow-hidden
            flex flex-col
            justify-center
            px-6 sm:px-7
          "
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background:
              "linear-gradient(145deg, rgba(210,51,105,0.48), rgba(155,79,199,0.45), rgba(33,45,116,0.52))",
            border: "1px solid rgba(255,255,255,0.16)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.16)",
          }}
        >
          <h3
            className="
              font-bold
              text-sm
              sm:text-base
              mb-2
              text-white
              leading-tight
            "
          >
            {title}
          </h3>

          <p
            className="
              text-white/90
              text-xs
              sm:text-sm
              leading-relaxed
            "
          >
            {desc}
          </p>

          <div
            className="mt-3 h-px w-10 rounded-full"
            style={{
              background: "rgba(255,255,255,0.35)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function SectionHeading() {
  return (
    <div className="text-white text-center">
      {/* Label */}
      {/* <span
        className="
          inline-flex
          items-center
          gap-2
          border
          px-4
          py-1.5
          font-mono
          text-[10px]
          tracking-[0.2em]
          uppercase
          font-medium
          mb-5
        "
        style={{
          borderColor: "rgba(210,51,105,0.35)",
          color: "#f9a8c9",
          background: "rgba(210,51,105,0.07)",
        }}
      >
        Our Partnership Promise
      </span> */}

      {/* Main heading */}
      <h2
        className="
          text-3xl
          sm:text-4xl
          md:text-5xl
          font-bold
          leading-snug
          mb-4
          px-2
        "
      >
        <span style={{ color: "#F0F2FA" }}>
          Your Vision, Our Commitment &ndash; A{" "}
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
          Partnership Built for the Future
        </span>
      </h2>

      {/* Accent line */}
      <motion.div
        className="h-0.5 w-16 mx-auto mb-5 rounded-full"
        style={{
          background:
            "linear-gradient(90deg, #d23369, #3d5fdb)",
          transformOrigin: "left",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.3,
          duration: 0.7,
        }}
      />

      {/* Description */}
      <p
        className="
          text-sm
          sm:text-base
          max-w-2xl
          mx-auto
        "
        style={{
          color: "rgba(240,242,250,0.6)",
        }}
      >
        At Paves Technologies, we create long-term strategic partnerships to
        ensure our solutions deliver sustainable long-term value.
      </p>
    </div>
  );
}

export default function PartnersEcosystem() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const timerRef = useRef(null);

  /* ============================================================
     SCROLL TRANSITION
  ============================================================ */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
    Keep the same horizontal transition.
    Cards move from right to left while scrolling.
  */
  const cardsX = useTransform(
    scrollYProgress,
    [0, 1],
    ["40%", "-40%"]
  );

  const scrollHintOpacity = useTransform(
    scrollYProgress,
    [0, 0.15],
    [1, 0]
  );

  /* ============================================================
     CARD FLIP
  ============================================================ */

  const handleCardClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      clearTimeout(timerRef.current);
      return;
    }

    setActiveIndex(index);

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setActiveIndex(null);
    }, 4000);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/assets/home/partners/future-visions-technology.png')",
      }}
    >
      {/* ==========================================================
          MOBILE
      =========================================================== */}
      <div
        className="
          md:hidden
          py-16
          px-4
          relative
        "
        style={{
          background: "rgba(11,15,39,0.72)",
        }}
      >
        {/* Grid */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* Content */}
        <div
          className="
            max-w-lg
            mx-auto
            mb-14
            relative
            z-10
          "
        >
          <SectionHeading />
        </div>

        {/* Cards */}
        <div
          className="
            flex
            flex-col
            items-center
            gap-5
            relative
            z-10
          "
        >
          {PARTNERSHIPS.map((p, i) => (
            <PartnerCard
              key={p.title}
              title={p.title}
              desc={p.desc}
              flipped={activeIndex === i}
              onClick={() => handleCardClick(i)}
            />
          ))}
        </div>
      </div>

      {/* ==========================================================
          DESKTOP
      =========================================================== */}
      <div
        className="
          hidden
          md:block
          relative
          h-[260vh]
          lg:h-[250vh]
        "
      >
        <div
          className="
            sticky
            top-0
            h-screen
            w-full
            overflow-hidden
            px-6
            md:px-10
          "
          style={{
            background: "rgba(11,15,39,0.72)",
          }}
        >
          {/* ======================================================
              GRID BACKGROUND
          ======================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
            "
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,.022) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,.022) 1px, transparent 1px)
              `,
              backgroundSize: "55px 55px",
            }}
          />

          {/* ======================================================
              CENTRE GLOW
          ======================================================= */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
            "
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(210,51,105,0.06) 0%, transparent 70%)",
            }}
          />

          {/* ======================================================
              CONTENT
              
              Kept toward the upper portion of the section.
          ======================================================= */}
          <div
            className="
              absolute
              top-[8%]
              left-0
              right-0
              flex
              justify-center
              px-4
              z-0
            "
          >
            <div
              className="
                max-w-4xl
                w-full
              "
            >
              <SectionHeading />
            </div>
          </div>

          {/* ======================================================
              CARDS

              Positioned BELOW the complete content.
              This is the main change.

              Previously:
                  top-[56%]

              Now:
                  top-[68%]

              This gives a clear visual separation between:
                  Heading
                  Description
                  Cards
                  Next section
          ======================================================= */}
          <motion.div
            style={{
              x: cardsX,
            }}
            className="
              absolute
              top-[68%]
              left-0
              flex
              gap-5
              lg:gap-7
              items-center
              z-10
            "
          >
            {PARTNERSHIPS.map((p, i) => (
              <PartnerCard
                key={p.title}
                title={p.title}
                desc={p.desc}
                flipped={activeIndex === i}
                onClick={() => handleCardClick(i)}
              />
            ))}
          </motion.div>

          {/* ======================================================
              SCROLL HINT
          ======================================================= */}
          <motion.div
            style={{
              opacity: scrollHintOpacity,
            }}
            className="
              absolute
              bottom-8
              left-1/2
              -translate-x-1/2
              z-20
              pointer-events-none
            "
          >
            <p
              className="
                font-mono
                text-[11px]
                tracking-[0.18em]
                uppercase
                flex
                items-center
                gap-2
                select-none
              "
              style={{
                color: "rgba(240,242,250,0.38)",
              }}
            >
              <span>←</span>
              <span>Scroll to explore</span>
              <span>→</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}