"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code, ArrowLeft, Search } from "lucide-react";
import SearchBar from "@/components/search-bar";
import { MemeGrid } from "@/components/meme-grid";

// Importamos los memes de muestra (en una app real, esto vendría de una API)
import { memes } from "@/lib/meme-data";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Filtramos los memes basados en la consulta
  const filteredMemes = query
    ? memes.filter(
        (meme) =>
          meme.title.toLowerCase().includes(query.toLowerCase()) ||
          meme.description.toLowerCase().includes(query.toLowerCase()) ||
          meme.tags.some((tag) =>
            tag.toLowerCase().includes(query.toLowerCase())
          )
      )
    : [];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1 mb-6 text-sm font-medium hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="terminal-prompt code-font">cd ..</span>
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Search className="h-5 w-5 text-primary" />
              <h1 className="text-2xl font-bold code-font">
                search.results('{query}')
              </h1>
            </div>

            {filteredMemes.length > 0 ? (
              <p className="text-muted-foreground syntax-comment">
                // Encontrados {filteredMemes.length} resultados para "{query}"
              </p>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl code-font mb-2">return []</p>
                <p className="text-muted-foreground syntax-comment">
                  // No se encontraron memes para "{query}"
                </p>
                <Link href="/upload">
                  <Button variant="outline" className="mt-4 code-font">
                    upload.newMeme()
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {filteredMemes.length > 0 && <MemeGrid memes={filteredMemes} />}
        </div>
      </main>
    </div>
  );
}
