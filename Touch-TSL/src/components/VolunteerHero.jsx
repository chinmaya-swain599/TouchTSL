import React, { useState, useEffect } from "react";

const VolunteerHero = ({ onRegister }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  const storyChapters = [
    {
      title: "The TouchTSL Vision",
      text: "TouchTSL was born from a fundamental belief: that protecting our environment and caring for all living beings is our collective responsibility.",
      icon: "🌍"
    },
    {
      title: "Environmental Stewardship",
      text: "From reforestation drives to animal rescue, our community has grown into a powerful network of stewards united by a passion for the planet.",
      icon: "🌳"
    },
    {
      title: "Holistic Impact",
      text: "We focus on lasting change through sustainable practices, community wellness programs like Yoga, and safeguarding the future of students.",
      icon: "✨"
    }
  ];

  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-32 bg-blue-950 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/Volunteer.jpeg"
          alt="TouchTSL Community Outreach"
          className="w-full h-full object-cover opacity-60 animate-subtle-zoom"
        />
        <div className="absolute inset-0 bg-blue-950/60 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent"></div>
      </div>



      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-yellow-400/10 border border-yellow-400/20 px-4 py-2 rounded-full mb-6 md:mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              <span className="text-yellow-300 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                Direct Community Impact
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
              Where Your <span className="text-yellow-400 italic font-serif">Action</span>{" "}
              <br className="hidden md:block" />Creates Change.
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-8 md:mb-10 max-w-2xl mx-auto md:mx-0">
              Getting involved with TouchTSL means more than volunteering — it means becoming 
               a champion for nature, a protector for animals, and a supporter for community well-being.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 mb-8 md:mb-0">
              <button
                onClick={onRegister}
                className="px-10 py-5 bg-yellow-400 text-blue-950 rounded-2xl font-bold text-lg hover:bg-yellow-300 transition-all hover:scale-105 shadow-xl shadow-yellow-900/20 inline-block"
              >
                Get Involved Now
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                Our Story →
              </button>
            </div>
          </div>

          {/* Impact Card */}
          <div className="w-full lg:w-1/3 mt-8 md:mt-12 lg:mt-0 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 rounded-[2.5rem] shadow-2xl">
              <div className="flex -space-x-3 mb-6">
                {["/abtar1.png", "/abtar2.png", "/abtar3.png", "/abtar4.png"].map((imgSrc, i) => (
                  <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-yellow-400 overflow-hidden bg-blue-100 shrink-0">
                    <img src={imgSrc} alt={`Member ${i + 1}`} className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-yellow-400 bg-yellow-400 flex items-center justify-center text-blue-950 font-bold text-xs">+200</div>
              </div>
              <h4 className="text-white font-bold text-lg md:text-xl mb-2">Join Our Change-Makers</h4>
              <p className="text-blue-200 text-sm leading-relaxed mb-6">
                Join our active network of 200+ volunteers and partners driving environmental and social impact.
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {["Reforestation", "Animal Rescue", "Community Yoga"].map(item => (
                  <div key={item} className="flex items-center gap-2 text-yellow-300 text-[10px] md:text-xs font-bold italic">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-blue-950/95 backdrop-blur-2xl" onClick={() => setIsModalOpen(false)}></div>

          {/* Close Button - FIXED for easy access */}
          <button 
            onClick={() => setIsModalOpen(false)}
            className="fixed top-6 right-6 w-14 h-14 bg-yellow-400 text-blue-950 rounded-full flex items-center justify-center shadow-2xl transition-all z-[110] group hover:scale-110 active:scale-95 border-4 border-white animate-in slide-in-from-top-4 duration-500"
            aria-label="Close story"
          >
            <svg className="w-8 h-8 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="relative z-10 w-full max-w-6xl aspect-video md:aspect-[21/9] bg-blue-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 overflow-y-auto md:overflow-visible">
            {/* Left Visual */}
            <div className="w-full md:w-1/2 h-full relative">
              <img
                src="/Home.jpeg"
                alt="TouchTSL Impact"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-10">
                  <img src="/TouchTSL.png" alt="TouchTSL" className="w-24 h-24 object-contain rounded-full bg-white/10 p-2 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold text-white mb-2 italic font-serif">TouchTSL</h4>
                  <p className="text-blue-300 text-sm tracking-widest uppercase">Transforming Communities</p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 bg-blue-950/50 p-8 md:p-16 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">Our <span className="text-yellow-400 italic font-serif">Story</span></h3>
                  <div className="h-1 w-20 bg-yellow-400 rounded-full"></div>
                </div>
              </div>

              <div className="space-y-8">
                {storyChapters.map((chapter, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="text-3xl grayscale group-hover:grayscale-0 transition-all">{chapter.icon}</div>
                    <div>
                      <h5 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">{chapter.title}</h5>
                      <p className="text-blue-300 text-sm leading-relaxed">{chapter.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-8 py-4 bg-yellow-400 text-blue-950 rounded-xl font-bold hover:bg-yellow-300 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VolunteerHero;
