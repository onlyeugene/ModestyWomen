import React from "react";
import Logo from "./logo";
import Container from "../../container";
import Menu from "./menu";

const Navbar = () => {
  return (
    <div className="w-full fixed bg-white shadow-sm z-50 border-b border-gray-200">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <Menu />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
