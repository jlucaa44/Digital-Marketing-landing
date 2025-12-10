import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    business: 'Urban Bistro',
    category: 'Restaurant',
    stat: '+280%',
    label: 'Online Orders',
    desc: 'Localized social campaigns targeted at hungry office workers within a 2-mile radius.',
    color: 'from-orange-400 to-red-500'
  },
  {
    business: 'Elite Plumbing',
    category: 'Home Services',
    stat: '+150%',
    label: 'Service Calls',
    desc: 'High-intent Google Ads strategy capturing emergency service searches in real-time.',
    color: 'from-blue-400 to-cyan-500'
  },
  {
    business: 'Core Fitness',
    category: 'Health & Wellness',
    stat: '+320%',
    label: 'New Members',
    desc: 'Community-focused Instagram content strategy coupled with a compelling trial offer.',
    color: 'from-emerald-400 to-green-500'
  }
];

const CaseStudies = () => {
  return (
    <section id='case-studies' className="py-24 bg-slate-50">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 mb-16 text-center md:flex-row md:items-end md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-2 block">Success Stories</span>
            <h2 className="text-4xl font-bold md:text-5xl text-slate-900">
              Proven Results
            </h2>
          </motion.div>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-[#2563EB] font-semibold flex items-center gap-2 hover:underline"
          >
            View all case studies <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden transition-all duration-500 bg-white border shadow-lg group rounded-3xl shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/80 border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-90 transition-opacity duration-300 group-hover:opacity-100`}></div>
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center">
                    <span className="block mb-1 text-5xl font-bold">{study.stat}</span>
                    <span className="text-sm font-medium tracking-wider uppercase opacity-90">{study.label}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="text-xs font-bold text-[#2563EB] mb-2 uppercase tracking-wide">
                  {study.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#2563EB] transition-colors">
                  {study.business}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-600">
                  {study.desc}
                </p>
                <div className="w-full h-px mb-6 bg-slate-100"></div>
                <div className="flex items-center text-sm font-semibold text-slate-900">
                   Read full story <ArrowUpRight className="w-4 h-4 ml-2 text-slate-400 group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;