import React from "react";
import { Link } from "react-router-dom";
import CTA from "../components/CTA";
import DeftForm from "../components/DeftForm";

const Contact = ({ onVisit }) => {

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/contact.jpeg"
            alt="Contact TouchTSL"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-blue-950/60"></div>

        <div className="container mx-auto px-6 relative z-10 text-center mt-4 md:mt-6">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Contact <span className="text-yellow-400 font-serif italic">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto">
            Ready to partner, volunteer, or learn more about our initiatives? We would love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section id="contact-form" className="py-12 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 mb-6 md:mb-8 italic font-serif">Get In Touch</h2>
              <p className="text-stone-600 text-lg mb-8 md:mb-12">
                Whether you're an environmentalist, an animal lover, a corporate partner, or an individual who wants to drive change — we welcome every conversation.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-bold text-blue-950 mb-1">Our Location</h4>
                    <p className="text-stone-600">Janak, Jajpur, Odisha</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 w-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0 w-full overflow-hidden">
                    <h4 className="text-xl font-bold text-blue-950 mb-1">Email Us</h4>
                    <p className="text-stone-600 break-words w-full overflow-hidden block text-sm sm:text-base">info@touchtsl.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 w-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-bold text-blue-950 mb-1">Call Us</h4>
                    <p className="text-stone-600 text-sm sm:text-base">
                      +91 84578&nbsp;13813
                    </p>
                  </div>
                </div>

                {/* Partnership Types */}
                <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <h4 className="text-lg font-bold text-blue-950 mb-4">We welcome partnerships from:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {["Government Bodies", "NGOs & Trusts", "Corporate CSR Teams", "Academic Institutions", "Media Partners", "Individual Volunteers"].map((t, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-blue-800">
                        <span className="w-2 h-2 bg-yellow-400 rounded-full shrink-0"></span>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-[2rem] overflow-hidden shadow-xl w-full">
              {/* Coloured Header Bar */}
              <div className="bg-gradient-to-r from-blue-800 to-blue-600 px-8 py-7">
                <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                <p className="text-blue-200 text-sm mt-1">We reply within 24 hours ✦</p>
              </div>

              {/* Form Body */}
              <div className="bg-white px-8 py-8 min-h-[600px] text-stone-900">
                <DeftForm formId="026b37c3-9fdd-4efc-aefd-6b62ecdf2c19" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="relative group rounded-[2rem] md:rounded-[3.5rem] p-3 md:p-4 bg-stone-100 border-4 border-stone-200 shadow-inner w-full overflow-hidden">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238940.54654994793!2d85.93278936970178!3d20.65142477064028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a195f002935badf%3A0x533a59a8bca77422!2sJanakeswara%20Siva%20Temple!5e0!3m2!1sen!2sin!4v1778224364440!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="transition-all duration-1000"
              ></iframe>

              {/* Blinking Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[120%] z-30 pointer-events-none">
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-12 h-12 bg-yellow-400/40 rounded-full animate-ping"></div>
                  <div className="absolute w-6 h-6 bg-yellow-400 rounded-full animate-pulse border-4 border-white"></div>
                  <div className="relative z-10 text-blue-900 transform scale-150 drop-shadow-2xl">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Floating Direction Card — Desktop */}
              <div className="absolute bottom-10 right-10 z-40 hidden lg:block w-72">
                <div className="bg-white/80 hover:bg-white/95 backdrop-blur-xl p-6 rounded-[2rem] shadow-2xl border border-white/50 transition-all duration-300 group/card">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-blue-700">TouchTSL Hub</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-6 font-serif italic">Find Our Office</h3>
                  <a
                    href="https://maps.google.com/maps?q=20.6514248,85.9327894&ll=20.6514248,85.9327894&z=17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-4 bg-blue-900 text-white rounded-xl font-bold hover:bg-yellow-400 hover:text-blue-950 transition-all group/btn shadow-xl box-border"
                  >
                    📍 Open in Maps
                    <svg className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Mobile View */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 lg:hidden w-[90%] max-w-xs">
                <a
                  href="https://maps.google.com/maps?q=20.6514248,85.9327894&ll=20.6514248,85.9327894&z=17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full py-4 bg-blue-900 text-white rounded-[1.25rem] font-bold shadow-2xl box-border"
                >
                  📍 View Exact Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-stone-100 max-w-3xl w-full text-center">
            <h3 className="text-2xl font-bold text-blue-950 mb-6 font-serif italic">Curious about our impact?</h3>
            <Link to="/#initiatives" className="inline-flex items-center gap-3 text-white hover:text-white font-bold transition-all px-10 py-5 bg-blue-900 rounded-2xl group hover:shadow-2xl hover:scale-105 active:scale-95 shadow-xl">
              <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
              Return to Initiatives
            </Link>
          </div>
        </div>
      </section>

      <CTA onVisitHome={onVisit} />
    </main>
  );
};

export default Contact;
