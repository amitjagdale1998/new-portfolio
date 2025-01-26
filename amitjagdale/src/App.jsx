import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './component/Sidebar';
import Home from './component/pages/Home';
import About from './component/pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="main-content flex-grow">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/resume" element={<Resume />} />
            <Route path="/portfolios" element={<Portfolios />} />
            <Route path="/blogs" element={<Blogs />} /> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
