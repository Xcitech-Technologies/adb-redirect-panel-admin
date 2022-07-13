import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import CustomCard from "../UI/CustomCard.jsx";
import { CustomInputWithLabel, CustomModuleInput } from "../UI/CustomInput.jsx";
import CustomRadioButton, { CustomCheckbox } from "../UI/CustomCheckButton.jsx";
import { CustomMultiSelectWithLabel } from "../UI/CustomSelect.jsx";

const MetaIPOptions = [
  { label: "OFF", value: "0" },
  {
    label: "Fraud Detection Only",
    value: "1",
  },
  {
    label: "Fraud Detection + FingerPrinting",
    value: "2",
  },
];
const S2SOptions = [
  { label: "OFF", value: "0" },
  {
    label: "Fraud Detection Only",
    value: "1",
  },
];

const AbuseVelocityOptions = [
  {
    label: "None",
    value: "None",
  },
  {
    label: "Low",
    value: "Low",
  },
  {
    label: "Medium",
    value: "Medium",
  },
  {
    label: "High",
    value: "High",
  },
];

const inputsInitialState = {
  approvedConnectionType: "",
  blockedConnectionType: "",
  approvedISP: "",
  blockedISP: "",
  approvedASN: "",
  blockedASN: "",
  approvedOrganization: "",
  blockedOrganization: "",
  blockedAffSub2: "",
  approvedAffSub2: "",
};

const ADBFraudDetection = ({ adbFraudDetection, setAdbFraudDetection }) => {
  const [inputs, setInputs] = useState(inputsInitialState);

  const checkBoxes = [
    {
      label: "Reduce Strictness",
      value: adbFraudDetection.vpn,
      name: "vpn",
    },
    {
      label: "Allow Proxy",
      value: adbFraudDetection.approveProxy,
      name: "approveProxy",
    },
    {
      label: "Black Bot Detected",
      value: adbFraudDetection.black_bot_detected,
      name: "black_bot_detected",
    },
    {
      label: "Allow VPN",
      value: adbFraudDetection.allowVPN,
      name: "black_bot_detected",
    },
    {
      label: "Lighter Penalties",
      value: adbFraudDetection.lighterPenalties,
      name: "lighterPenalties",
    },
  ];

  const handleSetRadioValue = (ele, val) => {
    setAdbFraudDetection((current) => ({
      ...current,
      [ele]: val,
    }));
  };

  const handleFraudInputChange = (e) => {
    setAdbFraudDetection((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <CustomCard header="ADB Fraud Detection">
        <ADBFraudDetectionComponent
          adbFraudDetection={adbFraudDetection}
          handleSetRadioValue={handleSetRadioValue}
          handleFraudInputChange={handleFraudInputChange}
          checkBoxes={checkBoxes}
        />
      </CustomCard>
      <Row>
        <Col md={6}>
          <CustomCard header="Connection Type">
            <ConnectionTypeComponent
              inputs={inputs}
              setInputs={setInputs}
              adbFraudDetection={adbFraudDetection}
              setAdbFraudDetection={setAdbFraudDetection}
              handleInputChange={handleInputChange}
            />
          </CustomCard>
        </Col>
        <Col md={6}>
          <CustomCard header="Connection Type">
            <ISPComponent
              inputs={inputs}
              setInputs={setInputs}
              adbFraudDetection={adbFraudDetection}
              setAdbFraudDetection={setAdbFraudDetection}
              handleInputChange={handleInputChange}
            />
          </CustomCard>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <CustomCard header="ASN">
            <ASNComponent
              inputs={inputs}
              setInputs={setInputs}
              adbFraudDetection={adbFraudDetection}
              setAdbFraudDetection={setAdbFraudDetection}
              handleInputChange={handleInputChange}
            />
          </CustomCard>
        </Col>
        <Col md={6}>
          <CustomCard header="Organization">
            <OrganizationComponent
              inputs={inputs}
              setInputs={setInputs}
              adbFraudDetection={adbFraudDetection}
              setAdbFraudDetection={setAdbFraudDetection}
              handleInputChange={handleInputChange}
            />
          </CustomCard>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <CustomCard header="Aff Sub 2">
            <AFFSUB2Component
              inputs={inputs}
              setInputs={setInputs}
              adbFraudDetection={adbFraudDetection}
              setAdbFraudDetection={setAdbFraudDetection}
              handleInputChange={handleInputChange}
            />
          </CustomCard>
        </Col>
        <Col md={6}>
          <CustomCard header="Other">
            <OtherComponent
              adbFraudDetection={adbFraudDetection}
              setAdbFraudDetection={setAdbFraudDetection}
              handleSetRadioValue={handleSetRadioValue}
            />
          </CustomCard>
        </Col>
      </Row>
    </div>
  );
};

const ADBFraudDetectionComponent = ({
  adbFraudDetection,
  handleSetRadioValue,
  handleFraudInputChange,
  checkBoxes,
}) => (
  <>
    <Row>
      <CustomRadioButton
        value={adbFraudDetection.meta_ip_process}
        setValue={(val) => handleSetRadioValue("meta_ip_process", val)}
        label="Meta :"
        buttons={MetaIPOptions}
      />
    </Row>
    <Row>
      <CustomRadioButton
        value={adbFraudDetection.s2s_ip_process}
        setValue={(val) => handleSetRadioValue("s2s_ip_process", val)}
        label="S2S :"
        buttons={S2SOptions}
      />
    </Row>
    <Row>
      <Col md={3}>
        <CustomInputWithLabel
          label="ADB Fraud Score Level:"
          name="ipqs"
          onChange={handleFraudInputChange}
          value={adbFraudDetection.ipqs}
        />
      </Col>
      <Col md={3}>
        <CustomInputWithLabel
          label="Strictness Level:"
          name="strictness"
          onChange={handleFraudInputChange}
          value={adbFraudDetection.strictness}
        />
      </Col>
    </Row>
    <Row>
      {checkBoxes.map((ele, key) => (
        <Col md={3} key={key}>
          <CustomCheckbox
            label={ele.label}
            value={ele.value}
            setValue={() => {
              handleSetRadioValue(ele.name, !ele.value);
            }}
          />
        </Col>
      ))}
    </Row>
  </>
);

const ConnectionTypeComponent = ({
  handleInputChange,
  setInputs,
  inputs,
  setAdbFraudDetection,
  adbFraudDetection,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedConnectionType}
      name="approvedConnectionType"
      label="Approved Connection Type List:"
      handleEnter={() => {
        if (inputs.approvedConnectionType) {
          setAdbFraudDetection((current) => ({
            ...current,
            approvedConnectionType: [
              ...current.approvedConnectionType,
              ...inputs.approvedConnectionType
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, approvedConnectionType: "" });
        }
      }}
      data={adbFraudDetection.approvedConnectionType}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedConnectionType: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedConnectionType: current.approvedConnectionType.filter(
            (e, i) => i !== index
          ),
        }));
      }}
    />
    <div className="mt-3" />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockedConnectionType}
      name="blockedConnectionType"
      label="Blocked Connection Type List:"
      handleEnter={() => {
        if (inputs.blockedConnectionType) {
          setAdbFraudDetection((current) => ({
            ...current,
            blockedConnectionType: [
              ...current.blockedConnectionType,
              ...inputs.blockedConnectionType
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, blockedConnectionType: "" });
        }
      }}
      data={adbFraudDetection.blockedConnectionType}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedConnectionType: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedConnectionType: current.blockedConnectionType.filter(
            (e, i) => i !== index
          ),
        }));
      }}
    />
  </>
);
const ISPComponent = ({
  handleInputChange,
  setInputs,
  inputs,
  setAdbFraudDetection,
  adbFraudDetection,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedISP}
      name="approvedISP"
      label="Approve ISP List:"
      handleEnter={() => {
        if (inputs.approvedISP) {
          setAdbFraudDetection((current) => ({
            ...current,
            approvedISP: [
              ...current.approvedISP,
              ...inputs.approvedISP
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, approvedISP: "" });
        }
      }}
      data={adbFraudDetection.approvedISP}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedISP: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedISP: current.approvedISP.filter((e, i) => i !== index),
        }));
      }}
    />
    <div className="mt-3" />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockedISP}
      name="blockedISP"
      label="Block ISP List:"
      handleEnter={() => {
        if (inputs.blockedISP) {
          setAdbFraudDetection((current) => ({
            ...current,
            blockedISP: [
              ...current.blockedISP,
              ...inputs.blockedISP
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, blockedISP: "" });
        }
      }}
      data={adbFraudDetection.blockedISP}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedISP: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedISP: current.blockedISP.filter((e, i) => i !== index),
        }));
      }}
    />
  </>
);

const ASNComponent = ({
  handleInputChange,
  setInputs,
  inputs,
  setAdbFraudDetection,
  adbFraudDetection,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedASN}
      name="approvedASN"
      label="Approve ASN List:"
      handleEnter={() => {
        if (inputs.approvedASN) {
          setAdbFraudDetection((current) => ({
            ...current,
            approvedASN: [
              ...current.approvedASN,
              ...inputs.approvedASN
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, approvedASN: "" });
        }
      }}
      data={adbFraudDetection.approvedASN}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedASN: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedASN: current.approvedASN.filter((e, i) => i !== index),
        }));
      }}
    />
    <div className="mt-3" />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockedASN}
      name="blockedASN"
      label="Block ASN List:"
      handleEnter={() => {
        if (inputs.blockedASN) {
          setAdbFraudDetection((current) => ({
            ...current,
            blockedASN: [
              ...current.blockedASN,
              ...inputs.blockedASN
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, blockedASN: "" });
        }
      }}
      data={adbFraudDetection.blockedASN}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedASN: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedASN: current.blockedASN.filter((e, i) => i !== index),
        }));
      }}
    />
  </>
);

const OrganizationComponent = ({
  handleInputChange,
  setInputs,
  inputs,
  setAdbFraudDetection,
  adbFraudDetection,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedOrganization}
      name="approvedOrganization"
      label="Approve Organization List:"
      handleEnter={() => {
        if (inputs.approvedOrganization) {
          setAdbFraudDetection((current) => ({
            ...current,
            approvedOrganization: [
              ...current.approvedOrganization,
              ...inputs.approvedOrganization
                .split("")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, approvedOrganization: "" });
        }
      }}
      data={adbFraudDetection.approvedOrganization}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedOrganization: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedOrganization: current.approvedOrganization.filter(
            (e, i) => i !== index
          ),
        }));
      }}
    />
    <div className="mt-3" />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockedOrganization}
      name="blockedOrganization"
      label="Block Organization List:"
      handleEnter={() => {
        if (inputs.blockedOrganization) {
          setAdbFraudDetection((current) => ({
            ...current,
            blockedOrganization: [
              ...current.blockedOrganization,
              ...inputs.blockedOrganization
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, blockedOrganization: "" });
        }
      }}
      data={adbFraudDetection.blockedOrganization}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedOrganization: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedOrganization: current.blockedOrganization.filter(
            (e, i) => i !== index
          ),
        }));
      }}
    />
  </>
);

const AFFSUB2Component = ({
  handleInputChange,
  setInputs,
  inputs,
  setAdbFraudDetection,
  adbFraudDetection,
}) => (
  <>
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.approvedAffSub2}
      name="approvedAffSub2"
      label="Approve Aff Sub 2 List:"
      handleEnter={() => {
        if (inputs.approvedAffSub2) {
          setAdbFraudDetection((current) => ({
            ...current,
            approvedAffSub2: [
              ...current.approvedAffSub2,
              ...inputs.approvedAffSub2
                .split("")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, approvedAffSub2: "" });
        }
      }}
      data={adbFraudDetection.approvedAffSub2}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedAffSub2: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          approvedAffSub2: current.approvedAffSub2.filter(
            (e, i) => i !== index
          ),
        }));
      }}
    />
    <div className="mt-3" />
    <CustomModuleInput
      handleInputChange={handleInputChange}
      input={inputs.blockedAffSub2}
      name="blockedAffSub2"
      label="Block Aff Sub 2 List:"
      handleEnter={() => {
        if (inputs.blockedAffSub2) {
          setAdbFraudDetection((current) => ({
            ...current,
            blockedAffSub2: [
              ...current.blockedAffSub2,
              ...inputs.blockedAffSub2
                .split(",")
                .map((e) => e.trim())
                .filter((e) => e !== ""),
            ],
          }));
          setInputs({ ...inputs, blockedAffSub2: "" });
        }
      }}
      data={adbFraudDetection.blockedAffSub2}
      handleClear={() => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedAffSub2: [],
        }));
      }}
      clearById={(index) => {
        setAdbFraudDetection((current) => ({
          ...current,
          blockedAffSub2: current.blockedAffSub2.filter((e, i) => i !== index),
        }));
      }}
    />
  </>
);

const OtherComponent = ({
  setAdbFraudDetection,
  adbFraudDetection,
  handleSetRadioValue,
}) => (
  <>
    <CustomMultiSelectWithLabel
      label="Abuse Velocity :"
      options={AbuseVelocityOptions}
      isMulti
      onChange={(e, v) => {
        if (v.action === "select-option") {
          setAdbFraudDetection((current) => ({
            ...current,
            allowedAbuseVelocity: [...current.allowedAbuseVelocity, v.option],
          }));
        }
        if (v.action === "remove-value") {
          setAdbFraudDetection((current) => ({
            ...current,
            allowedAbuseVelocity: current.allowedAbuseVelocity.filter(
              (ele) => ele.value !== v.removedValue.label
            ),
          }));
        }
        if (v.action === "clear") {
          setAdbFraudDetection((current) => ({
            ...current,
            allowedAbuseVelocity: [],
          }));
        }
      }}
      value={adbFraudDetection.allowedAbuseVelocity}
    />
    <CustomCheckbox
      style={{ marginTop: "10px" }}
      label={"Allow Recent Abuse"}
      value={adbFraudDetection.allowRecentAbuse}
      setValue={() => {
        handleSetRadioValue(
          "allowRecentAbuse",
          !adbFraudDetection.allowRecentAbuse
        );
      }}
    />
  </>
);

export default ADBFraudDetection;
