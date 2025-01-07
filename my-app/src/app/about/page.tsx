import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="lg:text-4xl text-2xl font-bold text-center text-blue-900 lg:mb-8 mb-4">
          About AI Innovative Cube
        </h1>

        <p className="text-lg text-gray-700 mb-6">
          <strong>AI Innovative Cube</strong> is a cutting-edge platform dedicated to exploring the world of Artificial Intelligence (AI) and its transformative impact across industries. From healthcare and finance to transportation and education, AI Innovative Cube serves as a hub for enthusiasts, professionals, and researchers to discover the latest trends, insights, and advancements in AI technology.
        </p>

        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-800">Our Mission</h2>
          <p className="text-gray-700 mt-2">
            At AI Innovative Cube, our mission is to empower individuals and organizations by sharing knowledge, fostering innovation, and driving awareness about the potential of AI to reshape our future. We aim to simplify complex AI concepts and make them accessible to everyone.
          </p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-800">What We Offer</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li><strong>Insightful Blogs:</strong> Dive into thoughtfully written articles that explore AI trends, breakthroughs, and applications in various sectors.</li>
            <li><strong>Resources for Learning:</strong> Access resources designed for beginners and professionals to deepen their understanding of AI and its applications.</li>
            <li><strong>Community Engagement:</strong> Connect with a global community of AI enthusiasts and innovators to share ideas, discuss challenges, and collaborate on projects.</li>
            <li><strong>Practical Applications:</strong> Stay updated on how AI is being practically implemented in solving real-world problems.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-800">Why Choose Us?</h2>
          <p className="text-gray-700 mt-2">
            <strong>Expert Insights:</strong> Get information curated by AI experts and enthusiasts passionate about the technology.  
            <br />
            <strong>Up-to-Date Content:</strong> Stay ahead with the latest trends and news in the ever-evolving AI landscape.  
            <br />
            <strong>User-Friendly Design:</strong> Our platform ensures easy navigation and a seamless user experience.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-800">Vision for the Future</h2>
          <p className="text-gray-700 mt-2">
            AI Innovative Cube envisions becoming a global leader in AI knowledge-sharing and innovation. By bridging the gap between technology and humanity, we aspire to create a world where AI empowers individuals and transforms societies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
