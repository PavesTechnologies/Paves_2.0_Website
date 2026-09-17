"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ title, breadcrumb = [], image, description }) {
  return (
    <header className="relative overflow-hidden bg-gray-100 min-h-[55vh] md:min-h-[65vh]">

      {/* SMALL SCREENS IMAGE — background only, no animation */}
      <div className="md:hidden absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-white/65 backdrop-blur-xs" />
      </div>

      {/* HERO IMAGE — md & lg ONLY (UNCHANGED animation) */}
      <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "50%" }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        className="
          hidden md:block
          absolute right-0 top-6 bottom-6
          overflow-hidden
        "
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />
      </motion.div>

      {/* CONTENT WITH TOP PADDING TO CLEAR FIXED NAVBAR */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="
          relative z-20
          flex items-center
          min-h-[55vh] md:min-h-[65vh]
          pt-28 sm:pt-32 md:pt-36 pb-12 sm:pb-16
          px-4 sm:px-6 lg:px-10
        "
      >
        <div className="max-w-2xl bg-white/80 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-0 p-3 sm:p-0 rounded-xl">

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#2a3990] leading-tight">
            {title}
          </h1>

          {/* DESCRIPTION */}
          {description && (
            <p className="mt-3 text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
              {description}
            </p>
          )}

          {/* BREADCRUMB */}
          <div className="mt-4 flex items-center gap-2 flex-wrap text-sm sm:text-base">
            {breadcrumb.map((item, index) => (
              <span key={index} className="flex items-center gap-2">
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-[#2a3990] hover:underline font-semibold"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-600 font-semibold">
                    {item.label}
                  </span>
                )}
                {index < breadcrumb.length - 1 && (
                  <span className="text-gray-400">›</span>
                )}
              </span>
            ))}
          </div>

        </div>
      </motion.div>
    </header>
  );
}
