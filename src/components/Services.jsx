import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    id: "environment-protection",
    slug: "environment",
    title: "Environment Protection",
    description: "Committed to preserving our planet through reforestation, waste management, and sustainable living initiatives for a greener future.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/Gardening.jpeg"
  },
  {
    id: "animal-care",
    slug: "animal-care",
    title: "Animal Care & Support",
    description: "Providing shelter, medical care, and advocacy for domestic and wild animals in need, ensuring they live with dignity and safety.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsAoKpxGq-lsKiPV_qN0472gFCMdDv7KLtQ&s"
  },
  {
    id: "yoga-meditation",
    slug: "yoga",
    title: "Yoga & Meditation",
    description: "Promoting holistic well-being through ancient practices of yoga and meditation to balance mind, body, and spirit in our communities.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/yoga.jpeg"
  },
  {
    id: "student-protection",
    slug: "student-protection",
    title: "Student Protection",
    description: "Ensuring a safe and supportive educational environment for students, focusing on mental health, safety, and academic support.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbesjA49tQBAUY9LvgJkmnUotIKTHJXkVroQ&s"
  },
  {
    id: "blood-donation",
    slug: "blood-donation",
    title: "Blood Donation Awareness",
    description: "Saving lives through community blood donation camps and awareness programmes to ensure an adequate supply for emergencies.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: "https://www.isbr.in/blogs/wp-content/uploads/2024/09/1727178095121-768x1024.jpeg"
  },
  {
    id: "agriculture-support",
    slug: "agriculture",
    title: "Agriculture Support",
    description: "Empowering local farmers with sustainable organic farming techniques, seeds, and training to enhance rural livelihoods.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTet89ViWOqJ9IcQjydAQsQSXSnxT6-PHM9aw&s"
  },
  {
    id: "health-care",
    slug: "health-care",
    title: "Health Care & Support",
    description: "Providing accessible healthcare services and community support systems to improve the quality of life for the underprivileged.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.423 15.621a1.575 1.575 0 00-2.185 0l-.822.822a1.575 1.575 0 01-2.227 0L10.5 12.75a1.575 1.575 0 010-2.227l.822-.822a1.575 1.575 0 000-2.185l-1.097-1.097a1.575 1.575 0 00-2.185 0l-.822.822a1.575 1.575 0 01-2.227 0L3.5 5.5a1.575 1.575 0 010-2.227l.822-.822a1.575 1.575 0 000-2.185l-1.097-1.097a1.575 1.575 0 00-2.185 0L1 1.5M19 19l-3-3m0 0l-3 3m3-3V10" />
      </svg>
    ),
    image: "/Healthcare.jpeg"
  }
];

const Services = () => {
  return (
    <section id="initiatives" className="py-12 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-4 md:mb-6 tracking-tight">
            Our Core <span className="text-yellow-500 italic font-serif">Initiatives</span>
          </h2>
          <p className="text-lg text-stone-600">
            TouchTSL delivers high-impact programmes focused on environmental conservation, animal welfare, 
            health care, and community empowerment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link 
              to={`/services/${service.slug}`}
              key={index}
              id={service.id}
              className="block group bg-white rounded-3xl overflow-hidden shadow-sm transition-all duration-500 border border-stone-100 scroll-mt-24 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white p-2 bg-blue-700 rounded-xl">
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="text-blue-700 font-bold text-sm flex items-center group-hover:gap-2 transition-all">
                  Learn More <span className="opacity-0 group-hover:opacity-100 transition-opacity ml-1">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
