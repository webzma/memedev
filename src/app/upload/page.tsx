"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Code, Upload, ArrowLeft, Terminal } from "lucide-react";

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would upload the file to a server here
    alert("Meme uploaded successfully! (This is just a demo)");
  };

  return (
    <div className="flex flex-col min-h-screen border-bordertogray">
      <main className="flex-1 container py-12">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1 mb-6 text-sm font-medium hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="terminal-prompt code-font">cd ..</span>
          </Link>
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                <CardTitle className="code-font">upload.meme()</CardTitle>
              </div>
              <CardDescription className="syntax-comment">
                // Comparte tu meme con la comunidad
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="code-font">
                    title:
                  </Label>
                  <Input
                    id="title"
                    placeholder="const title = 'Tu título aquí';"
                    required
                    className="code-font"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description" className="code-font">
                    description:
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="/* Describe tu meme aquí */"
                    className="code-font"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tags" className="code-font">
                    tags[]:
                  </Label>
                  <Input
                    id="tags"
                    placeholder="['javascript', 'css', 'bugs']"
                    className="code-font"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image" className="code-font">
                    image.upload():
                  </Label>
                  <div className="flex flex-col items-center gap-4 p-6 border-2 border-dashed rounded-lg border-primary/30 bg-card">
                    <Upload className="h-8 w-8 text-primary" />
                    <div className="text-center">
                      <p className="text-sm font-medium code-font">
                        import meme from './your-device'
                      </p>
                      <p className="text-xs text-muted-foreground mt-1 syntax-comment">
                        // PNG, JPG o GIF hasta 5MB
                      </p>
                    </div>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("image")?.click()}
                      className="code-font"
                    >
                      selectFile()
                    </Button>
                  </div>
                </div>
                {preview && (
                  <div className="space-y-2">
                    <Label className="code-font">preview:</Label>
                    <div className="relative aspect-square max-w-xs mx-auto overflow-hidden rounded-lg border border-primary/30">
                      <img
                        src={preview || "/placeholder.svg"}
                        alt="Preview"
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full code-font">
                  <Upload className="h-4 w-4 mr-2" />
                  meme.publish()
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
}
