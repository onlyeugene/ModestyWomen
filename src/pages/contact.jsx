/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Container from "../components/container";
import Button from "../components/button";
import { assets } from "../assets";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          setFormData({ fullName: "", email: "", message: "" });
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="py-10"
      id="contact"
    >
      <Container>
        <div className="flex lg:flex-row flex-col-reverse lg:items-center gap-8 ">
          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#E3F8F0] lg:p-10 p-5 space-y-4 lg:w-1/2 w-full"
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullName"
                className="lg:text-xl text-md font-bold "
              >
                Fullname
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter fullname"
                required
                className="border p-2 rounded-md border-gray-300 bg-white text-gray-800 font-medium outline-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="lg:text-xl text-md font-bold ">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                required
                className="border p-2 rounded-md border-gray-300 bg-white text-gray-800 font-medium outline-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="lg:text-xl text-md font-bold "
              >
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="border p-2 rounded-md border-gray-300 bg-white text-gray-800 font-medium outline-gray-400"
              />
            </div>
            <Button
              type="submit"
              size="md"
              text={loading ? "Sending..." : "Send message"}
              disabled={loading}
              className="text-white border px-8 bg-[#019141] rounded-md lg:text-lg text-sm mt-8"
            />
            {status && <p className="mt-4 text-sm font-medium">{status}</p>}
          </motion.form>

          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.5 }}
            // transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 w-full "
          >
            <h1 className="font-bold lg:text-[50px] text-[30px]">
              Get in touch with us
            </h1>
            <p className="font-medium text-[#5A5A5A] lg:text-lg text-base lg:mb-5">
              Reach out to us if you have any suggestions, complains or means of
              support, send us a message
            </p>
            <img
              src={assets.customer}
              alt="image of a customer rep"
              className="lg:block hidden"
            />
          </motion.div>
        </div>
      </Container>
    </motion.main>
  );
};

export default Contact;
