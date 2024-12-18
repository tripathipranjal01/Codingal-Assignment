import React, { useState, useEffect } from "react";
import axios from "axios";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`
      );
      setPosts(response.data);
      setHasMore(response.data.length === 10);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6">
      <h1 className="text-3xl font-bold text-[#9AA6B2] text-center mb-6">
        Posts
      </h1>

      {loading && (
        <div className="text-center text-[#9AA6B2]">
          <p>Loading...</p>
        </div>
      )}
      {!loading && posts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative w-full h-48 [perspective:1000px]"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center border border-gray-200 [backface-visibility:hidden]">
                  <h3 className="text-xl font-bold text-gray-800 text-center p-4">
                    {post.title}
                  </h3>
                </div>

                <div className="absolute w-full h-full bg-[#D9EAFD] rounded-lg shadow-lg flex items-center justify-center border border-gray-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <p className="text-gray-800 text-center p-4">{post.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center justify-center mt-6">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded ${
            currentPage === 1
              ? "bg-[#BCCCCD] text-gray-600 cursor-not-allowed"
              : "bg-[#9AA6B2] text-white hover:bg-[#BCCCCD]"
          }`}
        >
          Previous
        </button>
        <span className="mx-6 text-lg font-semibold text-[#9AA6B2]">
          Page {currentPage}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={!hasMore}
          className={`px-4 py-2 rounded ${
            !hasMore
              ? "bg-[#BCCCCD] text-gray-600 cursor-not-allowed"
              : "bg-[#9AA6B2] text-white hover:bg-[#BCCCCD]"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsPage;
