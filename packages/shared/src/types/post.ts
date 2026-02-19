export interface Post {
  id: string;
  title: string;
  slug: string;
  content: any;
  excerpt?: string;
  coverImage?: string;
  published: boolean;
  isPaid: boolean;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  authorId: string;
  author: { name: string; username: string; avatar?: string };
  tags: string[];
  likeCount: number;
  commentCount: number;
  readTime: number;
}

export interface PostDraft {
  title: string;
  content: any;
  excerpt?: string;
  isPaid: boolean;
  tags: string[];
  scheduledAt?: Date;
}
