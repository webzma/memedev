"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MemeGrid } from "@/components/meme-grid";
import { Code, Upload, Terminal, Github, Coffee, Search } from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { SearchBar } from "@/components/search-bar";
import { CategoryFilter } from "@/components/category-filter";
import { ModeToggle } from "@/components/mode-toggle";
import { memes } from "@/lib/meme-data";

export default function Home() {
  const [filteredMemes, setFilteredMemes] = useState(memes);

  const handleFilterChange = (category: string) => {
    if (category === "all") {
      setFilteredMemes(memes);
    } else {
      setFilteredMemes(memes.filter((meme) => meme.tags.includes(category)));
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-center sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-5 w-5 text-primary" />
            <span className="font-mono font-medium">MemeDev</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            <SearchBar />
            <Link
              href="/upload"
              className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
            >
              Upload
            </Link>
            <Link
              href="/profile"
              className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
            >
              Profile
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              className="text-sm font-medium hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1c1917] border-b flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-zinc-900 inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-2">
                  <Terminal className="mr-1 h-3 w-3" />
                  <span className="code-font">v1.0.0</span>
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="text-green-400 font-mono font-semibold">
                    console.log
                  </span>
                  <span>(</span>
                  <span className="text-[#ffd166]">
                    'Memes de Programación'
                  </span>
                  <span>);</span>
                </h1>
                <p className="max-w-[600px] mx-auto text-muted-foreground  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comparte y descubre los memes más divertidos sobre la vida del
                  desarrollador.
                </p>
              </div>
              <div className="space-x-4 flex justify-center items-center">
                <Link href="/upload">
                  <Button className="gap-1 h-10 code-font text-zinc-900">
                    <Upload className="h-4 w-4" />
                    <span>upload.meme()</span>
                  </Button>
                </Link>
                <Link href="/search">
                  <Button variant="outline" className="h-10">
                    <Search className="h-4 w-4" />
                    <span className="code-font">memes.search()</span>
                  </Button>
                </Link>
              </div>
              <div className="w-full max-w-md mx-auto mt-8">
                <CodeBlock />
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 py-12 md:px-6 flex justify-center mx-auto">
          <div className="flex flex-col items-start gap-4">
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
      </main>
      <footer className="border-t py-6 bg-card flex justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left code-font">
              <span className="syntax-comment">
                © {new Date().getFullYear()} Made by @webzma with love.
              </span>
            </p>
            <nav className="flex gap-4 sm:gap-6">
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary"
              >
                about.js
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium hover:text-primary"
              >
                terms.js
              </Link>
              <Link
                href="/privacy"
                className="text-sm font-medium hover:text-primary"
              >
                privacy.js
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
