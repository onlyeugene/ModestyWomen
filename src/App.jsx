import "./App.css";
import Footer from "./components/common/footer";
import Navbar from "./components/common/navbar";
import BlogDetail from "./pages/Blogs/BlogDetail";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import BlogPage from "./pages/Blogs/BlogPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        {/* You can add more routes here for other pages if needed */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
