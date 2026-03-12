import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

const translations = {
  en: {
    nav: {
      about: 'ABOUT',
      work: 'WORK',
      experience: 'EXPERIENCE',
      connect: "CONTACT"
    },
    hero: {
      title1: 'SENIOR UX/UI',
      title2: 'DESIGNER',
      title3: ' ',
      subtitle1: 'CREATING DIGITAL EXPERIENCES',
      subtitle2: 'FOCUSED ON THE USER'
    },
    about: {
      title1: 'I love creating',
      title2: 'amazing things',
      title3: 'and solving complex problems',
      title4: 'for people — like you.',
      description1: 'I deliver impactful results',
      description2: 'through strategic thinking',
      description3: 'and data-driven insights.'
    },
    work: {
      title: 'MY WORK',
      project1: {
        title: 'E-commerce App',
        description: 'Complete UX/UI design for a mobile e-commerce application focused on the shopping experience.',
        tags: ['UI/UX', 'Mobile', 'E-commerce']
      },
      project2: {
        title: 'SaaS Platform',
        description: 'Complete dashboard redesign for business management platform, improving usability and workflow.',
        tags: ['UI/UX', 'Web', 'Dashboard']
      },
      project3: {
        title: 'Corporate Website',
        description: 'Design and prototyping of institutional website with focus on accessibility and responsive design.',
        tags: ['UI/UX', 'Web', 'Corporate']
      }
    },
    skills: {
      title1: 'my',
      title2: 'design process',
      toolsTitle: 'Tools & Skills',
      process: {
        discovery: {
          title: 'Discovery',
          description: 'Deep research of users and market to understand needs and opportunities.'
        },
        strategy: {
          title: 'Strategy',
          description: 'Definition of objectives, metrics and design strategy aligned with business.'
        },
        wireframe: {
          title: 'Wireframe',
          description: 'Creation of wireframes and user flows to validate information architecture.'
        },
        design: {
          title: 'Design',
          description: 'Development of high-fidelity visual interfaces with consistent design systems.'
        },
        build: {
          title: 'Build',
          description: 'Collaboration with developers to ensure correct design implementation.'
        },
        deliver: {
          title: 'Deliver',
          description: 'Launch, measurement of results and continuous optimization based on data.'
        }
      }
    },
    experience: {
      title: 'EXPERIENCE',
      viewDetails: 'View details',
      exp1: {
        company: 'Balanz',
        role: 'Senior UX/UI Designer',
        period: '2022 - 2025',
        description: 'At Balanz, I worked as a UX/UI Designer, leading interface design for digital products in the financial sector. I worked on user research and requirements gathering with stakeholders, developed prototypes in Figma (low and high fidelity), and built scalable design systems. Additionally, I collaborated closely with the development team to ensure proper implementation, continuously optimizing flows, usability, and visual consistency.',
        achievements: [
          'UX/UI interface design for financial digital products.',
          'User research and requirements analysis with stakeholders.',
          'Low and high fidelity prototyping in Figma.',
          'Creation and maintenance of design systems and reusable components.',
          'Collaboration with developers for handoff and implementation tracking.',
          'Continuous improvement of flows, usability, and visual consistency.'
        ]
      },
      exp2: {
        company: 'Ñuke',
        role: 'Graphic & Audiovisual Designer',
        period: '2021 - 2022',
        description: 'At Ñuke, I worked on designing digital pieces aligned with the brand\'s visual identity, ensuring consistency and strong communication across all touchpoints. I adapted content for different digital channels, applying usability and visual communication criteria to optimize user experience and message impact.',
        achievements: [
          'Digital design aligned with visual identity.',
          'Content adaptation for different digital channels.',
          'Work with usability and visual communication criteria.'
        ]
      },
      exp3: {
        company: 'Freelance',
        role: 'UX/UI & Web Designer',
        period: '2018 - 2021',
        description: 'As a freelance professional, I developed UX/UI design projects for websites and applications, ranging from wireframe creation and prototypes to direct client validation. I implemented user-centered design methodologies, adapting each solution to different industries and business needs, prioritizing usability, clarity, and measurable results.',
        achievements: [
          'Managed 20+ independent projects',
          'Maintained a 5-star rating on platforms',
          'Built a network of recurring clients'
        ]
      }
    },
    contact: {
      title1: 'Do you have a project',
      title2: 'in mind?',
      subtitle: "Let's talk and create something amazing together",
      info: 'Contact information',
      follow: 'Follow me',
      availability: 'Available for freelance projects\nand interesting collaborations.\n\nResponse time: 24-48 hours',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send message',
        successMessage: 'Thank you for your message! I will contact you soon.'
      }
    },
    footer: {
      rights: '© 2026 Your Name. All rights reserved.',
      privacy: 'Privacy',
      terms: 'Terms'
    }
  },
  es: {
    nav: {
      about: 'ACERCA DE',
      work: 'TRABAJOS',
      experience: 'EXPERIENCIA',
      connect: 'CONECTEMOS'
    },
    hero: {
      title1: 'SENIOR UX/UI',
      title2: 'DESIGNER',
      title3: ' ',
      subtitle1: 'CREANDO EXPERIENCIAS DIGITALES',
      subtitle2: 'CENTRADAS EN EL USUARIO'
    },
    about: {
      title1: 'Transformo problemas complejos',
      title2: 'en experiencias simples, claras y',
      title3: 'centradas en el',
      title4: 'usuario.',
      description1: 'Diseño experiencias digitales de alto impacto',
      description2: 'combinando pensamiento estratégico,',
      description3: 'research y decisiones basadas en datos.'
    },
    work: {
      title: 'MIS TRABAJOS',
      project1: {
        title: 'App de E-commerce',
        description: 'Diseño completo de UX/UI para una aplicación móvil de comercio electrónico con enfoque en la experiencia de compra.',
        tags: ['UI/UX', 'Mobile', 'E-commerce']
      },
      project2: {
        title: 'Plataforma SaaS',
        description: 'Rediseño completo de dashboard para plataforma de gestión empresarial, mejorando la usabilidad y flujo de trabajo.',
        tags: ['UI/UX', 'Web', 'Dashboard']
      },
      project3: {
        title: 'Sitio Web Corporativo',
        description: 'Diseño y prototipado de sitio web institucional con enfoque en accesibilidad y responsive design.',
        tags: ['UI/UX', 'Web', 'Corporate']
      }
    },
    skills: {
      title1: 'mi',
      title2: 'proceso de diseño',
      toolsTitle: 'Herramientas & Skills',
      process: {
        discovery: {
          title: 'Discovery',
          description: 'Investigación profunda de usuarios y mercado para entender necesidades y oportunidades.'
        },
        strategy: {
          title: 'Strategy',
          description: 'Definición de objetivos, métricas y estrategia de diseño alineada con el negocio.'
        },
        wireframe: {
          title: 'Wireframe',
          description: 'Creación de wireframes y flujos de usuario para validar la arquitectura de información.'
        },
        design: {
          title: 'Design',
          description: 'Desarrollo de interfaces visuales de alta fidelidad con sistemas de diseño consistentes.'
        },
        build: {
          title: 'Build',
          description: 'Colaboración con desarrolladores para asegurar la implementación correcta del diseño.'
        },
        deliver: {
          title: 'Deliver',
          description: 'Lanzamiento, medición de resultados y optimización continua basada en datos.'
        }
      }
    },
    experience: {
      title: 'EXPERIENCIA',
      viewDetails: 'Ver detalles',
      exp1: {
        company: 'Balanz',
        role: 'Senior UX/UI Designer',
        period: '2022 - 2025',
        description: 'En Balanz, trabajé como UX/UI Designer, liderando el diseño de interfaces para productos digitales en el sector financiero. Realicé investigaciones de usuarios y recopilación de requisitos con stakeholders, desarrollé prototipos en Figma (baja y alta fidelidad) y construí sistemas de diseño escalables. Además, colaboré estrechamente con el equipo de desarrollo para asegurar la implementación correcta, optimizando continuamente los flujos, la usabilidad y la consistencia visual.',
        achievements: [
          'Diseño de interfaces UX/UI para productos digitales financieros.',
          'Investigación de usuarios y análisis de requisitos con stakeholders.',
          'Prototipado de baja y alta fidelidad en Figma.',
          'Creación y mantenimiento de sistemas de diseño y componentes reutilizables.',
          'Colaboración con desarrolladores para el handoff e implementación.',
          'Mejora continua de flujos, usabilidad y consistencia visual.'
        ]
      },
      exp2: {
        company: 'Ñuke',
        role: 'Graphic & Audiovisual Designer',
        period: '2021 - 2022',
        description: 'En Ñuke, trabajé en el diseño de piezas digitales alineadas con la identidad visual de la marca, asegurando la consistencia y una comunicación fuerte en todos los puntos de contacto. Adapté contenido para diferentes canales digitales, aplicando criterios de usabilidad y comunicación visual para optimizar la experiencia del usuario e impacto del mensaje.',
        achievements: [
          'Diseño digital alineado con la identidad visual.',
          'Adaptación de contenido para diferentes canales digitales.',
          'Trabajo con criterios de usabilidad y comunicación visual.'
        ]
      },
      exp3: {
        company: 'Freelance',
        role: 'UX/UI & Web Designer',
        period: '2018 - 2021',
        description: 'Como profesional freelance, desarrollé proyectos de diseño UX/UI para sitios web y aplicaciones, desde la creación de wireframes y prototipos hasta la validación directa con clientes. Implementé metodologías de diseño centrado en el usuario, adaptando cada solución a diferentes industrias y necesidades de negocio, priorizando la usabilidad, claridad y resultados medibles.',
        achievements: [
          'Gestioné 20+ proyectos independientes',
          'Mantuve una calificación de 5 estrellas en plataformas',
          'Construí una red de clientes recurrentes'
        ]
      }
    },
    contact: {
      title1: '¿Tienes un proyecto',
      title2: 'en mente?',
      subtitle: 'Hablemos y creemos algo increíble juntos',
      info: 'Información de contacto',
      follow: 'Sígueme',
      availability: ' ',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        submit: 'Enviar mensaje',
        successMessage: '¡Gracias por tu mensaje! Te contactaré pronto.'
      }
    },
    footer: {
      rights: '© 2026 Tu Nombre. Todos los derechos reservados.',
      privacy: 'Privacidad',
      terms: 'Términos'
    }
  }
};