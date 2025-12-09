import { X, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function ProblemSolution() {
  const [activeView, setActiveView] = useState<'problem' | 'solution'>('problem');
  const t = useTranslation().problemSolution;

  return (
    <section className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t.title1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-900 dark:from-purple-400 dark:to-purple-600"> {t.title2}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 rounded-2xl p-2">
            <button
              onClick={() => setActiveView('problem')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeView === 'problem'
                  ? 'bg-white dark:bg-gray-700 shadow-lg text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {t.withoutQueueOn}
            </button>
            <button
              onClick={() => setActiveView('solution')}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeView === 'solution'
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg shadow-purple-500/50'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }`}
            >
              {t.withQueueOn}
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          {activeView === 'problem' ? (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border-2 border-red-100">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.problem1Title}</h3>
                    <p className="text-gray-600">{t.problem1Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border-2 border-red-100">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.problem2Title}</h3>
                    <p className="text-gray-600">{t.problem2Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border-2 border-red-100">
                  <div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <X className="w-6 h-6 text-red-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.problem3Title}</h3>
                    <p className="text-gray-600">{t.problem3Desc}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl blur-2xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border-2 border-red-100">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center mx-auto">
                      <X className="w-10 h-10 text-red-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t.traditionalWaiting}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t.traditionalDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-2xl border-2 border-purple-100">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.solution1Title}</h3>
                    <p className="text-gray-600">{t.solution1Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-2xl border-2 border-purple-100">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.solution2Title}</h3>
                    <p className="text-gray-600">{t.solution2Desc}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-purple-50 rounded-2xl border-2 border-purple-100">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-purple-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{t.solution3Title}</h3>
                    <p className="text-gray-600">{t.solution3Desc}</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-purple-100 rounded-3xl blur-2xl opacity-50"></div>
                <div className="relative bg-gradient-to-br from-purple-50 to-white p-8 rounded-3xl border-2 border-purple-200">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-10 h-10 text-purple-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{t.smartWaiting}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t.smartDesc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
