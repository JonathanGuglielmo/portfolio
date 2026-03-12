import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useLanguage } from '../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="acerca" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-6xl">
            {t('about.title1')}
            <br />
            <span className="text-gray-500">
              {t('about.title2')}
              <br />
              {t('about.title3')} {t('about.title4')}
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            {t('about.description1')}
            <br />
            {t('about.description2')}
            <br />
            {t('about.description3')}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-12"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}