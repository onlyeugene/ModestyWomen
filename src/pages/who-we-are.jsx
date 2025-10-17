import React from "react";
import Container from "../components/container";
import { assets } from "../assets";
import { FaRegCheckCircle } from "react-icons/fa";

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
    <main className="lg:py-10 py-4" id="about">
      <Container>
        <div className="flex lg:flex-row flex-col lg:items-center gap-8">
          <>
            <img src={assets.woman} alt="" />
          </>
          <div>
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
              {actions.map((item) => (
                <div key={item.id}>
                  <span className="flex items-center gap-2 lg:text-lg text-[13px] my-1 text-[#5A5A5A]">
                    <FaRegCheckCircle color="#001D0D" />
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default WhoWeAre;
