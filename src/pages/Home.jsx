import React from "react";
import Empowering from "../pages/empowering";
import Founder from "../pages/founder";
import Support from "../pages/support";
import WhatWeDo from "../pages/what-we-do";
import WhoWeAre from "../pages/who-we-are";
import Contact from "../pages/contact";
import HomeBlogs from "./Blogs/home-blogs";

const Home = () => {
  return (
    <>
      <Empowering />
      <WhoWeAre />
      <WhatWeDo />
      <HomeBlogs />
      <Founder />
      <Support />
      <Contact />
    </>
  );
};

export default Home;
