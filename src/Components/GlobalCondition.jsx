import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Button from "../Controls/Button";

const GlobalCondition = () => {
  const [isOpen, setIsOpen] = React.useState({referers: true, ips1: true, macros:true, asn: true, isp2: true, organization:true, userAgent:true});
  // const [referers, setReferers] = React.useState(true);
  // const [ips, setIps] = React.useState(true);
  // const [macros, setMacros] = React.useState(true);
  // const [asn, setAsn] = React.useState(true);
  // const [isp, setIsp] = React.useState(true);
  // const [organization, setOrganization] = React.useState(true);
  // const [userAgent, setUserAgent] = React.useState(true);

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
            <div className="card-header" onClick={() => setIsOpen({...isOpen,referers:!isOpen.referers})}>
              <div className="collapes_btn">
                <p className="card-title"> Referers </p>
                {isOpen.referers ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isOpen.referers && (
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
            <div className="card-header" onClick={() => setIsOpen({...isOpen,ips1:!isOpen.ips1})}>
              <div className="collapes_btn">
                <p className="card-title"> IPs </p>
                {isOpen.ips1 ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isOpen.ips1 && (
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
            <div className="card-header" onClick={() => setIsOpen({...isOpen,macros:!isOpen.macros})}>
              <div className="collapes_btn">
                <p className="card-title"> Macros </p>
                {isOpen.macros ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isOpen.macros && (
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
            <div className="card-header" onClick={() => setIsOpen({...isOpen,asn:!isOpen.asn})}>
              <div className="collapes_btn">
                <p className="card-title"> ASN </p>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isOpen && (
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
            <div className="card-header" onClick={() => setIsOpen({...isOpen,ips2:!isOpen.ips2})}>
              <div className="collapes_btn">
                <p className="card-title"> ISP </p>
                {isOpen.isp2 ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isOpen.isp2 && (
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
              onClick={() => setIsOpen({...isOpen,organization:!isOpen.organization})}
            >
              <div className="collapes_btn">
                <p className="card-title"> Organization </p>
                {isOpen.organization ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isOpen.organization && (
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
              onClick={() => setIsOpen({...isOpen,userAgent:!isOpen.userAgent})}
            >
              <div className="collapes_btn">
                <p className="card-title"> User Agent </p>
                {isOpen.userAgent ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isOpen.userAgent && (
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
