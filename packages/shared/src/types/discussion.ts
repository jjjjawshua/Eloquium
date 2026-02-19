export interface Discussion {
  id: string;
  title: string;
  topic: string;
  isPinned: boolean;
  isHot: boolean;
  createdAt: Date;
  creatorId: string;
  creator: { name: string; username: string; avatar?: string };
  participantCount: number;
  replyCount: number;
}

export interface Thread {
  id: string;
  discussionId: string;
  content: string;
  authorId: string;
  author: { name: string; username: string; avatar?: string };
  createdAt: Date;
  likeCount: number;
  replies: Reply[];
}

export interface Reply {
  id: string;
  threadId: string;
  parentId?: string;
  content: string;
  authorId: string;
  author: { name: string; username: string; avatar?: string };
  createdAt: Date;
  likeCount: number;
}
