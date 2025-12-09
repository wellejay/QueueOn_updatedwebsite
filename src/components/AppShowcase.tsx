import { Smartphone, Calendar, Bell, CreditCard, Star, LayoutDashboard } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function AppShowcase() {
  const t = useTranslation().appShowcase;

  const screens = [
    {
      icon: Calendar,
      title: t.easyReservations,
      description: t.easyReservationsDesc,
    },
    {
      icon: Bell,
      title: t.liveNotifications,
      description: t.liveNotificationsDesc,
    },
    {
      icon: Smartphone,
      title: t.queueTracking,
      description: t.queueTrackingDesc,
    },
    {
      icon: CreditCard,
      title: t.securePayments,
      description: t.securePaymentsDesc,
    },
    {
      icon: Star,
      title: t.serviceRatings,
      description: t.serviceRatingsDesc,
    },
    {
      icon: LayoutDashboard,
      title: t.merchantDashboard,
      description: t.merchantDashboardDesc,
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

        <div className="grid lg:grid-cols-3 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-6">
            {screens.slice(0, 3).map((screen, index) => {
              const Icon = screen.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border-2 border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{screen.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{screen.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 shadow-2xl">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
                        <Smartphone className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm text-gray-900 dark:text-white">{t.queueOn}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{t.smartQueue}</div>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-semibold">
                      {t.active}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4">
                    <div className="text-center mb-3">
                      <div className="text-xs text-purple-700 dark:text-purple-400 font-semibold mb-1">{t.yourPosition}</div>
                      <div className="text-4xl font-bold text-purple-900 dark:text-purple-300">5</div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600 dark:text-gray-400">{t.waitTime}</span>
                      <span className="font-bold text-purple-700 dark:text-purple-400">15 {t.min}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t.service}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">{t.haircut}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-sm text-gray-700 dark:text-gray-300">{t.timeSlot}</span>
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">3:30 PM</span>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold text-sm hover:shadow-lg transition-all">
                    {t.viewQueueDetails}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {screens.slice(3, 6).map((screen, index) => {
              const Icon = screen.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-white dark:from-gray-800 dark:to-gray-800 rounded-2xl border-2 border-purple-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{screen.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{screen.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
            {t.downloadNow}
          </button>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300">
              {t.iosAndroid}
            </div>
            <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm text-gray-600 dark:text-gray-300">
              {t.free}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
