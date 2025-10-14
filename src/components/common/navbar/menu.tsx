import React from "react";

const Menu = () => {
  return (
    <nav className="md:block hidden">
      <ul className="flex text-base font-medium space-x-8">
        <li>About</li>
        <li>Donations</li>
        <li>Campaigns</li>
        <li>Contact us</li>
      </ul>
    </nav>
  );
};

export default Menu;
