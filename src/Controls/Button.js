import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, type, onClick }) => (
  <button className="d-button" type={type} onClick={onClick}>
    {children}
  </button>
);

Button.prototype = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default Button;
