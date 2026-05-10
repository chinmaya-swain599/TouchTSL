import React from "react";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";
import MissionVideo from "../components/MissionVideo";
import Testimonials from "../components/Testimonials";
import Partners from "../components/Partners";
import CTA from "../components/CTA";

const Home = ({ onDonate, onVisit, onVolunteer }) => {
  return (
    <main className="bg-white">
      <Hero onDonate={onDonate} />
      <Philosophy />
      <Services />
      <MissionVideo />
      <Testimonials />
      <Partners />
      <CTA onVisitHome={onVisit} onVolunteer={onVolunteer} />
    </main>
  );
};

export default Home;
