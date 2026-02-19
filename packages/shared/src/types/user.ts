export interface User {
  id: string;
  email: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  createdAt: Date;
}

export interface Creator extends User {
  subscriberCount: number;
  postCount: number;
  customDomain?: string;
  tier: "starter" | "creator" | "pro";
  tagline: string;
}

export interface CreatorProfile extends Creator {
  coverImage?: string;
  brandColors?: { primary: string; accent: string };
  socialLinks?: { twitter?: string; website?: string };
  isSubscribed: boolean;
  subscriptionPrice?: number;
}
