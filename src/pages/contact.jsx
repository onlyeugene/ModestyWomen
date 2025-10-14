import React from "react";
import Container from "../components/container";
import Button from "../components/button";
import { assets } from "../assets";

const Contact = () => {
  return (
    <main className="py-10">
      <Container>
        <div className="flex lg:flex-row flex-col-reverse lg:items-center gap-8 ">
          <form action="" className="bg-[#E3F8F0] lg:p-10 p-5 space-y-4 lg:w-1/2 w-full">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullName"
                className="lg:text-xl text-md font-bold "
              >
                Fullname
              </label>
              <input
                type="text"
                placeholder="Enter fullname"
                className="border p-2 rounded-md border-gray-300 bg-white text-gray-800 font-medium outline-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="lg:text-xl text-md font-bold "
              >
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter email"
                className="border p-2 rounded-md border-gray-300 bg-white text-gray-800 font-medium outline-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="fullName"
                className="lg:text-xl text-md font-bold "
              >
                Message
              </label>
              <textarea
                type="text"
                rows="5"
                className="border p-2 rounded-md border-gray-300 bg-white text-gray-800 font-medium outline-gray-400"
              />
            </div>
            <Button
              type="submit"
              size="md"
              text="Send message"
              className="text-white border px-8 bg-[#019141] rounded-md lg:text-lg text-sm mt-8"
            />
          </form>

          <div className="lg:w-1/2 w-full ">
            <h1 className="font-bold lg:text-[50px] text-[30px]">
              Get in touch with us
            </h1>
            <p className="font-medium text-[#5A5A5A] lg:text-lg text-base lg:mb-5">
              Reach out to us if you have any suggestions, complains or means of
              support, send us a message
            </p>
            <img src={assets.customer} alt="image of a customer rep" className="lg:block hidden"/>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Contact;
