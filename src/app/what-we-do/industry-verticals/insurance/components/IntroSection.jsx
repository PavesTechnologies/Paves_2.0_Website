"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="relative bg-[#0F1E63] text-white py-20 px-6 md:px-20 overflow-hidden">

      {/* BACKGROUND PATTERN */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
        <defs>
          <pattern id="insurancePattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 200 L200 0" stroke="white" strokeWidth="2" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#insurancePattern)" />
      </svg>

      {/* CONTENT GRID */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            AI-Driven Insurance Solutions by Paves Technologies
          </h2>

          <p className="mt-6 text-gray-200 leading-relaxed">
            Paves Technologies brings AI-first innovation to insurance, streamlining underwriting,
            claims processing, fraud detection, and customer engagement.
          </p>

          <ul className="mt-6 space-y-3 text-gray-200 text-lg">
            <li>› Smart Underwriting & Risk Assessment</li>
            <li>› AI-Powered Claims Processing & Fraud Detection</li>
            <li>› Hyper-Personalized Customer Experiences</li>
            <li>› Embedded Insurance & API-Driven Distribution</li>
            <li>› Predictive Analytics for Actuarial Science</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10">Why Paves Technologies?</h3>

          <ul className="mt-6 space-y-3 text-gray-200 text-lg">
            <li>› AI-First Innovation</li>
            <li>› Faster Time-to-Market</li>
            <li>› Seamless Integration</li>
            <li>› Scalability & Compliance</li>
            <li>› Proven Impact</li>
          </ul>
        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex items-center justify-center">
          <Image
            src="/assets/home/industry-verticals/insurance.jpg"
            alt="Insurance Illustration"
            width={420}
            height={320}
            className="object-contain drop-shadow-xl"
          />
        </div>

      </div>

    </section>
  );
}
