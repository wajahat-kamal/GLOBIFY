import { Sparkles } from "lucide-react";
import React from "react";

function Header() {
  return (
    <section className="flex items-center justify-center pt-42 px-4 bg-white">
      <div className="flex flex-col items-center justify-center text-center gap-2 max-w-3xl w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-1 rounded-full bg-indigo-50 border border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 cursor-default">
          <p className="text-sm font-medium text-indigo-600">
            New: AI feature integrated
          </p>
          <Sparkles className="h-4 w-4 text-indigo-600 animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-semibold text-[#364153] leading-tight">
          Your own <span className="text-indigo-600">blogging</span>{" "}
          <br className="hidden md:block" />
          platform.
        </h1>

        {/* Subtext */}
        <p className="text-base max-sm:text-xs text-[#6B7280] max-w-2xl">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>

        {/* Search Form */}
        <form className="relative w-full max-w-lg mt-8">
          <input
            type="text"
            placeholder="Search for Blogs"
            className="w-full pl-4 pr-20 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 transition"
          />
          <button
            type="submit"
            className="absolute right-1 top-1/2 -translate-y-1/2 px-8 py-2 bg-primary text-white font-medium rounded-md shadow hover:scale-103 hover:bg-primary/90 transition"
          >
            Search
          </button>
        </form>
      </div>


    </section>
  );
}

export default Header;
