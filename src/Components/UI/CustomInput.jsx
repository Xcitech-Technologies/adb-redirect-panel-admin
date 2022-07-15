import React from "react";
import { Col, Button, Form, Row } from "react-bootstrap";

const CustomInput = ({ className, ...rest }) => (
  <input className={`customInput ${className || ""}`} {...rest} />
);

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

export const IncludeExcludeInputModule = ({
  label,
  name,
  onChange,
  value,
  handleEnter,
  data,
  clearById,
  check,
  setCheck,
  handleClear,
  id,
}) => (
  <Row className="IncludeExcludeInputModule">
    <Col md={4} className="IncludeExcludeInputModuleLabel">
      {label}{" "}
      <div className="count">
        <div className={check === 0 ? "includeActive" : "excludeActive"}>
          {data.length}
        </div>
      </div>
    </Col>
    <Col md={8}>
      <div className="d-flex flex-column">
        <IncludeExcludeInput
          type="text"
          name={name}
          onChange={onChange}
          value={value}
          id={id}
          handleEnter={handleEnter}
        />
        <div className="radioButtonContainer">
          <Button
            onClick={() => setCheck(0)}
            className={check === 0 ? "includeActive" : "normal"}
          >
            Include
          </Button>
          <Button
            onClick={() => setCheck(1)}
            className={check === 1 ? "excludeActive" : "normal"}
          >
            Exclude
          </Button>
        </div>
        {data.length > 0 && (
          <div>
            <Button className="clearButton" onClick={handleClear}>
              Clear
            </Button>
            <div className="display-data">
              {data.map((ele, index) => (
                <span
                  className={check === 0 ? "api-item" : "api-item-exclude"}
                  key={index}
                >
                  <span className="x" onClick={() => clearById(index)}>
                    x
                  </span>
                  {ele}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Col>
  </Row>
);

export const IncludeExcludeInput = ({
  type,
  name,
  value,
  onChange,
  handleEnter,
  ...rest
}) => (
  <div className="IncludeExcludeTypeInput">
    <input
      {...rest}
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
  </div>
);

export default CustomInput;
