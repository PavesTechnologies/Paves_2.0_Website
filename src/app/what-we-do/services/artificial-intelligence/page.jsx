import Image from "next/image";
import ShapeDivider from "@/app/components/ShapeDivider";

export const metadata = {
  title: "Artificial Intelligence",
  description: "Building intelligent systems with machine learning, NLP, and computer vision to automate processes and deliver predictive insights for financial services.",
  alternates: { canonical: "https://www.pavestechnologies.com/what-we-do/services/artificial-intelligence" },
};

export default function ArtificialIntelligence() {
  return (
    <main className="bg-white min-h-screen">

    

      {/* 🔹 AI CONTENT SECTION (CENTERED POINTS ONLY) */}
      <section className="py-20 bg-[#2a3990] text-center">
        <div className="container mx-auto px-6 md:px-20 max-w-5xl">
          <h2 className="text-5xl md:text-4xl font-bold text-white mb-4">
            Future with AI, Generative AI & Agentic AI
          </h2>

          <p className="text-white text-lg leading-relaxed mb-10">
            At Paves Technologies, we don’t just integrate AI — we redefine how businesses innovate,
            automate, and scale in an AI-first world.
          </p>

          <h3 className="text-3xl font-semibold text-primary mb-10">
            AI Solutions: Intelligence That Drives Business Growth
          </h3>

          {/* AI OFFERINGS */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-13 h-13 mx-auto rounded-full bg-primary text-white text-2xl font-bold mb-4">
                01
              </div>
              <h4 className="text-xl font-semibold text-[#2a3990] mb-3">
                Intelligent Automation
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Transforming Finance by harnessing AI for Intelligent Automation and Unprecedented Efficiency.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-13 h-13 mx-auto rounded-full bg-primary text-white text-2xl font-bold mb-4">
                02
              </div>
              <h4 className="text-xl font-semibold text-[#2a3990] mb-3">
                Predictive Analysis
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Leveraging AI for Data-Driven Insights and Strategic Financial Decisions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-13 h-13 mx-auto rounded-full bg-primary text-white text-2xl font-bold mb-4">
                03
              </div>
              <h4 className="text-xl font-semibold text-[#2a3990] mb-3">
                AI for Financial Services
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Revolutionizing Finance by unleashing the Power of AI for Enhanced Services and Innovation.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* 🔹 WHY PAVES SECTION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20 text-center">
          <h2 className="text-5xl md:text-45xl font-bold text-indigo-900 mb-10">
            Why Paves Technologies?
          </h2>

          {/* TWO COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-15 text-left max-w-6xl mx-auto mb-15">
            <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="text-primary font-bold">&gt;</span>{" "}
                <span className="font-semibold text-primary">AI-First by Design —</span> AI is not an add-on; it’s the foundation of everything we do.
              </p>
              <p>
                <span className="text-primary font-bold">&gt;</span>{" "}
                <span className="font-semibold text-primary">Industry Expertise —</span> Deep domain knowledge in banking, payments, and financial services.
              </p>
            </div>

            <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="text-primary font-bold ">&gt;</span>{" "}
                <span className="font-semibold text-primary ">Scalable, Secure AI Solutions —</span> Built for performance, security, and compliance.
              </p>
              <p>
                <span className="text-primary font-bold">&gt;</span>{" "}
                <span className="font-semibold text-primary">End-to-End AI Integration —</span> From automation to fully autonomous AI-powered operations.
              </p>
            </div>
          </div>

          {/* IMAGES BELOW */}
          <div className="flex justify-center gap-12 mt-25 flex-wrap  mb-10">
            <div className="relative w-64 h-50 md:w-80 md:h-52">
              <Image
                src="/assets/what-we-do/services/futuristic-scene-with-high-tech-robot-used-construction-industry.png"
                alt="AI Concept 1"
                fill
          sizes="(max-width: 768px) 256px, 320px"
                className="object-cover  shadow-md"
              />
            </div>
            <div className="relative w-64 h-40 md:w-80 md:h-52">
              <Image
                src="/assets/what-we-do/services/robotic-process-automation.png"
                alt="AI Concept 2"
                fill
          sizes="(max-width: 768px) 256px, 320px"
                className="object-cover  shadow-md"
              />
            </div>
            <div className="relative w-64 h-40 md:w-80 md:h-52">
              <Image
                src="/assets/home/why-paves/ai-cognitive-computing.png"
                alt="AI Concept 3"
                fill
          sizes="(max-width: 768px) 256px, 320px"
                className="object-cover  shadow-md"
              />
            </div>
          </div>

          <p className="mt-14 text-lg font-bold  text-[#2a3990]">
            Let’s build the future—smarter, faster, and AI-driven.
          </p>
        </div>
      </section>
    </main>
  );
}


