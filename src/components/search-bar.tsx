"use client";

import type React from "react";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative w-full max-w-sm border rounded-md"
    >
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="search.memes('query')"
          className="pl-9 pr-12 font-mono"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          type="submit"
          size="sm"
          variant="ghost"
          className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground code-font"
        >
          run()
        </Button>
      </div>
    </form>
  );
}
