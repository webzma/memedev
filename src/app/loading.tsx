import { Terminal } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center gap-4">
        <Terminal className="h-12 w-12 text-primary animate-spin" />
        <span className="text-lg font-bold">Loading...</span>
      </div>
    </div>
  );
}
