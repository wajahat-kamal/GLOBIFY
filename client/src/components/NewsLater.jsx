import React from "react";

function NewsLater() {
  return (
    <section className="w-full py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto text-center bg-secondary shadow-md rounded-2xl p-8 md:p-12">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          Never Miss a Blog!
        </h1>
        <p className="text-gray-600 text-sm md:text-base mb-6">
        Subscribe to get the latest blog, new tech, and exclusive news.
        </p>

        {/* Form */}
        <form className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-4 py-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            Subscribe
          </button>
        </form>

        {/* Small Note */}
        <p className="mt-4 text-xs text-gray-500">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}

export default NewsLater;
