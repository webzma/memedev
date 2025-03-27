import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MemeDev - Memes para Desarrolladores",
  description: "Comparte y descubre los mejores memes de programación",
};

// Fonts (it can be refactor and put it in a separated file)
import { Inter, Fira_Code } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });

// Global styles
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Components
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
