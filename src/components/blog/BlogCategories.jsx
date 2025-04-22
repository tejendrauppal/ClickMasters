import React from "react";

const categories = [
    { name: "All", count: 18 },
    { name: "Event Photography", count: 7 },
    { name: "Portraits", count: 3 },
    { name: "Gear Guides", count: 4 },
    { name: "Tips & Tricks", count: 2 },
    { name: "Behind the Scenes", count: 2 },
  ];
  
  const BlogCategories = () => {
    return (
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, idx) => (
              <button
                key={idx}
                className="bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full hover:bg-indigo-200 transition"
              >
                {category.name} <span className="text-sm text-gray-500 ml-1">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogCategories;
  