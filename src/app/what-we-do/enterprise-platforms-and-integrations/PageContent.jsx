"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Boxes,
  Users,
  Workflow,
  Network,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Layers,
  GitMerge,
  ArrowUpRight,
  Activity,
  Server,
  ChevronsRight,
} from "lucide-react";

import Hero from "../components/Hero";
import { PLATFORMS, SECTION_BASE, KEY_METRICS } from "./data";

/* lucide components resolved here */
const ICONS = { Boxes, Users, Workflow, Network, Server, GitMerge };

export default function EnterprisePlatformsContent() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* ================= HERO ================= */}
      <Hero
        title="Enterprise Platforms & Integrations"
        description="Connecting enterprise platforms, applications, and data to create seamless, scalable digital ecosystems."
        image="/assets/shared/what_we_do_hero.jpeg"
        breadcrumb={[
          { label: "Paves Technologies", href: "/" },
          { label: "What We Do", href: "/what-we-do" },
          { label: "Enterprise Platforms & Integrations" },
        ]}
      />

      {/* ================= SECTION 1: WHAT WE DO INTRO ================= */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2a3990] mb-6">
          Unifying Enterprise Ecosystems
        </h2>

        <p className="text-gray-700 text-center max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8">
          At Paves Technologies, we bridge siloes between core platforms, cloud applications, and legacy databases. We architect and implement robust integration layers so enterprise data flows securely and seamlessly in real time across your entire organization.
        </p>

        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {KEY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border p-5 rounded-2xl shadow text-center"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-[#d23369]">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#2a3990] mt-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5">
                {metric.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: CORE PLATFORMS ================= */}
      <section className="bg-[#f8f9ff] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#2a3990]">
            Core Platform Solutions
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto text-sm sm:text-base mb-10">
            Specialized implementation and integration services across leading enterprise platforms.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {PLATFORMS.map(({ slug, title, icon, summary, technologies, capabilities }) => {
              const Icon = ICONS[icon] ?? Network;
              return (
                <motion.div
                  key={slug}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white border rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#2a3990] text-white flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6" strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#2a3990]">
                          {title}
                        </h3>
                        <span className="text-xs font-semibold text-[#d23369]">
                          Enterprise Platform Practice
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {summary}
                    </p>

                    {/* Tech Badges */}
                    <div>
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Supported Platforms
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-[#f8f9ff] border px-3 py-1 rounded-full text-xs font-semibold text-[#2a3990]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Capabilities list */}
                    <div className="pt-3 border-t">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Capabilities Overview
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {capabilities.slice(0, 4).map((cap) => {
                          const capText = typeof cap === "string" ? cap : cap.title;
                          return (
                            <div key={capText} className="flex items-start gap-2 text-xs text-gray-700">
                              <ChevronsRight className="w-4 h-4 text-[#d23369] shrink-0 mt-0.5" />
                              <span className="font-medium">{capText}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t">
                    <Link
                      href={`${SECTION_BASE}/${slug}`}
                      className="inline-flex items-center gap-2 text-[#d23369] font-bold text-sm hover:text-[#86163c] transition-colors"
                    >
                      Explore {title} Solutions <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: KEY FOCUS & DIFFERENTIATORS ================= */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#2a3990]">
          Why Paves Technologies?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2a3990]">
              Platform-Agnostic Architecture
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Unbiased platform evaluation and architectural design ensuring your systems integrate cleanly without proprietary lock-in.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2a3990]">
              Domain &amp; Regulatory Compliance
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Deep expertise across banking, financial services, and healthcare compliance (SOC2, PCI-DSS, ISO 27001, HIPAA).
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2a3990]">
              Real-Time Event Streaming
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Replacing legacy batch file processing with resilient message brokers (Kafka, TIBCO) for instant transaction processing.
            </p>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow">
            <h3 className="text-xl sm:text-2xl font-bold text-[#2a3990]">
              Decoupled API-Led Architecture
            </h3>
            <p className="mt-4 text-gray-700 leading-relaxed text-sm sm:text-base">
              Wrapping core legacy systems in modern 3-tier API micro-services so front-end applications innovate without risk.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-[#0F1E63] text-white py-14 sm:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Ready to Connect Your Enterprise Ecosystem?
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg">
            Consult with our enterprise architects to design, integrate, and optimize your platform stack.
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#d23369] text-white font-bold text-lg rounded-full hover:bg-[#86163c] transition-all shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
