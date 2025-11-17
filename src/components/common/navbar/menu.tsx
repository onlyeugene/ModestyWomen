import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="md:block hidden">
      <ul className="flex text-base font-medium space-x-8">
        <a
          href="#about"
          onClick={(e) => handleScroll(e, "about")}
          className="hover:text-green-600 transition-colors"
        >
          About
        </a>
        <a
          href="#donations"
          onClick={(e) => handleScroll(e, "donations")}
          className="hover:text-green-600 transition-colors"
        >
          Donations
        </a>
        <Link to="/blogs" className="hover:text-green-600 transition-colors">
          Blogs
        </Link>
        <a
          href="#campaigns"
          onClick={(e) => handleScroll(e, "campaigns")}
          className="hover:text-green-600 transition-colors"
        >
          Campaigns
        </a>
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="hover:text-green-600 transition-colors"
        >
          Contact us
        </a>
      </ul>
    </nav>
  );
};

export default Menu;
