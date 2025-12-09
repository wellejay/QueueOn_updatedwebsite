import { LayoutDashboard, BarChart3, Megaphone, Plug } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function MerchantFeatures() {
  const t = useTranslation().merchantFeatures;

  const features = [
    {
      icon: LayoutDashboard,
      title: t.completeControl,
      description: t.completeControlDesc,
      benefits: [
        t.realtimeDashboard,
        t.customerArrivalPredictions,
        t.advancedPreparationTime,
        t.smartScheduling,
      ],
      color: 'purple',
    },
    {
      icon: BarChart3,
      title: t.accurateReports,
      description: t.accurateReportsDesc,
      benefits: [
        t.peakHourAnalysis,
        t.servicePopularityTracking,
        t.customerSatisfactionMetrics,
        t.performanceOptimization,
      ],
      color: 'blue',
    },
    {
      icon: Megaphone,
      title: t.freePromotion,
      description: t.freePromotionDesc,
      benefits: [
        t.inAppVisibility,
        t.newCustomerAcquisition,
        t.serviceDiscovery,
        t.zeroMarketingCost,
      ],
      color: 'green',
    },
    {
      icon: Plug,
      title: t.posCompatibility,
      description: t.posCompatibilityDesc,
      benefits: [
        t.majorPOSIntegration,
        t.multiChannelNotifications,
        t.noHardwareNeeded,
        t.simpleDashboardManagement,
      ],
      color: 'orange',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <span className="text-purple-700 dark:text-purple-400 font-semibold text-sm">{t.badge}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 dark:from-purple-400 dark:to-purple-600"> {t.title2}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorMap = {
              purple: 'from-purple-500 to-purple-700',
              blue: 'from-blue-500 to-blue-700',
              green: 'from-green-500 to-green-700',
              orange: 'from-orange-500 to-orange-700',
            };

            return (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700">
                  <div className={`w-16 h-16 bg-gradient-to-br ${colorMap[feature.color as keyof typeof colorMap]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="space-y-3">
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${colorMap[feature.color as keyof typeof colorMap]}`}></div>
                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              {t.readyToTransform}
            </h3>
            <p className="text-lg text-purple-100 mb-8">
              {t.transformDesc}
            </p>
            <button className="px-10 py-5 bg-white dark:bg-gray-800 text-purple-700 dark:text-purple-400 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              {t.startFreeTrial}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
