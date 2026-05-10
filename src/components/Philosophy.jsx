import React from "react";

const Philosophy = () => {
  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/welcome.jpeg" 
                alt="TouchTSL Approach" 
                className="w-full h-[300px] md:h-[600px] object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
          </div>
          
          <div className="md:w-1/2">
            <span className="text-blue-700 font-bold tracking-widest uppercase text-sm mb-4 block">Our Approach</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-6 md:mb-8 leading-tight">
              A Culture of <span className="text-yellow-500 italic font-serif">Collaboration</span> and Collective Action
            </h2>
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              At TouchTSL, we believe that the health of our planet and the well-being of all living beings 
              are deeply interconnected. We act as a catalyst for environmental preservation 
              and compassionate care — ensuring a sustainable future through <strong>collective stewardship</strong> 
              and grassroots action.
            </p>
            <p className="text-lg text-stone-600 mb-8 leading-relaxed">
              Every tree planted and every life protected is driven by a single conviction: 
              that compassion and sustainability are the strongest pillars of a thriving 
              and harmonious society.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4 p-4 border border-blue-100 rounded-2xl hover:bg-blue-50 transition-colors">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-700 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Sustainable Stewardship</h4>
                  <p className="text-sm text-stone-500">Protecting nature &amp; ecosystems.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 p-4 border border-yellow-100 rounded-2xl hover:bg-yellow-50 transition-colors">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600 shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-blue-950">Compassionate Care</h4>
                  <p className="text-sm text-stone-500">Every life, every animal, cared for.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
