import React from "react";

const SubscribeSection = () => {
    return (
      <section className="bg-indigo-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="mb-6 text-lg">
            Subscribe to receive the latest blog posts, event highlights, and photography tips directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-5 py-3 rounded-md text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default SubscribeSection;
  