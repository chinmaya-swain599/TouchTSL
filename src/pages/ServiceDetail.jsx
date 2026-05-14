import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import CTA from "../components/CTA";

const servicesData = {
  environment: {
    title: "Environment Protection",
    subtitle: "Nurturing the Earth for a Sustainable Future",
    description: "At TouchTSL, we believe that a healthy planet is the foundation of all life. Our environmental initiatives focus on reforestation, waste reduction, and promoting sustainable practices within communities to combat climate change and preserve biodiversity.",
    image: "/Gardening.jpeg",
    features: [
      {
        title: "Reforestation Drives",
        desc: "Organizing large-scale tree planting events to restore local ecosystems and increase green cover.",
        icon: "🌳"
      },
      {
        title: "Waste Management",
        desc: "Implementing community-based recycling and composting programs to reduce landfill waste.",
        icon: "♻️"
      },
      {
        title: "Sustainable Living",
        desc: "Educating citizens on eco-friendly alternatives and energy-efficient practices for daily life.",
        icon: "☀️"
      },
      {
        title: "Water Conservation",
        desc: "Restoring local water bodies and promoting rainwater harvesting techniques in rural areas.",
        icon: "💧"
      }
    ],
    details: [
      "Planted over 50,000 saplings in the last year alone.",
      "Launched 'Zero Waste' pilot projects in 10 local communities.",
      "Conducting regular beach and river cleanup operations with volunteers.",
      "Developing educational kits on climate change for schools and colleges."
    ],
    commitment: "Our commitment is to leave a greener, cleaner, and more vibrant world for the generations to come."
  },
  "animal-care": {
    title: "Animal Care & Support",
    subtitle: "Compassion in Action for Every Living Being",
    description: "TouchTSL is dedicated to the well-being of animals. We provide emergency medical aid, run shelters for abandoned animals, and advocate for stronger animal protection laws to ensure every creature is treated with kindness.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsAoKpxGq-lsKiPV_qN0472gFCMdDv7KLtQ&s",
    features: [
      {
        title: "Emergency Rescue",
        desc: "24/7 helpline and ambulance service for injured or distressed animals in the region.",
        icon: "🚑"
      },
      {
        title: "Shelter Management",
        desc: "Providing safe havens, nutritious food, and long-term care for abandoned and elderly animals.",
        icon: "🏠"
      },
      {
        title: "Vaccination & Sterilization",
        desc: "Conducting regular camps to control the stray population humanely and prevent diseases.",
        icon: "💉"
      },
      {
        title: "Advocacy & Awareness",
        desc: "Educating the public on animal rights and promoting the 'Adopt, Don't Shop' philosophy.",
        icon: "📢"
      }
    ],
    details: [
      "Rescued and rehabilitated over 1,200 animals in the past two years.",
      "Fully equipped veterinary clinic operating at our central shelter.",
      "Partnering with local law enforcement to report and prevent animal cruelty.",
      "Weekly awareness sessions in schools to foster empathy toward animals."
    ],
    commitment: "We speak for those who cannot, ensuring every animal lives a life free from fear and pain."
  },
  yoga: {
    title: "Yoga & Meditation",
    subtitle: "Harmonizing Mind, Body, and Spirit",
    description: "Our Yoga and Meditation programs are designed to bring inner peace and physical health to everyone. We blend ancient wisdom with modern lifestyles to help individuals manage stress and lead more balanced lives.",
    image: "/yoga.jpeg",
    features: [
      {
        title: "Community Classes",
        desc: "Free morning and evening yoga sessions in public parks and community centers.",
        icon: "🧘"
      },
      {
        title: "Corporate Wellness",
        desc: "Tailored meditation workshops for organizations to improve employee focus and reduce burnout.",
        icon: "🏢"
      },
      {
        title: "Youth Mindfulness",
        desc: "Introducing simple meditation techniques to students to help with exam stress and focus.",
        icon: "✨"
      },
      {
        title: "Therapeutic Yoga",
        desc: "Specialized sessions for senior citizens and individuals recovering from physical ailments.",
        icon: "🕉️"
      }
    ],
    details: [
      "Over 5,000 regular participants in our community yoga programs.",
      "Annual 'International Yoga Day' events attracting thousands of enthusiasts.",
      "Certified instructors dedicated to making yoga accessible to all age groups.",
      "Developing digital content for guided meditation available to everyone."
    ],
    commitment: "Inner peace is the first step toward a peaceful world; we provide the path to find it."
  },
  "student-protection": {
    title: "Student Protection",
    subtitle: "Safeguarding the Future of Our Nation",
    description: "TouchTSL's Student Protection initiative ensures that every child can pursue education in a safe, secure, and supportive environment. We focus on mental health support, physical safety, and protecting students from exploitation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbesjA49tQBAUY9LvgJkmnUotIKTHJXkVroQ&s",
    features: [
      {
        title: "Mental Health Support",
        desc: "Providing access to professional counselors for students facing academic or personal stress.",
        icon: "🧠"
      },
      {
        title: "Anti-Bullying Programs",
        desc: "Working with schools to implement strict anti-bullying policies and awareness campaigns.",
        icon: "🛡️"
      },
      {
        title: "Cyber Safety",
        desc: "Educating students on safe internet practices and protecting them from online predators.",
        icon: "💻"
      },
      {
        title: "Scholarship Assistance",
        desc: "Helping bright but underprivileged students access financial support to continue their education.",
        icon: "🎓"
      }
    ],
    details: [
      "Established student support cells in 25 partner schools.",
      "Conducted cyber-safety workshops for over 10,000 students this year.",
      "Launched a dedicated 24/7 student helpline for emotional support.",
      "Providing vocational guidance to help students transition from school to careers."
    ],
    commitment: "A child's only job should be to learn and grow; we handle the rest."
  },
  "health-care": {
    title: "Health Care & Support",
    subtitle: "Dignified Health Services for the Underserved",
    description: "Our Healthcare initiative bridges the gap between quality medical services and those who cannot afford them. From mobile clinics to community support groups, we ensure health is a right, not a privilege.",
    image: "/Healthcare.jpeg",
    features: [
      {
        title: "Mobile Medical Units",
        desc: "Bringing basic healthcare and diagnostic services to remote and rural areas.",
        icon: "🚐"
      },
      {
        title: "Maternal & Child Health",
        desc: "Focused programs for prenatal care, nutrition, and child immunization drives.",
        icon: "👶"
      },
      {
        title: "Mental Health Advocacy",
        desc: "Breaking the stigma around mental illness through community counseling and support.",
        icon: "💙"
      },
      {
        title: "Elderly Care",
        desc: "Providing home-based support and medical checkups for senior citizens living alone.",
        icon: "👴"
      }
    ],
    details: [
      "Served over 30,000 patients through our mobile health units last year.",
      "Regular blood donation camps organized in partnership with local hospitals.",
      "Distributing essential medicines and hygiene kits to slum communities.",
      "Training community health workers to provide basic first aid and health education."
    ],
    commitment: "Healing begins with a touch of care; we are here to provide that touch to every life in need."
  },
  agriculture: {
    title: "Agriculture Support",
    subtitle: "Empowering Farmers, Enriching Rural Life",
    description: "Our Agriculture Support initiative is dedicated to transforming rural livelihoods by promoting sustainable and organic farming. We provide farmers with the knowledge, tools, and resources needed to enhance productivity while preserving the health of the soil and the environment.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet89ViWOqJ9IcQjydAQsQSXSnxT6-PHM9aw&s",
    features: [
      {
        title: "Organic Farming",
        desc: "Training farmers in natural pest control, composting, and chemical-free cultivation methods.",
        icon: "🚜"
      },
      {
        title: "Seed Bank Initiative",
        desc: "Preserving and distributing native, high-yield seeds to ensure crop diversity and resilience.",
        icon: "🌱"
      },
      {
        title: "Soil Health Testing",
        desc: "Providing free soil analysis and recommendations to help farmers optimize their land use.",
        icon: "🔬"
      },
      {
        title: "Market Linkages",
        desc: "Connecting rural farmers directly with markets to ensure fair pricing and reduced wastage.",
        icon: "📈"
      }
    ],
    details: [
      "Supported over 500 farmers in adopting organic practices this year.",
      "Distributed 2,000+ kits of native seeds across local villages.",
      "Organized 15 workshops on sustainable water management in agriculture.",
      "Facilitated the creation of 5 farmer cooperatives for better bargaining power."
    ],
    commitment: "Healthy soil leads to healthy crops and a thriving community; we nurture the roots of our society."
  },
  "blood-donation": {
    title: "Blood Donation Awareness",
    subtitle: "A Gift of Life from One Heart to Another",
    description: "The Blood Donation Awareness program at TouchTSL works to ensure that no life is lost due to the unavailability of blood. We organize regular camps, maintain a registry of voluntary donors, and educate the public on the critical importance of regular donation.",
    image: "https://www.isbr.in/blogs/wp-content/uploads/2024/09/1727178095121-768x1024.jpeg",
    features: [
      {
        title: "Donation Camps",
        desc: "Partnering with hospitals to organize safe and professional blood collection drives.",
        icon: "🩸"
      },
      {
        title: "Donor Registry",
        desc: "Maintaining a verified database of donors for emergency requirements across the region.",
        icon: "📋"
      },
      {
        title: "Health Screening",
        desc: "Providing free basic health checks for all donors to ensure their well-being.",
        icon: "🩺"
      },
      {
        title: "Awareness Drives",
        desc: "Conducting seminars and campaigns to debunk myths and encourage youth participation.",
        icon: "📢"
      }
    ],
    details: [
      "Facilitated the donation of over 100 units of blood in recent emergency drives.",
      "Registered over 500 active voluntary donors in our community network.",
      "Organized awareness sessions in 12 colleges and local institutions.",
      "Providing 24/7 coordination support for emergency blood requirements."
    ],
    commitment: "Your blood can be the lifeline someone is waiting for; join our mission of giving."
  }
};

const ServiceDetail = ({ onVisit }) => {
  const { slug } = useParams();
  const service = servicesData[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[2000ms] scale-105 hover:scale-100">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-950/40 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-950/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-30">
            <Link 
              to="/#initiatives" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full font-bold hover:bg-white/30 transition-all hover:-translate-x-2 shadow-xl group"
            >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
                Back to Initiatives
            </Link>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center text-white mt-8 md:mt-12">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight uppercase font-serif">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg md:text-2xl font-light text-blue-100 max-w-2xl mx-auto italic">
              "{service.subtitle}"
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-stone-50 to-transparent"></div>
      </section>

      {/* Content Section */}
      <section className="py-20 relative z-10 -mt-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000 delay-300">
              <h2 className="text-3xl md:text-5xl font-bold text-blue-950 mb-8 font-serif italic leading-tight">
                Empowering <span className="text-yellow-500">Communities</span> Through Impactful Action
              </h2>
              <p className="text-lg md:text-xl text-stone-600 leading-relaxed mb-10">
                {service.description}
              </p>
              
              <div className="space-y-6">
                {service.details.map((detail, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 text-stone-700 bg-white p-5 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="mt-1.5 flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="font-medium text-stone-800">{detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-10 bg-blue-50 rounded-[2.5rem] border border-blue-100 italic text-blue-900 text-xl relative group shadow-inner transition-transform duration-500 hover:scale-[1.02]">
                <div className="absolute -top-6 -left-2 text-8xl text-blue-200/50 group-hover:scale-110 transition-transform font-serif leading-none">“</div>
                <p className="relative z-10 leading-relaxed font-serif">
                  {service.commitment}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-8 duration-1000 delay-500">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col items-center text-center lg:items-start lg:text-left hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-blue-50 group-hover:bg-blue-100 transition-colors rounded-3xl flex items-center justify-center mb-6 text-5xl transform group-hover:rotate-12 transition-transform">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-blue-950 mb-4 group-hover:text-blue-700 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-stone-600 text-base leading-relaxed group-hover:text-stone-800 transition-colors">
                    {feature.desc}
                  </p>
                </div>
              ))}
              
              <div className="md:col-span-2 mt-8">
                <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                  <img 
                    src="/family1.jpeg"
                    alt="TouchTSL Impact"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="mt-auto">
        <CTA onVisitHome={onVisit} />
      </div>

      {/* Navigation Footer */}
      <div className="bg-white py-12 border-t border-stone-100 flex flex-col items-center gap-6">
        <p className="text-stone-400 font-medium">Want to explore another initiative?</p>
        <div className="flex flex-wrap justify-center gap-4 px-6 text-center">
            <Link to="/#initiatives" className="flex items-center gap-3 text-white hover:text-white font-bold transition-all px-10 py-5 bg-blue-900 rounded-2xl group hover:shadow-2xl hover:scale-105 active:scale-95 shadow-xl">
                <svg className="w-6 h-6 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
                Explore More Initiatives
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
