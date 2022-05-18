import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Button from "../Controls/Button";

const GlobalCondition = () => {
  const [referers, setReferers] = React.useState(true);
  const [ips, setIps] = React.useState(true);
  const [macros, setMacros] = React.useState(true);
  const [asn, setAsn] = React.useState(true);
  const [isp, setIsp] = React.useState(true);
  const [organization, setOrganization] = React.useState(true);
  const [userAgent, setUserAgent] = React.useState(true);

  const [add, setAdd] = React.useState(false);

  const [data, setData] = React.useState("");

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData.approvRaf);
  }

  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" onClick={() => setReferers(!referers)}>
              <div className="collapes_btn">
                <p className="card-title"> Referers </p>
                {referers ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {referers && (
              <div className="card-body">
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Approved Referers:</label>
                  </div>
                  <input
                    className="input"
                    onChange={(e) => handle(e)}
                    id="approvRaf"
                    value={data.approvRaf}
                    type="text"
                  ></input>
                  <button
                    className="button"
                    type="button"
                    onClick={() => {
                      console.log("clicked");
                      console.log(data.approvRaf);
                      setAdd(true);
                    }}
                  >
                    Add
                  </button>
                  {add && (
                    <div className="display">
                      <Button type="button">Clear</Button>
                      <div className="apidata">{data.approvRaf}</div>
                    </div>
                  )}
                </div>
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Block Referers:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button
                    className="button"
                    type="button"
                    onClick={() => {
                      console.log("clicked");
                      setAdd(true);
                    }}
                  >
                    Add
                  </button>
                  {add && (<div className="display">
                      <Button type="button">Clear</Button>
                      <div className="apidata"></div>
                    </div>)}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header" onClick={() => setIps(!ips)}>
              <div className="collapes_btn">
                <p className="card-title"> IPs </p>
                {ips ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {ips && (
              <div className="card-body">
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">IPs Conditions:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" onClick={() => setMacros(!macros)}>
              <div className="collapes_btn">
                <p className="card-title"> Macros </p>
                {macros ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {macros && (
              <div className="card-body">
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Meta Alternative:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <div className="inputs">
                    <label className="label">Desktop Approved:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <div className="inputs">
                    <label className="label">Mobile Approved:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <div className="inputs">
                    <label className="label">Intermediary Rejected:</label>
                  </div>
                  <input className="input" type="text"></input>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header" onClick={() => setAsn(!asn)}>
              <div className="collapes_btn">
                <p className="card-title"> ASN </p>
                {asn ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {asn && (
              <div className="card-body">
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Approved ASN:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Block ASN:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" onClick={() => setIsp(!isp)}>
              <div className="collapes_btn">
                <p className="card-title"> ISP </p>
                {isp ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isp && (
              <div className="card-body">
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Approved ISP:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Block ISP:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div
              className="card-header"
              onClick={() => setOrganization(!organization)}
            >
              <div className="collapes_btn">
                <p className="card-title"> Organization </p>
                {organization ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {organization && (
              <div className="card-body">
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Approved Organization:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Block Organization:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div
              className="card-header"
              onClick={() => setUserAgent(!userAgent)}
            >
              <div className="collapes_btn">
                <p className="card-title"> User Agent </p>
                {userAgent ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {userAgent && (
              <div className="card-body">
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Approved User Agent:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Block User Agent:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="update-cls">
        <button className="update-btn" type="button">Update</button>
      </div>
    </div>
  );
};

export default GlobalCondition;
