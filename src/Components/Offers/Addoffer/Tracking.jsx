import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import { TiDeleteOutline } from "react-icons/ti";
import { RiChatDeleteFill } from "react-icons/ri";
import jsonData from "../../../data.json";
import Button from "../../../Controls/Button";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Tracking = () => {
  const [ApproveIsOpen, setApproveIsOpen] = React.useState({
    approveCountries: false,
    regionName: false,
    cityName: false,
    approveTimeZone: false,
    approveLanguage: false,
  });

  const arrayData = jsonData[0].MasterData.map((item) => ({
    CountryCode: item.CountryCode,
    Pop: item.Pop,
    CountryName: item.CountryName,
    Timezones: item.Timezones,
    Language: item.Language,
    CountryLanguagecode: item.CountryLanguagecode,
    Domain: item.Domain,
  }));
  // console.log(arrayData);

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    console.log(item);
    setApproveData([...approveData, item]);
    setApproveIsOpen({
      approveCountries: true,
      regionName: true,
      cityName: true,
      approveTimeZone: true,
      approveLanguage: true,
    });
  };

  const [addCondition, setAddCondition] = React.useState([
    {id:Date.now().toString(), condition: "" /*[{data: [""]}]*/, open: true },
  ]); 
  const addConditionOnclick = () => {
    setAddCondition([
      ...addCondition,
      { condition: "" /*[{data: [""]}]*/, open: false,id:Date.now().toString() },
    ]);
  };

  const hnndleOpen = (index) => {
    const item = addCondition[index];
    item.open = !item.open;
    addCondition[index] = item;
    setAddCondition([...addCondition]);
  };

  const removeConditionOnclick = (id) => {
    let temp = addCondition.filter(item=>item.id!==id)
    console.log(temp,addCondition);

    setAddCondition(temp);
  };

  const [addField, setaddField] = React.useState([{ field: "" }]);

  const addFieldOnclick = () => {
    setaddField([...addField, { field: "" }]);
  };

  const removeFieldOnclick = (index) => {
    const field = [...addField];
    field.slice(index, 0);
    setaddField(field);
  };

  const [approveData, setApproveData] = React.useState([]);

  const [region, setRegion] = React.useState("");
  const [cities, setCities] = React.useState("");
  const [device, setDevice] = React.useState("");

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
        <div className="row" key={index}>
          <div className="main-container">
            <div className="col-md-11">
              <div className="card">
                <div className="card-header" >
                  <div className="collapes_btn">
                    Condition {index + 1}
                    <div>
                      {addCondition.length > 1 && (
                        <button
                          type="button"
                          className="remove-button"
                          onClick={() => removeConditionOnclick(item.id)}
                        >
                          <RiChatDeleteFill size="25" />
                        </button>
                      )}
                      {item.open ? (
                        <FaAngleUp size="25" onClick={() => hnndleOpen(index)} />
                      ) : (
                        <FaAngleDown size="25" onClick={() => hnndleOpen(index)} />
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
                              onSearch={handleOnSearch}
                              onSelect={handleOnSelect}
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
                        {ApproveIsOpen.approveCountries && (
                          <div className="collapse-container form-group">
                            <input
                              defaultChecked
                              className="radio-include"
                              type="radio"
                              name="country"
                              id="include1"
                            />
                            <label className="radio-label1" htmlFor="include1">
                              Include
                            </label>
                            <input
                              className="radio-exclude"
                              type="radio"
                              name="country"
                              id="exclude1"
                            />
                            <label className="radio-label1" htmlFor="exclude1">
                              Exclude
                            </label>
                            <div className="clear-btn">
                              <Button
                                onClick={() => {
                                  setApproveIsOpen({
                                    approveCountries: false,
                                  });
                                  setApproveData([]);
                                }}
                              >
                                Clear
                              </Button>
                            </div>
                            {approveData.map((item, index) => {
                              console.log(item);
                              return (
                                <span className="api-item" key={index}>
                                  <span className="x">x</span>
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
                            onChange={(e) => setRegion(e.target.value)}
                            onSubmit={(e) => setRegion(e.target.value)}
                            placeholder="Enter Region Name"
                          />
                        </div>
                        {ApproveIsOpen.approveCountries && (
                          <div className="collapse-container form-group">
                            <input
                              defaultChecked
                              className="radio-include"
                              type="radio"
                              name="region"
                              id="include2"
                            />
                            <label className="radio-label1" htmlFor="include2">
                              Include
                            </label>
                            <input
                              className="radio-exclude"
                              type="radio"
                              name="region"
                              id="exclude2"
                            />
                            <label className="radio-label1" htmlFor="exclude2">
                              Exclude
                            </label>
                            <div className="clear-btn">
                              <Button
                                onClick={() => {
                                  setApproveIsOpen({
                                    approveCountries: false,
                                  });
                                  setApproveData([]);
                                }}
                              >
                                Clear
                              </Button>
                            </div>
                            {region}
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
                            onSubmit={(e) => setCities(e.target.value)}
                            placeholder="Enter Cities Name"
                          />
                        </div>
                        {ApproveIsOpen.approveCountries && (
                          <div className="collapse-container form-group">
                            <input
                              defaultChecked
                              className="radio-include"
                              type="radio"
                              name="cities"
                              id="include3"
                            />
                            <label className="radio-label1" htmlFor="include3">
                              Include
                            </label>
                            <input
                              className="radio-exclude"
                              type="radio"
                              name="cities"
                              id="exclude3"
                            />
                            <label className="radio-label1" htmlFor="exclude3">
                              Exclude
                            </label>
                            <div className="clear-btn">
                              <Button
                                onClick={() => {
                                  setApproveIsOpen({
                                    approveCountries: false,
                                  });
                                  setApproveData([]);
                                }}
                              >
                                Clear
                              </Button>
                            </div>
                            {cities}
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
                            onChange={(e) => setDevice(e.target.value)}
                            onSubmit={(e) => setDevice(e.target.value)}
                            placeholder="Enter Device Name"
                          />
                        </div>
                        {ApproveIsOpen.approveCountries && (
                          <div className="collapse-container form-group">
                            <input
                              defaultChecked
                              className="radio-include"
                              type="radio"
                              name="device"
                              id="include4"
                            />
                            <label className="radio-label1" htmlFor="include4">
                              Include
                            </label>
                            <input
                              className="radio-exclude"
                              type="radio"
                              name="device"
                              id="exclude4"
                            />
                            <label className="radio-label1" htmlFor="exclude4">
                              Exclude
                            </label>
                            <div className="clear-btn">
                              <Button
                                onClick={() => {
                                  setApproveIsOpen({
                                    approveCountries: false,
                                  });
                                  setApproveData([]);
                                }}
                              >
                                Clear
                              </Button>
                            </div>
                            {device}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="radio-container form-group">
                          <input
                            defaultChecked
                            className="radio-input"
                            selected
                            type="radio"
                            name="radio"
                            id="1"
                          />
                          <label className="radio-label" htmlFor="1">
                            Weight Base
                          </label>
                          <input
                            className="radio-input"
                            type="radio"
                            name="radio"
                            id="2"
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
                            onClick={addFieldOnclick}
                          >
                            <BiAddToQueue />
                          </button>

                          {addField.map((add, index) => (
                            <>
                              {index > 0 && (
                                <button
                                  className="addurl-btn"
                                  type="button"
                                  onClick={() => removeFieldOnclick(index)}
                                >
                                  <TiDeleteOutline />
                                </button>
                              )}
                              <input
                                className="urls-input1"
                                style={index > 0 ? { marginLeft: "53px" } : {}}
                                type="text"
                                name=""
                                id=""
                                placeholder="Enter URLs"
                                key={index}
                              />
                              <input
                                className="urls-input2"
                                type="text"
                                placeholder="WT"
                              />
                              <input
                                className="urls-input3"
                                type="text"
                                placeholder="CAP"
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
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="pturl-input"
                            type="text"
                            placeholder="Mobile PT URL"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            className="pturl-input"
                            type="text"
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
                          {ApproveIsOpen.approveTimeZone && (
                            <div className="collase">
                              <input
                                defaultChecked
                                className="radio-include"
                                type="radio"
                                name="timezone"
                                id="include5"
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
                                    setApproveIsOpen({
                                      ...ApproveIsOpen,
                                      approveTimeZone: false,
                                    });
                                    setApproveData([]);
                                  }}
                                >
                                  Clear
                                </Button>
                              </div>
                              <div className="display-data">
                                {approveData.map((item) => {
                                  const approveTimezone =
                                    item.Timezones.split(",");
                                  return (
                                    <div>
                                      {approveTimezone.map((item, index) => {
                                        return (
                                          <span
                                            className="api-item"
                                            key={index}
                                          >
                                            <span className="x">x</span>
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
                          {ApproveIsOpen.approveLanguage && (
                            <div className="collase">
                              <input
                                defaultChecked
                                className="radio-include"
                                type="radio"
                                name="language"
                                id="include6"
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
                                    setApproveIsOpen({
                                      ...ApproveIsOpen,
                                      approveTimeZone: false,
                                    });
                                    setApproveData([]);
                                  }}
                                >
                                  Clear
                                </Button>
                              </div>
                              <div className="display-data">
                                {approveData.map((item) => {
                                  const approveLanguage =
                                    item.Language.split(",");
                                  return (
                                    <div>
                                      {approveLanguage.map((item, index) => {
                                        return (
                                          <span
                                            className="api-item"
                                            key={index}
                                          >
                                            <span className="x">x</span>
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
