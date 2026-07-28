export interface Profile {
  email: string;
  location: string;
  name: string;
  phone: string;
  profileImageUrl: string;
  socialLinks: SocialLinks;
  summary: string;
  tagline: string[];
  title: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  portfolio: string;
  twitter: string;
}