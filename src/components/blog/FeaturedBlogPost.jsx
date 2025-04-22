import React from "react";

const featuredPost = {
    title: "Top 10 Tips for Hiring the Perfect Photographer",
    excerpt:
      "Choosing the right photographer can make or break your event memories. Here are 10 proven tips to help you hire the perfect professional through our platform.",
    image: "/blog/featured.jpg",
    author: "Meera Kapoor",
    date: "April 12, 2025",
    slug: "hiring-perfect-photographer-tips",
  };
  
  const FeaturedBlogPost = () => {
    return (
      <section className="bg-white py-20" id="featured">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="rounded-lg shadow-md w-full object-cover h-80"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-indigo-600 mb-4">Featured Post</h2>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              {featuredPost.title}
            </h3>
            <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
            <p className="text-sm text-gray-500 mb-6">
              By {featuredPost.author} • {featuredPost.date}
            </p>
            <a
              href={`/blog/${featuredPost.slug}`}
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
            >
              Read Full Blog
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedBlogPost;
  