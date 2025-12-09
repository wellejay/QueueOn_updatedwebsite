import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].navbar;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? '/2.jpg' : '/4.jpg'}
              alt="Queue On Logo"
              className="h-8 w-auto"
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors">
              {t.features}
            </a>
            <a href="#industries" className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors">
              {t.industries}
            </a>
            <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors">
              {t.pricing}
            </a>
            <a href="#faq" className="text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition-colors">
              {t.faq}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              type="button"
              className="text-3xl hover:scale-110 transition-transform"
              aria-label="Toggle language"
              title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            >
              {language === 'en' ? '🇸🇦' : '🇺🇸'}
            </button>
            <button
              onClick={() => {
                console.log('Button physically clicked!');
                toggleTheme();
              }}
              type="button"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-yellow-500" />
              )}
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              {t.getStarted}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
