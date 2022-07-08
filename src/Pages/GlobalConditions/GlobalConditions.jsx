import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CustomCardCollapse from "../../Components/UI/CustomCardCollapse.jsx";

const GlobalConditions = () => {
  const [referers, setReferers] = useState({
    approved: [],
    block: [],
  });
  const [ASN, setASN] = useState({
    approved: [],
    block: [],
  });
  const [ISP, setISP] = useState({
    approved: [],
    block: [],
  });
  const [organization, setOrganization] = useState({
    approved: [],
    block: [],
  });
  const [userAgent, setUserAgent] = useState({
    approved: [],
    block: [],
  });
  const [ipConditions, setIpConditions] = useState([]);
  const [inputs, setInputs] = useState({
    approvedreferers: "",
    blockreferers: "",
    ipConditions: "",
    approvedAsn: "",
    blockAsn: "",
    approvedIsp: "",
    blockIsp: "",
    approvedOrganization: "",
    blockOrganization: "",
    approvedUserAgent: "",
    blockUserAgent: "",
  });

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <div className="globalConditionsContainer">
      <Row>
        <Col md={6}>
          <CustomCardCollapse header="Referers" defaultCollapse={true}>
            <Referers
              handleInputChange={handleInputChange}
              inputs={inputs}
              setReferers={setReferers}
              setInputs={setInputs}
              referers={referers}
            />
          </CustomCardCollapse>
        </Col>
        <Col md={6}>
          <CustomCardCollapse header="IPs" defaultCollapse={true}>
            <IpConditions
              ipConditions={ipConditions}
              setIpConditions={setIpConditions}
              setInputs={setInputs}
              handleInputChange={handleInputChange}
              inputs={inputs}
            />
          </CustomCardCollapse>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <CustomCardCollapse header="Macros" defaultCollapse={true}>
            <Macros />
          </CustomCardCollapse>
        </Col>
        <Col md={6}>
          <CustomCardCollapse header="ASN" defaultCollapse={true}>
            <ASNComponent
              handleInputChange={handleInputChange}
              inputs={inputs}
              setASN={setASN}
              setInputs={setInputs}
              ASN={ASN}
            />
          </CustomCardCollapse>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <CustomCardCollapse header="ISP" defaultCollapse={true}>
            <ISPComponent
              handleInputChange={handleInputChange}
              inputs={inputs}
              setISP={setISP}
              setInputs={setInputs}
              ISP={ISP}
            />
          </CustomCardCollapse>
        </Col>
        <Col md={6}>
          <CustomCardCollapse header="Organization" defaultCollapse={true}>
            <OrganizationComponent
              handleInputChange={handleInputChange}
              inputs={inputs}
              setOrganization={setOrganization}
              setInputs={setInputs}
              organization={organization}
            />
          </CustomCardCollapse>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <CustomCardCollapse header="User Agent" defaultCollapse={true}>
            <UserAgentComponent
              handleInputChange={handleInputChange}
              inputs={inputs}
              setUserAgent={setUserAgent}
              setInputs={setInputs}
              userAgent={userAgent}
            />
          </CustomCardCollapse>
        </Col>
      </Row>
    </div>
  );
};

const Referers = ({
  handleInputChange,
  inputs,
  setReferers,
  referers,
  setInputs,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedreferers}
      name="approvedreferers"
      label="Approved Referers:"
      handleEnter={() => {
        if (inputs.approvedreferers) {
          setReferers({
            ...referers,
            approved: [...referers.approved, inputs.approvedreferers],
          });
          setInputs({ ...inputs, approvedreferers: "" });
        }
      }}
      data={referers.approved}
      handleClear={() => {
        setReferers({ ...referers, approved: [] });
      }}
      clearById={(index) => {
        setReferers({
          ...referers,
          approved: referers.approved.filter((e, i) => i !== index),
        });
      }}
    />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockreferers}
      name="blockreferers"
      label="Block Referers:"
      handleEnter={() => {
        if (inputs.blockreferers) {
          setReferers({
            ...referers,
            block: [...referers.block, inputs.blockreferers],
          });
          setInputs({ ...inputs, blockreferers: "" });
        }
      }}
      data={referers.block}
      handleClear={() => {
        setReferers({ ...referers, block: [] });
      }}
      clearById={(index) => {
        setReferers({
          ...referers,
          block: referers.block.filter((e, i) => i !== index),
        });
      }}
    />
  </>
);

const IpConditions = ({
  handleInputChange,
  inputs,
  setInputs,
  ipConditions,
  setIpConditions,
}) => (
  <CustomModuleInput
    handleInputChange={handleInputChange}
    input={inputs.ipConditions}
    name="ipConditions"
    label="Ip Conditions:"
    handleEnter={() => {
      if (inputs.ipConditions) {
        setIpConditions([...ipConditions, inputs.ipConditions]);
        setInputs({ ...inputs, ipConditions: "" });
      }
    }}
    data={ipConditions}
    handleClear={() => {
      setIpConditions([]);
    }}
    clearById={(index) => {
      setIpConditions(ipConditions.filter((e, i) => i !== index));
    }}
  />
);

const Macros = () => <div>MACROS</div>;

const ASNComponent = ({
  handleInputChange,
  inputs,
  setASN,
  ASN,
  setInputs,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedAsn}
      name="approvedAsn"
      label="Approved ASN:"
      handleEnter={() => {
        if (inputs.approvedAsn) {
          setASN({
            ...ASN,
            approved: [...ASN.approved, inputs.approvedAsn],
          });
          setInputs({ ...inputs, approvedAsn: "" });
        }
      }}
      data={ASN.approved}
      handleClear={() => {
        setASN({ ...ASN, approved: [] });
      }}
      clearById={(index) => {
        setASN({
          ...ASN,
          approved: ASN.approved.filter((e, i) => i !== index),
        });
      }}
    />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockAsn}
      name="blockAsn"
      label="Block ASN:"
      handleEnter={() => {
        if (inputs.blockAsn) {
          setASN({
            ...ASN,
            block: [...ASN.block, inputs.blockAsn],
          });
          setInputs({ ...inputs, blockAsn: "" });
        }
      }}
      data={ASN.block}
      handleClear={() => {
        setASN({ ...ASN, block: [] });
      }}
      clearById={(index) => {
        setASN({
          ...ASN,
          block: ASN.block.filter((e, i) => i !== index),
        });
      }}
    />
  </>
);

const ISPComponent = ({
  handleInputChange,
  inputs,
  setISP,
  ISP,
  setInputs,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedIsp}
      name="approvedIsp"
      label="Approved ISP:"
      handleEnter={() => {
        if (inputs.approvedIsp) {
          setISP({
            ...ISP,
            approved: [...ISP.approved, inputs.approvedIsp],
          });
          setInputs({ ...inputs, approvedIsp: "" });
        }
      }}
      data={ISP.approved}
      handleClear={() => {
        setISP({ ...ISP, approved: [] });
      }}
      clearById={(index) => {
        setISP({
          ...ISP,
          approved: ISP.approved.filter((e, i) => i !== index),
        });
      }}
    />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockIsp}
      name="blockIsp"
      label="Block ISP:"
      handleEnter={() => {
        if (inputs.blockIsp) {
          setISP({
            ...ISP,
            block: [...ISP.block, inputs.blockIsp],
          });
          setInputs({ ...inputs, blockIsp: "" });
        }
      }}
      data={ISP.block}
      handleClear={() => {
        setISP({ ...ISP, block: [] });
      }}
      clearById={(index) => {
        setISP({
          ...ISP,
          block: ISP.block.filter((e, i) => i !== index),
        });
      }}
    />
  </>
);
const OrganizationComponent = ({
  handleInputChange,
  inputs,
  setOrganization,
  organization,
  setInputs,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedOrganization}
      name="approvedOrganization"
      label="Approved Organization:"
      handleEnter={() => {
        if (inputs.approvedOrganization) {
          setOrganization({
            ...organization,
            approved: [...organization.approved, inputs.approvedOrganization],
          });
          setInputs({ ...inputs, approvedOrganization: "" });
        }
      }}
      data={organization.approved}
      handleClear={() => {
        setOrganization({ ...organization, approved: [] });
      }}
      clearById={(index) => {
        setOrganization({
          ...organization,
          approved: organization.approved.filter((e, i) => i !== index),
        });
      }}
    />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockOrganization}
      name="blockOrganization"
      label="Block Organization:"
      handleEnter={() => {
        if (inputs.blockOrganization) {
          setOrganization({
            ...organization,
            block: [...organization.block, inputs.blockOrganization],
          });
          setInputs({ ...inputs, blockOrganization: "" });
        }
      }}
      data={organization.block}
      handleClear={() => {
        setOrganization({ ...organization, block: [] });
      }}
      clearById={(index) => {
        setOrganization({
          ...organization,
          block: organization.block.filter((e, i) => i !== index),
        });
      }}
    />
  </>
);

const UserAgentComponent = ({
  handleInputChange,
  inputs,
  setUserAgent,
  userAgent,
  setInputs,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedUserAgent}
      name="approvedUserAgent"
      label="Approved User Agent:"
      handleEnter={() => {
        if (inputs.approvedUserAgent) {
          setUserAgent({
            ...userAgent,
            approved: [...userAgent.approved, inputs.approvedUserAgent],
          });
          setInputs({ ...inputs, approvedUserAgent: "" });
        }
      }}
      data={userAgent.approved}
      handleClear={() => {
        setUserAgent({ ...userAgent, approved: [] });
      }}
      clearById={(index) => {
        setUserAgent({
          ...userAgent,
          approved: userAgent.approved.filter((e, i) => i !== index),
        });
      }}
    />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockUserAgent}
      name="blockUserAgent"
      label="Block User Agent:"
      handleEnter={() => {
        if (inputs.blockUserAgent) {
          setUserAgent({
            ...userAgent,
            block: [...userAgent.block, inputs.blockUserAgent],
          });
          setInputs({ ...inputs, blockUserAgent: "" });
        }
      }}
      data={userAgent.block}
      handleClear={() => {
        setUserAgent({ ...userAgent, block: [] });
      }}
      clearById={(index) => {
        setUserAgent({
          ...userAgent,
          block: userAgent.block.filter((e, i) => i !== index),
        });
      }}
    />
  </>
);

const CustomModuleInput = ({
  handleInputChange,
  input,
  handleEnter,
  name,
  label,
  handleClear,
  data,
  clearById,
}) => (
  <>
    <div className="d-flex justify-content-between mt-2">
      <Col xs={9}>
        <CustomInputForGlobal
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
    {data.length > 0 && (
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
  </>
);

const CustomInputForGlobal = ({
  label,
  name,
  value,
  onChange,
  type,
  handleEnter,
}) => (
  <div className="customInputForGlobal">
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

export default GlobalConditions;
