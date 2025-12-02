interface QuestionCardProps {
  question: string;
  children: React.ReactNode;
}

export function QuestionCard({ question, children }: QuestionCardProps) {
  return (
    <div className="w-full rounded-3xl bg-gradient-to-br from-purple-500 to-indigo-600 p-6 shadow-2xl">
      <div className="flex flex-col gap-6">
         <h2 className="text-2xl font-bold text-white leading-tight">
            {question}
         </h2>
         {children}
      </div>
    </div>
  )
}
