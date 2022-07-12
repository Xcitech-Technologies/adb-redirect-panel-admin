import React from "react";
import { Col, Button, Form } from "react-bootstrap";

const CustomInput = ({ rest }) => <input {...rest} className="customInput" />;

export const CustomInputWithLabel = ({ label, name, ...rest }) => (
  <div className="customInputWithLabel">
    {label && <label htmlFor={name}>{label}</label>}
    <input name={name} {...rest} />
  </div>
);

export const CustomModuleInput = ({
  handleInputChange,
  input,
  handleEnter,
  name,
  label,
  handleClear,
  data,
  clearById,
}) => (
  <div className="CustomModuleInput">
    <div className="d-flex justify-content-between">
      <Col xs={9}>
        <CustomInputForG
          onChange={handleInputChange}
          value={input}
          handleEnter={handleEnter}
          name={name}
          type="text"
          label={label}
        />
      </Col>
      <Col xs={2} className="d-flex align-items-end justify-content-end">
        <Button className="addButton" onClick={handleEnter}>
          Add
        </Button>
      </Col>
    </div>
    {data?.length > 0 && (
      <>
        <Button className="clearButton" onClick={handleClear}>
          Clear
        </Button>
        <div className="displayData">
          {data.map((ele, index) => (
            <span className="api-item" key={index}>
              <span className="x" onClick={() => clearById(index)}>
                x
              </span>
              {ele}
            </span>
          ))}
        </div>
      </>
    )}
  </div>
);

export const CustomInputForG = ({
  label,
  name,
  value,
  onChange,
  type,
  handleEnter,
  style,
}) => (
  <div className="customInputForG" style={style}>
    <Form.Group>
      <Form.Label htmlFor={name}>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleEnter();
          }
        }}
      />
    </Form.Group>
  </div>
);

export default CustomInput;
