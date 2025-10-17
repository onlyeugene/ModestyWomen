import React from "react";
import Container from "../components/container";
import { goals } from "../assets";

const WhatWeDo = () => {
  return (
    <main className="lg:my-10 my-4" id="campaigns">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold lg:text-[50px] text-[30px]">What we do</h1>
          <p className="font-medium lg:text-lg text-base max-w-2xl text-[#5A5A5A] text-center">
            Our initiatives are centered on the belief that when women thrive,
            societies prosper, every initiative we run is a step toward building
            stronger women, stronger families, and a stronger Nigeria.
          </p>
        </div>
        {/* <div className=""> */}

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-5 ld:my-10 my-5">
          {goals.map((goal) => (
            <div key={goal.id}>
              <img src={goal.image} alt={goal.title} className="w-full" />

              <div>
                <h2 className=" font-extrabold lg:text-[32px] text-lg mt-4">
                  {goal.title}
                </h2>
                <p className="font-medium lg:text-lg text-base text-[#5A5A5A]">
                  {goal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default WhatWeDo;
