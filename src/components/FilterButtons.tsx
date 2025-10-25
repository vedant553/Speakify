import { Button } from "@/components/ui/button";

export type FilterType = "all" | "work" | "personal" | "health" | "shopping" | "learning";

interface FilterButtonsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

const filters: { value: FilterType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "work", label: "Work" },
  { value: "personal", label: "Personal" },
  { value: "health", label: "Health" },
  { value: "shopping", label: "Shopping" },
  { value: "learning", label: "Learning" },
];

export const FilterButtons = ({ activeFilter, onFilterChange }: FilterButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "outline"}
          size="sm"
          onClick={() => onFilterChange(filter.value)}
          className={`rounded-full transition-all ${
            activeFilter === filter.value
              ? "gradient-primary text-white shadow-md"
              : "hover:border-primary"
          }`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
};
