import React, { useState } from "react";
import PropTypes from "prop-types";

function Input(props) {
  const { label } = props;

  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <label className="label">{label}</label>
      <input className="input" type="text" value={value} onChange={onChange} />
    </>
  );
}
Input.propTypes = {
  label: PropTypes.string,
};

export default Input;
