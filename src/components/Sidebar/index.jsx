import { Link, useLocation } from "react-router-dom";
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

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { path: "/page2", icon: speedIcon },
    { path: "/page3", icon: lockIcon },
    { path: "/roles", icon: groupIcon },
    { path: "/page4", icon: domaineIcon },
    { path: "/page5", icon: autoAwesomeIcon },
    { path: "/page6", icon: articleIcon },
    { path: "/page7", icon: integrationIcon },
    { path: "/page8", icon: settingIcon },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar__logo">
        <img src={mannaLogo} alt="logo" />
      </div>
      <div className="sidebar__menu">
        {menuItems.map((item, index) => {
          const isItemActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={index}
              to={item.path}
              className={`sidebar__menu-item${isItemActive ? " active" : ""}`}
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
