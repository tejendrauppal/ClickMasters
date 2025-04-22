import React from "react";

const posts = [
    {
      id: 1,
      title: "How to Plan a Destination Wedding Photoshoot",
      excerpt: "Planning a wedding away from home? Here’s how to make sure your photography is flawless and stress-free.",
      image: "/blog/post1.jpg",
      date: "April 5, 2025",
      slug: "destination-wedding-photoshoot",
    },
    {
      id: 2,
      title: "Portrait Photography: Tips from Top Creators",
      excerpt: "Get insights from professional portrait photographers about posing, lighting, and capturing personality.",
      image: "/blog/post2.jpg",
      date: "March 28, 2025",
      slug: "portrait-photography-tips",
    },
    {
      id: 3,
      title: "Why Candid Moments Matter More Than Posed Ones",
      excerpt: "Real emotions, real memories — here's why candid photography is becoming everyone's favorite style.",
      image: "/blog/post3.jpg",
      date: "March 15, 2025",
      slug: "candid-moments-photography",
    },
  ];
  
  const RecentBlogPosts = () => {
    return (
      <section className="bg-gray-50 py-20" id="blogs">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Recent Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-5">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="text-indigo-600 font-semibold hover:underline"
                  >
                    Read More →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default RecentBlogPosts;
  