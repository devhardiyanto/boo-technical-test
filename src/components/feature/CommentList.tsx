import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: number;
  user: {
    name: string;
    avatar: string | null;
  };
  text: string;
  createdAt: string;
}

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="flex flex-col gap-4 mt-6">
      <h3 className="text-lg font-semibold text-white">Comments</h3>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <Avatar className="w-8 h-8">
              <AvatarImage src={comment.user.avatar || ""} alt={comment.user.name} />
              <AvatarFallback className="text-black text-xs">{comment.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium text-white">{comment.user.name}</span>
                <span className="text-xs text-white/40">{comment.createdAt}</span>
              </div>
              <p className="text-sm text-white/80">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
