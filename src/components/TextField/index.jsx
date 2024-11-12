import { useState } from "react";
import PropTypes from "prop-types";
import "./TextField.css";
import eyeIcon from "../../assets/eye.svg";

const TextField = ({
  value,
  label,
  placeholder = "Placeholder",
  helperText,
  onChange,
  state = "default",
  errorText = "Something went wrong...",
  disabled = false,
  isPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  let className = "text-field";

  if (state === "typing") className += " typing";
  if (state === "autocomplete") className += " autocomplete";
  if (state === "filled") className += " filled";
  if (state === "error") className += " error";
  if (disabled) className += " disabled";

  return (
    <div className={`text-field-container ${className}`}>
      {label && <label className="text-field-label">{label}</label>}
      <div className="text-field-wrapper">
        <input
          type={isPassword && !showPassword ? "password" : "text"}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className="text-field-input"
        />
        {isPassword && (
          <button
            type="button"
            className="password-toggle-button"
            onClick={togglePasswordVisibility}
            disabled={disabled}
          >
            <img src={eyeIcon} alt="Show password" />
          </button>
        )}
      </div>
      {(helperText || state === "error") && (
        <span className="helper-text">
          {state === "error" ? errorText : helperText}
        </span>
      )}
    </div>
  );
};

TextField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.oneOf([
    "default",
    "typing",
    "autocomplete",
    "filled",
    "error",
    "disabled",
  ]),
  errorText: PropTypes.string,
  disabled: PropTypes.bool,
  isPassword: PropTypes.bool,
};

export default TextField;
