import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const { toast } = useToast();

  const handleCTA = () => {
    toast({
      title: "🚧 Let's get started!",
      description: "This button will link to a contact form soon.",
    });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container max-w-6xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#2563EB] text-center px-6 py-20 md:py-24 shadow-2xl shadow-blue-900/20"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
             <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
             </svg>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
              Ready to Dominate Your Market?
            </h2>
            <p className="mb-10 text-xl font-light leading-relaxed text-blue-100">
              Stop guessing with your marketing budget. Get a comprehensive digital analysis and a custom roadmap designed for your business.
            </p>
            <Button 
              onClick={handleCTA}
              size="lg"
              className="bg-white text-[#2563EB] hover:bg-slate-50 hover:text-blue-700 px-10 py-7 text-lg rounded-full font-bold shadow-lg transition-all hover:scale-105"
            >
              Get Your Free Analysis <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="mt-6 text-sm text-blue-200/80">
              No credit card required. No obligation. Just value.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;