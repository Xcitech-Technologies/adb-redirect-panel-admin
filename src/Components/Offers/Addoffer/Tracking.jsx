import React from "react";
import Input from "../../../Controls/Input";
import Button from "../../../Controls/Button";
import { Form } from "react-bootstrap";

const Tracking = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Approved URL</div>
            <div className="card-body"></div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Reject URL</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Enter Redirect Url:</label>
              </div>
              <input className="input" type="text"></input>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Reject URL</div>
            <div className="card-body">
              <div className="form-group" style={{ display: "flex" }}>
                <div className="form-check col-md-2 mt-2">
                <Form>
                      {["radio"].map((type) => (
                          <Form.Check
                            key={`default-${type}`}
                            className="mb-3"
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                          />
                      ))}
                    </Form>
                </div>
                <div className="form-check col-md-2 mt-2">
                <Form>
                      {["radio"].map((type) => (
                          <Form.Check
                            key={`default-${type}`}
                            className="mb-3"
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                          />
                      ))}
                    </Form>
                </div>
                <div className="form-check col-md-2 mt-2">
                <Form>
                      {["radio"].map((type) => (
                          <Form.Check
                            key={`default-${type}`}
                            className="mb-3"
                            type={type}
                            id={`default-${type}`}
                            label={`default ${type}`}
                          />
                      ))}
                    </Form>
                  <div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Approved URL</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <div className="inputs">
                    <label className="label">Enter Redirect Url:</label>
                  </div>
                  <input className="freq-inputs" type="text"></input>
                </div>
                <div className="col-md-7">
                  <div className="inputs">
                    <label className="label">Enter Redirect Url:</label>
                  </div>
                  <input className="freq-due-input" type="number"></input>
                  <input className="freq-due-input" type="text"></input>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Reject URL</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Enter Redirect Url:</label>
              </div>
              <input className="input" type="text"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracking;
