import React from "react";

const boardMembers = [
  { name: "Executive Director", role: "Board Member", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Principal Trustee", role: "Board Member", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Financial Advisor", role: "Trustee", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400" },
  { name: "Legal Consultant", role: "Trustee", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400" }
];

const ourTeam = [
  {
    name: "Chinmaya Swain",
    role: "Founder, President & Chief Organiser",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Rakesh Jena",
    role: "Ground Level Operations Head",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Indradyumna Jena",
    role: "Govt. & Public Relations Head",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Satyaranjan Samal",
    role: "Govt. & Public Relations Coordinator",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Satyabrata Jena",
    role: "Blood Donation & Health Coordinator",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Bishnu Prasad Ojha",
    role: "Finance & Support Management Head",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "K. Krishna Rao Dora",
    role: "Medical & Health Coordinator",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    name: "Ashish Samal",
    role: "Social Media & Awareness Head",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const Team = () => {
  return (
    <section id="board-of-directors" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-5xl font-bold text-blue-950 mb-6 tracking-tight">Board of <span className="text-yellow-500 italic font-serif">Directors</span> & Trustees</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Our leadership is driven by purpose, guided by compassion for all living beings, and committed to environmental stewardship.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-8 md:gap-y-16 mb-24 md:mb-32">
          {boardMembers.map((member, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 md:mb-6 shadow-md border-4 border-stone-50">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-sm md:text-lg font-bold text-blue-950 mb-1 text-center leading-tight">{member.name}</h4>
              <p className="text-blue-700 font-bold text-[8px] md:text-[10px] tracking-widest uppercase text-center max-w-[140px] md:max-w-[200px] leading-tight">
                {member.role}
              </p>
              <div className="mt-3 w-6 h-0.5 bg-stone-100"></div>
            </div>
          ))}
        </div>

        {/* Our Team Section */}
        <div className="relative mt-12 md:mt-20 pt-16 md:pt-20 border-t border-stone-100">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-50/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="text-center mb-12 md:mb-20 relative z-10 px-4">
            <h2 className="text-2xl md:text-4xl font-bold text-blue-950 mb-4 md:mb-6 tracking-tight">Our <span className="text-yellow-500 italic font-serif">Team</span></h2>
            <div className="w-16 md:w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6 md:mb-8"></div>
            <p className="text-stone-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              The dedicated individuals working on the ground to bring our mission to life every single day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
            {ourTeam.map((member, i) => (
              <div key={i} className="bg-white rounded-[2rem] p-4 md:p-6 border border-stone-100 flex flex-col items-center group shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden mb-4 md:mb-6 shadow-sm group-hover:rotate-2 transition-transform duration-500">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950/20 to-transparent"></div>
                </div>
                
                <div className="text-center w-full">
                  <h4 className="text-xs md:text-lg font-bold text-blue-950 mb-1 md:mb-2 truncate px-1">{member.name}</h4>
                  <div className="inline-block px-2 md:px-3 py-0.5 md:py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
                    <p className="text-yellow-700 text-[7px] md:text-[9px] font-black uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
