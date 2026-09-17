import { Subtitles } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Data & Analytics",
  description: "Transforming raw data into real business intelligence through analytics, data engineering, and insights-driven decision frameworks.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/services/data-and-analytics" },
};

export default function DataAndAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* ===== MAIN CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-16">
        {/* Intro Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-8">
          AI-Powered Data Solutions for Business Transformation
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-12">
          At Paves Technologies, we transform raw data into actionable
          intelligence using AI-driven analytics, machine learning, and
          real-time data processing. Whether you are in banking, payments,
          fintech, wealth management, capital markets, or digital enterprises,
          our data-driven solutions help you gain a competitive edge, optimize
          operations, and unlock new revenue streams.
        </p>

        {/* ===== THREE CARDS ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-20 px-4 sm:px-6">
          {[
            {
              title: "Data Science:",
              Subtitle: " Turning Data into Intelligence",
              points: [
                "Predictive Analytics",
                "AI and Machine Learning Models",
                "Natural Language Processing (NLP)",
                "Advanced Data Mining",
              ],
              image: "/assets/what-we-do/services/data-science.png",
            },
            {
              title: "Data Engineering:",
              Subtitle: " Building Scalable Data Foundations",
              points: [
                "Data Pipeline Automation",
                "Cloud-Based Data Architecture",
                "Real-Time Data Streaming",
                "Data Quality and Governance",
              ],
              image: "/assets/what-we-do/services/data-engineering.png",
            },
            {
              title: "Data Visualization & Analytics:",
              Subtitle: " From Insights to Impact",
              points: [
                "Interactive Dashboards",
                "Custom Reporting Solutions",
                "Data Storytelling",
                "Predictive & Prescriptive Analytics",
              ],
              image: "/assets/what-we-do/services/data-visualization.png",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="
        bg-white
        border border-gray-200
        rounded-2xl
        shadow-md hover:shadow-xl
        transition
        p-5 sm:p-6
        flex flex-col
        w-full
      "
            >
              {/* Responsive image */}
              <div className="relative w-full aspect-[16/10] mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="rounded-xl object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-pink-700 mb-4">
                {card.title}
                <span className="block text-gray-800 font-semibold">
                  {card.Subtitle}
                </span>
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
                {card.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ===== WHY PAVES SECTION ===== */}
        <div className="mt-16 ">
          <h2 className="text-4xl font-bold text-indigo-900 text-center mb-10">
            Why Paves Technologies?
          </h2>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Uncover new opportunities.",
              "Optimize operations.",
              "Enhance customer experiences.",
              "Make data-driven decisions with confidence.",
            ].map((point, index) => (
              <li
                key={index}
                className="bg-blue-50 shadow-md hover:shadow-lg transition-shadow duration-300 rounded-2xl px-8 py-6 flex items-center border border-blue-100"
              >
                <span className="text-pink-700 text-3xl font-bold mr-4 flex-shrink-0 w-6 text-center">
                  ›
                </span>
                <p className="text-lg text-gray-800 font-medium">{point}</p>
              </li>
            ))}
          </ul>

          <p className="text-center text-lg text-indigo-900 max-w-3xl mx-auto mt-12 font-bold">
            With a deep focus on scalability, accuracy, and user experience, we
            ensure that your data becomes your most valuable asset. Together, we
            unlock the full potential of your data for a smarter, more efficient
            future.
          </p>
        </div>
      </div>

      {/* ===== EMAIL SECTION ===== */}
      <div className="bg-[#0F1E63] text-white text-center py-20 px-6 mt-16">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Unlock Your Data’s Potential
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Partner with Paves Technologies to turn your data into actionable
          insights. From engineering to analytics, we deliver scalable, secure,
          and AI-powered data solutions for the future.
        </p>
        <a
          href="mailto:info@pavestechnologies.com"
          className="inline-block bg-white text-[#0F1E63] font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-100 transition"
        >
          Send Us an Email
        </a>
      </div>
    </div>
  );
}
