import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: '¿Tiene algún costo ser miembro de GDG Huancayo?',
    answer: '¡No! Ser parte de nuestra comunidad y asistir a la gran mayoría de nuestros eventos es totalmente gratuito. Nuestro objetivo es democratizar el conocimiento tecnológico.'
  },
  {
    question: 'No tengo experiencia programando, ¿puedo unirme?',
    answer: 'Por supuesto. Tenemos charlas y talleres desde niveles básicos ("101") hasta temas avanzados. Es el mejor lugar para dar tus primeros pasos en el mundo de la tecnología.'
  },
  {
    question: '¿Cómo puedo convertirme en speaker o voluntario?',
    answer: 'Siempre estamos buscando nuevos talentos. Generalmente abrimos convocatorias (Call for Papers / Call for Volunteers) en nuestras redes sociales antes de cada temporada o evento grande.'
  },
  {
    question: '¿Los eventos son solo presenciales?',
    answer: 'Organizamos tanto eventos presenciales en distintas sedes de Huancayo como eventos virtuales o híbridos para que todos puedan participar sin importar dónde estén.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 w-full z-20 relative" id="faq">
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-google-black dark:text-google-white mb-4">
          Preguntas Frecuentes
        </h2>
        <p className="text-google-grey-700 dark:text-google-grey-300 text-lg max-w-2xl">
          Todo lo que necesitas saber sobre nuestra comunidad
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-google-white dark:bg-google-grey-900 border border-google-grey-100 dark:border-google-grey-800 rounded-2xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:bg-google-grey-100/50 dark:focus-visible:bg-google-grey-800"
            >
              <span className="font-bold text-google-black dark:text-google-white pr-4">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-google-grey-700 dark:text-google-grey-300 transition-transform duration-300 shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} 
              />
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-5 pt-1 text-google-grey-700 dark:text-google-grey-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
