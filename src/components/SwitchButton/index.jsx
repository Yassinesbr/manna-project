import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SwitchButton.css";

const SwitchButton = ({
  label,
  options,
  onChange,
  selected: initialSelected,
}) => {
  const [selected, setSelected] = useState(initialSelected || options[0].id);

  const handleSelect = (option) => {
    setSelected(option.id);
    onChange(option.id);
  };

  useEffect(() => {
    setSelected(initialSelected);
  }, [initialSelected]);

  return (
    <div className="switch-wrapper">
      {label && <div className="switch-label">{label}</div>}
      <div className="switch-container">
        {options.map((option) => (
          <div
            key={option.id}
            className={`switch-option ${
              selected === option.id ? "selected" : ""
            }`}
            onClick={() => handleSelect(option)}
          >
            {option.value}
          </div>
        ))}
      </div>
    </div>
  );
};

SwitchButton.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.any.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.any,
};

export default SwitchButton;
