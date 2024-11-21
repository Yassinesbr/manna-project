import PropTypes from "prop-types";
import "./Notification.css";

const Notification = ({ message, type }) => {
  return <div className={`notification ${type}`}>{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "updating", "error"]).isRequired,
};

export default Notification;
