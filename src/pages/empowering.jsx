/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../components/container";
import Button from "../components/button";
import { assets } from "../assets";
import { motion } from "framer-motion";

const Empowering = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-[#E3F8F0] lg:pt-40 pt-24 pb-20"
    >
      <Container>
        <div className="flex lg:flex-row flex-col lg:items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-bold lg:text-[50px] text-[30px]">
              Empowering women,
              <br className="md:block hidden" /> Transforming communities
            </h1>
            <p className="font-medium text-[#5A5A5A] lg:text-lg text-base">
              When a woman grows, a community flourishes. We’re dedicated to
              creating spaces where women are supported, heard, and given the
              freedom to shape their own futures.
            </p>

            <motion.a
              href="#donations"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                text="Make Donations"
                className="mt-10 border bg-[#019141] lg:text-lg text-base font-semibold text-white rounded-md cursor-pointer"
                type="submit"
                size="md"
              />
            </motion.a>
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.5 }}
            // transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full flex justify-center lg:justify-start"
          >
            <img
              src={assets.seller}
              alt="image of a seller"
              className=" md:w-auto"
            />
          </motion.div>
        </div>
      </Container>
    </motion.main>
  );
};

export default Empowering;
