import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import MerchantFeatures from './components/MerchantFeatures';
import AppShowcase from './components/AppShowcase';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { useTheme } from './contexts/ThemeContext';
import { useEffect } from 'react';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    console.log('App component - Current theme:', theme);
    console.log('HTML element class:', document.documentElement.className);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Industries />
      <MerchantFeatures />
      <AppShowcase />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
