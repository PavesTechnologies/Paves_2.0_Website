"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  Brain,
  Cpu,
  Sparkles,
  Zap,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Bot,
  Database,
  Layers,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function PavesAILabs() {
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
          backgroundImage: "url('/assets/livesAtPaves1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0F1E63]/90"></div>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl px-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold mb-4 shadow">
            <Sparkles className="w-4 h-4 text-[#d23369]" /> AI Research &amp; Enterprise Innovation Hub
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            Paves AI Labs
          </h1>

          <p className="text-gray-200 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Pioneering domain-specific AI models, cognitive workflows, and intelligent automation — driving next-generation enterprise transformation.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-[#d23369] text-white text-sm font-bold rounded-full hover:bg-[#86163c] transition-all shadow-md"
            >
              Explore AI Capabilities
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= WHAT IS PAVES AI LABS ================= */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="py-10 sm:py-12 px-4 sm:px-6 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2a3990] mb-4">
          What is Paves AI Labs?
        </h2>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Paves AI Labs is the dedicated innovation engine of Paves Technologies. We combine advanced machine learning research, custom LLMs, RAG pipelines, and automated reasoning to solve complex operational challenges across financial services, insurance, and enterprise systems.
        </p>
      </section>

      {/* ================= KEY FOCUS AREAS (SLATE BG) ================= */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="bg-slate-50 py-10 sm:py-12 border-y border-slate-200/80 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2a3990]">
              Our Key AI Focus Areas
            </h2>
            <p className="mt-1 text-gray-600 text-xs sm:text-sm">
              Core research directions delivering measurable business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Applied AI for Enterprise Operations",
                desc: "Building intelligent agents and predictive systems that automate routine operational tasks and optimize complex decision trees.",
                img: "/assets/focus_area1.png",
                icon: Brain,
                bullets: ["Automated Document Intelligence", "Predictive Exception Triage", "Real-Time Anomaly Detection"],
              },
              {
                title: "Data-Driven Intelligence & Analytics",
                desc: "Transforming raw structured and unstructured enterprise data into real-time actionable insights and predictive forecasts.",
                img: "/assets/focus_area2.png",
                icon: Database,
                bullets: ["Pattern Recognition Engines", "Customer Behavior Forecasting", "Risk Score Modeling"],
              },
              {
                title: "Next-Gen LLM & RAG Pipelines",
                desc: "Deploying secure, domain-specific Retrieval-Augmented Generation (RAG) pipelines and fine-tuned enterprise LLMs.",
                img: "/assets/focus_area3.png",
                icon: Cpu,
                bullets: ["Enterprise Knowledge Search", "Context-Aware Agent Assistants", "Strict Security Guardrails"],
              },
            ].map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 w-full overflow-hidden bg-gray-100">
                      <img
                        src={card.img}
                        alt={card.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute top-3 left-3 bg-[#0F1E63] text-white p-2 rounded-lg shadow">
                        <CardIcon className="w-5 h-5 text-emerald-400" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-[#2a3990] mb-2">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                        {card.desc}
                      </p>

                      <div className="space-y-1.5 pt-3 border-t border-gray-100">
                        {card.bullets.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INNOVATION INITIATIVES ================= */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="py-10 sm:py-12 px-4 sm:px-6 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2a3990]">
            Paves AI Innovation Initiatives
          </h2>
          <p className="mt-1 text-gray-600 text-xs sm:text-sm">
            Applied AI frameworks powering modern enterprise efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              title: "AI-Enhanced Productivity Tools",
              desc: "Designing intelligent copilot assistants that empower engineering, support, and operations teams to work 3x faster.",
              icon: Bot,
            },
            {
              title: "Cognitive Process Automation",
              desc: "Merging artificial intelligence with enterprise workflow engines (ServiceNow, Power Platform) to adapt processes dynamically.",
              icon: Layers,
            },
            {
              title: "Predictive Customer Engagement",
              desc: "Building hyper-personalized conversational interfaces and recommendation engines for digital banking and commerce.",
              icon: Sparkles,
            },
            {
              title: "Enterprise LLM Governance & Security",
              desc: "Establishing zero-trust AI security frameworks, prompt injection shields, and PII anonymization gates.",
              icon: ShieldCheck,
            },
          ].map((item, idx) => {
            const ItemIcon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2a3990] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <ItemIcon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#2a3990]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-[#0F1E63] text-white text-center py-10 sm:py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Accelerate Your Enterprise AI Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
            Partner with Paves AI Labs to design, validate, and deploy domain-specific AI solutions tailored to your business needs.
          </p>
          <div className="pt-3">
            <Link
              href="/contact"
              className="inline-block px-7 py-2.5 bg-[#d23369] text-white font-bold text-xs sm:text-sm rounded-full hover:bg-[#86163c] transition-all shadow-md"
            >
              Connect with AI Architects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
