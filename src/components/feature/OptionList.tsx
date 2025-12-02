import { cn } from "@/lib/utils"

interface Option {
  id: string;
  label: string;
}

interface OptionListProps {
  options: Option[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

export function OptionList({ options, selectedId, onSelect }: OptionListProps) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={cn(
            "w-full p-4 rounded-xl text-left transition-all duration-200",
            "bg-white/5 hover:bg-white/10 border-2 border-transparent",
            selectedId === option.id 
              ? "border-white/80 bg-white/10 shadow-lg" 
              : "border-transparent"
          )}
        >
          <span className="text-lg font-medium text-white">{option.label}</span>
        </button>
      ))}
    </div>
  )
}
