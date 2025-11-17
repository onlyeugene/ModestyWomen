/* eslint-disable no-undef */
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Container from "../../components/container";
import { BiLoader } from "react-icons/bi";
import Button from "../../components/button";
import { useNavigate } from "react-router-dom";
import { assets } from "../../../src/assets"; // Import assets

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async () => {
    const url = `${import.meta.env.VITE_API_URL}/posts`;
    try {
      setLoading(true);
      const response = await axios.get(url);
      if (Array.isArray(response.data)) {
        setBlogs(response.data);
      } else if (response.data && response.data.message === "No posts found") {
        setBlogs([]);
        setError(response.data.message);
      } else {
        setBlogs([]); // Ensure blogs is an empty array if response.data is not an array
        setError("Received invalid data from the server.");
      }

      console.log(response.data);
    } catch (err) {
      setError(response?.data?.message || err.message);
      setBlogs([]); // Ensure blogs is an empty array on error
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  const sliicedBlog = blogs.slice(0, 3);
  const navigate = useNavigate();

  return (
    <main className="bg-[#E3F8F0] py-8 lg:py-10 my-8 lg:my-10">
      <Container>
        <div className="flex lg:flex-row flex-col lg:items-center lg:gap-20 gap-8 justify-center text-center">
          <div>
            <h1 className="font-bold text-3xl lg:text-[50px]">
              Our Latest Insights
            </h1>
            <p className="lg:text-lg text-sm mt-2">
              Stay informed about our NGO's initiatives, impact, and stories
              that matter.
            </p>
          </div>
        </div>

        <>
          {loading && blogs.length === 0 ? (
            <div className="flex justify-center">
              <BiLoader className="animate-spin text-4xl text-center mt-10" />
            </div>
          ) : (
            <div>
              {error && <div className="text-center mt-10">Error: {error}</div>}
              {!loading && !error && blogs.length === 0 && (
                <div className="text-center py-24 px-6">
                  <div className="text-7xl md:text-8xl mb-8 text-gray-400">
                    📖
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    No Stories to Share Yet
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto mb-8">
                    We're currently crafting new insights and stories. Please
                    check back later for updates!
                  </p>
                  <button
                    onClick={fetchBlogs}
                    className="inline-flex items-center px-8 py-4 bg-[#019141]  text-white font-semibold rounded-xl hover:bg-emerald-700 transition shadow-lg transform hover:-translate-y-1"
                  >
                    Refresh Stories
                  </button>
                </div>
              )}
              {!loading && !error && blogs.length > 0 && (
                <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                  {sliicedBlog.map((blog) => {
                    const truncateText = (text, maxLength) => {
                      if (!text) return "";
                      if (text.length <= maxLength) return text;
                      return (
                        text.slice(0, text.lastIndexOf(" ", maxLength)) + "..."
                      );
                    };

                    return (
                      <div
                        key={blog.id}
                        className="bg-white p-4 rounded-lg shadow-md"
                      >
                        {blog.image_url ? (
                          <img
                            src={blog.image_url}
                            alt={blog.title}
                            className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                          />
                        ) : (
                          <img
                            src={assets.woman}
                            alt="Fallback Image"
                            className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
                          />
                        )}
                        <h2 className="font-bold text-lg sm:text-xl mb-2">
                          {blog.title}
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-base mb-4">
                          {truncateText(blog.content, 150)}
                        </p>
                        <a
                          href={`/blogs/${blog.id}`}
                          className="text-[#019141] hover:underline text-sm sm:text-base"
                        >
                          Read More
                        </a>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
          {/* {loading && <div>Loading...</div>}
           {error && <div>Error: {error}</div>}
           {!loading && !error && blogs.length === 0 && (
             <div>No blogs available.</div>
           )}
           {!loading && !error && blogs.length > 0 && (
             // This is where you would map through your blogs to display them
             <h1>{blogs[0].title}</h1>
           )} */}
        </>

        <div className="text-end mt-6 sm:mt-8">
          <Button
            className="mt-8 sm:mt-10 border bg-[#019141] text-sm lg:text-lg font-semibold text-white rounded-md cursor-pointer px-4 py-2 sm:px-6 sm:py-3"
            text="See more..."
            onClick={() => navigate("/blogs")}
          />
        </div>
      </Container>
    </main>
  );
};

export default HomeBlogs;
