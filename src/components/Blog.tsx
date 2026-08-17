import { motion } from 'motion/react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Creando interfaces fluidas con Flutter y Riverpod",
    author: "Alex B.",
    authorRole: "Mobile Lead",
    date: "15 Jun, 2024",
    readTime: "5 min",
    tag: "Flutter",
    color: "google-blue",
    excerpt: "Aprende a manejar el estado de tu aplicación de forma eficiente usando Riverpod en este tutorial paso a paso creado durante el último workshop."
  },
  {
    id: 2,
    title: "¿Por qué Angular sigue dominando el desarrollo empresarial?",
    author: "Carlos Ruiz",
    authorRole: "Web Developer",
    date: "02 Jul, 2024",
    readTime: "8 min",
    tag: "Web",
    color: "google-red",
    excerpt: "Descubre los secretos de Angular v17 y cómo el nuevo control flow estructurado cambia las reglas del juego para proyectos a gran escala."
  },
  {
    id: 3,
    title: "Intro a Machine Learning con TensorFlow.js",
    author: "Maria Torres",
    authorRole: "AI Specialist",
    date: "20 Ago, 2024",
    readTime: "6 min",
    tag: "AI",
    color: "google-yellow",
    excerpt: "No necesitas saber Python para empezar en Inteligencia Artificial. Corre en el navegador y predice valores en pocos minutos."
  }
];

export function Blog() {
  return (
    <section className="py-12 w-full z-20 relative" id="blog">
       <div className="flex flex-col mb-10 text-center md:text-left">
        <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-google-red-500/10 text-google-red-500 font-bold text-sm tracking-wide uppercase mb-4 border border-google-red-500/20 md:self-start">
          Conocimiento Permanente
        </div>
        <h2 className="text-2xl md:text-3xl font-display font-bold text-google-black dark:text-google-white mb-4">
          Artículos y Tutoriales
        </h2>
        <p className="text-google-grey-700 dark:text-google-grey-300 text-lg max-w-2xl">
          Nuestros speakers y el Core Team comparten guías y resúmenes de lo aprendido para que sigas potenciando tu perfil en cualquier momento.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => {
          let colorTheme = "";
          let bgTheme = "";
          switch(article.color) {
            case 'google-blue': 
              colorTheme = "text-google-blue-500"; 
              bgTheme = "bg-google-blue-500/10 border-google-blue-500/20"; 
              break;
            case 'google-green': 
              colorTheme = "text-google-green-500"; 
              bgTheme = "bg-google-green-500/10 border-google-green-500/20"; 
              break;
            case 'google-yellow': 
              colorTheme = "text-google-yellow-600";
              bgTheme = "bg-google-yellow-600/10 border-google-yellow-600/20"; 
              break;
            case 'google-red': 
              colorTheme = "text-google-red-500";
              bgTheme = "bg-google-red-500/10 border-google-red-500/20"; 
              break;
          }

          return (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-google-white dark:bg-google-grey-900 border border-google-grey-100 dark:border-google-grey-800 rounded-3xl p-8 flex flex-col hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-10 pointer-events-none transition-transform group-hover:scale-110 ${colorTheme.replace('text-', 'bg-')}`}></div>
              
              <div className="flex justify-between items-center mb-6">
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${bgTheme} ${colorTheme}`}>
                  {article.tag}
                </span>
                <span className="flex items-center text-google-grey-700 dark:text-google-grey-300 text-xs font-medium">
                  <Clock size={14} className="mr-1" />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-xl font-bold text-google-black dark:text-google-white mb-3 line-clamp-2 group-hover:text-google-blue-500 transition-colors">
                {article.title}
              </h3>
              
              <p className="text-google-grey-700 dark:text-google-grey-300 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-google-grey-100 dark:border-google-grey-800">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-google-black dark:text-google-white">{article.author}</span>
                  <span className="text-xs text-google-grey-700 dark:text-google-grey-300">{article.date}</span>
                </div>
                <button className="w-10 h-10 rounded-full border border-google-grey-100 dark:border-google-grey-800 flex items-center justify-center text-google-grey-700 dark:text-google-grey-300 group-hover:bg-google-blue-500 group-hover:text-google-white group-hover:border-google-blue-500 transition-colors">
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
