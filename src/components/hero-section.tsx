import { Search, Terminal, Upload } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { CodeBlock } from "./code-block";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1c1917] border-b flex justify-center">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-2">
              <Terminal className="mr-1 h-3 w-3" />
              <span className="font-mono">v1.0.0</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-green-400 font-mono font-semibold">
                console.log
              </span>
              <span>(</span>
              <span className="text-[#ffd166]">'Memes de Programación'</span>
              <span>);</span>
            </h1>
            <p className="max-w-[600px] mx-auto text-muted-foreground  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Comparte y descubre los memes más divertidos sobre la vida del
              desarrollador.
            </p>
          </div>
          <div className="space-x-4 flex justify-center items-center">
            <Link href="/upload">
              <Button className="gap-1 h-10 code-font text-zinc-900 font-mono">
                <Upload className="h-4 w-4" />
                <span>upload.meme()</span>
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="outline" className="h-10 font-mono">
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
  );
}
