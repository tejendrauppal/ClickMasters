import React from "react";

const authors = [
    {
      name: "Rohan Singh",
      role: "Wedding Photographer & Storyteller",
      image: "/authors/rohan.jpg",
      bio: "Rohan has covered over 150 weddings across India. His storytelling style blends candid emotions with creative framing.",
    },
    {
      name: "Sanya Mehta",
      role: "Portrait & Lifestyle Photographer",
      image: "/authors/sanya.jpg",
      bio: "With over 6 years in portrait photography, Sanya shares tips, lighting hacks, and behind-the-scenes experiences in our blog.",
    },
    {
      name: "Arjun Patel",
      role: "Tech & Gear Expert",
      image: "/authors/arjun.jpg",
      bio: "Arjun loves cameras and gear. He breaks down complex specs into simple guides for photographers at every level.",
    },
  ];
  
  const AuthorSpotlight = () => {
    return (
      <section className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Contributors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {authors.map((author, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-800">{author.name}</h3>
                <p className="text-sm text-indigo-600 mb-3">{author.role}</p>
                <p className="text-gray-600 text-sm">{author.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AuthorSpotlight;
  