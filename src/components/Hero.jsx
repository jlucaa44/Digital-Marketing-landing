import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ChevronRight, Star } from 'lucide-react';

const Hero = () => {
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: "🚧 Feature coming soon!",
      description: "We're crafting the perfect analysis tool for you.",
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section id='home' className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" 
          alt="Modern digital agency office environment with abstract lighting"
          className="object-cover w-full h-full opacity-40"/>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-white"></div>
      </div>

      <div className="container relative z-10 px-4 pt-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border rounded-full bg-blue-500/10 border-blue-500/20 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#2563EB]"></span>
            <span className="text-sm font-medium text-blue-200">Accepting new clients for 2025</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
          >
            Digital Marketing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              That Actually Works
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10 text-lg font-light leading-relaxed md:text-xl text-slate-300"
          >
            We help ambitious local businesses acquire more customers through data-driven strategies. No fluff, no jargon—just measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto"
          >
            <Button 
              onClick={handleCTA}
              size="lg"
              className="bg-[#2563EB] hover:bg-blue-600 text-white px-8 py-7 text-lg rounded-full shadow-blue-500/25 shadow-xl transition-all hover:scale-105"
            >
              Request Free Analysis
            </Button>
            <Button 
              onClick={() => scrollToSection("case-studies")}
              variant="outline"
              size="lg"
              className="px-8 text-lg transition-all rounded-full border-slate-600 text-slate-900 bg-white/90 hover:bg-white hover:text-blue-600 py-7 backdrop-blur-sm"
            >
              View Case Studies
            </Button>
          </motion.div>

          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex items-center gap-8 mt-16 text-sm font-medium text-slate-400"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                 {[1,2,3].map((i) => (
                    <div key={i} className="flex items-center justify-center w-8 h-8 text-xs text-white border-2 rounded-full bg-slate-700 border-slate-900">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    </div>
                 ))}
              </div>
              <span>Trusted by 50+ local businesses</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;