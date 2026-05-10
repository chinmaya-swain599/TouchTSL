import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import Services from "../components/Services";
import MissionVideo from "../components/MissionVideo";
import Testimonials from "../components/Testimonials";
import Team from "../components/Team";
import Partners from "../components/Partners";
import CTA from "../components/CTA";

const Home = ({ onDonate, onVisit }) => {
  return (
    <main className="bg-white">
      <Hero onDonate={onDonate} />
      <Philosophy />
      <Services />
      <MissionVideo />
      <Testimonials />
      <Team />
      <Partners />
      <CTA onVisitHome={onVisit} />
    </main>
  );
};

export default Home;
