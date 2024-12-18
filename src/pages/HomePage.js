import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-gray-800">
<section className="flex flex-col items-center justify-center text-center py-10 px-4 sm:py-20 sm:px-6">
  <h1 className="text-3xl sm:text-5xl font-bold text-black mb-4">
    Welcome to Codingal!
  </h1>
  <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-sm sm:max-w-2xl">
    Unlock your full coding potential with fun, interactive lessons and engaging
    activities. Explore your coding journey now!
  </p>
  <Link
    to="/posts"
    className="bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
  >
    Explore Posts
  </Link>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10 py-8 sm:py-12">
  <div className="p-4 sm:p-6 bg-blue-100 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
    <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-gray-800">
      Interactive Lessons
    </h3>
    <p className="text-gray-600 text-sm sm:text-base">
      Learn with hands-on coding challenges designed for every level.
    </p>
  </div>
  <div className="p-4 sm:p-6 bg-blue-100 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
    <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-gray-800">
      Real Projects
    </h3>
    <p className="text-gray-600 text-sm sm:text-base">
      Build real-world projects to showcase your coding skills.
    </p>
  </div>
  <div className="p-4 sm:p-6 bg-blue-100 shadow-lg rounded-lg text-center hover:shadow-2xl transition duration-300">
    <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-gray-800">
      Join the Community
    </h3>
    <p className="text-gray-600 text-sm sm:text-base">
      Collaborate with other learners and grow together.
    </p>
  </div>
</section>
      <section className="text-center py-12 bg-[#BCCCDC] text-white">
        <h2 className="text-3xl font-bold mb-4">Get Started with Codingal</h2>
        <p className="text-lg mb-6">Join thousands of students on their coding journey.</p>
        <Link
          to="/posts"
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
        >
          Start Learning
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
