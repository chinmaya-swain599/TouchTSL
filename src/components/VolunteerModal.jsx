import React, { useEffect, useState } from "react";

const VolunteerModal = ({ isOpen, onClose }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setResult(""); // Reset result on open
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", "026b37c3-9fdd-4efc-aefd-6b62ecdf2c19");
    formData.append("subject", "New TouchTSL Volunteer Registration");
    formData.append("from_name", "TouchTSL Volunteer Portal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Registration successful! Welcome to the TouchTSL family.");
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch {
      setResult("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 lg:p-10">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-blue-950/70 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
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
 
      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-5xl bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 max-h-[85vh] md:max-h-none overflow-y-auto md:overflow-visible">
        {/* Left Side: Visual & Quote */}
        <div className="hidden md:block w-full md:w-[40%] relative min-h-[300px] md:min-h-full">
          <img 
            src="/volunteer2.jpeg" 
            alt="TouchTSL Volunteer" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/40 to-transparent"></div>
          
          <div className="relative h-full flex flex-col justify-between p-8 md:p-14 z-10">
            <div className="w-12 h-1.5 bg-yellow-400 rounded-full mb-12"></div>
            
            <div className="mt-auto">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 leading-[1.1] tracking-tight">
                Become a <span className="text-yellow-400 italic font-serif">Bridge</span>,<br />
                Deliver<br />
                Hope.
              </h2>
              
              <div className="bg-blue-950/80 border border-white/20 p-8 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                 <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
                <p className="text-white text-base md:text-lg mb-6 italic leading-relaxed font-semibold">
                  "Individual commitment to a group effort—that is what makes a team work, a company work, a society work, a civilization work."
                </p>
                <div className="flex items-center gap-4">
                   <div className="h-px w-10 bg-yellow-400/50"></div>
                   <p className="text-yellow-400 text-xs font-black tracking-[0.3em] uppercase">
                    Vince Lombardi
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full md:w-[60%] p-8 md:p-14 relative bg-white flex flex-col min-h-[500px]">
          <header className="mb-10 text-stone-900">
            <h3 className="text-3xl md:text-4xl font-bold text-blue-950 mb-3 tracking-tight">
              <span className="italic font-serif">Volunteer</span> <span className="text-yellow-500">Registration</span>
            </h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
              <p className="text-stone-500 text-sm font-medium">Join our growing network of change-makers.</p>
            </div>
          </header>

          <div className="flex-1">
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Full Name</label>
                  <input type="text" name="name" required placeholder="e.g. Amit Kumar" className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-100 outline-none focus:border-blue-900 transition-colors text-blue-950 font-bold placeholder-stone-300" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Email Address</label>
                  <input type="email" name="email" required placeholder="name@email.com" className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-100 outline-none focus:border-blue-900 transition-colors text-blue-950 font-bold placeholder-stone-300" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Contact Number</label>
                  <input type="tel" name="phone" required placeholder="+91 XXXX XXX XXX" className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-100 outline-none focus:border-blue-900 transition-colors text-blue-950 font-bold placeholder-stone-300" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Preferred Domain</label>
                  <select name="category" required className="w-full px-0 py-3 bg-transparent border-b-2 border-stone-100 outline-none focus:border-blue-900 transition-colors text-blue-950 font-bold cursor-pointer">
                    <option value="" disabled selected>Select domain...</option>
                    <option value="Environment Protection">Environment Protection</option>
                    <option value="Animal Care & Support">Animal Care & Support</option>
                    <option value="Yoga & Meditation">Yoga & Meditation</option>
                    <option value="Student Protection">Student Protection</option>
                    <option value="Health Care Support">Health Care Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Your Motivation</label>
                <textarea name="interest_note" rows="3" placeholder="Tell us why you want to drive change with TouchTSL..." className="w-full px-5 py-4 bg-stone-50 rounded-2xl border border-transparent outline-none focus:border-blue-200 focus:bg-white transition-all text-blue-950 text-sm resize-none"></textarea>
              </div>

              {result && (
                <div className={`p-4 rounded-xl font-bold text-center border text-sm ${result.includes("successful") ? "bg-blue-50 text-blue-700 border-blue-100" : "bg-stone-50 text-stone-600 border-stone-200"}`}>
                  {result}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-5 text-white font-bold rounded-2xl transition-all shadow-xl flex justify-center items-center gap-3 ${isSubmitting ? 'bg-stone-300' : 'bg-blue-900 hover:bg-blue-800 hover:shadow-blue-900/30'}`}
              >
                {isSubmitting ? "Processing..." : "Confirm & Join Mission"}
                {!isSubmitting && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                )}
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-stone-400 text-xs">
            By joining, you agree to TouchTSL's <span className="font-bold text-blue-900 cursor-pointer">Volunteer Guidelines</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerModal;
