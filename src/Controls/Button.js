import React from "react";

const Button = ({ children, type, onClick }) => {
  return (
    <button className="d-button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;

// onClick={onClick}