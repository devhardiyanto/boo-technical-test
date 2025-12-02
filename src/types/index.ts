export type Option = {
  id: string;
  label: string;
};

export type User = {
  name: string;
  avatar: string | null;
};

export type Comment = {
  id: number;
  user: User;
  text: string;
  createdAt: string;
};

export type QuestionData = {
  id: number;
  user: User;
  createdAt: string;
  question: string;
  options: Option[];
  likes: number;
  comments: Comment[];
};

export type ApiResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};
