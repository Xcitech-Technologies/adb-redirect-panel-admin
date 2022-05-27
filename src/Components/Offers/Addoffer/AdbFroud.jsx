import React from "react";

const AdbFroud = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Offer Details</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-5">
                  <div className="inputs">
                    <label className="label">Meta :</label>
                  </div>
                  <div class="radio-item">
                    <input defaultChecked type="radio" id="meta1" name="meta" />
                    <label className="radio-meta" htmlFor="meta1">
                      Off
                    </label>
                    <input type="radio" id="meta2" name="meta" />
                    <label className="radio-meta" htmlFor="meta2">
                      Froud Detection Only
                    </label>
                    <input type="radio" id="meta3" name="meta" />
                    <label className="radio-meta" htmlFor="meta3">
                      Froud Detection + Fingerprinting
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div className="inputs">
                    <label className="label">S2S :</label>
                  </div>
                  <div class="radio-item">
                    <input defaultChecked type="radio" id="s2s1" name="s2s" />
                    <label className="radio-meta" htmlFor="s2s1">
                      Off
                    </label>
                    <input type="radio" id="s2s2" name="s2s" />
                    <label className="radio-meta" htmlFor="s2s2">
                      Froud Detection Only
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <div className="inputs">
                    <label className="label">Meta :</label>
                  </div>
                  <input className="g-input" type="text" />
                </div>
                <div className="col-md-4">
                  <div className="inputs">
                    <label className="label">Meta :</label>
                  </div>
                  <input className="g-input" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12" style={{ display: "flex" }}>
                  <div className="form-check col-md-3 mt-2">
                    <input
                      checked
                      type="checkbox"
                      className="form-check-input"
                      id="allow_exception"
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "#fff" }}
                    >
                      Reduce Strictness
                    </label>
                  </div>
                  <div className="form-check col-md-3 mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="allow_blank_referer"
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "#fff" }}
                    >
                      Allow Proxy
                    </label>
                  </div>
                  <div className="form-check col-md-3 mt-2">
                    <input
                      checked
                      type="checkbox"
                      className="form-check-input"
                      id="allow_non_unique_clicks"
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "#fff" }}
                    >
                      Block Bot Detected
                    </label>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12" style={{ display: "flex" }}>
                  <div className="form-check col-md-3 mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="allow_exception"
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "#fff" }}
                    >
                      Allow VPN
                    </label>
                  </div>
                  <div className="form-check col-md-3 mt-2">
                    <input
                      checked
                      type="checkbox"
                      className="form-check-input"
                      id="allow_blank_referer"
                    />
                    <label
                      className="form-check-label"
                      style={{ color: "#fff" }}
                    >
                      Lighter Penalties
                    </label>
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
            <div className="card-header">Connection Type</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve Connection Type List :</label>
              </div>
              <input
                className="input"
                id="approved_connection_type"
                type="text"
                placeholder="Add City"
              ></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">Block Connection Type List :</label>
              </div>
              <input
                className="input"
                id="block_connection_type"
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
            <div className="card-header">ISP</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve ISP :</label>
              </div>
              <input
                className="input"
                type="text"
                placeholder="Add ISP"
              ></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">Block ISP :</label>
              </div>
              <input
                className="input"
                type="text"
                placeholder="Add Blocked ISP"
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
            <div className="card-header">ASN</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve ASN List :</label>
              </div>
              <input
                className="input"
                id="approved_asn"
                type="text"
                placeholder="Add ASN"
              ></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">Block ASN List :</label>
              </div>
              <input
                className="input"
                id="block_asn"
                type="text"
                placeholder="Add ASN"
              ></input>
              <button className="button" type="button">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Organization</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve Organization List :</label>
              </div>
              <input
                className="input"
                type="text"
                id="approved_organization"
                placeholder="Add Organization"
              ></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">Block Organization List :</label>
              </div>
              <input
                className="input"
                type="text"
                id="block_organization"
                placeholder="Add Blocked Organization"
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
            <div className="card-header">Aff Sub 2</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Approve Aff Sub 2 List :</label>
              </div>
              <input
                className="input"
                id="approve_aff_sub_2"
                type="text"
                placeholder="Add Aff Sub 2"
              ></input>
              <button className="button" type="button">
                Add
              </button>
              <div className="inputs">
                <label className="label">Block Aff Sub 2 List :</label>
              </div>
              <input
                className="input"
                id="block_aff_sub_2"
                type="text"
                placeholder="Add Aff Sub 2"
              ></input>
              <button className="button" type="button">
                Add
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Other</div>
            <div className="card-body">
              <div className="inputs">
                <label className="label">Abuse Velocity :</label>
              </div>
              <select className="urls-input1 form-control" id="type">
                <option defaultValue="none">None</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>

              <div className="form-group" style={{ display: "flex" }}>
                <div className="form-check col-md-4 mt-2">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="allow_recent_abuse"
                    checked
                  />
                  <label className="form-check-label" style={{ color: "#fff" }}>
                    Allow Recent Abuse
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdbFroud;
