import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { memes as defaultMemes } from "@/lib/meme-data";

interface MemeGridProps {
  memes?: typeof defaultMemes;
}

export function MemeGrid({ memes = defaultMemes }: MemeGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {memes.map((meme) => (
        <Link key={meme.id} href={`/meme/${meme.id}`}>
          <Card className="overflow-hidden transition-all hover:shadow-lg hover:border-primary">
            <CardContent className="p-0">
              <div className="relative aspect-square"></div>
              <div className="p-4">
                <h3 className="font-medium line-clamp-1 code-font">
                  {meme.title}
                </h3>
                <div className="mt-1 flex items-center justify-between text-sm text-muted-foreground">
                  <span className="syntax-function">@{meme.author}</span>
                  <span className="flex items-center gap-1">
                    <Heart className="h-3 w-3 text-primary" />
                    {meme.likes}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
