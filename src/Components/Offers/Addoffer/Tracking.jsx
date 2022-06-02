import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { RiChatDeleteFill } from "react-icons/ri";
import jsonData from "../../../data.json";
import Button from "../../../Controls/Button";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Tracking = () => {
  const [addCondition, setAddCondition] = React.useState([
    {
      condition: {
        urls: [
          {
            urlfield: {},
            weight: {},
            cap: {},
          },
        ],
        based: "Weight Base",
        desktopPtUrl: "",
        mobilePtUrl: "",
        intermediatePtUrl: "",
        approveData: [],
        regionData: [],
        citiesData: [],
        deviceData: [],
        approveCountries: false,
        regionName: false,
        cityName: false,
        deviceName: false,
        approveTimeZone: false,
        approveLanguage: false
      },
      open: true,
    },
  ]);

  const addConditionOnclick = () => {
    setAddCondition([
      ...addCondition,
      {
        condition: {
          urls: [
            {
              urlfield: {},
              weight: {},
              cap: {},
            },
          ],
          based: "Weight Base",
          desktopPtUrl: "",
          mobilePtUrl: "",
          intermediatePtUrl: "",
          approveData: [],
          regionData: [],
          citiesData: [],
          deviceData: [],
          approveCountries: false,
          regionName: false,
          cityName: false,
          deviceName: false,
          approveTimeZone: false,
          approveLanguage: false,
        },
        open: false,
      },
    ]);
  };

  const arrayData = jsonData[0].MasterData.map((item) => ({
    CountryCode: item.CountryCode,
    Pop: item.Pop,
    CountryName: item.CountryName,
    Timezones: item.Timezones,
    Language: item.Language,
    CountryLanguagecode: item.CountryLanguagecode,
    Domain: item.Domain,
  }));


  const handleOnSelect = (e, item, index) => {
    let temp_data = [...addCondition];

    let previusApprovedData = [...temp_data[index].condition.approveData];
    console.log(previusApprovedData);

    let updatePreviousData = [...previusApprovedData, e];
    console.log(updatePreviousData);

    temp_data[index].condition.approveData = updatePreviousData;
    console.log(temp_data[index].condition.approveData);

    temp_data[index].condition.approveCountries = true;
    temp_data[index].condition.regionName = true;
    temp_data[index].condition.cityName = true;
    temp_data[index].condition.deviceName = true;
    temp_data[index].condition.approveTimeZone = true;
    temp_data[index].condition.approveLanguage = true;

    setAddCondition(temp_data);
  };

  const hnndleOpen = (index) => {
    let temp = [];
    for (let i = 0; i < addCondition.length; i++) {
      if (i === index) {
        temp.push({
          condition: { ...addCondition[i].condition },
          open: !addCondition[i].open,
        });
      } else {
        temp.push({
          condition: { ...addCondition[i].condition },
          open: false,
        });
      }
    }
    setAddCondition(temp);
  };

  const removeConditionOnclick = (index) => {
    let temp = addCondition.filter((item, i) => i !== index);
    console.log(temp, addCondition);

    setAddCondition(temp);
  };

  const [contryIsOpen, setContryIsOpen] = React.useState({
    countryInclude: true,
    countryExclude: false,
  });

  const [regionIsOpen, setRegionIsOpen] = React.useState({
    regionInclude: true,
    regionExclude: false
  })

  const [cityIsOpen, setCityIsOpen] = React.useState({
    cityInclude: true,
    cityExclude: false
  })

  const [deviceIsOpen, setDeviceIsOpen] = React.useState({
    deviceInclude: true,
    deviceExclude: false
  })

  const [timeZoneIsOpen, setTimeZoneIsOpen] = React.useState({
    timeZoneInclude: true,
    timeZoneExclude: false,
  });

  const [languageIsOpen, setLanguageIsOpen] = React.useState({
    languageInclude: true,
    languageExclude: false,
  });

  const addFieldOnclick = (index) => {
    let addfields = [...addCondition];
    console.log(index);
    console.log(addfields[index]);
    addfields[index]?.condition.urls.push({
      urlfield: {},
      weight: {},
      cap: {},
    });
    setAddCondition(addfields);
  };

  const removeFieldOnclick = (index, i) => {
    const field = [...addCondition];
    field[index].condition.urls.splice(i, 1);
    addCondition(field);
  };

  const onChangeDesktopPtUrl = (e, index) => {
    const newAddCondition = [...addCondition];
    newAddCondition[index].condition.desktopPtUrl = e.target.value;
    setAddCondition(newAddCondition);
  };

  const onChangeMobilePtUrl = (e, index) => {
    const newAddCondition = [...addCondition];
    newAddCondition[index].condition.mobilePtUrl = e.target.value;
    setAddCondition(newAddCondition);
  };

  const onChangeIntermediatePtUrl = (e, index) => {
    const newAddCondition = [...addCondition];
    newAddCondition[index].condition.intermediatePtUrl = e.target.value;
    setAddCondition(newAddCondition);
  };

  const onChangeBased = (e, index) => {
    const newAddCondition = [...addCondition];
    newAddCondition[index].condition.based = e.target.value;
    setAddCondition(newAddCondition);
  };

  const onChangeUrls = (e, index, i) => {
    const newAddCondition = [...addCondition];
    newAddCondition[index].condition.urls[i] = e.target.value;
    setAddCondition(newAddCondition);
  };

  const onChangeWeight = (e, index, i) => {
    const newAddCondition = [...addCondition];
    newAddCondition[index].condition.weight[i] = e.target.value;
    setAddCondition(newAddCondition);
  };

  const onChangeCap = (e, index, i) => {
    const newAddCondition = [...addCondition];
    newAddCondition[index].condition.cap[i] = e.target.value;
    setAddCondition(newAddCondition);
  };

  const regionHandleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      let newdata = [...addCondition];
      addCondition[index].condition.regionData.push(e.target.value);
      setAddCondition(newdata);
      console.log(newdata);
    }
  };

  const cityHandleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      let newdata = [...addCondition];
      addCondition[index].condition.citiesData.push(e.target.value);
      setAddCondition(newdata);
      console.log(newdata);
    }
  };

  const deviceHandleKeyPress = (e, index) => {
    if (e.key === "Enter") {
      let newdata = [...addCondition];
      addCondition[index].condition.deviceData.push(e.target.value);
      setAddCondition(newdata);
      console.log(newdata);
    }
  };

  const removeCountry = (index1, index) => {
    let mainData = [...addCondition];
    mainData[index].condition.approveData.splice(index1, 1);
    setAddCondition(mainData);
  }

  const removeRegion = (index1, index) => {
    let mainData = [...addCondition];
    mainData[index].condition.regionData.splice(index1, 1);
    setAddCondition(mainData)
  }

  const removeCities = (index1, index) => {
    let mainData = [...addCondition];
    mainData[index].condition.citiesData.splice(index1, 1);
    setAddCondition(mainData)
  }

  const removeDevice = (index1, index) => {
    let mainData = [...addCondition];
    mainData[index].condition.deviceData.splice(index1, 1);
    setAddCondition(mainData)
  }

  const removeTimezone = ( index, index1 ) => {
    let mainData = [...addCondition];
    mainData[index].condition.approveData.splice(index1, 1);
    setAddCondition(mainData);
  }

  const removeLanguages = (index, index1) => {
    let mainData = [...addCondition];
    mainData[index].condition.approveData.splice(index1, 1);
    setAddCondition(mainData)
  }

  console.log("------------cart state------------------", addCondition);

  return (
    <div className="container-fluid">
      <div className="row">
        <div>
          <button
            type="button"
            className="btn-condition"
            onClick={addConditionOnclick}
          >
            Add Condition
          </button>
        </div>
      </div>

      {addCondition.map((item, index) => (
        <div className="row" key={item.index}>
          <div className="main-container">
            <div className="col-md-11">
              <div className="card">
                <div className="card-header">
                  <div className="collapes_btn">
                    Condition {index + 1}
                    <div>
                      {addCondition.length > 1 && (
                        <button
                          type="button"
                          className="remove-button"
                          onClick={() => removeConditionOnclick(index)}
                        >
                          <RiChatDeleteFill size="25" />
                        </button>
                      )}
                      {item.open ? (
                        <FaAngleUp
                          size="25"
                          onClick={() => hnndleOpen(index)}
                        />
                      ) : (
                        <FaAngleDown
                          size="25"
                          onClick={() => hnndleOpen(index)}
                        />
                      )}
                    </div>
                  </div>
                </div>
                {item.open && (
                  <div className="cards-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="field-container form-group">
                          <div className="autoSearch-label">
                            <label style={{ marginTop: "15px" }}>
                              Country :
                            </label>
                          </div>
                          <div className="autoSearch">
                            <ReactSearchAutocomplete
                              id="country-input"
                              items={arrayData}
                              onSelect={(e) => handleOnSelect(e, item, index)}
                              showIcon={false}
                              placeholder="Search Country Name"
                              styling={{
                                height: "5px",
                                backgroundColor: "#12141D",
                                borderRadius: "5px",
                                border: "none",
                                color: "white",
                                hoverBackgroundColor: "lightgreen",
                                lineColor: "lightgreen",
                              }}
                              fuseOptions={{
                                keys: ["CountryCode", "CountryName"],
                              }} // Search on both fields
                              resultStringKeyName="CountryName" // String to display in the results
                            />
                          </div>
                        </div>
                        {item.condition.approveCountries && (
                          <div className="collapse-container form-group">
                            <input
                              defaultChecked
                              className="radio-include"
                              type="radio"
                              name="country"
                              id="include1"
                              onClick={() =>
                                setContryIsOpen({
                                  countryInclude: true,
                                  countryExclude: false,
                                })
                              }
                            />
                            <label className="radio-label1" htmlFor="include1">
                              Include
                            </label>
                            <input
                              className="radio-exclude"
                              type="radio"
                              name="country"
                              id="exclude1"
                              onClick={() =>
                                setContryIsOpen({
                                  countryInclude: false,
                                  countryExclude: true,
                                })
                              }
                            />
                            <label className="radio-label1" htmlFor="exclude1">
                              Exclude
                            </label>
                            <div className="clear-btn">
                              <Button
                                onClick={() => {
                                  item.condition.approveCountries = false;
                                  item.condition.approveTimeZone = false;
                                  item.condition.approveLanguage = false;
                                  console.log(item.condition.approveCountries);
                                }}
                              >
                                Clear
                              </Button>
                            </div>
                            {contryIsOpen.countryInclude &&
                              item.condition.approveData.map((item, index1) => {
                                console.log(item);
                                return (
                                  <span className="api-item" key={index1}>
                                    <span className="x" onClick={() => (removeCountry(index1, index))}>x</span>
                                    {item.CountryName}
                                  </span>
                                );
                              })}
                            {contryIsOpen.countryExclude &&
                              item.condition.approveData.map((item, index1) => {
                                console.log(item);
                                return (
                                  <span
                                    className="api-item-exclude"
                                    key={index1}
                                  >
                                    <span className="x" onClick={() => (removeCountry(index1, index))}>x</span>
                                    {item.CountryName}
                                  </span>
                                );
                              })}
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <div className="field-container form-group">
                          <label>Region :</label>
                          <input
                            className="input"
                            type="text"
                            name=""
                            id="region-input"
                            placeholder="Enter Region Name"
                            onKeyPress={(e) => regionHandleKeyPress(e, index)}
                          />
                        </div>
                        {item.condition.regionName && (
                          <div className="collapse-container form-group">
                            <input
                              defaultChecked
                              className="radio-include"
                              type="radio"
                              name="region"
                              id="include2"
                              onClick={() =>
                                setRegionIsOpen({
                                  regionInclude: true,
                                  regionExclude: false,
                                })
                              }
                            />
                            <label className="radio-label1" htmlFor="include2">
                              Include
                            </label>
                            <input
                              className="radio-exclude"
                              type="radio"
                              name="region"
                              id="exclude2"
                              onClick={() =>
                                setRegionIsOpen({
                                  regionInclude: false,
                                  regionExclude: true,
                                })
                              }
                            />
                            <label className="radio-label1" htmlFor="exclude2">
                              Exclude
                            </label>
                            <div className="clear-btn">
                              <Button
                                onClick={() => {
                                  addCondition[
                                    index
                                  ].condition.regionName = false;
                                }}
                              >
                                Clear
                              </Button>
                            </div>
                            {regionIsOpen.regionInclude && 
                              item.condition.regionData.map((item, index1) => {
                              return (
                                <span className="api-item" key={index1}>
                                  <span className="x" onClick={() => removeRegion(index, index1)}>x</span>
                                  {item}
                                </span>
                              )
                            })}
                            {regionIsOpen.regionExclude && 
                              item.condition.regionData.map((item, index1) => {
                              console.log(item);
                              return (
                                <span className="api-item-exclude" key={index1}>
                                  <span className="x" onClick={() => removeRegion(index, index1)}>x</span>
                                  {item}
                                </span>
                              )
                            })}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="field-container form-group">
                          <label>Cities :</label>
                          <input
                            className="input"
                            type="text"
                            name=""
                            id="cities-input"
                            placeholder="Enter Cities Name"
                            onKeyPress={(e) => cityHandleKeyPress(e, index)}
                          />
                        </div>
                        {item.condition.cityName && (
                          <div className="collapse-container form-group">
                            <input
                              defaultChecked
                              className="radio-include"
                              type="radio"
                              name="cities"
                              id="include3"
                              onClick={() => setCityIsOpen({
                                cityInclude: true,
                                cityExclude: false
                              })
                              }
                            />
                            <label className="radio-label1" htmlFor="include3">
                              Include
                            </label>
                            <input
                              className="radio-exclude"
                              type="radio"
                              name="cities"
                              id="exclude3"
                              onClick={() => setCityIsOpen({
                                cityInclude: false,
                                cityExclude: true
                              })
                              }
                            />
                            <label className="radio-label1" htmlFor="exclude3">
                              Exclude
                            </label>
                            <div className="clear-btn">
                              <Button
                                onClick={() => {
                                  addCondition[
                                    index
                                  ].condition.cityName = false;
                                }}
                              >
                                Clear
                              </Button>
                            </div>
                            {cityIsOpen.cityInclude &&
                              item.condition.citiesData.map((item, index1) => {
                                return (
                                  <span className="api-item" key={index1}>
                                    <span className="x" onClick={() => {removeCities(index, index1)}}>x</span>
                                    {item}
                                </span>
                              )
                              })
                            }
                            {cityIsOpen.cityExclude &&
                              item.condition.citiesData.map((item, index1) => {
                                return (
                                  <span className="api-item-exclude" key={index1}>
                                    <span className="x" onClick={() => {removeCities(index, index1)}}>x</span>
                                    {item}
                                </span>
                              )
                              })
                            }
                          </div>
                        )}
                      </div>

                      <div className="col-md-6">
                        <div className="field-container form-group">
                          <label>Device :</label>
                          <input
                            className="input"
                            type="text"
                            name=""
                            id="device-input"
                            placeholder="Enter Device Name"
                            onKeyPress={(e) => deviceHandleKeyPress(e, index)}
                          />
                        </div>
                        {item.condition.deviceName && (
                          <div className="collapse-container form-group">
                            <input
                              defaultChecked
                              className="radio-include"
                              type="radio"
                              name="device"
                              id="include4"
                              onClick={() => setDeviceIsOpen({
                                deviceInclude: true,
                                deviceExclude: false
                              })
                              }
                            />
                            <label className="radio-label1" htmlFor="include4">
                              Include
                            </label>
                            <input
                              className="radio-exclude"
                              type="radio"
                              name="device"
                              id="exclude4"
                              onClick={() => setDeviceIsOpen({
                                deviceInclude: false,
                                deviceExclude: true
                              })
                              }
                            />
                            <label className="radio-label1" htmlFor="exclude4">
                              Exclude
                            </label>
                            <div className="clear-btn">
                              <Button
                                onClick={() => {
                                  addCondition[
                                    index
                                  ].condition.deviceName = false;
                                }}
                              >
                                Clear
                              </Button>
                            </div>
                            {deviceIsOpen.deviceInclude && 
                              item.condition.deviceData.map((item, index1) => {
                                console.log(item);
                                return (
                                <span className="api-item" key={index1}>
                                  <span className="x" onClick={() => removeDevice(index, index1)}>x</span>
                                  {item}
                                  </span>
                                )
                              })
                            }
                            {deviceIsOpen.deviceExclude && 
                              item.condition.deviceData.map((item, index1) => {
                                return (
                                <span className="api-item-exclude" key={index1}>
                                  <span className="x" onClick={() => removeDevice(index, index1)}>x</span>
                                  {item}
                                  </span>
                                )
                              })
                            }
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="radio-container form-group">
                          <input
                            checked={item.condition.based === "Weight Base"}
                            className="radio-input"
                            type="radio"
                            name="radio"
                            id="1"
                            value="Weight Base"
                            onChange={(e) => onChangeBased(e, index)}
                          />
                          <label className="radio-label" htmlFor="1">
                            Weight Base
                          </label>
                          <input
                            checked={item.condition.based === "Time Base"}
                            className="radio-input"
                            type="radio"
                            name="radio"
                            id="2"
                            value="Time Base"
                            onChange={(e) => onChangeBased(e, index)}
                          />
                          <label className="radio-label" htmlFor="2">
                            Time Base
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="urlfield-container form-group">
                          <label>URLs :</label>
                          <button
                            className="addurl-btn"
                            type="button"
                            onClick={() => {addFieldOnclick(index)}}
                          >
                            <BiAddToQueue />
                          </button>

                          {item.condition.urls.map((add, i) => (
                            <>
                              {i > 0 && (
                                <button
                                  className="addurl-btn"
                                  type="button"
                                  onClick={() => removeFieldOnclick(index, i)}
                                >
                                  <TiDeleteOutline />
                                </button>
                              )}
                              <input
                                className="urls-input1"
                                style={i > 0 ? { marginLeft: "53px" } : {}}
                                type="text"
                                name=""
                                id=""
                                onChange={(e) => onChangeUrls(e, index, i)}
                                placeholder="Enter URLs"
                                key={i}
                              />
                              <input
                                className="urls-input2"
                                type="text"
                                placeholder="WT"
                                onChange={(e) => onChangeWeight(e, index, i)}
                              />
                              <input
                                className="urls-input3"
                                type="text"
                                placeholder="CAP"
                                onChange={(e) => onChangeCap(e, index, i)}
                              />
                            </>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="pt-container form-group">
                          <label>PT URLs :</label>
                          <input
                            className="pt-input"
                            type="text"
                            placeholder="Desktop PT URL"
                            onChange={(e) => onChangeDesktopPtUrl(e, index)}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="pturl-input"
                            type="text"
                            onChange={(e) => onChangeMobilePtUrl(e, index)}
                            placeholder="Mobile PT URL"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="pturl-input"
                            type="text"
                            onChange={(e) =>
                              onChangeIntermediatePtUrl(e, index)
                            }
                            placeholder="intermediary URL"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="last-container form-group">
                          <label>TimeZone :</label>
                          <input
                            className="last-input"
                            type="text"
                            name=""
                            id=""
                            placeholder="Search Country Name"
                          />
                          {item.condition.approveTimeZone && (
                            <div className="collase">
                              <input
                                defaultChecked
                                className="radio-include"
                                type="radio"
                                name="timezone"
                                id="include5"
                                onClick={() =>
                                  setTimeZoneIsOpen({
                                    timeZoneInclude: true,
                                    timeZoneExclude: false,
                                  })
                                }
                              />
                              <label
                                className="radio-label1"
                                htmlFor="include5"
                              >
                                Include
                              </label>
                              <input
                                className="radio-exclude"
                                type="radio"
                                name="timezone"
                                id="exclude5"
                                onClick={() =>
                                  setTimeZoneIsOpen({
                                    timeZoneInclude: false,
                                    timeZoneExclude: true,
                                  })
                                }
                              />
                              <label
                                className="radio-label1"
                                htmlFor="exclude5"
                              >
                                Exclude
                              </label>
                              <div className="clear-btn">
                                <Button
                                  onClick={() => {
                                    addCondition[
                                      index
                                    ].condition.approveTimeZone = false;
                                  }}
                                >
                                  Clear
                                </Button>
                              </div>
                              <div className="display-data">
                                {timeZoneIsOpen.timeZoneInclude &&
                                  item.condition.approveData.map((item) => {
                                    const approveTimezone =
                                      item.Timezones.split(",");
                                    return (
                                      <div>
                                        {approveTimezone.map((item, index1) => {
                                          return (
                                            <span
                                              className="api-item"
                                              key={index1}
                                            >
                                              <span className="x" onClick={() => (removeTimezone(index1, index))}>x</span>
                                              {item}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    );
                                  })}

                                {timeZoneIsOpen.timeZoneExclude &&
                                  item.condition.approveData.map((item) => {
                                    const approveTimezone =
                                      item.Timezones.split(",");
                                    return (
                                      <div>
                                        {approveTimezone.map((item, index1) => {
                                          return (
                                            <span
                                              className="api-item-exclude"
                                              key={index1}
                                            >
                                              <span className="x" onClick={() => (removeTimezone(index1, index))}>x</span>
                                              {item}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="last-container form-group">
                          <label>Languages :</label>
                          <input
                            className="last-input"
                            type="text"
                            name=""
                            id=""
                            placeholder="Search Region Name"
                          />
                          {item.condition.approveLanguage && (
                            <div className="collase">
                              <input
                                defaultChecked
                                className="radio-include"
                                type="radio"
                                name="language"
                                id="include6"
                                onClick={() =>
                                  setLanguageIsOpen({
                                    languageInclude: true,
                                    languageExclude: false,
                                  })
                                }
                              />
                              <label
                                className="radio-label1"
                                htmlFor="include6"
                              >
                                Include
                              </label>
                              <input
                                className="radio-exclude"
                                type="radio"
                                name="language"
                                id="exclude6"
                                onClick={() =>
                                  setLanguageIsOpen({
                                    languageInclude: false,
                                    languageExclude: true,
                                  })
                                }
                              />
                              <label
                                className="radio-label1"
                                htmlFor="exclude6"
                              >
                                Exclude
                              </label>
                              <div className="clear-btn">
                                <Button
                                  onClick={() => {
                                    addCondition[
                                      index
                                    ].condition.approveLanguage = false;
                                  }}
                                >
                                  Clear
                                </Button>
                              </div>
                              <div className="display-data">
                                {languageIsOpen.languageInclude &&
                                  item.condition.approveData.map((item) => {
                                    const approveLanguage =
                                      item.Language.split(",");
                                    return (
                                      <div>
                                        {approveLanguage.map((item, index1) => {
                                          return (
                                            <span
                                              className="api-item"
                                              key={index1}
                                            >
                                              <span className="x" onClick={() => (removeLanguages(index1, index))}>x</span>
                                              {item}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    );
                                  })}

                                {languageIsOpen.languageExclude &&
                                  item.condition.approveData.map((item) => {
                                    const approveLanguage =
                                      item.Language.split(",");
                                    return (
                                      <div>
                                        {approveLanguage.map((item, index1) => {
                                          return (
                                            <span
                                              className="api-item-exclude"
                                              key={index1}
                                            >
                                              <span className="x" onClick={() => (removeLanguages(index1, index))}>x</span>
                                              {item}
                                            </span>
                                          );
                                        })}
                                      </div>
                                    );
                                  })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracking;
