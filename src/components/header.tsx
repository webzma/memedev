"use client";

import Link from "next/link";
import { Code, TrendingUp, Upload, User, Wand2 } from "lucide-react";
import SearchBar from "./search-bar";
import { Button } from "./ui/button";
import GithubIcon from "./icons/github";
import { usePathname } from "next/navigation";
import ModeToggle from "./mode-toggle";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="flex justify-center sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl cursor-pointer"
        >
          <Code className="h-5 w-5 text-primary" />
          <span className="font-mono font-medium">MemeDev</span>
        </Link>

        <nav className="ml-auto flex items-center gap-1 sm:gap-2">
          <div className="hidden md:block mr-2">
            <SearchBar />
          </div>

          <Link href="/upload">
            <Button
              variant={pathname === "/upload" ? "secondary" : "ghost"}
              size="sm"
              className="hidden sm:flex gap-1 cursor-pointer"
            >
              <Upload className="h-4 w-4" />
              <span className="hidden md:inline">Upload</span>
            </Button>
          </Link>

          <Link href="/create">
            <Button
              variant={pathname === "/create" ? "secondary" : "ghost"}
              size="sm"
              className="hidden sm:flex gap-1 cursor-pointer"
            >
              <Wand2 className="h-4 w-4" />
              <span className="hidden md:inline">Create</span>
            </Button>
          </Link>

          <Link href="/trending">
            <Button
              variant={pathname === "/trending" ? "secondary" : "ghost"}
              size="sm"
              className="hidden sm:flex gap-1 cursor-pointer"
            >
              <TrendingUp className="h-4 w-4" />
              <span className="hidden md:inline">Trending</span>
            </Button>
          </Link>

          <Link href="/profile">
            <Button
              variant={pathname === "/profile" ? "secondary" : "ghost"}
              size="icon"
              className="cursor-pointer"
            >
              <User className="size-5" />
              <span className="sr-only">Perfil</span>
            </Button>
          </Link>

          <Link href="https://github.com" target="_blank">
            <Button variant="ghost" className="cursor-pointer">
              <GithubIcon />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>

          <Button variant="ghost" size="icon">
            <ModeToggle />
          </Button>
        </nav>
      </div>
    </header>
  );
}
