"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Code,
  User,
  Settings,
  BookMarked,
  Upload,
  ArrowLeft,
  Edit,
} from "lucide-react";
import { MemeGrid } from "@/components/meme-grid";

// Importamos los memes de muestra (en una app real, esto vendría de una API)
import { memes } from "@/lib/meme-data";

// Datos de ejemplo para el perfil
const profile = {
  username: "devguru",
  displayName: "Dev Guru",
  avatar: "/placeholder.svg?height=100&width=100",
  bio: "Desarrollador full-stack apasionado por los memes y el café ☕",
  joinDate: "Octubre 2022",
  stats: {
    uploads: 24,
    likes: 1256,
    followers: 89,
    following: 42,
  },
};

// Filtramos los memes del usuario
const userMemes = memes.filter((meme) => meme.author === profile.username);
// Memes guardados (ejemplo)
const savedMemes = [memes[0], memes[2], memes[4]];

export default function ProfilePage() {
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

          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profile.avatar} alt={profile.username} />
                    <AvatarFallback className="text-2xl">
                      {profile.displayName.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">Editar perfil</span>
                  </Button>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between mb-4">
                    <div>
                      <h1 className="text-2xl font-bold code-font">
                        {profile.displayName}
                      </h1>
                      <p className="text-muted-foreground syntax-function">
                        @{profile.username}
                      </p>
                    </div>
                    <Button className="code-font">
                      <User className="h-4 w-4 mr-2" />
                      follow()
                    </Button>
                  </div>

                  <p className="mb-4">{profile.bio}</p>

                  <p className="text-sm text-muted-foreground syntax-comment">
                    // Miembro desde {profile.joinDate}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
                    <div className="text-center p-2 bg-muted/50 rounded-md">
                      <p className="text-lg font-bold">
                        {profile.stats.uploads}
                      </p>
                      <p className="text-xs text-muted-foreground code-font">
                        uploads
                      </p>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded-md">
                      <p className="text-lg font-bold">{profile.stats.likes}</p>
                      <p className="text-xs text-muted-foreground code-font">
                        likes
                      </p>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded-md">
                      <p className="text-lg font-bold">
                        {profile.stats.followers}
                      </p>
                      <p className="text-xs text-muted-foreground code-font">
                        followers
                      </p>
                    </div>
                    <div className="text-center p-2 bg-muted/50 rounded-md">
                      <p className="text-lg font-bold">
                        {profile.stats.following}
                      </p>
                      <p className="text-xs text-muted-foreground code-font">
                        following
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="uploads" className="w-full">
            <TabsList className="w-full justify-start mb-8 bg-muted/50">
              <TabsTrigger value="uploads" className="code-font">
                <Upload className="h-4 w-4 mr-2" />
                uploads[]
              </TabsTrigger>
              <TabsTrigger value="saved" className="code-font">
                <BookMarked className="h-4 w-4 mr-2" />
                saved[]
              </TabsTrigger>
              <TabsTrigger value="settings" className="code-font">
                <Settings className="h-4 w-4 mr-2" />
                settings{}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="uploads" className="mt-0">
              <h2 className="text-xl font-bold mb-6 code-font">
                user.uploads.map()
              </h2>
              {userMemes.length > 0 ? (
                <MemeGrid memes={userMemes} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl code-font mb-2">return []</p>
                  <p className="text-muted-foreground syntax-comment">
                    // No has subido ningún meme todavía
                  </p>
                  <Link href="/upload">
                    <Button className="mt-4 code-font">
                      <Upload className="h-4 w-4 mr-2" />
                      upload.firstMeme()
                    </Button>
                  </Link>
                </div>
              )}
            </TabsContent>

            <TabsContent value="saved" className="mt-0">
              <h2 className="text-xl font-bold mb-6 code-font">
                user.saved.map()
              </h2>
              {savedMemes.length > 0 ? (
                <MemeGrid memes={savedMemes} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-xl code-font mb-2">return []</p>
                  <p className="text-muted-foreground syntax-comment">
                    // No has guardado ningún meme todavía
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="settings" className="mt-0">
              <h2 className="text-xl font-bold mb-6 code-font">
                user.settings
              </h2>
              <Card>
                <CardHeader>
                  <CardTitle className="code-font">
                    Configuración de cuenta
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground syntax-comment">
                    // Configuración de cuenta en desarrollo...
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
