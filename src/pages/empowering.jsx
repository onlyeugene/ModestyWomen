import React from "react";
import Container from "../components/container";
import Button from "../components/button";
import { assets } from "../assets";

const Empowering = () => {
  return (
    <main className="bg-[#E3F8F0] lg:pt-40 pt-24 pb-20">
      <Container>
        <div className="flex lg:flex-row flex-col lg:items-center gap-8">
          <div>
            <h1 className="font-bold lg:text-[50px] text-[30px]">
              Empowering women,
              <br className="md:block hidden" /> Transforming communities
            </h1>
            <p className="font-medium text-[#5A5A5A] lg:text-lg text-base">
              When a woman grows, a community flourishes. We’re dedicated to
              creating spaces where women are supported, heard, and given the
              freedom to shape their own futures.
            </p>

            <a href="#donations">
              <Button
                text="Make Donations"
                className="mt-10 border bg-[#019141] lg:text-lg text-base font-semibold text-white rounded-md cursor-pointer"
                type="submit"
                size="md"
              />
            </a>
          </div>
          <>
            <img src={assets.seller} alt="image of a seller" />
          </>
        </div>
      </Container>
    </main>
  );
};

export default Empowering;
