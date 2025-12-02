import { create } from 'zustand';
import { questionService } from '@/services/questionService';
import { QuestionData } from '@/types';

interface QuestionState {
  data: QuestionData | null;
  loading: boolean;
  error: string | null;
  selectedOption: string | null;
  liked: boolean;
  likesCount: number;

  // Actions
  fetchQuestion: () => Promise<void>;
  selectOption: (id: string) => void;
  toggleLike: () => void;
}

export const useQuestionStore = create<QuestionState>((set, get) => ({
  data: null,
  loading: false,
  error: null,
  selectedOption: null,
  liked: false,
  likesCount: 0,

  fetchQuestion: async () => {
    set({ loading: true, error: null });
    try {
      const data = await questionService.getQuestion();
      set({
        data,
        loading: false,
        likesCount: data.likes
      });
    } catch (err: any) {
      set({ loading: false, error: err.message });
    }
  },

  selectOption: (id: string) => {
    set({ selectedOption: id });
  },

  toggleLike: () => {
    const { liked, likesCount } = get();
    set({
      liked: !liked,
      likesCount: liked ? likesCount - 1 : likesCount + 1
    });
  }
}));
