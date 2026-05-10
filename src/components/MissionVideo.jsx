import React from "react";

const MissionVideo = () => {
  return (
    <section className="py-16 md:py-24 bg-blue-950 overflow-hidden relative">
      <div className="absolute inset-0 z-0">
         <img src="/welcome.jpeg" className="w-full h-full object-cover opacity-20 blur-sm" alt="Background" />
         <div className="absolute inset-0 bg-blue-950/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
               <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
               Live from the Field
            </div>
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight">
              Our <span className="text-yellow-400 font-serif italic">Mission</span> in Every Motion
            </h2>
            <p className="text-blue-200 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
              At TouchTSL, our impact isn't just on paper—it's in the soil we cultivate, 
              the animals we rescue, and the lives we touch every day. Watch how we are 
              redefining environmental and social welfare.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
                  <h4 className="text-yellow-400 font-bold mb-2">Blood Donation Network</h4>
                  <p className="text-blue-300 text-sm">Expanding our reach across Odisha to ensure no emergency goes unanswered.</p>
               </div>
               <div className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-md">
                  <h4 className="text-yellow-400 font-bold mb-2">Organic Farming Council</h4>
                  <p className="text-blue-300 text-sm">Empowering 500+ farmers with sustainable, chemical-free cultivation techniques.</p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/20 bg-blue-900 group">
                 <iframe 
                   className="absolute inset-0 w-full h-full"
                   src="https://www.youtube.com/embed/6v2L2UGZJAM" 
                   title="TouchTSL Mission Video" 
                   frameBorder="0" 
                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                   allowFullScreen
                 ></iframe>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVideo;
