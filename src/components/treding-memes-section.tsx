"use client";

import { Coffee } from "lucide-react";
import { CategoryFilter } from "./category-filter";
import { MemeGrid } from "./meme-grid";
import { memes } from "@/lib/meme-data";
import { useState } from "react";

export default function TrendingMemesSection() {
  const [filteredMemes, setFilteredMemes] = useState(memes);

  const handleFilterChange = (category: string) => {
    if (category === "all") {
      setFilteredMemes(memes);
    } else {
      setFilteredMemes(memes.filter((meme) => meme.tags.includes(category)));
    }
  };

  return (
    <section className="container px-4 py-12 md:px-6 flex justify-center mx-auto">
      <div className="flex flex-col items-start gap-4 w-11/12">
        <div className="flex items-center gap-2">
          <Coffee className="h-5 w-5 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight code-font">
            trending.memes
          </h2>
        </div>

        <CategoryFilter onFilterChange={handleFilterChange} />
        <MemeGrid memes={filteredMemes} />
      </div>
    </section>
  );
}
