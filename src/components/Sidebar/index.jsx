import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";
import profileIcon from "../../assets/person/enabled.svg";
import mannaLogo from "../../assets/manna-logo.svg";

const Sidebar = () => {
  const location = useLocation();
  const menuItems = [
    { path: "/roles", icon: profileIcon },
    { path: "/page2", icon: profileIcon },
    { path: "/page3", icon: profileIcon },
  ];

  return (
    <div className="sidebar">
      <ul className="list">
        <li className="list-item-link logo-link">
          <Link to="/">
            <div className="logo">
              <img src={mannaLogo} alt="logo" />
            </div>
          </Link>
        </li>
        {menuItems.map((item, index) => {
          const isItemActive = location.pathname.startsWith(item.path);
          return (
            <li
              key={index}
              className={`list-item${isItemActive ? " active" : ""}`}
            >
              <Link to={item.path} className="list-item-link">
                <div className="icon">
                  <img src={item.icon} alt="icon" />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
