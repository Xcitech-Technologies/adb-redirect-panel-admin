import React from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import Input from "../Controls/Inputs";
// import Button from "../Controls/Button";

const GlobalCondition = () => {
  const [referers, setReferers] = React.useState(true);
  const [ips, setIps] = React.useState(true);
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
                  <Input label="Approved Referers :"></Input>
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
                  <Input label="IP Conditions :"></Input>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalCondition;
