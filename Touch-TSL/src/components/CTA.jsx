import React from "react";
import { Link } from "react-router-dom";

const CTA = ({ onVisitHome }) => {
  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-blue-900 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
          {/* Decorative background shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 max-w-2xl px-2">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Ready to Drive Real <span className="italic font-serif text-yellow-400">Impact?</span>
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 mb-10 md:mb-12 leading-relaxed">
              Whether you want to partner with us, volunteer your skills, or support our 
              environmental and community initiatives — your involvement makes a world of difference.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact#contact-form" className="group relative px-8 md:px-12 py-5 md:py-6 bg-yellow-400 text-blue-950 rounded-[2rem] font-bold text-lg md:text-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(250,204,21,0.3)] hover:shadow-[0_30px_60px_rgba(250,204,21,0.5)] flex items-center justify-center gap-4">
                <span className="relative z-10 flex items-center gap-4">
                  Partner With Us 
                  <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Link>

              <button 
                onClick={onVisitHome}
                className="group px-8 md:px-12 py-5 md:py-6 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-[2rem] font-bold text-lg md:text-xl transition-all hover:bg-white/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-4 shadow-xl"
              >
                Get Involved
                <svg className="w-5 h-5 md:w-6 md:h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
            
            <p className="mt-12 text-blue-300 font-medium flex items-center justify-center gap-2">
              <span className="w-8 h-[1px] bg-blue-500"></span>
              Join us in our mission to protect and care
              <span className="w-8 h-[1px] bg-blue-500"></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
