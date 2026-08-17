import { Member, EventPost, Technology, PastEvent } from './types';

export const technologies: Technology[] = [
  {
    id: '1',
    name: 'Android',
    level: 90,
    icon: '',
    color: 'bg-google-green-500'
  },
  {
    id: '2',
    name: 'Google Cloud',
    level: 80,
    icon: '',
    color: 'bg-google-blue-500'
  },
  {
    id: '3',
    name: 'Firebase',
    level: 95,
    icon: '',
    color: 'bg-google-yellow-600'
  },
  {
    id: '4',
    name: 'TensorFlow',
    level: 70,
    icon: '',
    color: 'bg-google-red-500'
  },
  {
    id: '5',
    name: 'Flutter',
    level: 85,
    icon: '',
    color: 'bg-google-blue-500'
  },
  {
    id: '6',
    name: 'Web Tech',
    level: 95,
    icon: '',
    color: 'bg-google-yellow-600'
  }
];

export const pastEventsList: PastEvent[] = [
  {
    id: 'e1',
    title: 'DevFest Huancayo',
    subtitle: 'Google Developer Groups GDG Huancayo presents DevFest ...',
    link: '#'
  },
  {
    id: 'e2',
    title: 'Devfest HYO 2024',
    subtitle: 'Google Developer Groups GDG Huancayo presents Devfest ...',
    link: '#'
  },
  {
    id: 'e3',
    title: 'Devfest HYO 2025',
    subtitle: 'Google Developer Groups GDG Huancayo presents Devfest ...',
    link: '#'
  },
  {
    id: 'e4',
    title: 'Hackathon 7H - Build with AI',
    subtitle: 'Google Developer Groups GDG Huancayo presents Hackathon ...',
    link: '#'
  },
  {
    id: 'e5',
    title: 'See Build with AI',
    subtitle: 'GDG Huancayo. ¡Lleva tus proyectos universitarios al ...',
    link: '#'
  },
  {
    id: 'e6',
    title: 'Build with AI para fundadores ...',
    subtitle: 'Google Developer Groups GDG Huancayo presents Estrategia y ...',
    link: '#'
  }
];

export const teamMembers: Member[] = [
  {
    id: '1',
    name: 'Ana García',
    role: 'Organizer',
    bio: 'Lead organizer & Tech enthusiast. Building community.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    role: 'Speaker',
    bio: 'GDE in Web Technologies. Loves React and TypeScript.',
    avatarUrl: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: '3',
    name: 'Lucía Fernández',
    role: 'Organizer',
    bio: 'Cloud Architect and open source contributor.',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: '4',
    name: 'Miguel Torres',
    role: 'Volunteer',
    bio: 'Student & aspiring developer. Passionate about AI.',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=300',
    githubUrl: 'https://github.com'
  },
  {
    id: '5',
    name: 'Sofía Ríos',
    role: 'Speaker',
    bio: 'Machine Learning Engineer. Data driven decisions.',
    avatarUrl: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=300',
    linkedinUrl: 'https://linkedin.com'
  },
  {
    id: '6',
    name: 'Diego Salazar',
    role: 'Volunteer',
    bio: 'UI/UX Designer. Making things look beautiful.',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300',
    githubUrl: 'https://github.com',
    linkedinUrl: 'https://linkedin.com'
  }
];

export const recentEvents: EventPost[] = [
  {
    id: '1',
    title: 'DevFest Huancayo 2023',
    date: 'Dec 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80',
    platform: 'Instagram',
    link: '#'
  },
  {
    id: '2',
    title: 'Build with AI Workshop',
    date: 'Mar 10, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80',
    platform: 'Facebook',
    link: '#'
  },
  {
    id: '3',
    title: 'Women Techmakers',
    date: 'Apr 22, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
    platform: 'Instagram',
    link: '#'
  },
  {
    id: '4',
    title: 'Cloud Next Extended',
    date: 'May 05, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
    platform: 'Facebook',
    link: '#'
  }
];
