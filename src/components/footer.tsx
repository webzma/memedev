import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-bordertogray py-6 bg-card flex justify-center">

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left code-font">
            <span className="syntax-comment">
              © {new Date().getFullYear()} Made by @webzma with love ❣️.
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
  );
}
