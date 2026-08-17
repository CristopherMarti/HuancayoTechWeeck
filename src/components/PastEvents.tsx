import { motion } from 'motion/react';
import { pastEventsList } from '../data';
import { ChevronRight } from 'lucide-react';

export function PastEvents() {
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="past-events">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold text-google-black dark:text-google-white mb-3">Eventos Anteriores</h2>
        <p className="text-google-grey-700 dark:text-google-grey-300 text-lg">Un vistazo a nuestras iniciativas y conferencias pasadas.</p>
      </motion.div>

      <div className="bg-google-white dark:bg-google-grey-900 rounded-3xl overflow-hidden shadow-sm border border-google-grey-100 dark:border-google-grey-800">
        <div className="flex flex-col">
          {pastEventsList.map((event, index) => {
            const isFirst = index === 0;
            return (
              <motion.a
                variants={itemVariants}
                key={event.id}
                href={event.link}
                className={`group flex items-center justify-between p-6 md:p-8 hover:bg-google-grey-100 dark:hover:bg-google-grey-800 hover:bg-opacity-50 transition-colors duration-300 border-b border-google-grey-100 dark:border-google-grey-800 last:border-b-0`}
              >
                <div className="flex flex-col pr-4">
                  <h3 className={`font-bold mb-1 transition-colors ${isFirst ? 'text-google-black dark:text-google-white' : 'text-google-black dark:text-google-white'} group-hover:text-google-blue-500 text-xl`}>
                    {isFirst ? <span className="bg-clip-text text-transparent bg-gradient-to-r from-google-green-500 via-google-blue-500 to-google-yellow-600">{event.title}</span> : event.title}
                  </h3>
                  <p className="text-google-grey-700 dark:text-google-grey-300 text-base">{event.subtitle}</p>
                </div>
                <div className="text-google-grey-700 dark:text-google-grey-300 bg-google-white dark:bg-google-grey-900 shadow-sm p-2 rounded-full group-hover:text-google-blue-500 group-hover:shadow-md transition-all flex-shrink-0">
                  <ChevronRight size={20} />
                </div>
              </motion.a>
            )
          })}
          <motion.div variants={itemVariants} className="p-6 md:p-8 bg-google-grey-100 dark:bg-google-grey-800 bg-opacity-30 dark:bg-opacity-30 flex items-center justify-center">
            <a href="#" className="font-bold text-google-blue-500 hover:text-opacity-80 transition-colors text-base flex items-center">
              Más resultados en community.dev »
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
