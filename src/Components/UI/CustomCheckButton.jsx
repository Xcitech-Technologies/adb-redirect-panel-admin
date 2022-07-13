import React from "react";

const CustomRadioButton = ({ buttons, value, setValue, label }) => (
  <div className="customRadioButton">
    <label className="customRadioButtonLabel">{label}</label>
    <div className="rbtn">
      {buttons.map((button, key) => (
        <label key={key}>
          <input
            type="radio"
            value={button.value}
            checked={button.value === value}
            onChange={(e) => setValue(e.target.value)}
          />
          {button.label}
        </label>
      ))}
    </div>
  </div>
);

export const CustomCheckbox = ({ value, setValue, label, style }) => (
  <label className="customCheckBox" style={style}>
    <input type="checkbox" value={label} checked={value} onChange={setValue} />
    {label}
  </label>
);
export default CustomRadioButton;
