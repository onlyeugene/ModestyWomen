import React from "react";
import Logo from "../navbar/logo";
import Container from "../../container";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center border-t border-gray-200 pt-10">
      <Container>
        <div className="space-y-4">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h2 className="font-medium lg:text-lg text-base">
            Committed to Empowering Women <br />Through Education, Growth, and <br />
            Opportunity
          </h2>
          <span className="font-semibold">Copyright &copy; 2025 Modesty women</span>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
