/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Process } from './components/Process';
import { Reviews } from './components/Reviews';
import { Faq } from './components/Faq';
import { FinalCta } from './components/FinalCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HoneyEmberBackground } from './components/HoneyEmberBackground';

export default function App() {
  const handleContactClick = useCallback(() => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFCFA] text-[#171717] selection:bg-[#10B981]/15 selection:text-[#171717] flex flex-col font-sans relative antialiased">
      {/* 21st.dev Honey Ember-Inspired Atmospheric Background System */}
      <HoneyEmberBackground />

      {/* Sticky Minimal Navigation */}
      <Navbar onContactClick={handleContactClick} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex-1">
        {/* Hero Section */}
        <Hero onContactClick={handleContactClick} />

        {/* Selected Work (Browser-Window Mockups for IronForFit, Alora Dental, Lumera Studio) */}
        <Portfolio />

        {/* Services / What I Do */}
        <Services />

        {/* About Divyanshu */}
        <About />

        {/* Why WebWithDivyanshu? */}
        <WhyWorkWithMe />

        {/* Process: 4 Stages */}
        <Process />

        {/* Client Reviews: Future-Ready State */}
        <Reviews onContactClick={handleContactClick} />

        {/* FAQ */}
        <Faq />

        {/* Final CTA Banner */}
        <FinalCta onContactClick={handleContactClick} />

        {/* Direct Contact (No forms) */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Contact Button */}
      <FloatingWhatsApp />
    </div>
  );
}
