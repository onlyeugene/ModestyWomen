/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "../../components/container";
import { BiLoader, BiCalendar, BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";

// Static, dignified header image for all blog posts
const HEADER_IMAGE = "https://via.placeholder.com/1920x1080";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/${id}`;
    const fetchBlog = async () => {
      try {
        const response = await axios.get(url);
        setBlog(response.data);
      } catch (err) {
        setError("This story is currently unavailable.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Static Professional Hero */}
      <header className="relative h-[520px] md:h-[620px] overflow-hidden">
        <img
          src={HEADER_IMAGE}
          alt="Empowering communities through compassion and action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute bottom-0 left-0 right-0 text-white px-6 pb-16">
          <Container>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              <span className="inline-block px-4 py-2 bg-teal-700/90 text-sm font-medium tracking-wider uppercase mb-4 md:mb-6">
                Impact Story
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {loading ? "Loading..." : blog?.title || "Story Not Found"}
              </h1>

              {blog?.created_at && (
                <p className="mt-4 md:mt-6 text-lg opacity-90 flex items-center gap-2">
                  <BiCalendar className="text-xl" />
                  {formatDate(blog.created_at)}
                </p>
              )}
            </motion.div>
          </Container>
        </div>
      </header>

      <Container className="py-16 lg:py-24">
        {/* Loading */}
        {loading && (
          <div className="bg-white rounded-2xl shadow-lg p-16 text-center">
            <BiLoader className="mx-auto animate-spin text-5xl text-teal-600 mb-4" />
            <p className="text-gray-600 text-lg">Loading story...</p>
          </div>
        )}

        {/* Error / Not Found */}
        {(error || (!loading && !blog)) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-lg p-16 text-center max-w-2xl mx-auto"
          >
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              {error || "Story Not Available"}
            </h3>
            <p className="text-gray-600 mb-8">
              This post may have been removed or is temporarily unavailable.
            </p>
            <button
              onClick={() => navigate("/blogs")}
              className="inline-flex items-center gap-3 px-8 py-4 bg-teal-700 text-white font-medium rounded-xl hover:bg-teal-800 transition"
            >
              <BiArrowBack /> Back to Stories
            </button>
          </motion.div>
        )}

        {/* Blog Content — Clean, flowing, professional */}
        {!loading && blog && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            {/* Optional: Show blog-specific image below header if exists */}
            {blog.image_url && (
              <div className="px-4 md:px-8 pt-4 md:pt-8">
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
                />
              </div>
            )}

            <div className="px-4 lg:px-20 py-8 lg:py-16 prose prose-lg max-w-none">
              <div className="text-gray-700 leading-relaxed text-lg space-y-6 whitespace-pre-line">
                {blog.content}
              </div>
            </div>

            {/* Subtle CTA Footer */}
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 px-4 md:px-8 lg:px-20 py-12 lg:py-16 text-center border-t border-gray-200">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-teal-900 mb-4">
                Your Support Creates More Stories Like This
              </h3>
              <p className="text-gray-700 mb-8 md:mb-10 max-w-2xl mx-auto">
                Every contribution helps us reach more lives and build stronger
                communities.
              </p>
              {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button
                  onClick={() => navigate("/donate")}
                  className="px-10 py-4 bg-teal-700 text-white font-semibold rounded-xl hover:bg-teal-800 transition shadow-lg"
                >
                  Donate Today
                </button>
                <button
                  onClick={() => navigate("/contact")}
                  className="px-10 py-4 border-2 border-teal-700 text-teal-700 font-semibold rounded-xl hover:bg-teal-50 transition"
                >
                  Get Involved
                </button>
              </div> */}
            </div>
          </motion.article>
        )}

        {/* Back Link */}
        {!loading && blog && (
          <div className="text-center mt-16">
            <button
              onClick={() => navigate("/blogs")}
              className="inline-flex items-center gap-3 text-teal-700 font-medium hover:text-teal-800 transition"
            >
              <BiArrowBack className="text-xl" />
              Back to All Stories
            </button>
          </div>
        )}
      </Container>
    </main>
  );
};

export default BlogDetail;
