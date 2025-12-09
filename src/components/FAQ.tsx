import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = useTranslation().faq;

  const faqs = [
    {
      question: t.q1,
      answer: t.a1,
    },
    {
      question: t.q2,
      answer: t.a2,
    },
    {
      question: t.q3,
      answer: t.a3,
    },
    {
      question: t.q4,
      answer: t.a4,
    },
    {
      question: t.q5,
      answer: t.a5,
    },
    {
      question: t.q6,
      answer: t.a6,
    },
    {
      question: t.q7,
      answer: t.a7,
    },
    {
      question: t.q8,
      answer: t.a8,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <span className="text-purple-700 dark:text-purple-400 font-semibold text-sm">{t.badge}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 dark:from-purple-400 dark:to-purple-600"> {t.title2}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-lg text-gray-900 dark:text-white pr-4">{faq.question}</span>
                <div className={`w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'bg-purple-600' : ''
                }`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-purple-700" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed icon-saudi_riyal">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">{t.stillHaveQuestions}</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
            {t.contactSupport}
          </button>
        </div>
      </div>
    </section>
  );
}
