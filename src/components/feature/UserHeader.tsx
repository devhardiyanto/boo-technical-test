import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserHeaderProps {
  name: string;
  avatar: string | null;
  createdAt: string;
}

export function UserHeader({ name, avatar, createdAt }: UserHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <Avatar>
        <AvatarImage src={avatar || ""} alt={name} />
        <AvatarFallback className="text-black">{name[0]}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">
          {name} <span className="text-white/60 font-normal">asked a question</span>
        </span>
        <span className="text-xs text-white/40">{createdAt}</span>
      </div>
    </div>
  )
}
