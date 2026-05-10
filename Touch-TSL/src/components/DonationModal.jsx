import React, { useState } from "react";

const DonationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedPlan, setSelectedPlan] = useState(null);

  const donationPlans = [
    { id: 1, title: "Plant a Mini-Forest", amount: "500", desc: "Fund the planting and care of 10 native tree saplings.", icon: "🌳" },
    { id: 2, title: "Animal Care Kit", amount: "1500", desc: "Provide medical supplies and food for rescued animals.", icon: "🐾" },
    { id: 3, title: "Student Safety Workshop", amount: "2500", desc: "Sponsor a safety and mental health workshop for 50 students.", icon: "🛡️" },
    { id: 4, title: "Holistic Health Camp", amount: "5000", desc: "Fund a community Yoga and health camp for a local village.", icon: "🧘" },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
      <div className="absolute inset-0 bg-blue-950/90 backdrop-blur-2xl" onClick={onClose}></div>

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
      
      <div className="relative z-10 w-full max-w-5xl bg-stone-50 rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-500 flex flex-col md:flex-row max-h-[85vh] md:max-h-[90vh]">
         {/* Left Column */}
         <div className="w-full md:w-[35%] bg-blue-950 relative p-10 md:p-12 flex flex-col justify-end min-h-[250px] md:min-h-[600px]">
            <img src="/Contribution.jpeg" alt="TouchTSL Impact" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/60 to-transparent"></div>
            <div className="relative z-10 text-white">
               <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
               <h3 className="text-3xl font-bold mb-4 italic font-serif leading-tight">
                 Your Support <br/><span className="text-yellow-400">Creates Change.</span>
               </h3>
               <p className="text-blue-300 leading-relaxed text-sm">
                 Every contribution directly funds our mission to protect the environment, 
                 care for animals, and support community well-being.
               </p>
            </div>
         </div>

         {/* Right Column */}
         <div className="w-full md:w-[65%] p-6 md:p-12 overflow-y-auto bg-stone-50 text-stone-900">
            <div className="flex justify-between items-center mb-8">
               <div>
                  <h4 className="text-2xl md:text-3xl font-bold text-blue-950 mb-1">Support TouchTSL</h4>
                  <p className="text-stone-500 text-sm">Choose how you would like to help today.</p>
               </div>
            </div>

            {/* Impact Plans */}
            <div className="mb-10">
               <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-stone-300"></span>
                  <h5 className="text-[10px] font-black uppercase tracking-widest text-stone-400">Impact Plans</h5>
                  <span className="flex-1 h-px bg-stone-300"></span>
               </div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {donationPlans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-5 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? 'border-blue-700 bg-blue-50 shadow-md transform scale-[1.02]'
                          : 'border-white bg-white hover:border-blue-300 shadow-sm hover:shadow-md'
                      }`}
                    >
                       <div className="flex justify-between items-start mb-2">
                          <span className="text-2xl">{plan.icon}</span>
                          <span className={`${selectedPlan === plan.id ? 'text-blue-700' : 'text-stone-900'} font-bold text-lg`}>₹{plan.amount}</span>
                       </div>
                       <h6 className="font-bold text-stone-800 text-sm mb-1">{plan.title}</h6>
                       <p className="text-[11px] text-stone-500 leading-tight">{plan.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-3 mb-6">
               <span className="w-8 h-px bg-stone-300"></span>
               <h5 className="text-[10px] font-black uppercase tracking-widest text-stone-400">Payment Options</h5>
               <span className="flex-1 h-px bg-stone-300"></span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6">
               {/* QR Code */}
               <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm flex flex-col items-center justify-center text-center">
                  <h6 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" /></svg>
                    Scan to Donate
                  </h6>
                  <div className="w-48 h-48 rounded-2xl bg-white border-2 border-blue-200 shadow-inner overflow-hidden flex items-center justify-center">
                     <img src="/QR.jpeg" alt="UPI QR Code" className="w-full h-full object-cover scale-[1.3]" />
                  </div>
                  <p className="text-[10px] text-stone-500 mt-5 font-medium leading-relaxed max-w-[180px]">
                    Accepts Google Pay, PhonePe, Paytm, and all UPI apps.
                  </p>
               </div>

               {/* Bank Details */}
               <div className="bg-blue-950 rounded-3xl p-6 shadow-xl flex flex-col justify-center text-left text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-2xl rounded-full translate-x-8 -translate-y-8"></div>
                  <h6 className="font-bold text-yellow-400 mb-6 flex items-center gap-2 relative z-10 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                    Bank Transfer (NEFT/RTGS)
                  </h6>
                  <div className="space-y-4 relative z-10">
                     <div>
                        <p className="text-[9px] text-blue-400 uppercase tracking-wider font-black mb-1">Account Name</p>
                        <p className="font-bold text-sm tracking-wide">TouchTSL Foundation</p>
                     </div>
                     <div>
                        <p className="text-[9px] text-blue-400 uppercase tracking-wider font-black mb-1">Account Number</p>
                        <p className="font-bold text-sm tracking-[0.2em] text-yellow-400 bg-white/5 inline-block px-3 py-1 rounded-lg border border-white/10 select-all">40310049843</p>
                     </div>
                     <div className="flex gap-6">
                        <div>
                           <p className="text-[9px] text-blue-400 uppercase tracking-wider font-black mb-1">IFSC Code</p>
                           <p className="font-bold text-xs tracking-wider select-all">SBIN0012056</p>
                        </div>
                        <div>
                           <p className="text-[9px] text-blue-400 uppercase tracking-wider font-black mb-1">Bank</p>
                           <p className="font-bold text-xs tracking-wide">State Bank of India</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default DonationModal;
