import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Target, DollarSign, ArrowRight } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Revenue Focused',
    description: 'We prioritize metrics that actually matter: sales, leads, and ROI. Vanity metrics don\'t pay the bills.'
  },
  {
    icon: Users,
    title: 'Local Authority',
    description: 'Dominate your local market. We help you connect with customers in your immediate area who are ready to buy.'
  },
  {
    icon: Target,
    title: 'Laser Targeting',
    description: 'Stop wasting money on broad audiences. We pinpoint your ideal customer profile with surgical precision.'
  },
  {
    icon: DollarSign,
    title: 'Zero Hidden Fees',
    description: 'Simple, transparent pricing models. You\'ll always know exactly where your budget is going.'
  }
];

const Benefits = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 rounded-full opacity-50 pointer-events-none w-96 h-96 bg-blue-50 blur-3xl"></div>
      
      <div className="container relative z-10 px-4 mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 mb-16 md:flex-row md:items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-2 block">Why Choose Us</span>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl text-slate-900">
              We Don't Just Run Ads,<br /> We Build <span className="text-[#2563EB]">Growth Engines</span>.
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md text-lg text-slate-600"
          >
            Traditional agencies focus on deliverables. We focus on outcomes that transform your bottom line.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 transition-all duration-300 border cursor-default group rounded-3xl bg-slate-50 border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-[#2563EB] transition-colors duration-300">
                <benefit.icon className="w-7 h-7 text-[#2563EB] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#2563EB] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;