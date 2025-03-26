"use client";
import { useEffect, useState } from "react";

export function CodeBlock() {
  const [currentLine, setCurrentLine] = useState(0);
  const codeLines = [
    { type: "comment", text: "// Cuando encuentras el meme perfecto" },
    { type: "code", text: "const meme = await findMeme('programming');" },
    { type: "code", text: "if (meme.isFunny && !meme.isRepost) {" },
    { type: "code", text: "  await share(meme);" },
    { type: "code", text: "  karma += 1000;" },
    { type: "code", text: "}" },
    { type: "comment", text: "// MemDev - Donde los desarrolladores ríen" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code-block overflow-hidden border p-6 rounded-md">
      <pre className="text-left overflow-x-auto p-0 text-sm">
        {codeLines.map((line, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentLine ? "opacity-100" : "opacity-40"
            } ${line.type === "comment" ? "syntax-comment" : ""}`}
          >
            {line.text}
          </div>
        ))}
      </pre>
    </div>
  );
}
