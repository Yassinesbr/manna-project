import Typography from "../../components/Typography";
import PropTypes from "prop-types";

const RoleIconsSelector = ({ roleIcons, selectedIcon, onIconSelect }) => (
  <div className="role-icons-container">
    <Typography variant="caption" className="color-gray-3">
      Select Role Icon
    </Typography>
    <div className="icons-container">
      {roleIcons.map((icon, index) => (
        <div
          key={index}
          className={`role-icon ${selectedIcon === index ? "selected" : ""}`}
          onClick={() => onIconSelect(index)}
        >
          <img
            src={selectedIcon === index ? icon.enabled : icon.disabled}
            alt="role icon"
          />
        </div>
      ))}
    </div>
  </div>
);

export default RoleIconsSelector;

RoleIconsSelector.propTypes = {
  roleIcons: PropTypes.array.isRequired,
  selectedIcon: PropTypes.number.isRequired,
  onIconSelect: PropTypes.func.isRequired,
};
