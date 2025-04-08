"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Code,
  Heart,
  MessageSquare,
  Share2,
  ArrowLeft,
  Terminal,
  BookMarked,
} from "lucide-react";
import { CommentSection } from "@/components/comment-section";
import { memes } from "@/lib/meme-data";

export default function MemePage({ params }: { params: { id: string } }) {
  const memeId = Number.parseInt(params.id);
  const meme = memes.find((m) => m.id === memeId) || memes[0];

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(meme.likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: meme.title,
          text: `Mira este meme de programación: ${meme.title}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error compartiendo:", error);
      }
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert("¡Enlace copiado al portapapeles!");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container py-12 mx-auto">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1 mb-6 text-sm font-medium hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="terminal-prompt font-mono">
              <span className="text-primary">$</span> cd ..
            </span>
          </Link>
          <Card className="bg-muted border-primary/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0 p-6">
                <div className="relative aspect-square border rounded-3xl">
                  <Image
                    src="/meme-image.jpg"
                    alt={meme.title}
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <div className="flex items-start gap-2 mb-2">
                    <Terminal className="mt-2 h-5 w-5 text-primary" />
                    <h1 className="text-2xl font-bold code-font">
                      {meme.title}
                    </h1>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    <span className="syntax-comment">// Posted by </span>
                    <Link
                      href="/profile"
                      className="font-medium syntax-function hover:underline"
                    >
                      @{meme.author}
                    </Link>
                    <span className="syntax-comment"> on {meme.date}</span>
                  </div>
                  <p className="mt-4">{meme.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {meme.tags.map((tag) => (
                      <Link key={tag} href={`/search?q=${tag}`}>
                        <span className="inline-flex items-center rounded-full bg-card px-2.5 py-0.5 text-xs font-medium code-font text-primary">
                          #{tag}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-auto pt-6 flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`gap-1 ${liked ? "text-primary" : ""}`}
                      onClick={handleLike}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          liked ? "fill-primary text-primary" : ""
                        }`}
                      />
                      <span className="code-font">{likeCount}</span>
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span className="code-font">{meme.comments}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`gap-1 ${saved ? "text-primary" : ""}`}
                      onClick={handleSave}
                    >
                      <BookMarked
                        className={`h-4 w-4 ${
                          saved ? "fill-primary text-primary" : ""
                        }`}
                      />
                      <span className="code-font">save()</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1 ml-auto"
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4" />
                      <span className="code-font ">share()</span>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <CommentSection memeId={meme.id} />
        </div>
      </main>
    </div>
  );
}
