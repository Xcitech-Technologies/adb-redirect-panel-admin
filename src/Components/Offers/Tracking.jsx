import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import CustomCardCollapse from "../UI/CustomCardCollapse.jsx";
import CustomInput, { IncludeExcludeInputModule } from "../UI/CustomInput.jsx";
import { CustomMultiSelect } from "../UI/CustomSelect.jsx";
import Data from "../../data";
import { CustomCheckbox } from "../UI/CustomCheckButton.jsx";

const MainCountryData = Data.MasterData;
const CountryOptions = MainCountryData.map((data) => ({
  label: data.CountryName,
  value: data.CountryName,
}));

const DeviceOptions = [
  { label: "Mobile", value: "Mobile" },
  { label: "Desktop", value: "Desktop" },
];

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
      {trackingDetails?.map((condition, key) => (
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
    countries: "",
    region: "",
    cities: "",
    timezones: "",
    languages: "",
    referers: "",
  });

  const checkBoxes = [
    {
      label: "Allow Exception",
      value: trackingDetails[id].allow_exception,
      name: "allow_exception",
    },
    {
      label: "Allow Black Referer",
      value: trackingDetails[id].allow_blank_referer,
      name: "allow_blank_referer",
    },
    {
      label: "Allow Non Unique Clicks",
      value: trackingDetails[id].allow_non_unique_clicks,
      name: "allow_non_unique_clicks",
    },
  ];

  const handleChange = (e) => {
    setInputs((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePTURLChange = (e) => {
    setTrackingDetails((current) =>
      current.map((obj, i) => {
        if (i === id) {
          return { ...obj, [e.target.name]: e.target.value };
        }
        return obj;
      })
    );
  };

  const handleUrlChange = (e, key) => {
    setTrackingDetails((current) =>
      current.map((obj, i) => {
        if (i === id) {
          return {
            ...obj,
            weightage_urls: obj.weightage_urls.map((urlData, j) => {
              if (j === key) {
                return { ...urlData, [e.target.name]: e.target.value };
              }
              return urlData;
            }),
          };
        }
        return obj;
      })
    );
  };

  const handleRemoveUrl = (key) => {
    setTrackingDetails((current) =>
      current.map((obj, i) => {
        if (i === id) {
          return {
            ...obj,
            weightage_urls: obj.weightage_urls.filter((e, j) => j !== key),
          };
        }
        return obj;
      })
    );
  };
  const handleAddUrl = () => {
    setTrackingDetails((current) =>
      current.map((obj, i) => {
        if (i === id) {
          return {
            ...obj,
            weightage_urls: [
              ...obj.weightage_urls,
              {
                url: "",
                weight_range: "",
                cap: "",
              },
            ],
          };
        }
        return obj;
      })
    );
  };

  const handleSetCheckValue = (ele, val) => {
    setTrackingDetails((current) =>
      current.map((obj, i) => {
        if (i === id) {
          return {
            ...obj,
            [ele]: val,
          };
        }
        return obj;
      })
    );
  };

  const handleDeviceChange = (e, v) => {
    if (v.action === "select-option") {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              devices: [...obj.devices, v.option],
            };
          }
          return obj;
        })
      );
    }
    if (v.action === "remove-value") {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              devices: obj.devices.filter(
                (ele) => ele.value !== v.removedValue.label
              ),
            };
          }
          return obj;
        })
      );
    }
    if (v.action === "clear") {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              devices: [],
            };
          }
          return obj;
        })
      );
    }
  };

  const handleCountryEnterPress = () => {
    const InputCountryCodes = inputs.countries
      .split(",")
      .map((e) => e.toLowerCase().trim())
      .filter((e) => e !== "");

    const selectedData = MainCountryData.filter((e) =>
      InputCountryCodes.includes(e.CountryCode.toLowerCase())
    );

    setTrackingDetails((current) =>
      current.map((obj, i) => {
        if (i === id) {
          return {
            ...obj,
            countryData: [
              ...obj.countryData,
              ...selectedData.map((e) => e.CountryName),
            ],
            timezonesData: [
              ...obj.timezonesData,
              ...selectedData.map((e) => e.Timezones.split(",")).flat(),
            ],
            languagesData: [
              ...obj.languagesData,
              ...selectedData
                .map((e) => e.CountryLanguagecode.split(","))
                .flat(),
            ],
          };
        }
        return obj;
      })
    );
    setInputs((current) => ({ ...current, countries: "" }));
    const next = document.querySelector("#nextImpBtn");
    if (next !== null) {
      next.focus();
    }
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
        <Row
          className="d-flex justify-content-between"
          style={{ marginBottom: "15px" }}
        >
          <Col md={5}>
            <CountryComponent
              trackingDetails={trackingDetails[id]}
              id={id}
              setTrackingDetails={setTrackingDetails}
              inputValue={inputs.countries}
              handleCountryEnterPress={handleCountryEnterPress}
              onInputChange={(e) => {
                setInputs((current) => ({ ...current, countries: e }));
              }}
            />
          </Col>
          <Col md={5}>
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
        <Row
          className="d-flex justify-content-between"
          style={{ marginBottom: "15px" }}
        >
          <Col md={5}>
            <CitiesComponent
              input={inputs.cities}
              handleChange={handleChange}
              trackingDetails={trackingDetails}
              id={id}
              setTrackingDetails={setTrackingDetails}
              setInputs={setInputs}
            />
          </Col>
          <Col md={5}>
            <ReferersComponent
              input={inputs.referers}
              handleChange={handleChange}
              trackingDetails={trackingDetails[id]}
              id={id}
              setTrackingDetails={setTrackingDetails}
              setInputs={setInputs}
              checkBoxes={checkBoxes}
              handleSetCheckValue={handleSetCheckValue}
            />
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-between"
          style={{ marginBottom: "15px" }}
        >
          <Col md={5}>
            <DeviceComponent
              handleDeviceChange={handleDeviceChange}
              trackingDetails={trackingDetails[id]}
            />
          </Col>
          <Col md={5}>
            {" "}
            <TimeZoneComponent
              input={inputs.timezones}
              handleChange={handleChange}
              trackingDetails={trackingDetails}
              id={id}
              setTrackingDetails={setTrackingDetails}
              setInputs={setInputs}
            />
          </Col>
        </Row>
        <Row
          className="d-flex justify-content-between"
          style={{ marginBottom: "15px" }}
        >
          <Col md={5}>
            <LanguagesComponent
              input={inputs.languages}
              handleChange={handleChange}
              trackingDetails={trackingDetails}
              id={id}
              setTrackingDetails={setTrackingDetails}
              setInputs={setInputs}
            />
          </Col>
          <Col md={5}></Col>
        </Row>
        <Row style={{ marginBottom: "15px" }}>
          <URLSComponent
            handleUrlChange={handleUrlChange}
            trackingDetails={trackingDetails[id]}
            handleRemoveUrl={handleRemoveUrl}
            handleAddUrl={handleAddUrl}
          />
        </Row>
        <Row>
          <PTURLsComponent
            handlePTURLChange={handlePTURLChange}
            trackingDetails={trackingDetails}
          />
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

const CountryComponent = ({
  trackingDetails,
  id,
  setTrackingDetails,
  inputValue,
  onInputChange,
  handleCountryEnterPress,
}) => (
  <CountryComponentInput
    check={trackingDetails.countryCondition}
    data={trackingDetails.countryData}
    inputValue={inputValue}
    onInputChange={onInputChange}
    handleCountryEnterPress={handleCountryEnterPress}
    handleAddCountry={(e) => {
      const countryDetails = MainCountryData.filter(
        (data) => data.CountryName === e.value
      )[0];

      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              countryData: [...obj.countryData, countryDetails.CountryName],
              timezonesData: [
                ...obj.timezonesData,
                ...countryDetails.Timezones.split(","),
              ],
              languagesData: [
                ...obj.languagesData,
                ...countryDetails.CountryLanguagecode.split(","),
              ],
            };
          }
          return obj;
        })
      );
    }}
    clearById={(clearId, ele) => {
      const countryDetails = MainCountryData.filter(
        (data) => data.CountryName === ele
      )[0];

      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              countryData: [...obj.countryData.filter((e, j) => j !== clearId)],
              timezonesData: obj.timezonesData.filter(
                (element) => !countryDetails.Timezones.includes(element)
              ),
              languagesData: obj.languagesData.filter(
                (element) =>
                  !countryDetails.CountryLanguagecode.includes(element)
              ),
            };
          }
          return obj;
        })
      );
    }}
    handleClear={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              countryData: [],
              timezonesData: [],
              languagesData: [],
            };
          }
          return obj;
        })
      );
    }}
    setCheck={(e) => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              countryCondition: e,
            };
          }
          return obj;
        })
      );
    }}
  />
);

const CountryComponentInput = ({
  check,
  data,
  handleAddCountry,
  handleClear,
  clearById,
  setCheck,
  inputValue,
  onInputChange,
  handleCountryEnterPress,
}) => (
  <Row className="IncludeExcludeInputModule">
    <Col md={4} className="IncludeExcludeInputModuleLabel">
      Country
      <div className="count">
        <div className={check === 0 ? "includeActive" : "excludeActive"}>
          {data.length}
        </div>
      </div>
    </Col>
    <Col md={8}>
      <div className="d-flex flex-column">
        <CustomMultiSelect
          options={CountryOptions}
          inputValue={inputValue}
          onInputChange={onInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCountryEnterPress();
            }
          }}
          onChange={(e, v) => {
            if (v.action === "select-option") {
              handleAddCountry(e);
            }
          }}
        />
        <div className="radioButtonContainer">
          <Button
            onClick={() => setCheck(0)}
            className={check === 0 ? "includeActive" : "normal"}
            id={"nextImpBtn"}
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
            <div className="displayData">
              {data.map((ele, index) => (
                <span
                  className={check === 0 ? "api-item" : "api-item-exclude"}
                  key={index}
                >
                  <span className="x" onClick={() => clearById(index, ele)}>
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

const DeviceComponent = ({ trackingDetails, handleDeviceChange }) => (
  <Row className="IncludeExcludeInputModule">
    <Col md={4} className="IncludeExcludeInputModuleLabel">
      Device
    </Col>
    <Col md={8}>
      <div className="d-flex flex-column">
        <CustomMultiSelect
          isMulti
          options={DeviceOptions}
          onChange={handleDeviceChange}
          value={trackingDetails.devices}
        />
      </div>
    </Col>
  </Row>
);

const ReferersComponent = ({
  input,
  handleChange,
  trackingDetails,
  id,
  setTrackingDetails,
  setInputs,
  checkBoxes,
  handleSetCheckValue,
}) => (
  <>
    <IncludeExcludeInputModule
      label="Referers"
      name="referers"
      value={input}
      onChange={handleChange}
      data={trackingDetails.referersData}
      check={trackingDetails.referersCondition}
      handleEnter={() => {
        setTrackingDetails((current) =>
          current.map((obj, i) => {
            if (i === id) {
              return {
                ...obj,
                referersData: [
                  ...obj.referersData,
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
        setInputs((current) => ({ ...current, referers: "" }));
      }}
      setCheck={(val) => {
        setTrackingDetails((current) =>
          current.map((obj, i) => {
            if (i === id) {
              return { ...obj, referersCondition: val };
            }
            return obj;
          })
        );
      }}
      handleClear={() => {
        setTrackingDetails((current) =>
          current.map((obj, i) => {
            if (i === id) {
              return { ...obj, referersData: [] };
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
                referersData: obj.referersData.filter((e, j) => j !== index),
              };
            }
            return obj;
          })
        );
      }}
    />{" "}
    <Row>
      <Col md={4}></Col>
      <Col md={8}>
        <Row>
          {checkBoxes.map((ele, key) => (
            <Col md={6} key={key} style={{ marginTop: "7px" }}>
              <CustomCheckbox
                label={ele.label}
                value={ele.value}
                setValue={() => {
                  handleSetCheckValue(ele.name, !ele.value);
                }}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  </>
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

const CitiesComponent = ({
  input,
  handleChange,
  trackingDetails,
  id,
  setTrackingDetails,
  setInputs,
}) => (
  <IncludeExcludeInputModule
    label="Cities"
    name="cities"
    value={input}
    onChange={handleChange}
    data={trackingDetails[id].citiesData}
    check={trackingDetails[id].citiesCondition}
    handleEnter={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              citiesData: [
                ...obj.citiesData,
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
      setInputs((current) => ({ ...current, cities: "" }));
    }}
    setCheck={(val) => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return { ...obj, citiesCondition: val };
          }
          return obj;
        })
      );
    }}
    handleClear={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return { ...obj, citiesData: [] };
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
              citiesData: obj.citiesData.filter((e, j) => j !== index),
            };
          }
          return obj;
        })
      );
    }}
  />
);

const URLSComponent = ({
  trackingDetails,
  handleUrlChange,
  handleAddUrl,
  handleRemoveUrl,
}) => (
  <Col md={12}>
    {trackingDetails.weightage_urls.map((url, key) => (
      <Row key={key}>
        <Col md={2}>
          {key === 0 && (
            <div className="d-flex align-items-center justify-content-between">
              <div>URLs</div>
              <button className="buttonNoBackground" onClick={handleAddUrl}>
                <AiOutlinePlusCircle />
              </button>
            </div>
          )}
        </Col>
        <Col md={10}>
          <div className="UrlsInputs">
            <CustomInput
              placeholder="Enter Url"
              type="text"
              value={url.url}
              name="url"
              onChange={(e) => handleUrlChange(e, key)}
            />
            <CustomInput
              className="inputsEnd"
              placeholder="WT"
              type="text"
              value={url.weight_range}
              name="weight_range"
              onChange={(e) => handleUrlChange(e, key)}
            />
            <CustomInput
              className="inputsEnd"
              placeholder="CAP"
              type="text"
              value={url.cap}
              name="cap"
              onChange={(e) => handleUrlChange(e, key)}
            />
            <button
              className="buttonNoBackground"
              disabled={key === 0}
              onClick={() => handleRemoveUrl(key)}
            >
              <AiOutlineMinusCircle />
            </button>
          </div>
        </Col>
      </Row>
    ))}
  </Col>
);

const PTURLsComponent = ({ trackingDetails, handlePTURLChange }) => (
  <Col md={12}>
    <Row>
      <Col md={2}>PT URLs</Col>
      <Col md={10}>
        <CustomInput
          placeholder="Desktop PT URL"
          type="text"
          value={trackingDetails.desktop_pt_url}
          name="desktop_pt_url"
          onChange={handlePTURLChange}
        />
      </Col>
    </Row>
    <Row>
      <Col md={2}></Col>
      <Col md={10}>
        <CustomInput
          placeholder="Mobile PT URL"
          type="text"
          value={trackingDetails.mobile_pt_url}
          name="mobile_pt_url"
          onChange={handlePTURLChange}
        />
      </Col>
    </Row>
    <Row>
      <Col md={2}></Col>
      <Col md={10}>
        <CustomInput
          placeholder="Intermediatry PT URL"
          type="text"
          value={trackingDetails.intermediary_url}
          name="intermediary_url"
          onChange={handlePTURLChange}
        />
      </Col>
    </Row>
  </Col>
);

const TimeZoneComponent = ({
  input,
  handleChange,
  trackingDetails,
  id,
  setTrackingDetails,
  setInputs,
}) => (
  <IncludeExcludeInputModule
    label="Time Zone"
    name="timezones"
    value={input}
    onChange={handleChange}
    data={trackingDetails[id].timezonesData}
    check={trackingDetails[id].timezonesCondition}
    handleEnter={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              timezonesData: [
                ...obj.timezonesData,
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
      setInputs((current) => ({ ...current, timezones: "" }));
    }}
    setCheck={(val) => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return { ...obj, timezonesCondition: val };
          }
          return obj;
        })
      );
    }}
    handleClear={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return { ...obj, timezonesData: [] };
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
              timezonesData: obj.timezonesData.filter((e, j) => j !== index),
            };
          }
          return obj;
        })
      );
    }}
  />
);
const LanguagesComponent = ({
  input,
  handleChange,
  trackingDetails,
  id,
  setTrackingDetails,
  setInputs,
}) => (
  <IncludeExcludeInputModule
    label="Languages"
    name="languages"
    value={input}
    onChange={handleChange}
    data={trackingDetails[id].languagesData}
    check={trackingDetails[id].languagesCondition}
    handleEnter={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return {
              ...obj,
              languagesData: [
                ...obj.languagesData,
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
      setInputs((current) => ({ ...current, languages: "" }));
    }}
    setCheck={(val) => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return { ...obj, languagesCondition: val };
          }
          return obj;
        })
      );
    }}
    handleClear={() => {
      setTrackingDetails((current) =>
        current.map((obj, i) => {
          if (i === id) {
            return { ...obj, languagesData: [] };
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
              languagesData: obj.languagesData.filter((e, j) => j !== index),
            };
          }
          return obj;
        })
      );
    }}
  />
);

export default Tracking;
