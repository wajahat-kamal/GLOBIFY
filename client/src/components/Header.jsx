import { Sparkles } from "lucide-react";
import React, { useRef } from "react";
import { UseAppContext } from "../context/AppContext";

function Header() {
  const { setInput, input } = UseAppContext();
  const inputRef = useRef();

  // Handle Search submit
  const submitHandler = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  // Clear search manually
  const onClear = () => {
    setInput("");
    inputRef.current.value = "";
  };

  return (
    <section className="flex items-center justify-center pt-41 px-4">
      <div className="text-center max-w-3xl w-full">
        {/* Badge */}
        <div className="inline-flex items-center justify-center gap-3 px-6 py-1.5 mb-6 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p className="font-medium">New: AI feature integrated</p>
          <Sparkles className="h-4 w-4 text-primary animate-pulse" />
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold sm:leading-[1.2] text-gray-800">
          Your own <span className="text-primary">blogging</span>{" "}
          <br />
          platform.
        </h1>

        {/* Subtext */}
        <p className="my-6 sm:my-8 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>

        {/* Search form */}
        <form
          onSubmit={submitHandler}
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded-lg overflow-hidden"
        >
          <input
            placeholder="Search for blogs"
            required
            ref={inputRef}
            className="w-full pl-4 outline-none"
            type="text"
          />
          <button
            type="submit"
            className="bg-primary text-white px-8 py-2 m-1 rounded-lg hover:scale-105 transition-all cursor-pointer"
          >
            Search
          </button>
        </form>

        {input && (
          <div className="mt-2">
            <button
              onClick={onClear}
              className="bg-primary text-white text-sm px-6 py-2 m-1 rounded-lg hover:scale-105 transition-all cursor-pointer"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Header;
