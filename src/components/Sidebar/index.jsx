// index.jsx
import "./Sidebar.css";
import mannaLogo from "../../assets/manna-logo.svg";
import {
  articleIcon,
  speedIcon,
  lockIcon,
  groupIcon,
  domaineIcon,
  autoAwesomeIcon,
  integrationIcon,
  settingIcon,
} from "../../assets";
import { rolesRoute } from "../../App";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(null);
  const menuItems = [
    { path: "/page2", icon: speedIcon },
    { path: "/page3", icon: lockIcon },
    { path: rolesRoute, icon: groupIcon },
    { path: "/page4", icon: domaineIcon },
    { path: "/page5", icon: autoAwesomeIcon },
    { path: "/page6", icon: articleIcon },
    { path: "/page7", icon: integrationIcon },
    { path: "/page8", icon: settingIcon },
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar__logo">
        <img src={mannaLogo} alt="logo" />
      </Link>
      <div className="sidebar__menu">
        {menuItems.map((item, index) => {
          const isItemActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={index}
              to={item.path}
              className={`sidebar__menu-item${isItemActive ? " active" : ""} ${
                activeIndex === index ? " animate-click" : " animate-load"
              }`}
              onClick={() => handleClick(index)}
            >
              <img src={item.icon} alt="icon" className="sidebar__menu-icon" />
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
