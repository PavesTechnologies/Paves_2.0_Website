"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Boxes,
  Users,
  Workflow,
  Network,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  GitMerge,
  Server,
  ChevronsRight,
  Layers,
} from "lucide-react";

import { getPlatform, PLATFORMS, SECTION_BASE } from "../data";

/* lucide components resolved here */
const ICONS = { Boxes, Users, Workflow, Network, Server, GitMerge };

export default function PlatformDetail({ slug }) {
  const platform = getPlatform(slug);

  if (!platform) return null;

  const {
    title,
    icon,
    summary,
    tagline,
    overviewDetails,
    technologies,
    capabilities = [],
    deliverables = [],
    outcomes = [],
    architectureHighlights = [],
    workflowSteps = [],
  } = platform;

  const Icon = ICONS[icon] ?? Network;
  const siblings = PLATFORMS.filter((p) => p.slug !== slug);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* ================= SECTION 1: OVERVIEW INTRO ================= */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto text-center">
        <div className="w-14 h-14 rounded-2xl bg-[#2a3990] text-white flex items-center justify-center mx-auto mb-4 shadow">
          <Icon className="w-7 h-7" strokeWidth={1.8} />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2a3990] mb-3">
          {title}
        </h1>

        {tagline && (
          <p className="text-base sm:text-lg text-[#d23369] font-semibold mb-4 max-w-2xl mx-auto">
            {tagline}
          </p>
        )}

        <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-6">
          {overviewDetails || summary}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap justify-center gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-[#f8f9ff] border px-4 py-1.5 rounded-full text-xs font-semibold text-[#2a3990]"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ================= SECTION 2: CORE CAPABILITIES (CARD GRID) ================= */}
      <section className="bg-[#f8f9ff] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-[#2a3990]">
            Capabilities &amp; Core Services
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto text-sm sm:text-base mb-10">
            End-to-end operational capabilities for implementing and optimizing {title}.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {capabilities.map((cap, idx) => {
              const capTitle = typeof cap === "string" ? cap : cap.title;
              const capDesc = typeof cap === "string" ? null : cap.description;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 sm:p-8 border rounded-2xl shadow-lg flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2a3990] flex items-center justify-center shrink-0 mt-0.5">
                    <ChevronsRight className="w-5 h-5 text-[#d23369]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#2a3990]">
                      {capTitle}
                    </h3>
                    {capDesc && (
                      <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                        {capDesc}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: KEY DELIVERABLES & OUTCOMES ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#2a3990]">
          Key Deliverables &amp; Outcomes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-8 border rounded-2xl shadow space-y-4">
            <h3 className="text-2xl font-bold text-[#2a3990]">
              Concrete Deliverables
            </h3>
            <div className="space-y-3 pt-2">
              {deliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 border rounded-2xl shadow space-y-4">
            <h3 className="text-2xl font-bold text-[#2a3990]">
              Business Outcomes
            </h3>
            <div className="space-y-3 pt-2">
              {outcomes.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm sm:text-base font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: EXECUTION METHODOLOGY ================= */}
      {workflowSteps.length > 0 && (
        <section className="bg-[#f8f9ff] py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-[#2a3990]">
              Execution Methodology
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {workflowSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white border p-5 rounded-2xl shadow flex flex-col justify-between"
                >
                  <div>
                    <span className="text-2xl font-extrabold text-[#d23369] block mb-2">
                      0{idx + 1}
                    </span>
                    <p className="text-sm font-semibold text-[#2a3990] leading-relaxed">
                      {step}
                    </p>
                  </div>
                  <div className="mt-4 pt-2 border-t text-[11px] font-bold text-gray-400 uppercase">
                    Phase 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= SECTION 5: SISTER PLATFORMS ================= */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-[#2a3990] mb-8">
          Explore Other Platform Practices
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {siblings.map((sibling) => {
            const SiblingIcon = ICONS[sibling.icon] ?? Network;
            return (
              <Link
                key={sibling.slug}
                href={`${SECTION_BASE}/${sibling.slug}`}
                className="group block bg-white border p-6 rounded-2xl shadow hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#2a3990] text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                  <SiblingIcon className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <h4 className="text-lg font-bold text-[#2a3990] group-hover:text-[#d23369] transition-colors">
                  {sibling.title}
                </h4>
                <div className="mt-2 text-xs font-bold text-[#d23369] inline-flex items-center gap-1">
                  Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ================= CTA BANNER ================= */}
      <section className="bg-[#0F1E63] text-white py-14 sm:py-16 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Let&rsquo;s Optimize Your {title} Ecosystem
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-base sm:text-lg">
            Schedule a strategy session with our technical team to discuss your architecture and roadmap.
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
