import React from "react";
import Button from "../../../Controls/Button";
import jsonData from "../../../data.json";

const Locations = () => {
  // const [isapproved, setIsapproved] = React.useState({referers: false, countries: false, cities:false, region: false, language:false, timeZone: false});
  const [data, setData] = React.useState("");

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

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
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve Country List :</label>
              </div>
              {jsonData[0].MasterData.map((item, index) =>  (
                    <div key={index}>
                      <input
                        className="input"
                        id="approvRaf"
                        type="text"
                        placeholder="Search County"
                        onChange={(e) => handle(e)}
                        value={item.CountryName}
                      ></input>
                    </div>
                  )
              )}

              <button className="button" type="button">
                Add
              </button>
              <Button>Clear</Button>

              <div className="inputs">
                <label className="label">Block Country List :</label>
              </div>
              <input
                className="input"
                id="approvRaf"
                type="text"
                placeholder="Search County"
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
              <div className="inputs">
                <label className="label">Block Language :</label>
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
            <div className="card-header">TimeZone</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approved TimeZone :</label>
              </div>
              <input className="input" id="approvRaf" type="text"></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">Blocked TimeZone :</label>
              </div>
              <input className="input" id="approvRaf" type="text"></input>
              <button className="button" type="button">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
