import { motion } from 'motion/react';
import { Users, Calendar, Award, Code } from 'lucide-react';

const stats = [
  { id: 1, name: 'Miembros en la comunidad', value: '+800', icon: Users, color: 'text-google-blue-500', bgColor: 'bg-google-blue-500/10 dark:bg-google-blue-500/20' },
  { id: 2, name: 'Eventos realizados', value: '+40', icon: Calendar, color: 'text-google-green-500', bgColor: 'bg-google-green-500/10 dark:bg-google-green-500/20' },
  { id: 3, name: 'Horas de código', value: '+10k', icon: Code, color: 'text-google-yellow-600', bgColor: 'bg-google-yellow-600/10 dark:bg-google-yellow-600/20' },
  { id: 4, name: 'Speakers y Mentores', value: '+20', icon: Award, color: 'text-google-red-500', bgColor: 'bg-google-red-500/10 dark:bg-google-red-500/20' },
];

export function Stats() {
  return (
    <section className="py-8 w-full z-20 relative">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-google-white dark:bg-google-grey-900 border border-google-grey-100 dark:border-google-grey-800 rounded-3xl p-6 flex flex-col items-center justify-center text-center shadow-sm"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${stat.bgColor}`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-google-black dark:text-google-white mb-2">{stat.value}</h3>
              <p className="text-xs md:text-sm text-google-grey-700 dark:text-google-grey-300 font-medium uppercase tracking-wider">{stat.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
