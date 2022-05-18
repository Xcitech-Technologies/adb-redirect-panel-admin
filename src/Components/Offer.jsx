import React from "react";

const Offer = () => {
  return (
    <div className="wrapper">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <div className="flex-container">
                <div className="flex-grow: 2">
                 <form className="float-left">
                   <div className="form-group form-inline mr-3">
                   <input
                        className="form-control mr-2"
                        type="text"
                        name="Search here"
                        placeholder="Search"
                      />
                   </div>
                 </form> 
                </div>

                <div className="flex-grow: 1">
                 <div className="form-group">
                   <div className="input-group form-inline mr-3">
                   <input
                        className="form-control mr-2"
                        type="text"
                        name="Search here"
                        placeholder="Tag"
                      />
                   </div>
                 </div> 
                </div>

                <div className="flex-grow: 1">
                  <form className="form-group d-flex">
                      <select className="form-control" id="status">
                        <option defaultValue="all">All</option>
                        <option value="1">Active</option>
                        <option value="0">Paused</option>
                      </select>
                  </form>
                </div>

                <div className="flex-grow: 1">
                  <form className="form-group d-flex">
                      <select className="form-control" id="status">
                        <option defaultValue="all">All</option>
                        <option value="1">Active</option>
                        <option value="0">Paused</option>
                      </select>
                  </form>
                </div>

              </div>
            </div>
            <div className="card-body">
              <div className="card-content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
