import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";
import jsonData from "../../../data.json";
import Button from "../../../Controls/Button";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Tracking = () => {
  const [ApproveIsOpen, setApproveIsOpen] = React.useState({
    approveCountries: false,
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
  console.log(arrayData);

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    console.log(item);
    setApproveData([...approveData, item]);
    setApproveIsOpen({
      approveCountries: true,
      approveTimeZone: true,
      approveLanguage: true,
    });
  };

  const [addCondition, setAddCondition] = React.useState([
    { condition: "", open: true },
  ]);

  const addConditionOnclick = () => {
    setAddCondition([...addCondition, { condition: "", open: false }]);
  };

  const hnndleOpen = (index) => {
    let item = addCondition[index];
    item.open = !item.open;
    addCondition[index] = item;
    setAddCondition([...addCondition]);
  };

  const [addField, setaddField] = React.useState([{ condition: "" }]);

  const addFieldOnclick = () => {
    setaddField([...addField, { condition: "" }]);
  };

  const [approveData, setApproveData] = React.useState([]);

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
          <div className="col-md-12">
            <div className="card">
              <div className="card-header" onClick={() => hnndleOpen(index)}>
                <div className="collapes_btn">
                  Condition {index + 1}
                  {item.open ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
              {item.open && (
                <div className="cards-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="field-container form-group">
                        <div className="autoSearch-label">
                          <label style={{ marginTop: "15px" }}>Country :</label>
                        </div>
                        <div className="autoSearch">
                          <ReactSearchAutocomplete
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
                            className="radio-input"
                            type="radio"
                            name="country"
                            id="include"
                          />
                          <label className="radio-label" htmlFor="include">
                            Include
                          </label>
                          <input
                            className="radio-input"
                            type="radio"
                            name="country"
                            id="exclude"
                          />
                          <label className="radio-label" htmlFor="exclude">
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
                          id=""
                          placeholder="Enter Region Name"
                        />
                      </div>
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
                          id=""
                          placeholder="Enter Cities Name"
                        />
                        
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="field-container form-group">
                        <label>Device :</label>
                        <input
                          className="input"
                          type="text"
                          name=""
                          id=""
                          placeholder="Enter Device Name"
                        />
                      </div>
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
                            <input
                              className="urls-input1"
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
                            <div className="display-data">
                              {approveData.map((item) => {
                                const approveTimezone =
                                  item.Timezones.split(",");
                                return (
                                  <div>
                                    {approveTimezone.map((item, index) => {
                                      return (
                                        <span className="api-item" key={index}>
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
                            <Button
                              onClick={() => {
                                setApproveIsOpen({
                                  ...ApproveIsOpen,
                                  approveLanguage: false,
                                });
                                setApproveData([]);
                              }}
                            >
                              Clear
                            </Button>
                            <div className="display-data">
                              {approveData.map((item) => {
                                const approveLanguage =
                                  item.Language.split(",");
                                return (
                                  <div>
                                    {approveLanguage.map((item, index) => {
                                      return (
                                        <span className="api-item" key={index}>
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
      ))}
    </div>
  );
};

export default Tracking;
