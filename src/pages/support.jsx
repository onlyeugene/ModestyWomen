import React, { useState } from "react";
import Container from "../components/container";
import { assets } from "../assets";
import { FaCopy, FaCheck } from "react-icons/fa";

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
    <main id="donations" className="py-10">
      <Container>
        <div className="flex lg:flex-row flex-col lg:gap-20 gap-10 my-10 bg-[#E3F8F0] p-5 lg:p-20 rounded-lg lg:items-center">
          <>
            <img src={assets.support} alt="images of any women" />
          </>

          <div>
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

              <div>
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
              </div>

              <p className="font-medium text-lg text-[#5A5A5A]">Thank you for your Support!</p>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Support;
