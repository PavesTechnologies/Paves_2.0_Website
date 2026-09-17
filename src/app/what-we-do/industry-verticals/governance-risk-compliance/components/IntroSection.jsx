"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="relative bg-[#0F1E63] text-white py-20 px-6 md:px-20 overflow-hidden">

      {/* Blue angled pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
        <defs>
          <pattern id="grcPattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 200 L200 0" stroke="white" strokeWidth="2" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grcPattern)" />
      </svg>

      {/* Content grid */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Left text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            AI-Powered Governance, Risk, and Compliance (GRC) Solutions for Financial Services
          </h2>

          <p className="mt-6 text-gray-200 leading-relaxed">
            Paves Technologies empowers banks, payment providers, and financial institutions with
            AI-driven GRC solutions that ensure real-time compliance monitoring, automated risk
            assessment, and regulatory reporting efficiency—reducing costs, mitigating risks,
            and improving operational resilience.
          </p>

          <h3 className="text-2xl font-bold mt-10">
            Why Choose Paves Technologies for AI-Driven GRC?
          </h3>

          <ul className="mt-6 space-y-3 text-gray-200 text-lg">
            <li>› Automated & AI-Powered Compliance</li>
            <li>› Enhanced Risk Intelligence</li>
            <li>› Real-Time Regulatory Adherence</li>
            <li>› Secure & Fraud-Resistant Transactions</li>
            <li>› Seamless Integration & Scalability</li>
          </ul>
        </div>

        {/* Right illustration */}
        <div className="flex items-center justify-center">
          <Image
            src="/assets/home/industry-verticals/risk-compliance.jpg"   // <-- Put image here
            alt="GRC Illustration"
            width={420}
            height={340}
            className="object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
