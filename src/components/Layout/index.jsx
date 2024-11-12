import PropTypes from "prop-types";
import "./Layout.css";
import Sidebar from "../Sidebar";
import { NotificationProvider } from "../../context/NotificationContext";
import TopBar from "../TopBar";

function Layout({ children }) {
  return (
    <NotificationProvider>
      <TopBar />
      <div className="layout">
        <Sidebar />
        <div className="main-content">{children}</div>
      </div>
    </NotificationProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
