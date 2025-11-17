import React from "react";
import { assets } from "../../../assets";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex gap-2 items-center cursor-pointer">
      <img src={assets.logo} alt="logo" className="w-10 lg:w-20" />
      <div className="flex flex-col leading-tight items-center">
        <h2 className="lg:text-sm text-xs text-green-600">Woman & Modesty</h2>
        <span className="lg:text-xs text-[10px]">GLOBAL INITIATIVE</span>
        <p className="text-[10px]">Rewarding Womanhood</p>
      </div>
    </Link>
  );
};

export default Logo;
