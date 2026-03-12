import { motion } from 'motion/react';
import { Lightbulb, Target, Layout, Palette, Code, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();

  const designProcess = [
    {
      icon: Lightbulb,
      number: "01",
      title: t('skills.process.discovery.title'),
      description: t('skills.process.discovery.description')
    },
    {
      icon: Target,
      number: "02",
      title: t('skills.process.strategy.title'),
      description: t('skills.process.strategy.description')
    },
    {
      icon: Layout,
      number: "03",
      title: t('skills.process.wireframe.title'),
      description: t('skills.process.wireframe.description')
    },
    {
      icon: Palette,
      number: "04",
      title: t('skills.process.design.title'),
      description: t('skills.process.design.description')
    },
    {
      icon: Code,
      number: "05",
      title: t('skills.process.build.title'),
      description: t('skills.process.build.description')
    },
    {
      icon: Rocket,
      number: "06",
      title: t('skills.process.deliver.title'),
      description: t('skills.process.deliver.description')
    }
  ];

  return (
    <section id="skills" className="min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl mb-4">
            {t('skills.title1')}
            <br />
            <span className="text-4xl md:text-7xl">{t('skills.title2')}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designProcess.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{step.number}</div>
                    <h3 className="text-xl mb-2">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed pl-16">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <h3 className="text-2xl md:text-4xl mb-8">{t('skills.toolsTitle')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Prototyping', 'User Research', 'Design Systems'].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}