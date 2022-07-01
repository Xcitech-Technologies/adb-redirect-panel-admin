import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Button from "../Controls/Button";
import GlobalData from "../GlobalData.json";

const GlobalCondition = () => {
  const [isOpen, setIsOpen] = React.useState({
    referers: true,
    ips1: true,
    macros: true,
    asn: true,
    isp2: true,
    organization: true,
    userAgent: true,
  });

  const [isvisible, setIsvisible] = React.useState({
    approved_referrers: true,
    blocked_referrers: true,
    ips1: true,
  });

  const [data, setData] = React.useState("");

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }

  const removeApproveRefOnclick = (index) => {
    const condition = GlobalData[0].data[0].approved_referrers;
    condition.splice(index, 1);
    setData({ ...data, condition });
  };

  const removeIPsOnclick = (index) => {
    const ips = GlobalData[0].data[0].blocked_IPs;
    ips.splice(index, 1);
    setData({ ...data, ips });
  };

  const removeBlockrefOnclick = (index) => {
    const block = GlobalData[0].data[0].blocked_referrers;
    block.splice(index, 1);
    setData({ ...data, block });
  };

  return (
    <div className="wrapper" style={{ marginTop: "55px" }}>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div
              className="card-header"
              onClick={() =>
                setIsOpen({ ...isOpen, referers: !isOpen.referers })
              }
            >
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
                    type="text"
                  ></input>
                  <button className="button" type="button">
                    Add
                  </button>
                  {isvisible.approved_referrers && (
                    <div className="display">
                      <Button
                        onClick={() => {
                          setIsvisible({
                            ...isvisible,
                            approved_referrers: false,
                          });
                        }}
                      >
                        Clear
                      </Button>
                      <div className="display-data">
                        {GlobalData[0].data[0].approved_referrers.map(
                          (ele, index) => (
                            <span className="api-item" key={index}>
                              <span
                                className="x"
                                onClick={() => {
                                  removeApproveRefOnclick(index);
                                }}
                              >
                                x
                              </span>
                              {ele}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className="card-content">
                  <div className="inputs">
                    <label className="label">Block Referers:</label>
                  </div>
                  <input className="input" type="text"></input>
                  <button className="button" type="button">
                    Add
                  </button>
                  {isvisible.blocked_referrers && (
                    <div className="display">
                      <Button
                        onClick={() => {
                          setIsvisible({
                            ...isvisible,
                            blocked_referrers: false,
                          });
                        }}
                      >
                        Clear
                      </Button>
                      <div className="display-data">
                        {GlobalData[0].data[0].blocked_referrers.map(
                          (ele, index) => (
                            <span className="api-item" key={index}>
                              <span
                                className="x"
                                onClick={() => {
                                  removeBlockrefOnclick(index);
                                }}
                              >
                                x
                              </span>
                              {ele}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div
              className="card-header"
              onClick={() => setIsOpen({ ...isOpen, ips1: !isOpen.ips1 })}
            >
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
                  {isvisible.ips1 && (
                    <div className="display">
                      <Button
                        onClick={() => {
                          setIsvisible({ ...isvisible, ips1: false });
                        }}
                      >
                        Clear
                      </Button>
                      <div className="display-data">
                        {GlobalData[0].data[0].blocked_IPs.map((ele, index) => (
                          <span className="api-item" key={index}>
                            <span
                              className="x"
                              onClick={() => {
                                removeIPsOnclick(index);
                              }}
                            >
                              x
                            </span>
                            {ele}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
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
              onClick={() => setIsOpen({ ...isOpen, macros: !isOpen.macros })}
            >
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
                  {GlobalData.map((ele, index) => (
                    <input
                      className="input"
                      type="text"
                      key={index}
                      value={ele.data[0].meta_alternative}
                      onChange={(e) => handle(e)}
                    ></input>
                  ))}
                  <div className="inputs">
                    <label className="label">Desktop Approved:</label>
                  </div>
                  {GlobalData.map((ele, index) => (
                    <input
                      className="input"
                      type="text"
                      key={index}
                      value={ele.data[0].desktop_approved}
                      onChange={(e) => handle(e)}
                    ></input>
                  ))}
                  <div className="inputs">
                    <label className="label">Mobile Approved:</label>
                  </div>
                  {GlobalData.map((ele, index) => (
                    <input
                      className="input"
                      type="text"
                      key={index}
                      value={ele.data[0].mobile_approved}
                      onChange={(e) => handle(e)}
                    ></input>
                  ))}
                  <div className="inputs">
                    <label className="label">Intermediary Rejected:</label>
                  </div>
                  {GlobalData.map((ele, index) => (
                    <input
                      className="input"
                      type="text"
                      key={index}
                      value={ele.data[0].intermediary_rejected}
                      onChange={(e) => handle(e)}
                    ></input>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div
              className="card-header"
              onClick={() => setIsOpen({ ...isOpen, asn: !isOpen.asn })}
            >
              <div className="collapes_btn">
                <p className="card-title"> ASN </p>
                {isOpen ? <FaAngleUp /> : <FaAngleDown />}
              </div>
            </div>
            {isOpen.asn && (
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
            <div
              className="card-header"
              onClick={() => setIsOpen({ ...isOpen, isp2: !isOpen.isp2 })}
            >
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
              onClick={() =>
                setIsOpen({ ...isOpen, organization: !isOpen.organization })
              }
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
              onClick={() =>
                setIsOpen({ ...isOpen, userAgent: !isOpen.userAgent })
              }
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
        <button className="update-btn" type="button">
          Update
        </button>
      </div>
    </div>
  );
};

export default GlobalCondition;
