import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

const Button = ({ className, onClick, children }) => (
  <button type="button" className={cn("button", { [className]: className })} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  className: PropTypes.oneOf(["centered"]),
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]).isRequired
};

Button.defaultProps = {
  className: "",
  onClick: null
};

export default Button;
