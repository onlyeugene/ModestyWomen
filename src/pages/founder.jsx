/* eslint-disable no-unused-vars */
import React from "react";
import Container from "../components/container";
import { assets } from "../assets";
import { motion } from "framer-motion";

const Founder = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="bg-[#E3F8F0] lg:py-10 py-5"
    >
      <Container>
        <div className="flex lg:flex-row flex-col lg:items-center lg:gap-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={assets.founder} alt="iamge of founder" />
          </motion.div>

          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.5 }}
            // transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-bold lg:text-[50px] text-[30px]">
              Meet the founder
            </h1>
            <div className="space-y-4">
              <p className="font-medium text-[#5A5A5A] lg:text-lg text-base">
                Emelda Ahunna Osuji is the founder of Modesty Women Global
                Initiative, a Non-Governmental organization dedicated to
                promoting decency, advocating against girl-child abuse, and
                empowering women to reach their full potential.
              </p>
              <p className="font-medium text-[#5A5A5A] lg:text-lg text-base">
                Born and raised in Umuchu, Aguata Local Government Area of
                Anambra State, Nigeria. she has a passion for women’s growth and
                moral development inspired the creation of this initiative a
                platform that uplifts, educates, and protects women across
                communities.
              </p>
            </div>

            <div className="py-10 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex gap-6"
              >
                <a
                  href="https://wa.me/2349016423844"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 "
                >
                  <img src={assets.whatsapp} alt="" className="w-7 h-7" />
                  <p className="text-[#5A5A5A] lg:text-lg text-sm hover:text-green-600 transition-colors">
                    09016423844
                  </p>
                </a>
                <a
                  href="https://instagram.com/emeldaahunnaosuji"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 "
                >
                  <img src={assets.insta} alt="" className="w-7 h-7" />
                  <p className="text-[#5A5A5A] lg:text-lg text-sm hover:text-green-600 transition-colors">
                    @emeldaahunnaosuji
                  </p>
                </a>
              </motion.div>

              <motion.a
                href="mailto:imeldaosuji@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4 hover:text-green"
              >
                <img src={assets.mail} alt="" className="w-7 h-7" />
                <p className="text-[#5A5A5A] lg:text-lg text-sm hover:text-green-600 transition-colors">
                  imeldaosuji@gmail.com
                </p>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </Container>
    </motion.main>
  );
};

export default Founder;
