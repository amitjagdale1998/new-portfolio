import { Button, Flex } from "antd";
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink
import Home from "./pages/Home";
import About from "./pages/About";
import "./Sidebar.css";
import { CloseOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import IconHome from "./icons/IconHome";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  return (
    <div
      className={`sidebar-container shadow-class ${
        collapsed ? "collapsed" : "expanded"
      }`}
    >
      {!collapsed && (
        <div className="flex justify-end" onClick={toggleCollapse}>
          <CloseOutlined className="close-icon px-5 cursor-pointer" />
        </div>
      )}
      <div className="flex justify-between items-center p-5">
        {collapsed && (
          <Button
            type="text"
            icon={<MenuUnfoldOutlined />}
            onClick={toggleCollapse}
            style={{ fontSize: "18px" }}
          />
        )}
        {!collapsed && (
          <img
            src="public/myimage.jpg"
            className="profile-image rounded-full h-[186px] w-[186px]"
            alt="Profile"
          />
        )}
      </div>

      {!collapsed && <hr className="deepseek-hr" />}

      <div className={`sidebar-links ${collapsed ? "hidden" : "block"}`}>
        <Flex
          gap="small"
          className="flex flex-col justify-center pt-4"
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            borderRadius: "0px",
            marginTop: "20px",
          }}
        >
          <div
            className="w-full text-center h-10 justify-center items-center my-auto align-middle rounded"
            onClick={toggleCollapse}
          >
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Home
            </NavLink>
          </div>
          <div
            className="w-[95%] text-center items-center"
            onClick={toggleCollapse}
          >
            {/* <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              About
            </NavLink> */}
          </div>
          <div
            className="w-[95%] text-center items-center"
            onClick={toggleCollapse}
          >
            {/* <NavLink
              to="/portfolios"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Portfolios
            </NavLink> */}
          </div>
          <div
            className="w-[95%] text-center items-center"
            onClick={toggleCollapse}
          >
            {/* <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Blogs
            </NavLink> */}
          </div>
          <div
            className="w-[95%] text-center items-center"
            onClick={toggleCollapse}
          >
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Resume
            </NavLink>
          </div>
          <div
            className="w-[95%] text-center items-center"
            onClick={toggleCollapse}
          >
            {/* <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Contact
            </NavLink> */}
          </div>
        </Flex>
      </div>
    </div>
  );
}
