import { useEffect } from "react";
import { useQuestionStore } from "@/store/useQuestionStore";
import { UserHeader } from "@/components/feature/UserHeader";
import { QuestionCard } from "@/components/feature/QuestionCard";
import { OptionList } from "@/components/feature/OptionList";
import { LikeButton } from "@/components/feature/LikeButton";
import { CommentList } from "@/components/feature/CommentList";
import { ShareModal } from "@/components/feature/ShareModal";

export default function Home() {
  const { 
    data, 
    loading, 
    error,
    selectedOption, 
    liked, 
    likesCount, 
    fetchQuestion,
    selectOption,
    toggleLike 
  } = useQuestionStore();

  useEffect(() => {
    fetchQuestion();
  }, [fetchQuestion]);

  if (loading || !data) {
    return (
      <main className="min-h-screen bg-black text-white py-8 px-4 flex justify-center items-center">
        <div className="animate-pulse">Loading...</div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-black text-white py-8 px-4 flex justify-center items-center">
        <div className="text-red-500">Error: {error}</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white py-8 px-4 flex justify-center font-sans">
      <div className="w-full max-w-[400px] space-y-6">
        <UserHeader 
          name={data.user.name} 
          avatar={data.user.avatar} 
          createdAt={data.createdAt} 
        />
        
        <QuestionCard question={data.question}>
          <OptionList 
            options={data.options} 
            selectedId={selectedOption} 
            onSelect={selectOption} 
          />
          
          <div className="flex justify-between items-center pt-2">
            <LikeButton 
              likes={likesCount} 
              liked={liked} 
              onToggle={toggleLike} 
            />
            <ShareModal />
          </div>
        </QuestionCard>

        <CommentList comments={data.comments} />
      </div>
    </main>
  );
}
