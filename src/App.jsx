import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import CaseStudies from '@/components/CaseStudies';
import Services from '@/components/Services';
import CTA from '@/components/CTA';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Spark Digital - Digital Marketing Agency for Local Businesses</title>
        <meta name="description" content="Professional digital marketing services for small local businesses. Expert ad management, social media marketing, and landing page design to grow your business." />
      </Helmet>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#2563EB] selection:text-white">
        <Header />
        <main>
          <Hero />
          <Benefits />
          <HowItWorks />
          <CaseStudies />
          <Services />
          <CTA />
          <FAQ />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;