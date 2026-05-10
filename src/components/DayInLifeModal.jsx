import React from "react";

const DayInLifeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const programSchedule = [
    { time: "07:00 AM", activity: "Yoga & Meditation Session", icon: "🧘" },
    { time: "09:00 AM", activity: "Environmental Protection Drive", icon: "🌳" },
    { time: "11:00 AM", activity: "Blood Donation Awareness Camp", icon: "🩸" },
    { time: "01:00 PM", activity: "Animal Care & Rescue Visit", icon: "🐾" },
    { time: "03:30 PM", activity: "Sustainable Agriculture Training", icon: "🚜" },
    { time: "05:30 PM", activity: "Community Health Support", icon: "🏥" }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div 
        className="absolute inset-0 bg-blue-950/80 backdrop-blur-xl transition-all duration-500"
        onClick={onClose}
      ></div>

      {/* Close Button - FIXED at top right of viewport for easy access */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 w-14 h-14 bg-yellow-400 text-blue-950 rounded-full flex items-center justify-center shadow-2xl transition-all z-[110] group hover:scale-110 active:scale-95 border-4 border-white animate-in slide-in-from-top-4 duration-500"
        aria-label="Close modal"
      >
        <svg className="w-8 h-8 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="relative z-10 w-full max-w-6xl bg-white rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 flex flex-col md:flex-row max-h-[85vh] md:max-h-[90vh]">
         {/* Left Column */}
         <div className="w-full md:w-[40%] bg-blue-950 relative p-12 flex flex-col justify-end min-h-[300px]">
            <img 
              src="/welcome.jpeg" 
              alt="TouchTSL Life" 
              className="absolute inset-0 w-full h-full object-cover opacity-40" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent"></div>
            <div className="relative z-10 text-white">
               <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
               <h3 className="text-4xl font-bold mb-4 italic font-serif leading-tight">
                 The Rhythm <br/><span className="text-yellow-400">of Impact.</span>
               </h3>
               <p className="text-blue-200 text-lg leading-relaxed">
                 Experience the daily heartbeat of our mission.
               </p>
            </div>
         </div>

         {/* Right Column - Timeline */}
         <div className="w-full md:w-[60%] p-8 md:p-12 overflow-y-auto bg-white text-stone-900">
            <div className="flex justify-between items-center mb-10">
               <div>
                  <h4 className="text-2xl font-bold text-blue-950">A Day at TouchTSL</h4>
                  <p className="text-stone-500 text-sm">The rhythm of awareness, action, and impact.</p>
               </div>
            </div>

            <div className="space-y-8 relative">
               {/* Vertical Line */}
               <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-stone-200 border-l border-dashed"></div>
               
               {programSchedule.map((item, i) => (
                 <div key={i} className="flex gap-6 relative group">
                    <div className="w-11 h-11 rounded-full bg-white border-2 border-blue-700 flex items-center justify-center text-xl z-10 group-hover:bg-blue-700 transition-colors duration-300">
                       {item.icon}
                    </div>
                    <div className="pt-1">
                       <p className="text-blue-700 font-bold text-xs uppercase tracking-widest mb-1">{item.time}</p>
                       <h5 className="text-lg font-bold text-blue-950">{item.activity}</h5>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 flex items-center justify-between gap-6 flex-wrap">
               <div className="max-w-[200px]">
                  <p className="text-xs text-blue-400 uppercase font-black tracking-widest mb-2">Partner With Us</p>
                  <p className="text-sm font-medium text-blue-800">We host open partner sessions every week. Join our movement.</p>
               </div>
               <button 
                 onClick={onClose}
                 className="px-8 py-3 bg-blue-900 text-white rounded-xl font-bold hover:scale-105 hover:bg-blue-800 transition-all text-sm"
               >
                 Close Window
               </button>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DayInLifeModal;
