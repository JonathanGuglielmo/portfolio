import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  const images = [
    "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1080",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1080",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1080"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getIndex = (i: any) => {
    const diff = i - index;
    if (diff === 0) return "center";
    if (diff === -1 || diff === images.length - 1) return "left";
    if (diff === 1 || diff === -(images.length - 1)) return "right";
    return "hidden";
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-4">
            {t("hero.title1")}
            <br />
            {t("hero.title2")}
            <br />
            {t("hero.title3")}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-400 mt-6 text-sm md:text-base tracking-wide"
        >
          {t("hero.subtitle1")}
          <br />
          {t("hero.subtitle2")}
        </motion.p>

        <div className="mt-12 relative w-[500px] h-[380px] mx-auto flex items-center justify-center">

          {images.map((img, i) => {
            const position = getIndex(i);

            const variants = {
              center: {
                x: 0,
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
                zIndex: 3
              },
              left: {
                x: -180,
                scale: 0.8,
                opacity: 0.5,
                filter: "blur(3px)",
                zIndex: 2
              },
              right: {
                x: 180,
                scale: 0.8,
                opacity: 0.5,
                filter: "blur(3px)",
                zIndex: 2
              },
              hidden: {
                opacity: 0,
                scale: 0.6,
                zIndex: 0
              }
            };

            return (
              <motion.div
                key={i}
                animate={position}
                variants={variants}
                transition={{ duration: 0.7 }}
                className="absolute"
              >
                <ImageWithFallback
                  src={img}
                  alt="Slide"
                  className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-3xl shadow-2xl"
                />
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}