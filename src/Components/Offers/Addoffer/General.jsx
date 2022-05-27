import React from "react";

const General = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <p className="header-label">Offer Details :</p>
              <select className="header-select form-control" id="type">
                <option defaultValue="all">All</option>
                <option value="Google Ads D2M">Google Ads D2M</option>
                <option value="Casino Offer">Casino Offer</option>
                <option value="Coupon Popup">Coupon Popup</option>
              </select>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3">
                  <div className="inputs">
                    <label className="label">Enter Offer ID :</label>
                  </div>
                  <input className="g-input" type="text" placeholder="" />
                </div>

                <div className="col-md-3">
                  <div className="inputs">
                    <label className="label">Offer Name :</label>
                  </div>
                  <input className="g-input" type="text" />
                </div>

                <div className="col-md-3">
                  <div className="inputs">
                    <label className="label">type :</label>
                  </div>
                  <input className="g-input" type="text" />
                </div>

                <div className="col-md-3">
                  <div className="inputs">
                    <label className="label">Network ID :</label>
                  </div>
                  <input className="g-input" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <div className="inputs">
                    <label className="label">HasOffer ID :</label>
                  </div>
                  <input className="g-input" type="text" />
                </div>

                <div className="col-md-6">
                  <div className="inputs">
                    <label className="label">Approved Domain :</label>
                  </div>
                  <input className="g-input" type="text" />
                </div>

                <div className="col-md-3">
                  <div className="inputs">
                    <label className="label">Associate Tags :</label>
                  </div>
                  <input className="g-input" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="inputs">
                    <label className="label">Description :</label>
                  </div>
                  <textarea className="g-input" type="text" rows="5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">Default Destination</div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="inputs">
                    <label className="label">Redirect URL :</label>
                  </div>
                  <input className="g-input" type="text" placeholder="" />
                </div>

                <div className="col-md-6">
                  <div className="inputs">
                    <label className="label">Reject URL :</label>
                  </div>
                  <input className="g-input" type="text" placeholder="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
