import PropTypes from "prop-types";
import "./Layout.css";
import Sidebar from "../Sidebar";
import { NotificationProvider } from "../../context/NotificationContext";
import TopBar from "../TopBar";
import Loader from "../Loader";
import { useContext } from "react";
import { LoaderContext } from "../../context/LoaderContext";

function Layout({ children }) {
  const { isLoading } = useContext(LoaderContext);

  return (
    <>
      <NotificationProvider>
        <TopBar />
        <div className="layout">
          <Sidebar />
          <div className="main-content">
            <div className="content">
              {children}
              {isLoading && <Loader />}
            </div>
          </div>
        </div>
      </NotificationProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
