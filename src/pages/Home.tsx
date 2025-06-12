import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Services from '../components/home/Services';
import Products from '../components/home/Products';
import Pricing from '../components/home/Pricing';
import Team from '../components/home/Team';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';
import Stats from '../components/home/Stats';
import TechShowcase from '../components/home/TechShowcase';
import VRDemo from '../components/home/VRDemo';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Stats />
      <About />
      <TechShowcase />
      <Services />
      <VRDemo />
      <Products />
      <Pricing />
      <Team />
      <Testimonials />
      <Newsletter />
    </motion.div>
  );
};

export default Home;