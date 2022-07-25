import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import CustomCard from "../UI/CustomCard.jsx";
import { CustomInputWithLabel, CustomModuleInput } from "../UI/CustomInput.jsx";
import CustomSelect, {
  CustomMultiSelectWithLabel,
  CustomSelectWithLabel,
} from "../UI/CustomSelect.jsx";

const options = [
  { name: "", value: undefined, disabled: true },
  { name: "Google Ads D2M", value: "Google Ads D2M" },
  { name: "Casino Offer", value: "Casino Offer" },
  { name: "Coupon Popup", value: "Coupon Popup" },
];

const types = [
  { name: "", value: undefined, disabled: true },
  { name: "S2s", value: "S2S" },
  { name: "Meta", value: "Meta" },
];

const networks = [
  { name: "", value: undefined, disabled: true },
  { name: "obrigadobineativenit", value: "obrigadobineativenit" },
  { name: "chicropatienda", value: "chicropatienda" },
  { name: "paralleltracking", value: "paralleltracking" },
];

const domainList = [
  {
    label: "http://installmentloannbbm.com/",
    value: "http://installmentloannbbm.com/",
  },
  {
    label: "http://s2stracking.com/",
    value: "http://s2stracking.com/",
  },
  {
    label: "http://click2impressions.com/",
    value: "http://click2impressions.com/",
  },
  {
    label: "http://comprasyreise.com/",
    value: "http://comprasyreise.com/",
  },
  {
    label: "http://multihostingreviews.com/",
    value: "http://multihostingreviews.com/",
  },
  {
    label: "http://alitemz.com/",
    value: "http://alitemz.com/",
  },
];

const General = ({ generalDetails, setGeneralDetails }) => {
  const [tempTag, setTempTag] = useState("");

  const handleInputChange = (e) => {
    setGeneralDetails((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="generalContainer">
      <CustomCard
        header={
          <Header
            generalDetails={generalDetails}
            handleInputChange={handleInputChange}
          />
        }
      >
        <CardContent1
          tempTag={tempTag}
          setTempTag={setTempTag}
          generalDetails={generalDetails}
          setGeneralDetails={setGeneralDetails}
          handleInputChange={handleInputChange}
        />
      </CustomCard>
      <CustomCard header={"Default Destination"} style={{ marginTop: "10px" }}>
        <CardContent2
          handleInputChange={handleInputChange}
          generalDetails={generalDetails}
        />
      </CustomCard>
    </div>
  );
};

const CardContent1 = ({
  tempTag,
  setGeneralDetails,
  setTempTag,
  generalDetails,
  handleInputChange,
}) => (
  <>
    <Row>
      <Col md={3}>
        <CustomInputWithLabel
          label="Enter Offer ID:"
          name="original"
          onChange={handleInputChange}
          value={generalDetails.original}
        />
      </Col>
      <Col md={3}>
        <CustomInputWithLabel
          label="Enter Offer Name:"
          name="nickname"
          onChange={handleInputChange}
          value={generalDetails.nickname}
        />
      </Col>
      <Col md={3}>
        <CustomSelectWithLabel
          label="Type:"
          name="type"
          options={types}
          onChange={handleInputChange}
          value={generalDetails.type}
        />
      </Col>
      <Col md={3}>
        <CustomSelectWithLabel
          label="Network ID:"
          name="network_id"
          options={networks}
          onChange={handleInputChange}
          value={generalDetails.network_id}
        />
      </Col>
    </Row>
    <Row>
      <Col md={3}>
        <CustomInputWithLabel
          label="HasOffer ID :"
          name="has_offer"
          onChange={handleInputChange}
          value={generalDetails.has_offer}
        />
      </Col>
      <Col md={6}>
        <CustomMultiSelectWithLabel
          label="Approved Domain:"
          options={domainList}
          isMulti
          onChange={(e, v) => {
            if (v.action === "select-option") {
              setGeneralDetails((current) => ({
                ...current,
                domain: [...current.domain, v.option],
              }));
            }
            if (v.action === "remove-value") {
              setGeneralDetails((current) => ({
                ...current,
                domain: current.domain.filter(
                  (ele) => ele.value !== v.removedValue.label
                ),
              }));
            }
            if (v.action === "clear") {
              setGeneralDetails((current) => ({
                ...current,
                domain: [],
              }));
            }
          }}
          value={generalDetails.domain}
        />
      </Col>
      <Col md={3}>
        <CustomModuleInput
          label="Associate Tags:"
          name="tags"
          handleInputChange={(e) => setTempTag(e.target.value)}
          input={tempTag}
          data={generalDetails.tags}
          handleEnter={() => {
            if (tempTag) {
              setGeneralDetails((current) => ({
                ...current,
                tags: [
                  ...current.tags,
                  ...tempTag
                    .split(",")
                    .map((e) => e.trim())
                    .filter((e) => e !== ""),
                ],
              }));
              setTempTag("");
            }
          }}
          handleClear={() => {
            setGeneralDetails((current) => ({ ...current, tags: [] }));
          }}
          clearById={(index) => {
            setGeneralDetails((current) => ({
              ...current,
              tags: current.tags.filter((e, i) => i !== index),
            }));
          }}
        />
      </Col>
    </Row>
  </>
);

const Header = ({ generalDetails, handleInputChange }) => (
  <div className="d-flex align-items-center">
    Offer Details :
    <div style={{ marginLeft: "10px" }}>
      <CustomSelect
        options={options}
        name="category"
        onChange={handleInputChange}
        value={generalDetails.category}
      />
    </div>
  </div>
);

const CardContent2 = ({ generalDetails, handleInputChange }) => (
  <Row>
    <Col md={6}>
      <CustomInputWithLabel
        label="Redirect URL:"
        name="destination"
        onChange={handleInputChange}
        value={generalDetails.destination}
      />
    </Col>
    <Col md={6}>
      <CustomInputWithLabel
        label="Rejected URL:"
        name="rejected"
        onChange={handleInputChange}
        value={generalDetails.rejected}
      />
    </Col>
  </Row>
);

export default General;
