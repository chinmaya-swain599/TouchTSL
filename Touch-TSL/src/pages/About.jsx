import React from "react";
import AboutHero from "../components/AboutHero";
import MissionVision from "../components/MissionVision";
import Team from "../components/Team";
import Partners from "../components/Partners";
import CTA from "../components/CTA";

function About({ onVisit }) {
  return (
    <main className="bg-white">
      <AboutHero />

      <MissionVision />

      {/* Core Values Section */}
      <section className="py-12 md:py-24 bg-blue-950 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight">Our Core <span className="text-yellow-400">Values</span></h2>
            <p className="text-blue-300 text-sm sm:text-base">The principles that guide every initiative, partnership, and campaign at TouchTSL.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { title: "Environmental Stewardship", desc: "We are committed to protecting our planet's natural resources and fostering a culture of sustainability for future generations." },
              { title: "Compassionate Care", desc: "Whether for animals in distress or vulnerable students, we provide the care and protection they deserve with empathy." },
              { title: "Holistic Well-being", desc: "We believe in the integration of mind, body, and spirit through Yoga and Meditation as a foundation for a healthy society." }
            ].map((v, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-all text-center group">
                <div className="w-12 h-1 rounded-full bg-yellow-400 mx-auto mb-6 group-hover:w-24 transition-all"></div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 italic font-serif text-yellow-400">{v.title}</h3>
                <p className="text-blue-300 leading-relaxed font-light text-sm sm:text-base">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 md:mt-16 text-center max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-blue-200 italic font-serif">
              "We believe that protecting the environment and caring for all living beings is our collective responsibility."
            </p>
          </div>
        </div>
      </section>

      <Partners />

      <Team />

      {/* Statistics Section */}
      <section className="py-12 md:py-20 bg-yellow-400 text-blue-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Trees Planted", value: "50K+" },
              { label: "Animals Rescued", value: "10K+" },
              { label: "Farmers Supported", value: "500+" },
              { label: "Blood Units", value: "100+" }
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl md:text-5xl font-black mb-2">{s.value}</p>
                <p className="text-blue-800 font-bold uppercase tracking-widest text-[10px] sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA onVisitHome={onVisit} />
    </main>
  );
}

export default About;
