import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Instagram, FileText, Layout, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: MousePointerClick,
    title: 'PPC Ad Management',
    description: 'Data-driven campaigns on Google & Bing designed to capture high-intent buyers ready to convert.',
    features: ['Keyword Analysis', 'Bid Management', 'Conversion Tracking']
  },
  {
    icon: Instagram,
    title: 'Social Advertising',
    description: 'Scroll-stopping creative strategies for Facebook, Instagram, and TikTok aimed at brand awareness and sales.',
    features: ['Audience Segmentation', 'Creative A/B Testing', 'Retargeting Funnels']
  },
  {
    icon: FileText,
    title: 'Content Strategy',
    description: 'Value-first content that educates your audience, builds trust, and positions you as the local authority.',
    features: ['Social Media Calendars', 'Blog & SEO Writing', 'Email Nurture Sequences']
  },
  {
    icon: Layout,
    title: 'Landing Page Design',
    description: 'Conversion-optimized pages built to turn traffic into leads. Fast, mobile-responsive, and persuasive.',
    features: ['UX/UI Design', 'Copywriting', 'Speed Optimization']
  }
];

const Services = () => {
  return (
    <section id='services' className="py-24 bg-white">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-20 text-center"
        >
          <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-2 block">Our Expertise</span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-slate-900">
            Comprehensive Solutions
          </h2>
          <p className="text-lg text-slate-600">
            We don't dabble. We specialize in the four pillars of modern digital growth tailored specifically for small businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col gap-6 p-8 transition-all duration-300 border sm:flex-row rounded-3xl bg-slate-50 border-slate-100 hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-100"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#2563EB] border border-slate-100">
                  <service.icon className="w-8 h-8" />
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#2563EB] mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;