/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../components/container";
import { goals } from "../assets";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="lg:my-10 my-4"
      id="campaigns"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="font-bold lg:text-[50px] text-[30px]">What we do</h1>
          <p className="font-medium lg:text-lg text-base max-w-2xl text-[#5A5A5A] text-center">
            Our initiatives are centered on the belief that when women thrive,
            societies prosper, every initiative we run is a step toward building
            stronger women, stronger families, and a stronger Nigeria.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 ld:my-10 my-5">
          {goals.map((goal, index) => (
            <motion.div
              key={goal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
            >
              <img src={goal.image} alt={goal.title} className="w-full" />

              <div>
                <h2 className=" font-extrabold lg:text-[32px] text-lg mt-4">
                  {goal.title}
                </h2>
                <p className="font-medium lg:text-lg text-base text-[#5A5A5A]">
                  {goal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </motion.main>
  );
};

export default WhatWeDo;
