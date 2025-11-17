import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { BiLoader } from "react-icons/bi";
import Container from "../../components/container";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Button from "../../components/button";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initialize useNavigate

  const fetchBlogs = async () => {
    const url = `${import.meta.env.VITE_API_URL}`;
    try {
      setLoading(true);
      const response = await axios.get(url);
      setBlogs(response.data);
    } catch (err) {
      setError("Failed to load blog posts. Please try again later.", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const truncateText = (text = "", maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, text.lastIndexOf(" ", maxLength)) + "...";
  };

  const featuredBlog = blogs[0] || null;
  const otherBlogs = blogs.slice(1);

  // Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="h-64 bg-gray-300"></div>
      <div className="p-8">
        <div className="h-8 bg-gray-300 rounded w-4/5 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-11/12 mb-6"></div>
        <div className="h-10 bg-gray-300 rounded-lg w-32"></div>
      </div>
    </div>
  );

  return (
    <main className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen py-10">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden bg-[#E3F8F0] text-gray-900 py-20 md:py-32"
      >
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
          >
            Our Latest Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 md:mt-6 text-base sm:text-xl md:text-2xl max-w-4xl mx-auto opacity-95 leading-relaxed font-light"
          >
            Stories of hope, change, and impact. Discover how we're transforming
            lives through compassion and action.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </motion.section>

      <Container className="py-12 md:py-20 px-4 sm:px-6">
        {/* Loading State */}
        {loading && blogs.length === 0 && (
          <div className="grid lg:grid-cols-2 gap-8">
            <SkeletonCard />
            <SkeletonCard />
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-red-600 text-2xl font-semibold">
              Failed to load blogs. {error}
            </div>
            <button
              onClick={fetchBlogs}
              className="mt-6 px-8 py-3 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition"
            >
              Retry
            </button>
          </motion.div>
        )}

        {/* No Blogs State */}
        {!loading && !error && blogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <div className="text-5xl md:text-6xl mb-6">📝</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              No articles yet
            </h3>
            <p className="text-base md:text-xl text-gray-600 max-w-xl mx-auto">
              We're working on bringing you inspiring stories. Check back soon!
            </p>
          </motion.div>
        )}

        {/* Content */}
        {!loading && !error && blogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Featured Blog */}
            {featuredBlog && (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-20 group"
              >
                <div className="grid lg:grid-cols-2 gap-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="relative overflow-hidden order-last lg:order-first">
                    <img
                      src={featuredBlog.image_url || "/api/placeholder/800/600"}
                      alt={featuredBlog.title}
                      className="w-full h-full min-h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-10 lg:p-16 flex flex-col justify-center">
                    <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full mb-6">
                      Featured Story
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                      {featuredBlog.title}
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                      {truncateText(featuredBlog.content, 280)}
                    </p>
                    <Link
                      to={`/blogs/${featuredBlog.id}`}
                      className="inline-flex items-center w-fit px-8 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Read the Full Story
                      <svg
                        className="ml-3 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Other Blogs Grid */}
            {otherBlogs.length > 0 && (
              <>
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                  More Stories
                </h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                  {otherBlogs.map((blog, index) => (
                    <motion.article
                      key={blog.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-2"
                    >
                      {blog.image_url ? (
                        <div className="relative overflow-hidden">
                          <img
                            src={blog.image_url}
                            alt={blog.title}
                            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      ) : (
                        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 h-56 flex items-center justify-center">
                          <span className="text-5xl">📄</span>
                        </div>
                      )}

                      <div className="p-7 flex flex-col">
                        <div className="flex-grow">
                          <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                            {truncateText(blog.content, 140)}
                          </p>
                        </div>
                        <div>
                          <Button
                            onClick={() => navigate(`/blogs/${blog.id}`)}
                            className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:focus:ring-offset-2 focus:ring-green-400 transition-colors duration-200"
                            text="Read More"
                          />
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </Container>
    </main>
  );
};

export default BlogPage;
