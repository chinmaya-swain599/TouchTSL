import React from "react";

const MissionVision = () => {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6 font-serif italic text-blue-700 tracking-tight">Our Mission</h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              TouchTSL is committed to protecting our environment, caring for animals, 
              and supporting the well-being of students and communities. We work as a catalyst 
              for positive change, ensuring a sustainable and compassionate future for all.
            </p>
            <div className="space-y-4">
              {[
                "Preserve ecosystems through reforestation and sustainable practices",
                "Provide medical care and shelter for animals in need",
                "Promote sustainable agriculture and support rural farmers",
                "Drive blood donation awareness and emergency health support",
                "Promote holistic health through Yoga and Meditation",
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3 text-stone-800 font-medium">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 relative group">
             <div className="absolute inset-0 bg-yellow-400 rounded-3xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
             <div className="rounded-3xl overflow-hidden shadow-2xl h-[250px] md:h-[400px] border-4 border-white bg-blue-900">
               <video 
                 className="w-full h-full object-cover"
                 autoPlay 
                 muted 
                 loop 
                 playsInline
                 poster="/mission.jpeg"
               >
                 <source src="/mission-video.mp4" type="video/mp4" />
                 {/* Fallback image if video fails */}
                 <img src="/mission.jpeg" alt="Mission Vision" className="w-full h-full object-cover" />
               </video>
               <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors"></div>
             </div>
          </div>
        </div>

        {/* Video Feature Section */}
        <div className="mb-16 md:mb-24 p-8 md:p-16 bg-stone-900 rounded-[3rem] text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full"></div>
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                 <h3 className="text-2xl md:text-4xl font-bold mb-6 tracking-tight">Watch Our <span className="text-yellow-400 italic font-serif">Impact</span> in Motion</h3>
                 <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                   See how our teams on the ground are delivering hope, saving lives, and protecting nature every single day.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <div className="px-6 py-3 bg-white/10 rounded-full text-sm font-bold border border-white/20">Environmental Action</div>
                    <div className="px-6 py-3 bg-white/10 rounded-full text-sm font-bold border border-white/20">Animal Rescue</div>
                    <div className="px-6 py-3 bg-white/10 rounded-full text-sm font-bold border border-white/20">Health Camps</div>
                 </div>
              </div>
              <div className="relative aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10 group cursor-pointer">
                 <img src="/Contribution.jpeg" alt="Play Video" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center text-blue-950 shadow-2xl group-hover:scale-110 transition-transform">
                       <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                 </div>
                 <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs font-bold uppercase tracking-widest text-yellow-400">Featured Video</p>
                    <p className="text-sm font-medium">TouchTSL: A Year of Transformations (2024)</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[250px] md:h-[400px] relative group">
            <img 
              src="https://healtheglobefoundation.org/images/img41.png" 
              alt="TouchTSL Vision" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-blue-950/20 group-hover:bg-transparent transition-colors"></div>
          </div>
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-900 mb-6 font-serif italic text-blue-700 tracking-tight">Our Vision</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              We envision a world where nature thrives alongside compassionate human communities. 
              TouchTSL aspires to be a global leader in environmental stewardship and social 
              welfare — making our planet a safer, greener, and more harmonious place for all living beings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
