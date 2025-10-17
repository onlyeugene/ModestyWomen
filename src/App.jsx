import "./App.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import Contact from "./pages/contact";
import Empowering from "./pages/empowering";
import Founder from "./pages/founder";
import Support from "./pages/support";
import WhatWeDo from "./pages/what-we-do";
import WhoWeAre from "./pages/who-we-are";

function App() {
  return (
    <>
      <Navbar />
      <Empowering />
      <WhoWeAre />
      <WhatWeDo />
      <Founder />
      <Support />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
