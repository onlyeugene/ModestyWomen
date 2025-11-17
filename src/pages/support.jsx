/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Container from "../components/container";
import { assets } from "../assets";
import { FaCopy, FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

const Support = () => {
  const [copied, setCopied] = useState(false);
  const accountNumber = "0005075659";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      id="donations"
      className="py-10"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex lg:flex-row flex-col lg:gap-20 gap-10 my-10 bg-[#E3F8F0] p-5 lg:p-20 rounded-lg lg:items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={assets.support} alt="images of any women" />
          </motion.div>

          <motion.div
            // initial={{ opacity: 0, x: 50 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // viewport={{ once: true, amount: 0.5 }}
            // transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h1 className="font-bold lg:text-[50px] text-[30px]">
                Suport our mission
              </h1>
              <p className="font-medium text-[#5A5A5A] lg:text-lg text-base">
                Your support helps us train more women, fund more small
                businesses, and reach more communities in need. Together, we can
                create lasting change and open doors of opportunity for
                thousands of women across Nigeria.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <p className="lg:text-2xl text-sm font-bold ">
                    Account Number: {accountNumber}
                  </p>
                  <button
                    onClick={copyToClipboard}
                    className="p-1 lg:p-2 hover:bg-gray-100 rounded-full transition-colors"
                    title={copied ? "Copied!" : "Copy account number"}
                  >
                    {copied ? (
                      <FaCheck className="text-green-600 lg:text-[20px] text-[16px]" />
                    ) : (
                      <FaCopy className="text-gray-600 lg:text-[20px] text-[16px]" />
                    )}
                  </button>
                </div>
                <span className="lg:text-2xl text-sm font-bold ">
                  {" "}
                  Stanbic IBTC Bank
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-medium text-lg text-[#5A5A5A]"
              >
                Thank you for your Support!
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </motion.main>
  );
};

export default Support;
