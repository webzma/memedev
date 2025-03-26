"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Filter } from "lucide-react";

// Categorías comunes de memes de programación
const categories = [
  { id: "all", name: "Todos" },
  { id: "javascript", name: "JavaScript" },
  { id: "css", name: "CSS" },
  { id: "bugs", name: "Bugs" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "devops", name: "DevOps" },
];

interface CategoryFilterProps {
  onFilterChange: (category: string) => void;
}

export function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
      <Filter className="h-4 w-4 text-primary flex-shrink-0" />
      <Tabs
        defaultValue="all"
        className="w-full"
        onValueChange={handleCategoryChange}
      >
        <TabsList className="bg-muted/50">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="code-font data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              {category.id === "all" ? "all()" : `#${category.name}`}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
