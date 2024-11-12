import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ label, variant = "primary", onClick, style }) => {
  return (
    <button
      className={`custom-button ${variant}`}
      onClick={onClick}
      style={{ ...style }}
    >
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default Button;
