import { Search, Clock, Users, Bell, CreditCard, Star } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function HowItWorks() {
  const t = useTranslation().howItWorks;

  const steps = [
    {
      icon: Search,
      title: t.step1Title,
      description: t.step1Desc,
      color: 'purple',
    },
    {
      icon: Clock,
      title: t.step2Title,
      description: t.step2Desc,
      color: 'blue',
    },
    {
      icon: Users,
      title: t.step3Title,
      description: t.step3Desc,
      color: 'indigo',
    },
    {
      icon: Bell,
      title: t.step4Title,
      description: t.step4Desc,
      color: 'violet',
    },
    {
      icon: CreditCard,
      title: t.step5Title,
      description: t.step5Desc,
      color: 'fuchsia',
    },
    {
      icon: Star,
      title: t.step6Title,
      description: t.step6Desc,
      color: 'pink',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <span className="text-purple-700 dark:text-purple-400 font-semibold text-sm">{t.badge}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-purple-100 dark:border-purple-900/30 hover:border-purple-300 dark:hover:border-purple-700">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  <div className="mb-6 mt-4">
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-purple-700 dark:text-purple-400" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            {t.startJourney}
          </button>
        </div>
      </div>
    </section>
  );
}
