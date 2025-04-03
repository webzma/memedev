"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Send } from "lucide-react";

// Datos de ejemplo para comentarios
const sampleComments = [
  {
    id: 1,
    author: "debuggirl",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "Me pasa todo el tiempo con CSS Grid 😂",
    date: "hace 2 horas",
  },
  {
    id: 2,
    author: "codemonkey",
    avatar: "/placeholder.svg?height=40&width=40",
    content:
      "Esto es demasiado real. Especialmente cuando estás trabajando con posicionamiento absoluto.",
    date: "hace 5 horas",
  },
  {
    id: 3,
    author: "reactninja",
    avatar: "/placeholder.svg?height=40&width=40",
    content: "console.log('Me encanta este meme');",
    date: "hace 1 día",
  },
];

interface CommentSectionProps {
  memeId: number;
}

export function CommentSection({ memeId }: CommentSectionProps) {
  const [comments, setComments] = useState(sampleComments);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (!newComment.trim()) return;

    const comment = {
      id: comments.length + 1,
      author: "tú",
      avatar: "/placeholder.svg?height=40&width=40",
      content: newComment,
      date: "ahora mismo",
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-bold code-font">comments.map()</h2>
      </div>

      <div className="flex gap-4 mb-6">
        <Avatar>
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="@tu" />
          <AvatarFallback>TÚ</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="// Escribe tu comentario aquí"
            className="code-font mb-2"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button
            onClick={handleAddComment}
            className="ml-auto font-mono code-font text-zinc-900"
            disabled={!newComment.trim()}
          >
            <Send className="h-4 w-4 mr-2" />
            comment.post()
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Avatar>
              <AvatarFallback>
                {comment.author.substring(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium syntax-function">
                  @{comment.author}
                </span>
                <span className="text-xs text-muted-foreground syntax-comment">
                  {comment.date}
                </span>
              </div>
              <p className="mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
