import React from "react";

const BlogHeroSection = () => {
    return (
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Insights & Stories from Behind the Lens
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore the art of photography, event coverage tips, gear recommendations, and real experiences from our talented photographers.
          </p>
          <a
            href="#blogs"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Browse Latest Blogs
          </a>
        </div>
      </section>
    );
  };
  
  export default BlogHeroSection;
  