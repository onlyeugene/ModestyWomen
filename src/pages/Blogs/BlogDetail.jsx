/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "../../components/container";
import { BiLoader, BiCalendar, BiArrowBack, BiUser } from "react-icons/bi";
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
    const url = `${import.meta.env.VITE_API_URL}/posts/${id}`;
    const fetchBlog = async () => {
      try {
        const response = await axios.get(url);
        setBlog(response.data);
      } catch (err) {
        setError("This story is currently unavailable.");
        setBlog(null); // Ensure blog is null on error
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  const formatRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    const intervals = {
      year: 31536000,
      month: 2592000,
      week: 604800,
      day: 86400,
      hour: 3600,
      minute: 60,
    };

    for (const [unit, seconds] of Object.entries(intervals)) {
      const interval = Math.floor(diffInSeconds / seconds);
      if (interval >= 1) {
        return `${interval} ${unit}${interval > 1 ? "s" : ""} ago`;
      }
    }
    return "just now";
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
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                {loading ? "Loading..." : blog?.title || "Story Not Found"}
              </h1>

              {blog?.subheading && (
                <h2 className="text-xl md:text-2xl lg:text-3xl font-light opacity-90 mb-6">
                  {blog.subheading}
                </h2>
              )}

              {blog?.created_at && (
                <div className="flex flex-wrap items-center gap-6 text-lg opacity-90">
                  <div className="flex items-center gap-2">
                    <div className="bg-white/20 p-2 rounded-full">
                      <BiUser className="text-xl" />
                    </div>
                    <span>
                      Published {formatRelativeTime(blog.created_at)} by{" "}
                      <span className="font-semibold">
                        {blog.author === "Admin" ? "Editor" : blog.author || "Editor"}
                      </span>
                    </span>
                  </div>
                </div>
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
              {(() => {
                // Normalize video_url to an array
                const videos = Array.isArray(blog.video_url)
                  ? blog.video_url
                  : blog.video_url
                    ? [blog.video_url]
                    : [];

                if (videos.length === 0) {
                  return (
                    <div className="text-gray-700 leading-relaxed text-lg space-y-6 whitespace-pre-line">
                      {blog.content}
                    </div>
                  );
                }

                const middleIndex = Math.floor(blog.content.length / 2);
                const splitIndex = blog.content.indexOf('\n', middleIndex);

                // Content rendering helper
                const renderContent = (text) => (
                  <div className="text-gray-700 leading-relaxed text-lg space-y-6 whitespace-pre-line">
                    {text}
                  </div>
                );

                // Video rendering helper
                const renderVideo = (url, index) => (
                  <div key={index} className="py-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {index === 0 ? "Watch the Story" : "More from this Story"}
                    </h3>
                    <div className="relative pt-[56.25%] bg-black rounded-xl overflow-hidden shadow-lg">
                      <video
                        src={url}
                        controls
                        className="absolute inset-0 w-full h-full"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                );

                const firstVideo = videos[0];
                const remainingVideos = videos.slice(1);

                if (splitIndex === -1) {
                  return (
                    <>
                      {renderContent(blog.content)}
                      {renderVideo(firstVideo, 0)}
                      {remainingVideos.map((vid, idx) => renderVideo(vid, idx + 1))}
                    </>
                  );
                }

                const firstHalf = blog.content.slice(0, splitIndex);
                const secondHalf = blog.content.slice(splitIndex);

                return (
                  <>
                    {renderContent(firstHalf)}
                    {renderVideo(firstVideo, 0)}
                    {renderContent(secondHalf)}
                    {remainingVideos.map((vid, idx) => renderVideo(vid, idx + 1))}
                  </>
                );
              })()}
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
