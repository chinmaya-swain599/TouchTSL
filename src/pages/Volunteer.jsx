import React from "react";
import { Link } from "react-router-dom";
import VolunteerHero from "../components/VolunteerHero";
import CTA from "../components/CTA";

function Volunteer({ onVisit, onRegister }) {
  return (
    <main className="bg-white">
      <VolunteerHero onRegister={onRegister} />

      {/* Why Get Involved */}
      <section className="py-12 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-6 font-serif italic tracking-tight">
                Why <span className="text-yellow-500">Get Involved</span> With TouchTSL?
              </h2>
              <div className="space-y-6">
                {[
                  "Preserve nature through direct reforestation and conservation efforts",
                  "Support the health and well-being of animals and communities",
                  "Create a safe environment for students to learn and grow",
                  "Gain hands-on experience in environmental and social welfare"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mt-1 shrink-0">
                      <span className="text-xs">✦</span>
                    </div>
                    <p className="text-stone-700 font-medium">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 relative mt-12 md:mt-0">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white h-[300px] md:h-[450px] group">
                <img src="/volunteer2.jpeg" alt="TouchTSL Outreach" className="absolute inset-0 block w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <p className="text-white font-bold italic font-serif text-xl">Creating Impact Together</p>
                </div>
              </div>
              <div className="absolute top-6 -right-6 w-full h-full bg-yellow-100 rounded-[2.5rem] -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-12 md:py-24 bg-blue-950 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 tracking-tight">
              Ways You Can <span className="text-yellow-400">Contribute</span>
            </h2>
            <p className="text-blue-300 text-sm sm:text-base">
              Whether an individual, organisation, or institution — there is a role for everyone at TouchTSL.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { title: "Environmental Action", items: ["Tree plantation drives", "Waste cleanup events", "Sustainability workshops"] },
              { title: "Animal Welfare", items: ["Shelter volunteering", "Rescue assistance", "Awareness campaigns"] },
              { title: "Health & Blood Donation", items: ["Blood donation camps", "Health awareness", "Medical support"] },
              { title: "Agriculture & Yoga", items: ["Organic farming training", "Yoga instruction", "Rural development"] }
            ].map((cat, i) => (
              <div key={i} className="p-8 border border-white/10 rounded-3xl hover:bg-white/5 transition-all">
                <h3 className="text-lg font-bold mb-6 text-yellow-400">{cat.title}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-blue-300 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-yellow-400/50 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Steps */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-stone-50 rounded-[2.5rem] p-8 md:p-20 text-center relative overflow-hidden">
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-950 mb-8 italic font-serif tracking-tight">
              Getting involved is <span className="text-yellow-500 underline">simple</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
              {["Fill Registration", "Attend Briefing", "Choose Your Role", "Start Making Impact"].map((step, i) => (
                <div key={i}>
                  <p className="text-4xl md:text-6xl font-black text-stone-200 mb-2">{i + 1}</p>
                  <p className="text-blue-950 font-bold text-xs md:text-sm leading-tight">{step}</p>
                </div>
              ))}
            </div>
            <div className="mt-16">
              <button
                onClick={onRegister}
                className="px-10 py-5 bg-blue-900 text-white rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all hover:scale-105 shadow-xl inline-block"
              >
                Apply to Register Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-12 md:py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-950 mb-4 italic font-serif tracking-tight">
              🤝 Who Can <span className="text-yellow-500">Join?</span>
            </h2>
            <p className="text-stone-600">TouchTSL welcomes anyone committed to positive social change.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Students & Youth", "Working Professionals", "Retired Officials", "NGOs & Corporates"].map((persona, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl text-center shadow-sm hover:shadow-xl transition-all border border-stone-100 group">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-700 mx-auto mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-blue-950">{persona}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-blue-950 rounded-[3rem] p-12 md:p-20 relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                <span className="text-yellow-400 font-bold tracking-widest uppercase text-sm mb-4 block">Grow With Us</span>
                <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                  Career &amp; <span className="text-yellow-400 italic font-serif">Internship</span> Opportunities
                </h2>
                <p className="text-blue-300 text-lg mb-8 leading-relaxed">
                  Build a career in environmental conservation, animal welfare, and community development with 
                  real-world experience that makes a lasting difference.
                </p>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <ul className="space-y-3">
                    {[
                      { label: "Real Impact", text: "Work that changes lives at scale." },
                      { label: "Deep Learning", text: "Policy, outreach & field experience." },
                      { label: "Strong Network", text: "Govt. & NGO partner connections." }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                        <span className="text-white text-xs font-black uppercase tracking-wider">{item.label}:</span>
                        <span className="text-blue-400 text-xs">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-4 text-yellow-400 cursor-pointer group/link" onClick={onRegister}>
                    <span className="font-bold text-lg hover:underline">Join the Mission</span>
                    <svg className="w-6 h-6 group-hover/link:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Environmental Science", icon: "🌱" },
                  { title: "Veterinary Support", icon: "🐾" },
                  { title: "Child Psychology", icon: "🧠" },
                  { title: "Health & Nutrition", icon: "🍎" }
                ].map((job, i) => (
                  <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all hover:-translate-y-2 cursor-pointer" onClick={onRegister}>
                    <span className="text-3xl mb-4 block group-hover:scale-110 transition-transform origin-left">{job.icon}</span>
                    <h4 className="text-white font-bold text-lg mb-1">{job.title}</h4>
                    <p className="text-yellow-400 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">APPLY →</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Visit */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 bg-white rounded-[3rem] p-8 md:p-16 shadow-xl border border-stone-100">
            <div className="md:w-1/2">
              <img src="/miracles.jpeg" alt="Partner With TouchTSL" className="rounded-[2rem] shadow-lg w-full h-[400px] object-cover" />
            </div>
            <div className="md:w-1/2">
              <span className="text-blue-700 font-bold tracking-widest uppercase text-xs mb-4 block">Partner With Us</span>
              <h2 className="text-4xl font-bold text-blue-950 mb-6 italic font-serif">
                Come, see the <span className="text-yellow-500 underline">impact</span> in person.
              </h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                We welcome government officials, NGO leaders, and corporates to visit our 
                programmes and witness the real change we drive every day.
              </p>
              <div className="flex flex-col gap-4 mb-10">
                {["Field Demonstrations Available", "MOU & Partnership Discussions"].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-blue-950 font-bold">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700">✓</div>
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/contact#contact-form" className="px-8 py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg hover:scale-105 inline-block">
                Request a Visit
              </Link>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-stone-100 max-w-3xl w-full text-center">
            <h3 className="text-2xl font-bold text-blue-950 mb-6 font-serif italic">Want to explore our other initiatives?</h3>
            <Link to="/#initiatives" className="inline-flex items-center gap-3 text-white hover:text-white font-bold transition-all px-10 py-5 bg-blue-900 rounded-2xl group hover:shadow-2xl hover:scale-105 active:scale-95 shadow-xl">
              <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              Return to Home Page
            </Link>
          </div>
        </div>
      </section>

      <CTA onVisitHome={onVisit} />
    </main>
  );
}

export default Volunteer;
