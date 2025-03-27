import Link from "next/link";
import { Code } from "lucide-react";
import SearchBar from "./search-bar";
import ModeToggle from "./mode-toggle";
import GithubIcon from "./icons/github";

export default function Header() {
  return (
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
            <GithubIcon width={18} height={18} />
            <span className="sr-only">GitHub</span>
          </Link>
          <ModeToggle />
        </nav>
      </div>
    </header>
  );
}
