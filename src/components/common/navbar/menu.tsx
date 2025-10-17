import React from "react";

const Menu = () => {
  return (
    <nav className="md:block hidden">
      <ul className="flex text-base font-medium space-x-8">
      <li className="hover:text-green-600 transition-colors">
                <a href="#about" >About</a>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <a href="#donations" >Donations</a>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <a href="#campaigns" >Campaigns</a>
              </li>
              <li className="hover:text-green-600 transition-colors">
                <a href="#contact" >Contact us</a>
              </li>
      </ul>
    </nav>
  );
};

export default Menu;
