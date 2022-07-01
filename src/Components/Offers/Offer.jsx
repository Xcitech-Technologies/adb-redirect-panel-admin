import React from "react";
import { FaSearch } from "react-icons/fa";
import { BiSort } from "react-icons/bi";
import { StyledLink } from "../../Layout/NavbarElements.jsx";

const Offer = () => (
  <div className="wrapper" style={{ marginTop: "55px" }}>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <div className="flex-container">
              <div className="form-group form-inline">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                />
              </div>

              <div className="form-group">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Tag"
                  />
                </div>
              </div>

              <div className="form-group">
                <select className="form-control" id="status">
                  <option defaultValue="all">All</option>
                  <option value="1">Active</option>
                  <option value="0">Paused</option>
                </select>
              </div>

              <div className="form-group">
                <select className="form-control" id="type">
                  <option defaultValue="all">All</option>
                  <option value="Google Ads D2M">Google Ads D2M</option>
                  <option value="Casino Offer">Casino Offer</option>
                  <option value="Coupon Popup">Coupon Popup</option>
                </select>
              </div>
              <button className="search-btn">
                <FaSearch />
              </button>

              <StyledLink className="add-offer-btn" to="/admin/offers/addoffer">
                Add Offer
              </StyledLink>
              <button className="export-btn">Export</button>
            </div>
          </div>
          <div className="card-content">
            <div className="col-md-12" style={{ position: "relative" }}>
              <div className=" table table-striped table-responsive">
                <table className="table mb-0 link-table">
                  <thead style={{ backgroundColor: "#1a1c2a" }}>
                    <tr>
                      <th scope="col" className="fixed-side">
                        <div className="form-group">
                          <input type="checkbox" id="selectall" value="1" />
                        </div>
                      </th>
                      <th scope="col" className="fixed-side">
                        <span className="title_table">Type</span>
                        <span className="filter_arrow">
                          <BiSort />
                        </span>
                      </th>
                      <th scope="col" className="fixed-side">
                        <span className="title_table">Offer ID</span>
                        <span className="filter_arrow">
                          <BiSort />
                        </span>
                      </th>
                      <th scope="col" className="fixed-side">
                        <span className="title_table">Offer Name</span>
                        <span className="filter_arrow">
                          <BiSort />
                        </span>
                      </th>
                      <th scope="col" className="fixed-side">
                        <span className="title_table">Assigned To</span>
                        <span className="filter_arrow">
                          <BiSort />
                        </span>
                      </th>
                      <th scope="col" className="fixed-side">
                        <span className="title_table">Modify</span>
                        <span className="filter_arrow">
                          <BiSort />
                        </span>
                      </th>
                      <th scope="col" className="fixed-side">
                        <span className="title_table">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="fixed-side">
                        <div className="form-group">
                          <input type="checkbox" />
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Offer;
