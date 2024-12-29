import React from 'react'

import Hero from "../components/Hero";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Courses />
      <Contact />
    </div>
  );
}

export default Home