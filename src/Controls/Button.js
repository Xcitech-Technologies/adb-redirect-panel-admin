import React from "react";

const Button = ({ children, type, onClick }) => {
  return (
    <button className="button" onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;