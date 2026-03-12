import { motion } from 'motion/react';
import { Mail, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactSection() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de envío del formulario
    console.log('Formulario enviado:', formData);
    alert(t('contact.form.successMessage'));
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contacto" className="min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            {t('contact.title1')}
            <br />
            {t('contact.title2')}
          </h2>
          <p className="text-xl text-gray-400">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl mb-4">{t('contact.info')}</h3>
              <div className="space-y-4">
                <a
                  href="mailto:tuemail@ejemplo.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span>guglielmojonathan@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl mb-4">{t('contact.follow')}</h3>
              <div className="flex gap-3">
                {[
                  { Icon: Linkedin, url: '#https://www.linkedin.com/in/jonathan-javier-guglielmo-2a491517a/' },
                  { Icon: Github, url: '#https://github.com/JonathanGuglielmo' },
                ].map(({ Icon, url }, index) => (
                  <a
                    key={index}
                    href={url}
                    className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">
                {t('contact.availability')}
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm mb-2 text-gray-400">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors text-white"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2 text-gray-400">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors text-white"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2 text-gray-400">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-white/30 focus:outline-none transition-colors text-white resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg bg-white text-black hover:bg-gray-200 transition-colors"
            >
              {t('contact.form.submit')}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}