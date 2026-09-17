"use client";

import Image from "next/image";

export default function IntroSection() {
  return (
    <section className="relative bg-[#0F1E63] text-white py-20 px-6 md:px-20 overflow-hidden">

      {/* subtle angled/diamond pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
        <defs>
          <pattern id="capPattern" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0 200 L200 0" stroke="white" strokeWidth="2" opacity="0.35" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#capPattern)" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - heading + paragraphs */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Re(AI)magining Capital Markets with Intelligent Technology
          </h2>

          <p className="mt-6 text-gray-200 leading-relaxed max-w-xl">
            At Paves Technologies, we empower capital markets with AI-first solutions that enhance trading,
            risk management, compliance, and decision-making. Our expertise in AI, data analytics, automation,
            and cloud engineering helps financial institutions modernize operations, gain market intelligence,
            and drive growth in an evolving digital landscape.
          </p>
        </div>

        {/* RIGHT - illustration (replace image in public/images/) */}
        <div className="flex items-center justify-center">
          <Image
            src="/assets/home/industry-verticals/capital-markets.jpg"
            alt="Capital markets illustration"
            width={420}
            height={320}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
