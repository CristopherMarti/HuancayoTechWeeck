export interface Member {
  id: string;
  name: string;
  role: 'Organizer' | 'Speaker' | 'Volunteer';
  bio: string;
  avatarUrl: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface EventPost {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  platform: 'Instagram' | 'Facebook';
  link: string;
}

export interface PastEvent {
  id: string;
  title: string;
  subtitle: string;
  link: string;
}

export interface Technology {
  id: string;
  name: string;
  level: number;
  icon: string;
  color: string;
}
