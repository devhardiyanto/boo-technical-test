import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface LikeButtonProps {
  likes: number;
  liked: boolean;
  onToggle: () => void;
}

export function LikeButton({ likes, liked, onToggle }: LikeButtonProps) {
  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={onToggle}
      className={cn(
        "flex items-center gap-2 hover:bg-white/10 hover:text-white transition-colors",
        liked ? "text-red-500 hover:text-red-400" : "text-white/60"
      )}
    >
      <Heart className={cn("w-5 h-5", liked && "fill-current")} />
      <span>{likes}</span>
    </Button>
  )
}
