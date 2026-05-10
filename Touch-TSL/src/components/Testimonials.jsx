import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "TouchTSL's reforestation drive completely transformed our community park. We've planted over 500 trees, and the air feels fresher already. It's a gift for our children.",
    author: "Arjun Sharma",
    role: "Environmental Activist, Odisha",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%231e3a8a'/%3E%3Ctext x='50' y='63' text-anchor='middle' fill='white' font-size='36' font-family='Arial'%3EAS%3C/text%3E%3C/svg%3E"
  },
  {
    quote: "The animal rescue team from TouchTSL saved a stray dog in our locality after a hit-and-run. Their quick action and compassion were truly inspiring.",
    author: "Sneha Roy",
    role: "Resident, Jajpur",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23ca8a04'/%3E%3Ctext x='50' y='63' text-anchor='middle' fill='white' font-size='36' font-family='Arial'%3ESR%3C/text%3E%3C/svg%3E"
  }
];

const moreStories = [
  {
    title: "A Greener Tomorrow",
    desc: "In the past year, TouchTSL has spearheaded reforestation efforts across five districts. By partnering with local schools, we've engaged thousands of students in planting and nurturing native tree species, creating 'mini-forests' that will serve as carbon sinks for decades.",
    extra: "Our goal is to plant 1 million trees by 2030, and we're already 50,000 steps closer.",
    image: "/Gardening.jpeg"
  },
  {
    title: "Safe Spaces for Students",
    desc: "Our Student Protection program has established 'Safe Zones' in 20 partner schools. These zones provide students with access to mental health counseling and workshops on cyber-safety, ensuring they can focus on their studies without fear or anxiety.",
    extra: "Over 5,000 students have already benefited from our mental health and safety workshops.",
    image: "/activites.jpeg"
  }
];

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <section id="testimonials" className="py-12 md:py-24 bg-blue-950 text-white overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left">
            <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Impact Stories</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight tracking-tight">
              Voices of <span className="text-yellow-400 italic font-serif">Change</span>
            </h2>
            <p className="text-blue-300 text-base sm:text-lg mb-8">
              Real stories from the communities and partner organisations whose lives have been transformed through TouchTSL's work.
            </p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 border border-white/20 rounded-xl hover:bg-white/10 transition-all font-bold group flex items-center gap-3"
            >
              Read More Stories
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 rounded-3xl relative hover:bg-white/10 transition-all">
                <div className="text-yellow-400 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.851h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.418.913-4.001 3.633-4.001 5.842h4v10h-9.995z" />
                  </svg>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.image} alt={t.author} className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400/30" />
                  <div>
                    <h4 className="font-bold text-white">{t.author}</h4>
                    <p className="text-xs text-blue-400 uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-10 backdrop-blur-sm">
          <div 
            className="absolute inset-0 bg-blue-950/80"
            onClick={() => setIsModalOpen(false)}
          ></div>
          
          <div className="relative z-10 bg-white text-stone-900 w-full max-w-6xl h-full max-h-[95vh] md:max-h-[90vh] rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col scale-100 animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="p-6 md:p-8 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-20">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold font-serif italic text-blue-950">TouchTSL Impact Stories</h3>
                <p className="text-stone-500 text-xs md:text-sm">Stories of awareness, empowerment, and transformation.</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-stone-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-12 bg-stone-50/30">
               <div className="grid grid-cols-1 gap-16 md:gap-24">
                  {moreStories.map((story, i) => (
                    <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-16 items-center`}>
                       <div className="w-full md:w-1/2">
                         <div className="aspect-video rounded-[2rem] overflow-hidden shadow-2xl relative group">
                           <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                           <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 to-transparent"></div>
                         </div>
                       </div>
                       <div className="w-full md:w-1/2">
                          <span className="text-blue-700 font-bold tracking-widest uppercase text-xs mb-3 block">Impact Highlight</span>
                          <h4 className="text-3xl md:text-4xl font-bold mb-6 text-blue-950 italic font-serif leading-tight">{story.title}</h4>
                          <p className="text-stone-600 text-lg leading-relaxed mb-6">{story.desc}</p>
                          <div className="p-6 bg-yellow-50 rounded-2xl border-l-4 border-yellow-400">
                             <p className="text-yellow-900 text-sm italic font-medium leading-relaxed">{story.extra}</p>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>

               <div className="mt-24 p-8 md:p-16 bg-blue-950 rounded-[3rem] text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 blur-[80px] rounded-full"></div>
                  <div className="relative z-10">
                    <h4 className="text-3xl md:text-5xl font-bold mb-6 italic font-serif text-white">"We don't just raise awareness — we <span className="text-yellow-400">create action.</span>"</h4>
                    <p className="text-blue-300 text-lg max-w-3xl mx-auto leading-relaxed">
                      Every tree we plant, every animal we rescue, and every student we protect brings us 
                      closer to a world defined by compassion and sustainability.
                    </p>
                  </div>
               </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 md:p-8 bg-white text-center border-t border-stone-100 sticky bottom-0 z-20">
               <button 
                 onClick={() => setIsModalOpen(false)}
                 className="px-12 py-4 bg-blue-900 text-white rounded-xl font-bold hover:scale-105 transition-all shadow-xl shadow-blue-900/20"
               >
                 Close & Return
               </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
