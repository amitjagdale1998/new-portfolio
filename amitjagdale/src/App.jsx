import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./component/Sidebar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import { useState } from "react";
import Portfolios from "./component/pages/Portfolios";
import Blogs from "./component/pages/Blogs";
import Resume from "./component/pages/Resume";
import Contact from "./component/pages/Contact";

function App() {
  const [close, setClose] = useState(true);
  function handleSidebar() {
    setClose(false);
  }
  return (
    <BrowserRouter>
      <div className="flex" onClick={handleSidebar}>
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar close={close} />
        </div>

        {/* Main Content */}
        <div className="main-content flex-grow ml-[60px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
