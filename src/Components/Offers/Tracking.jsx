import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import CustomCardCollapse from "../UI/CustomCardCollapse.jsx";
import { IncludeExcludeInputModule } from "../UI/CustomInput.jsx";

const Tracking = ({
  trackingDetails,
  setTrackingDetails,
  handleAddConditionButton,
}) => {
  const handleRemoveCondition = (key) => {
    setTrackingDetails((current) => current.filter((e, id) => id !== key));
  };

  return (
    <div className="trackingContainer">
      <div className="d-flex justify-content-end">
        <Button
          className="addConditionButton"
          onClick={handleAddConditionButton}
        >
          Add Condition
        </Button>
      </div>
      {trackingDetails.map((condition, key) => (
        <Conditions
          key={key}
          id={key}
          handleRemoveCondition={handleRemoveCondition}
          condition={condition}
          setTrackingDetails={setTrackingDetails}
          trackingDetails={trackingDetails}
        />
      ))}
    </div>
  );
};

const Conditions = ({
  id,
  handleRemoveCondition,
  setTrackingDetails,
  trackingDetails,
}) => {
  const [inputs, setInputs] = useState({
    region: "",
    cities: "",
    timezones: "",
    languages: "",
  });

  const handleChange = (e) => {
    setInputs((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="mt-4" key={id}>
      <CustomCardCollapse
        header={
          <ConditionsHead
            id={id}
            handleRemoveCondition={handleRemoveCondition}
          />
        }
        defaultCollapse
      >
        <Row>
          <Col md={6}></Col>
          <Col md={6}>
            <RegionComponent
              input={inputs.region}
              handleChange={handleChange}
              trackingDetails={trackingDetails}
              id={id}
              setTrackingDetails={setTrackingDetails}
              setInputs={setInputs}
            />
          </Col>
        </Row>
      </CustomCardCollapse>
    </div>
  );
};
const ConditionsHead = ({ id, handleRemoveCondition }) => (
  <div className="conditionHead">
    <div className="conditionText">Condition {id + 1}</div>
    <Button className="arrowButton" onClick={() => handleRemoveCondition(id)}>
      <IoMdClose />
    </Button>
  </div>
);

const RegionComponent = ({
  input,
  handleChange,
  trackingDetails,
  id,
  setTrackingDetails,
  setInputs,
}) => (
  <IncludeExcludeInputModule
    label="Region"
    name="region"
    value={input}
    onChange={handleChange}
    data={trackingDetails[id].regionData}
    check={trackingDetails[id].regionCondition}
    handleEnter={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              regionData: [
                ...obj.regionData,
                ...input
                  .split(",")
                  .map((e) => e.trim())
                  .filter((e) => e !== ""),
              ],
            };
          }
          return obj;
        })
      );
      setInputs((current) => ({ ...current, region: "" }));
    }}
    setCheck={(val) => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return { ...obj, regionCondition: val };
          }
          return obj;
        })
      );
    }}
    handleClear={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return { ...obj, regionData: [] };
          }
          return obj;
        })
      );
    }}
    clearById={(index) => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              regionData: obj.regionData.filter((e, j) => j !== index),
            };
          }
          return obj;
        })
      );
    }}
  />
);

export default Tracking;
