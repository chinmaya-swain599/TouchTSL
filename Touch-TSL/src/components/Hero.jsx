import React from "react";

const Hero = ({ onDonate }) => {
  return (
    <section className="relative min-h-[70vh] md:min-h-screen py-8 md:py-20 flex items-center justify-center overflow-hidden">
      {/* Background Image with sophisticated overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/Home1.jpeg"
          alt="TouchTSL Community Awareness"
          className="w-full h-full object-cover scale-105 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/80 via-stone-950/40 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-stone-950/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 mt-12 md:mt-12">
        <div className="max-w-3xl">
          {/* Tagline */}
          <div className="inline-flex items-center space-x-2 bg-yellow-400/20 border border-yellow-400/40 backdrop-blur-md px-4 py-2 rounded-full mb-4 md:mb-8">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            <span className="text-yellow-200 text-[10px] md:text-xs font-bold uppercase tracking-widest">
              Environmental Protection &amp; Community Support
            </span>
          </div>
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-4">
            Protecting the Planet, <span className="text-yellow-400 italic font-serif">Caring</span> for Lives
          </h1>
          {/* Subtext */}
          <p className="text-base md:text-xl text-stone-200 mb-6 md:mb-10 leading-relaxed max-w-2xl">
            TouchTSL is a dynamic NGO dedicated to environmental conservation, animal welfare, 
            holistic health through Yoga, and safeguarding the future of our students and communities.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <button
              onClick={onDonate}
              className="group relative px-6 py-4 md:px-10 md:py-5 bg-yellow-400 text-blue-950 font-bold rounded-xl overflow-hidden transition-all hover:bg-yellow-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(250,204,21,0.3)]"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Support Mission
              </span>
            </button>

            <button
              onClick={() => document.getElementById('initiatives')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-4 md:px-8 md:py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Our Initiatives</span>
            </button>
          </div>

          {/* Stats */}
          <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-white/10 pt-6">
            <div>
              <p className="text-yellow-400 text-xl md:text-2xl font-bold">50K+</p>
              <p className="text-white text-[10px] md:text-sm font-medium opacity-90 uppercase tracking-wider">Trees</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xl md:text-2xl font-bold">10K+</p>
              <p className="text-white text-[10px] md:text-sm font-medium opacity-90 uppercase tracking-wider">Animals</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xl md:text-2xl font-bold">500+</p>
              <p className="text-white text-[10px] md:text-sm font-medium opacity-90 uppercase tracking-wider">Farmers</p>
            </div>
            <div>
              <p className="text-yellow-400 text-xl md:text-2xl font-bold">100+</p>
              <p className="text-white text-[10px] md:text-sm font-medium opacity-90 uppercase tracking-wider">Blood</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-yellow-400/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4"></div>
    </section>
  );
};

export default Hero;
