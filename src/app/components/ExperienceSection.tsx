import { motion } from 'motion/react';
import { Calendar, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences: Experience[] = [
    {
      company: t('experience.exp1.company'),
      role: t('experience.exp1.role'),
      period: t('experience.exp1.period'),
      description: t('experience.exp1.description'),
      achievements: t('experience.exp1.achievements') as any
    },
    {
      company: t('experience.exp2.company'),
      role: t('experience.exp2.role'),
      period: t('experience.exp2.period'),
      description: t('experience.exp2.description'),
      achievements: t('experience.exp2.achievements') as any
    },
    {
      company: t('experience.exp3.company'),
      role: t('experience.exp3.role'),
      period: t('experience.exp3.period'),
      description: t('experience.exp3.description'),
      achievements: t('experience.exp3.achievements') as any
    }
  ];

  return (
    <section id="experiencia" className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl mb-16"
        >
          {t('experience.title')}
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-l-2 border-white/20 pl-8 pb-12 relative group hover:border-white/50 transition-colors"
            >
              <div className="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-white border-4 border-black"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl md:text-3xl mb-1">{exp.company}</h3>
                  <p className="text-xl text-gray-400">{exp.role}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={16} />
                  {exp.period}
                </div>
              </div>

              <p className="text-gray-400 mb-4 leading-relaxed">{exp.description}</p>

              <ul className="space-y-2">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="text-white mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>

              <button className="mt-4 text-sm flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                {t('experience.viewDetails')}
                <ExternalLink size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}