import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { teamMembers } from '../data';
import { GithubIcon, LinkedinIcon } from 'lucide-react';
import { Member } from '../types';

const roles = ['Todos', 'Organizer', 'Speaker', 'Volunteer'];

export function CoreTeam() {
  const [activeFilter, setActiveFilter] = useState('Todos');

  const filteredMembers = activeFilter === 'Todos' 
    ? teamMembers 
    : teamMembers.filter(member => member.role === activeFilter);

  return (
    <section id="team">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-google-black dark:text-google-white mb-2">Core Team & Comunidad</h2>
          <p className="text-google-grey-700 dark:text-google-grey-300 text-lg">Conoce a los líderes, ponentes y voluntarios que hacen posible nuestra comunidad.</p>
        </motion.div>
        <div className="flex gap-2 hidden sm:flex shrink-0">
          {roles.map(role => (
             <button 
               key={role} 
               onClick={() => setActiveFilter(role)}
               className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                 activeFilter === role 
                   ? 'bg-google-white dark:bg-google-grey-900 text-google-blue-500 shadow-sm' 
                   : 'bg-transparent text-google-grey-700 dark:text-google-grey-300 hover:bg-google-grey-100 dark:hover:bg-google-grey-800 hover:text-google-black dark:hover:text-google-white'
               }`}
             >
               {role === 'Todos' ? 'Todos' : role === 'Organizer' ? 'Organizadores' : role === 'Speaker' ? 'Speakers' : 'Voluntarios'}
             </button>
          ))}
        </div>
      </div>
      
      {/* Mobile Filter Toggle */}
      <div className="flex justify-start sm:hidden mb-6 gap-2 overflow-x-auto pb-2 scrollbar-hide">
         {roles.map(role => (
             <button 
               key={role} 
               onClick={() => setActiveFilter(role)}
               className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold transition-all ${
                 activeFilter === role 
                   ? 'bg-google-white dark:bg-google-grey-900 text-google-blue-500 shadow-sm' 
                   : 'bg-transparent text-google-grey-700 dark:text-google-grey-300 hover:bg-google-grey-100 dark:hover:bg-google-grey-800'
               }`}
             >
               {role === 'Todos' ? 'Todos' : role === 'Organizer' ? 'Organizadores' : role === 'Speaker' ? 'Speakers' : 'Voluntarios'}
             </button>
          ))}
      </div>

      {/* Member Cards Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map(member => (
              <motion.div 
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <MemberCard member={member} />
              </motion.div>
            ))}
          </AnimatePresence>
      </motion.div>
    </section>
  );
}

const MemberCard: React.FC<{ member: Member }> = ({ member }) => {
  // Determine border and badge colors based on role
  let ringClasses = "";
  let badgeClasses = "";
  let glowGlow = "";
  
  if (member.role === 'Organizer') {
    ringClasses = "border-2 border-dashed border-google-green-500/50 dark:border-google-green-500/40";
    badgeClasses = "bg-google-green-500 bg-opacity-10 dark:bg-opacity-20 text-google-green-600 dark:text-google-green-400";
    glowGlow = "0 10px 25px -5px rgba(52, 168, 83, 0.4)";
  } else if (member.role === 'Speaker') {
    ringClasses = "border-2 border-dashed border-google-blue-500/50 dark:border-google-blue-500/40";
    badgeClasses = "bg-google-blue-500 bg-opacity-10 dark:bg-opacity-20 text-google-blue-600 dark:text-google-blue-400";
    glowGlow = "0 10px 25px -5px rgba(66, 133, 244, 0.4)";
  } else {
    ringClasses = "border-2 border-dashed border-google-yellow-600/50 dark:border-google-yellow-600/40";
    badgeClasses = "bg-google-yellow-600 bg-opacity-10 dark:bg-opacity-20 text-google-yellow-600 dark:text-google-yellow-400";
    glowGlow = "0 10px 25px -5px rgba(251, 188, 4, 0.4)";
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ 
        scale: isHovered ? 1.02 : 1, 
        y: isHovered ? -5 : 0, 
        boxShadow: isHovered ? glowGlow : "0 4px 6px -1px rgba(0,0,0,0.05)",
        borderColor: isHovered ? "transparent" : (document.documentElement.classList.contains('dark') ? "var(--color-google-grey-800)" : "var(--color-google-grey-100)")
      }}
      transition={{ duration: 0.3 }}
      className="bg-google-white dark:bg-google-grey-900 p-6 rounded-3xl shadow-sm border border-google-grey-100 dark:border-google-grey-800 flex flex-col items-center text-center cursor-pointer relative overflow-hidden group"
    >
      <div className="relative mb-5">
        <div className="w-24 h-24 rounded-full bg-gray-100 dark:bg-google-grey-800 flex items-center justify-center overflow-hidden border-4 border-google-white dark:border-google-grey-900 shadow-lg relative z-10 transition-transform duration-500 group-hover:scale-105">
           <img 
             src={member.avatarUrl} 
             alt={member.name} 
             className="w-full h-full object-cover"
           />
        </div>
        <motion.div 
           className={`absolute -inset-2 rounded-full ${ringClasses}`}
           animate={{ rotate: isHovered ? 180 : 0 }}
           transition={{ duration: 0.8, ease: "anticipate" }}
        />
      </div>
      
      <h3 className="font-bold text-google-black dark:text-google-white">{member.name}</h3>
      
      <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded mt-1 ${badgeClasses}`}>
        {member.role}
      </span>
      
      <p className="text-xs mt-3 line-clamp-2 text-google-grey-700 dark:text-google-grey-300 flex-grow">
        {member.bio}
      </p>
      
      <div className="flex justify-center gap-3 mt-4">
        {member.githubUrl && (
          <a href={member.githubUrl} className="text-google-grey-700 dark:text-google-grey-300 hover:text-google-black dark:hover:text-google-white transition-colors" aria-label="GitHub">
            <GithubIcon size={16} />
          </a>
        )}
        {member.linkedinUrl && (
          <a href={member.linkedinUrl} className="text-google-grey-700 dark:text-google-grey-300 hover:text-google-blue-500 transition-colors" aria-label="LinkedIn">
            <LinkedinIcon size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
