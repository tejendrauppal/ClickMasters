import React from "react";

const CallToActionContributor = () => {
    return (
      <section className="bg-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Have a Story or Tips to Share?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Join our community of contributors and inspire thousands of photography enthusiasts. Share your knowledge, experiences, and unique perspectives.
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
          >
            Become a Contributor
          </a>
        </div>
      </section>
    );
  };
  
  export default CallToActionContributor;
  