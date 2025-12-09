import { Check } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Pricing() {
  const t = useTranslation().pricing;

  const plans = [
    {
      name: t.starter,
      price: '99',
      description: t.starterDesc,
      features: [
        t.upTo100Customers,
        t.basicQueueManagement,
        t.smsNotifications,
        t.mobileAppAccess,
        t.basicAnalytics,
        t.emailSupport,
      ],
      highlighted: false,
    },
    {
      name: t.business,
      price: '249',
      description: t.businessDesc,
      features: [
        t.upTo500Customers,
        t.advancedQueueManagement,
        t.smsWhatsAppNotifications,
        t.mobileAppAccess,
        t.advancedAnalytics,
        t.prioritySupport,
        t.customBranding,
        t.multipleLocations,
      ],
      highlighted: true,
    },
    {
      name: t.enterprise,
      price: 'Custom',
      description: t.enterpriseDesc,
      features: [
        t.unlimitedCustomers,
        t.fullQueueManagementSuite,
        t.allNotificationChannels,
        t.mobileAppAccess,
        t.realtimeAnalyticsDashboard,
        t.dedicatedAccountManager,
        t.customIntegrations,
        t.unlimitedLocations,
        t.apiAccess,
        t.whiteLabelSolution,
      ],
      highlighted: false,
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
            {t.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 dark:from-purple-400 dark:to-purple-600"> {t.title2}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                plan.highlighted ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full text-sm font-semibold shadow-lg">
                    {t.mostPopular}
                  </div>
                </div>
              )}

              <div
                className={`relative bg-white dark:bg-gray-800 rounded-3xl p-8 h-full flex flex-col ${
                  plan.highlighted
                    ? 'border-4 border-purple-400 shadow-2xl shadow-purple-500/50'
                    : 'border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 shadow-lg hover:shadow-xl'
                } transition-all duration-300`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{plan.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{plan.description}</p>
                  <div className="flex items-end justify-center gap-2 mb-2">
                    {plan.price !== 'Custom' && (
                      <span className="icon-saudi_riyal text-gray-600 dark:text-gray-400 text-lg">{'\u00EA'}</span>
                    )}
                    <span className="text-5xl font-bold text-purple-700 dark:text-purple-400">{plan.price}</span>
                    {plan.price !== 'Custom' && (
                      <span className="text-gray-600 text-lg mb-2">{t.perMonth}</span>
                    )}
                  </div>
                  {plan.price !== 'Custom' && (
                    <p className="text-gray-500 text-sm">{t.billedAnnually}</p>
                  )}
                </div>

                <div className="flex-grow mb-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`w-6 h-6 ${
                          plan.highlighted ? 'bg-purple-600' : 'bg-purple-100'
                        } rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className={`w-4 h-4 ${
                            plan.highlighted ? 'text-white' : 'text-purple-700'
                          }`} />
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105'
                      : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
                  }`}
                >
                  {plan.price === 'Custom' ? t.contactSales : t.getStarted}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">{t.freeTrialNotice}</p>
          <button className="text-purple-700 dark:text-purple-400 font-semibold hover:text-purple-800 dark:hover:text-purple-300 transition-colors">
            {t.compareAllFeatures}
          </button>
        </div>
      </div>
    </section>
  );
}
