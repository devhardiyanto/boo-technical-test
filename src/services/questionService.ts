import { ApiResponse, QuestionData } from "@/types";

const MOCK_DATA: QuestionData = {
  id: 1,
  user: {
    name: "Boo User (Mock)",
    avatar: null
  },
  createdAt: "2h ago",
  question: "What would you choose: trust or passion?",
  options: [
    { id: "trust", label: "A relationship full of trust" },
    { id: "passion", label: "A relationship full of passion" }
  ],
  likes: 999,
  comments: [
    {
      id: 1,
      user: { name: "Mock User", avatar: null },
      text: "This is a mock comment.",
      createdAt: "1m ago"
    }
  ]
};

export const questionService = {
  getQuestion: async (): Promise<QuestionData> => {
    const useMock = process.env.NEXT_PUBLIC_APP_DUMMY === 'true';

    if (useMock) {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));
      return MOCK_DATA;
    }

    const response = await fetch('/api/question');
    const result: ApiResponse<QuestionData> = await response.json();

    if (!result.success || !result.data) {
      throw new Error(result.error || 'Failed to fetch question');
    }

    return result.data;
  }
};
