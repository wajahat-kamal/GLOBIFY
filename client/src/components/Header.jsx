import { Sparkles } from "lucide-react";
import React from "react";

function Header() {
  return (
    <section className="flex items-center justify-center pt-32 sm:pt-40 px-4">
      <div className="text-center max-w-3xl w-full">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-3 px-6 py-1.5 mb-6 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p className="font-medium">New: AI feature integrated</p>
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-bold sm:leading-[1.2] text-gray-800">
          Your own <span className="text-primary">blogging</span> <br className="hidden sm:block" />
          platform.
        </h1>

        {/* Subtext */}
        <p className="my-6 sm:my-8 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>

        {/* Search form */}
        <form className="flex max-w-lg mx-auto border border-gray-300 bg-white rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-primary transition">
          <input
            type="text"
            placeholder="Search for blogs"
            required
            className="w-full px-4 py-2 outline-none text-gray-700 text-sm sm:text-base"
          />
          <button
            type="submit"
            className="bg-primary text-white px-6 sm:px-8 py-2 sm:py-2.5 hover:scale-105 active:scale-100 transition-transform duration-200"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Header;
