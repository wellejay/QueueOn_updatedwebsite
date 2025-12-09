import { ArrowRight, Smartphone, Store } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Hero() {
  const t = useTranslation().hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 transition-colors">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(93,63,211,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(93,63,211,0.08),transparent_50%)]"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <span className="text-purple-700 dark:text-purple-400 font-semibold text-sm">{t.badge}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
              {t.title1}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 dark:from-purple-400 dark:to-purple-600">
                {t.title2}
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {t.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2">
                {t.getStarted}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-400 rounded-xl font-semibold hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                <Store className="w-5 h-5" />
                {t.merchantRegistration}
              </button>

              <button className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-purple-200 dark:border-purple-700 text-purple-700 dark:text-purple-400 rounded-xl font-semibold hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                {t.downloadApp}
              </button>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold text-purple-700 dark:text-purple-400">10K+</div>
                <div className="text-gray-600 dark:text-gray-400">{t.activeUsers}</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <div className="text-3xl font-bold text-purple-700 dark:text-purple-400">500+</div>
                <div className="text-gray-600 dark:text-gray-400">{t.businesses}</div>
              </div>
              <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
              <div>
                <div className="text-3xl font-bold text-purple-700 dark:text-purple-400">8+</div>
                <div className="text-gray-600 dark:text-gray-400">{t.industries}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img src="/2.png" alt="Queue On" className="h-8 w-auto" />
                  </div>
                  <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    {t.active}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{t.yourPosition}</div>
                      <div className="text-2xl font-bold text-purple-700 dark:text-purple-400">3</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 dark:text-gray-400">{t.estimatedWait}</div>
                      <div className="text-xl font-bold text-gray-900 dark:text-white">12 {t.min}</div>
                    </div>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600 dark:text-gray-300">{t.queueProgress}</span>
                      <span className="text-sm font-semibold text-purple-700 dark:text-purple-400">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                    {t.viewDetails}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
