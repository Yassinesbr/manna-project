import PropTypes from "prop-types";
import "./Typography.css";

const Typography = ({
  variant = "body1",
  children,
  className = "",
  style = {},
  gutterBottom = false,
  ...props
}) => {
  return (
    <div
      className={`typography ${variant} ${className}`}
      style={{ marginBottom: gutterBottom ? "16px" : "0px", ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf([
    "heading1",
    "subheading1",
    "subheading2",
    "body1",
    "body2",
    "caption",
    "underline",
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  gutterBottom: PropTypes.bool,
};

export default Typography;
