import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Rocket, BarChart2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Discovery',
    description: 'We dive deep into your business model to understand your unique challenges.'
  },
  {
    number: '02',
    icon: Search,
    title: 'Strategy',
    description: 'We architect a custom roadmap designed to hit your specific growth KPIs.'
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Execution',
    description: 'Our team launches your campaigns with premium creative and technical precision.'
  },
  {
    number: '04',
    icon: BarChart2,
    title: 'Optimization',
    description: 'Continuous A/B testing and refinement to lower costs and increase conversions.'
  }
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 overflow-hidden text-white bg-slate-900">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="block mb-2 text-sm font-semibold tracking-wider text-blue-400 uppercase">Our Process</span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">
            From Analysis to <span className="text-blue-500">Acceleration</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-400">
            A streamlined workflow designed to get you results faster, without the headache.
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 transition-all duration-300 border bg-slate-800/50 backdrop-blur-sm rounded-3xl border-slate-700 hover:border-blue-500/50">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center justify-center w-12 h-12 text-blue-400 transition-all duration-300 bg-blue-600/20 rounded-xl group-hover:bg-blue-600 group-hover:text-white">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <span className="text-4xl font-bold transition-colors select-none text-slate-700 group-hover:text-slate-600">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;