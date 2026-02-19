export interface Vlog {
  id: string;
  title: string;
  videoUrl: string;
  thumbnailUrl?: string;
  duration: number;
  published: boolean;
  publishedAt?: Date;
  createdAt: Date;
  authorId: string;
  author: { name: string; username: string; avatar?: string };
  likeCount: number;
  commentCount: number;
}
