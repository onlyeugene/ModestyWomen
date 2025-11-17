/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../components/container";
import { assets } from "../assets";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const WhoWeAre = () => {
  const actions = [
    {
      id: 1,
      title: "Education & Mentorship",
    },
    {
      id: 2,
      title: "Community Outreach",
    },
    {
      id: 3,
      title: "Skill Development & Training",
    },
    {
      id: 4,
      title: "Financial Empowerment",
    },
  ];
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="lg:py-10 py-4"
      id="about"
    >
      <Container>
        <div className="flex lg:flex-row flex-col lg:items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={assets.woman} alt="" />
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.5 }}
            // transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-bold lg:text-[50px] text-[30px]">Who we are</h1>
            <div className="space-y-4">
              <p className="font-medium text-[#5A5A5A] lg:text-lg text-base">
                We’re building a future where every woman has the opportunity to
                thrive <br /> through education, empowerment, and community
                regardless of background <br /> or circumstance
              </p>
              <p className="font-medium text-[#5A5A5A] lg:text-lg text-base">
                Through education, entrepreneurship, mentorship, and community
                development, we create platforms that empower women to unlock
                their potential, become financially independent, and contribute
                meaningfully to society.
              </p>
            </div>

            <div className="grid grid-cols-2 mt-5">
              {actions.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <span className="flex items-center gap-2 lg:text-lg text-[13px] my-1 text-[#5A5A5A]">
                    <FaRegCheckCircle color="#001D0D" />
                    {item.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.main>
  );
};

export default WhoWeAre;
