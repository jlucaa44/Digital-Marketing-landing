import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How much do you charge?',
    answer: 'We believe in transparent pricing tailored to your goals. Our small business packages typically start at $500/month, scaling based on the complexity and ad spend managed. We\'ll always provide a clear, itemized quote before we begin.'
  },
  {
    question: 'Are results guaranteed?',
    answer: 'While no agency can ethically guarantee specific ROI numbers due to market variables, we do guarantee our work quality. We don\'t lock you into long-term contracts because we believe our results should be the reason you stay.'
  },
  {
    question: 'How quickly can we start?',
    answer: 'Once we complete our initial consultation and strategy session, we can usually have campaigns live within 5-7 business days. This allows us time for proper setup, creative design, and tracking implementation.'
  },
  {
    question: 'Do I own my ad accounts?',
    answer: 'Absolutely. Unlike many other agencies, we build everything inside your own ad accounts. You retain full ownership and administrative access to all data, creative assets, and accounts at all times.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="container max-w-4xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-[#2563EB] font-semibold text-sm uppercase tracking-wider mb-2 block">Common Questions</span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl text-slate-900">
            Everything You Need to Know
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-blue-200 shadow-md ring-1 ring-blue-100' : 'border-slate-200 hover:border-slate-300'}`}
            >
              <button
                onClick={() => setOpenIndex(index === openIndex ? null : index)}
                className="flex items-center justify-between w-full p-6 text-left"
              >
                <span className={`text-lg font-bold pr-8 ${openIndex === index ? 'text-[#2563EB]' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <div className={`p-1 rounded-full ${openIndex === index ? 'bg-blue-100 text-[#2563EB]' : 'bg-slate-100 text-slate-500'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pt-0 pb-6 leading-relaxed border-t border-transparent text-slate-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;