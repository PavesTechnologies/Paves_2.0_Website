"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { Sparkles, ArrowRight, BookOpen } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function InsightsPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((sec) => {
      if (!sec) return;
      gsap.from(sec, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sec,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* ================= HERO (PT-28 SM:PT-32 TO CLEAR FIXED NAVBAR) ================= */}
      <section
        className="relative min-h-[55vh] sm:min-h-[65vh] pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16 flex items-center justify-center text-center px-4 sm:px-6"
        style={{
          backgroundImage: "url('/assets/home/insights/Inspirational-leadership-featured-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0F1E63]/90"></div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl text-white px-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-4 shadow">
            <BookOpen className="w-4 h-4 text-[#d23369]" /> Thought Leadership &amp; Industry Perspectives
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Insights &amp; Thought Leadership
          </h1>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Delivering forward-looking strategies, executive perspectives, and technical research to help enterprises thrive in an AI-first era.
          </p>
        </motion.div>
      </section>

      {/* ================= CONTENT INTRO ================= */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-8 sm:py-10 px-4 sm:px-6 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2a3990] mb-4">
          Why Our Insights Matter
        </h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base max-w-3xl mx-auto">
          At Paves Technologies, our Thought Leadership hub brings together deep expertise across AI, cloud architectures, enterprise platforms, and digital transformation. We share pioneering research and actionable insights to empower enterprise leaders and technologists.
        </p>
      </section>

      {/* ================= ARTICLES GRID (SLATE BG) ================= */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="bg-slate-50 py-10 sm:py-12 border-t border-slate-200/80 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-8 text-[#2a3990]">
            Latest Articles &amp; Executive Papers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "AI-Powered Banking: The Next Frontier",
                snippet: "Explore how core banking and wealth management are being transformed by real-time data intelligence and predictive models.",
                img: "/assets/home/insights/ai-in-banking-and-insurance-use-cases.png",
                link: "/insights",
                category: "Banking & AI",
              },
              {
                title: "Embedding Trust in Next-Gen Payment Systems",
                snippet: "Why building zero-trust security and robust compliance into real-time payments infrastructure is critical for global scale.",
                img: "/assets/home/insights/Forrester-HBR_AI-Trust-Image.png",
                link: "/insights",
                category: "Security & Payments",
              },
              {
                title: "Generative AI for Enterprise Services",
                snippet: "How domain-tuned generative models automate enterprise workflows while preserving data privacy and audit governance.",
                img: "/assets/home/insights/the-role-of-ai-in-enterprise.png",
                link: "/insights",
                category: "Enterprise Automation",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="group block overflow-hidden rounded-xl bg-white shadow-sm border border-gray-200 hover:border-blue-300 transition-all"
              >
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#0F1E63] text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-base sm:text-lg font-bold text-[#2a3990] mb-2 group-hover:text-[#d23369] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {item.snippet}
                  </p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-[#d23369] font-bold text-xs hover:text-[#86163c] transition-colors"
                  >
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-[#0F1E63] text-white text-center py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold">
            Stay Ahead with Paves Executive Insights
          </h2>
          <p className="text-xs sm:text-sm text-gray-200">
            Subscribe or connect with our strategy advisors for tailored technology briefings.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block px-7 py-2.5 bg-[#d23369] text-white font-bold text-xs sm:text-sm rounded-full hover:bg-[#86163c] transition-all shadow-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
