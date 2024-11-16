import PropTypes from "prop-types";
import "./Typography.css";

const Typography = ({
  variant,
  children,
  className,
  style,
  gutterBottom,
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
    "subheading",
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

Typography.defaultProps = {
  variant: "body1",
  className: "",
  style: {},
  gutterBottom: false,
};

export default Typography;
