import { Smartphone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const t = useTranslation().footer;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src="/1.jpg" alt="Queue On" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.tagline}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-purple-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t.product}</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">{t.features}</a></li>
              <li><a href="#industries" className="text-gray-400 hover:text-purple-400 transition-colors">{t.industries}</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">{t.pricing}</a></li>
              <li><a href="#integrations" className="text-gray-400 hover:text-purple-400 transition-colors">{t.integrations}</a></li>
              <li><a href="#updates" className="text-gray-400 hover:text-purple-400 transition-colors">{t.whatsNew}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t.company}</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">{t.aboutUs}</a></li>
              <li><a href="#careers" className="text-gray-400 hover:text-purple-400 transition-colors">{t.careers}</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-purple-400 transition-colors">{t.blog}</a></li>
              <li><a href="#press" className="text-gray-400 hover:text-purple-400 transition-colors">{t.pressKit}</a></li>
              <li><a href="#partners" className="text-gray-400 hover:text-purple-400 transition-colors">{t.partners}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">{t.support}</h3>
            <ul className="space-y-3">
              <li><a href="#help" className="text-gray-400 hover:text-purple-400 transition-colors">{t.helpCenter}</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">{t.contactUs}</a></li>
              <li><a href="#docs" className="text-gray-400 hover:text-purple-400 transition-colors">{t.documentation}</a></li>
              <li><a href="#status" className="text-gray-400 hover:text-purple-400 transition-colors">{t.systemStatus}</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-purple-400 transition-colors">{t.faq}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold mb-4">{t.downloadOurApp}</h3>
              <div className="flex gap-4">
                <button className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">{t.downloadOnThe}</div>
                    <div className="font-semibold">{t.appStore}</div>
                  </div>
                </button>
                <button className="px-6 py-3 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors flex items-center gap-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-400">{t.getItOn}</div>
                    <div className="font-semibold">{t.googlePlay}</div>
                  </div>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">{t.contactInformation}</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-5 h-5 text-purple-500" />
                  <span>{t.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Smartphone className="w-5 h-5 text-purple-500" />
                  <span>{t.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-purple-500" />
                  <span>{t.address}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-800">
            <div className="text-gray-400 text-sm">
              {t.copyright}
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-purple-400 transition-colors">{t.privacyPolicy}</a>
              <a href="#terms" className="text-gray-400 hover:text-purple-400 transition-colors">{t.termsOfService}</a>
              <a href="#cookies" className="text-gray-400 hover:text-purple-400 transition-colors">{t.cookiePolicy}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
