import { motion } from 'motion/react';
import { Lightbulb, Rocket, Users2, Trophy } from 'lucide-react';

const benefits = [
  {
    title: 'Networking de Alto Nivel',
    description: 'Conecta con profesionales, estudiantes apasionados y expertos de la industria tecnológica en Huancayo y en todo el Perú.',
    icon: Users2,
    color: 'google-blue',
  },
  {
    title: 'Talleres Prácticos',
    description: 'Aprende haciendo. Participa en codelabs y workshops enfocados en tecnologías modernas y buenas prácticas.',
    icon: Lightbulb,
    color: 'google-green',
  },
  {
    title: 'Impulsa tu Carrera',
    description: 'Encuentra oportunidades laborales, recibe mentoría y mejora tu CV al participar en proyectos de impacto.',
    icon: Rocket,
    color: 'google-yellow',
  },
  {
    title: 'Desafíos y Hackathons',
    description: 'Pon a prueba tus habilidades, resuelve problemas reales y gana premios exclusivos de Google y partners.',
    icon: Trophy,
    color: 'google-red',
  }
];

export function Benefits() {
  return (
    <section className="py-12 w-full z-20 relative" id="benefits">
      <div className="flex flex-col mb-12 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-google-black dark:text-google-white mb-4">
          ¿Por qué unirte a GDG Huancayo?
        </h2>
        <p className="text-google-grey-700 dark:text-google-grey-300 text-lg max-w-2xl">
          Ser parte de nuestra comunidad te abre las puertas a un ecosistema lleno de oportunidades para tu crecimiento profesional y personal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          
          let colorStyles = "";
          switch(benefit.color) {
             case 'google-blue': colorStyles = "text-google-blue-500 bg-google-blue-500/10 dark:bg-google-blue-500/20 ring-google-blue-500/30"; break;
             case 'google-green': colorStyles = "text-google-green-500 bg-google-green-500/10 dark:bg-google-green-500/20 ring-google-green-500/30"; break;
             case 'google-yellow': colorStyles = "text-google-yellow-600 bg-google-yellow-600/10 dark:bg-google-yellow-600/20 ring-google-yellow-600/30"; break;
             case 'google-red': colorStyles = "text-google-red-500 bg-google-red-500/10 dark:bg-google-red-500/20 ring-google-red-500/30"; break;
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-google-white dark:bg-google-grey-900 border border-google-grey-100 dark:border-google-grey-800 p-8 rounded-3xl hover:shadow-lg transition-shadow group flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className={`shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center ring-1 ring-inset ${colorStyles} group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-google-black dark:text-google-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-google-grey-700 dark:text-google-grey-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
