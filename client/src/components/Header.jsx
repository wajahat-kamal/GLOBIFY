import { Sparkles, Star } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="mt-40 flex justify-center">
      <div className="inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-[#E5E7FC] border border-primary/50 text-white shadow-md hover:shadow-lg transition-all duration-300 cursor-default">
        <p className="text-sm font-medium tracking-wide text-primary">
          New: AI feature integrated
        </p>
        <Sparkles className="h-4 w-4 text-primary animate-pulse" />
      </div>
    </div>
  );
}

export default Header;
