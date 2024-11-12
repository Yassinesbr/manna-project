import logout from "../../assets/logout.svg";
import "./TopBar.css";

const TopBar = () => {
  return (
    <div className="top-bar-container">
      <div className="top-bar-infos">
        Yassine Essebbar
        <img src={logout} alt="logout" className="logout-button" />
      </div>
    </div>
  );
};

export default TopBar;
