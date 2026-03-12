import { useState, useEffect } from 'react';
import { Mail, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('inicio');
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'acerca', 'trabajos', 'skills', 'experiencia', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-xl tracking-tight">Jonathan Guglielmo</h1>
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => scrollToSection('acerca')} 
              className={`text-sm tracking-wide transition-colors ${activeSection === 'acerca' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('trabajos')} 
              className={`text-sm tracking-wide transition-colors ${activeSection === 'trabajos' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {t('nav.work')}
            </button>
                        <button 
              onClick={() => scrollToSection('experiencia')} 
              className={`text-sm tracking-wide transition-colors ${activeSection === 'experiencia' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
            >
              {t('nav.experience')}
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
            title="Change language"
          >
            <Globe size={16} />
            <span className="uppercase text-xs">{language}</span>
          </button>
          
          <button 
            onClick={() => scrollToSection('contacto')}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">{t('nav.connect')}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}