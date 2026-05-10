import React from "react";
import { Link } from "react-router-dom";

const Partners = () => {
  const partners = [
    { name: "Blood Donation Network", icon: "🩸", color: "bg-red-50 text-red-600" },
    { name: "Organic Farming Council", icon: "🚜", color: "bg-green-50 text-green-600" },
    { name: "Global Forest Watch", icon: "🌳", color: "bg-emerald-50 text-emerald-600" },
    { name: "PETA India Network", icon: "🐾", color: "bg-stone-50 text-stone-600" },
    { name: "International Yoga Federation", icon: "🧘", color: "bg-yellow-50 text-yellow-600" },
    { name: "Child Protection Services", icon: "🛡️", color: "bg-blue-50 text-blue-600" },
    { name: "Public Health Foundation", icon: "🏥", color: "bg-sky-50 text-sky-600" },
    { name: "CSR Nature Partners", icon: "🏢", color: "bg-blue-950 text-yellow-400" },
  ];

  return (
    <section className="py-16 md:py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
             <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
             Our Ecosystem
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-6 tracking-tight">
            Strategic <span className="text-yellow-500 font-serif italic">Networks</span> & Partners
          </h2>
          <p className="text-stone-500 max-w-2xl mx-auto text-lg">
            We collaborate with global and national organizations to scale our mission of 
            environmental protection and community welfare.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {partners.map((partner, i) => (
            <div 
              key={i} 
              className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-stone-100 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className={`w-20 h-20 md:w-24 md:h-24 ${partner.color} rounded-[2rem] flex items-center justify-center text-4xl md:text-5xl mb-6 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {partner.icon}
              </div>
              <h4 className="text-blue-950 font-black text-[10px] md:text-xs tracking-[0.2em] uppercase leading-tight">
                {partner.name}
              </h4>
              <div className="mt-4 w-8 h-1 bg-stone-100 group-hover:w-16 group-hover:bg-yellow-400 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 md:p-12 bg-blue-950 rounded-[3rem] text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
           <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Become a Partner Organization</h3>
              <p className="text-blue-200">Join our network of 50+ partners making a global difference.</p>
           </div>
           <Link to="/contact#contact-form" className="relative z-10 px-8 py-4 bg-yellow-400 text-blue-950 rounded-xl font-bold hover:bg-yellow-300 transition-all shadow-xl whitespace-nowrap">
              Apply for Partnership
           </Link>
        </div>
      </div>
    </section>
  );
};

export default Partners;
