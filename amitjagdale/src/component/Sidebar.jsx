import { Button, Flex } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use 'react-router-dom' instead of 'react-router'
import Home from "./pages/Home";
import About from "./pages/About";
import "./Sidebar.css";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'; // Ant Design icons for collapsible button

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true); // State to handle collapse/expand

  const toggleCollapse = () => {
    setCollapsed(prevCollapsed => !prevCollapsed); // Toggle state
  };

  return (
    <div className={`sidebar-container shadow-class  ${collapsed ? 'collapsed' : 'expanded'}`} >
      <div className="flex justify-between items-center p-5">
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={toggleCollapse}
          style={{ fontSize: '18px' }}
        />
        {!collapsed && (
          <img
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600"
            className="rounded-full h-[60px] w-[60px]"
            alt="Profile"
          />
        )}
      </div>

      {!collapsed && <hr className="text-blue-300 bg-white w-full h-[2px]" />}

      <div className={`sidebar-links ${collapsed ? 'hidden' : 'block'}`}>
        <Flex
          gap="small"
          className="flex flex-col justify-center"
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            borderRadius: "0px",
          }}
        >
          <Button
            type="primary"
            className="w-[95%]"
            style={{ height: "40px" }}
          >
            <Link to="/home" exact component={<Home />}>
              Home
            </Link>
          </Button>
          <Button type="primary" className="w-[95%]">
            <Link to="/about" exact component={<About />}>
             About
            </Link>
          </Button>
          <Button type="primary" className="w-[95%]">
          <Link to="/portfolios" exact component={<About />}>
             Portfolios
            </Link>
          </Button>
          <Button type="primary" className="w-[95%]">
          <Link to="/blogs" exact component={<About />}>
             Blogs
            </Link>
          </Button>
          <Button type="primary" className="w-[95%]">
          <Link to="/contact" exact component={<About />}>
             Contact
            </Link>
          </Button>
        </Flex>
      </div>
    </div>
  );
}
