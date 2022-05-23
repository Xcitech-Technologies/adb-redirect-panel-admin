import React from "react";
import Button from "../../../Controls/Button";
import jsonData from "../../../data.json";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

const Locations = () => {
  // const [isapproved, setIsapproved] = React.useState({referers: false, countries: false, cities:false, region: false, language:false, timeZone: false});
  const [ApproveIsOpen, setApproveIsOpen] = React.useState({
    approveCountries: false,
    approveLanguage: false,
    approveTimeZone: false,
    blockCountries: false,
    blockLanguage: false,
    blockTimezone: false,
  });

  const [BlockIsOpen, setBlockIsOpen] = React.useState({
    blockCountries: false,
    blockLanguage: false,
    blockTimezone: false,
  });
  const [approveData, setApproveData] = React.useState([]);
  const [blockData, setBlockData] = React.useState([]);

  const arrayData = jsonData[0].MasterData.map((item) => ({
    CountryCode: item.CountryCode,
    Pop: item.Pop,
    CountryName: item.CountryName,
    Timezones: item.Timezones,
    Language: item.Language,
    CountryLanguagecode: item.CountryLanguagecode,
    Domain: item.Domain,
  }));
  console.log(approveData);

  const handleOnSearch = (string, results) => {
    console.log(string, results);
  };

  const blockHandleSearch = (string, results) => {
    console.log(string, results);
  };

  const handleOnSelect = (item) => {
    console.log(item);
    setApproveData([...approveData, item]);
    setApproveIsOpen({
      approveCountries: true,
      approveLanguage: true,
      approveTimeZone: true,
    });
  };

  const blockHandleSelect = (item) => {
    console.log(item);
    setBlockData([...approveData, item]);
    setBlockIsOpen({
      blockCountries: true,
      blockLanguage: true,
      blockTimezone: true,
    });
  };

  // const arrayAllData = [];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Referers</div>
            <div className="card-body">
              <div className="form-group" style={{ display: "flex" }}>
                <div className="form-check col-md-4 mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="allow_exception"
                  />
                  <label className="form-check-label" style={{ color: "#fff" }}>
                    Allow exception
                  </label>
                </div>
                <div className="form-check col-md-4 mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="allow_blank_referer"
                  />
                  <label className="form-check-label" style={{ color: "#fff" }}>
                    Allow Blank Referer
                  </label>
                </div>
                <div className="form-check col-md-4 mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="allow_non_unique_clicks"
                  />
                  <label className="form-check-label" style={{ color: "#fff" }}>
                    Allow Non Unique Clicks
                  </label>
                </div>
              </div>
              <div className="inputs">
                <label className="label">Approved Referers:</label>
              </div>
              <input className="input" id="approvRaf" type="text"></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">block Referers:</label>
              </div>
              <input className="input" id="approvRaf" type="text"></input>
              <button className="button" type="button">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Countries</div>
            <div className="cards-body">
              <div className="inputs">
                <label className="label">Approve Country List :</label>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <ReactSearchAutocomplete
                    items={arrayData}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    showIcon={false}
                    styling={{
                      height: "5px",
                      backgroundColor: "#12141D",
                      borderRadius: "5px",
                      border: "none",
                      padding: "-20px",
                      color: "white",
                      hoverBackgroundColor: "lightgreen",
                      lineColor: "lightgreen",
                    }}
                    fuseOptions={{ keys: ["CountryCode", "CountryName"] }} // Search on both fields
                    resultStringKeyName="CountryName" // String to display in the results
                  />
                </div>
                <div className="col-md-2">
                  <button className="add-button" type="button">
                    Search
                  </button>
                </div>
              </div>
              {ApproveIsOpen.approveCountries && (
                <>
                  <Button>Clear</Button>
                  <div className="display-data">
                    {approveData.map((item, index) => {
                      return (
                        <span className="api-item" key={index}>
                          <span className="x">x</span>
                          {item.CountryName}
                        </span>
                      );
                    })}
                  </div>
                </>
              )}

              <div className="inputs">
                <label className="label">Block Country List :</label>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <ReactSearchAutocomplete
                    items={arrayData}
                    onSearch={blockHandleSearch}
                    onSelect={blockHandleSelect}
                    showIcon={false}
                    styling={{
                      height: "5px",
                      backgroundColor: "#12141D",
                      borderRadius: "5px",
                      border: "none",
                      padding: "-20px",
                      color: "white",
                      hoverBackgroundColor: "lightgreen",
                      lineColor: "lightgreen",
                    }}
                    fuseOptions={{ keys: ["CountryCode", "CountryName"] }} // Search on both fields
                    resultStringKeyName="CountryName" // String to display in the results
                  />
                </div>
                <div className="col-md-2">
                  <button className="add-button" type="button">
                    Search
                  </button>
                </div>
              </div>
              {BlockIsOpen.blockCountries && (
                <>
                  <Button>Clear</Button>
                  <div className="display-data">
                    {blockData.map((item, index) => {
                      return (
                        <span className="api-item" key={index}>
                          <span className="x">x</span>
                          {item.CountryName}
                        </span>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Cities</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve City List :</label>
              </div>
              <input
                className="input"
                id="approvRaf"
                type="text"
                placeholder="Add City"
              ></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">Block City List :</label>
              </div>
              <input
                className="input"
                id="approvRaf"
                type="text"
                placeholder="Add City"
              ></input>
              <button className="button" type="button">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Region</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve Region List :</label>
              </div>
              <input
                className="input"
                id="approvRaf"
                type="text"
                placeholder="Add Region"
              ></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">Block Region List :</label>
              </div>
              <input
                className="input"
                id="approvRaf"
                type="text"
                placeholder="Add Region"
              ></input>
              <button className="button" type="button">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Language</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve Language :</label>
              </div>
              <input className="input" id="approvRaf" type="text"></input>
              <button className="button" type="button">
                Add
              </button>
              {ApproveIsOpen.approveLanguage && (
                <>
                  <Button>Clear</Button>
                  <div className="display-data">
                  {approveData.map(( item ) => {
                      const approveLanguage = item.Language.split(",");
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
                </>
              )}
              <div className="inputs">
                <label className="label">Block Language :</label>
              </div>
              <input className="input" id="approvRaf" type="text"></input>
              <button className="button" type="button">
                Add
              </button>
              {BlockIsOpen.blockLanguage && (
                <>
                  <Button>Clear</Button>
                  <div className="display-data">
                  {blockData.map(( item ) => {
                      const BlockLanguage = item.Language.split(",");
                      return (
                        <div>
                          {BlockLanguage.map((item, index) => {
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
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">TimeZone</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approved TimeZone :</label>
              </div>
              <input className="input" id="approvRaf" type="text"></input>
              <button className="button" type="button">
                Add
              </button>
              {ApproveIsOpen.approveTimeZone && (
                <>
                  <Button>Clear</Button>
                  <div className="display-data">
                    {approveData.map(( item ) => {
                      const approveTimezone = item.Timezones.split(",");
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
                </>
              )}
              <div className="inputs">
                <label className="label">Blocked TimeZone :</label>
              </div>
              <input className="input" id="approvRaf" type="text"></input>
              <button className="button" type="button">
                Add
              </button>
              {BlockIsOpen.blockTimezone && (
                <>
                  <Button>Clear</Button>
                  <div className="display-data">
                  {blockData.map(( item ) => {
                      const blockTimezone = item.Timezones.split(",");
                      return (
                        <div>
                          {blockTimezone.map((item, index) => {
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
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
