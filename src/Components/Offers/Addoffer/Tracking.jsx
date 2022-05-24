import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { BiAddToQueue } from "react-icons/bi";

const Tracking = () => {
  const [addCondition, setAddCondition] = React.useState([
    { condition: "", open: true },
  ]);

  const addConditionOnclick = () => {
    setAddCondition([...addCondition, { condition: "", open: false }]);
  };

  const hnndleOpen = (index) => {
    let item = addCondition[index];
    item.open = !item.open;
    addCondition[index] = item;
    setAddCondition([...addCondition]);
  };

  const [addField, setaddField] = React.useState([{ condition: "" }]);

  const addFieldOnclick = () => {
    setaddField([...addField, { condition: "" }]);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div>
          <button
            type="button"
            className="btn-condition"
            onClick={addConditionOnclick}
          >
            Add Condition
          </button>
        </div>
      </div>
      {addCondition.map((item, index) => (
        <div className="row" key={index}>
          <div className="col-md-12">
            <div className="card">
              <div className="card-header" onClick={() => hnndleOpen(index)}>
                <div className="collapes_btn">
                  Condition {index + 1}
                  {item.open ? <FaAngleUp /> : <FaAngleDown />}
                </div>
              </div>
              {item.open && (
                <div className="cards-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="field-container form-group">
                        <label>Country :</label>
                        <input
                          className="input"
                          type="text"
                          name=""
                          id=""
                          placeholder="Search Country Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="field-container form-group">
                        <label>Region :</label>
                        <input
                          className="input"
                          type="text"
                          name=""
                          id=""
                          placeholder="Search Region Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="field-container form-group">
                        <label>Cities :</label>
                        <input
                          className="input"
                          type="text"
                          name=""
                          id=""
                          placeholder="Search Cities Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="field-container form-group">
                        <label>Device :</label>
                        <input
                          className="input"
                          type="text"
                          name=""
                          id=""
                          placeholder="Search Device Name"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="radio-container form-group">
                        <input className="radio-input" selected type="radio" name="redio" id="1" />
                        <label className="radio-label" for="1">Weight Base</label>
                        <input className="radio-input" type="radio" name="redio" id="2" />
                        <label className="radio-label" for="2">Time Base</label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="urlfield-container form-group">
                        <label>URLs :</label>
                        <button
                          className="addurl-btn"
                          type="button"
                          onClick={addFieldOnclick}
                        >
                          <BiAddToQueue />
                        </button>
                        {addField.map((add, index) => (
                          <>
                            <input
                              className="urls-input1"
                              type="text"
                              name=""
                              id=""
                              placeholder="Enter URLs"
                              key={index}
                            />
                            <input
                              className="urls-input2"
                              type="text"
                              placeholder="WT"
                            />
                            <input
                              className="urls-input3"
                              type="text"
                              placeholder="CAP"
                            />
                          </>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="pt-container form-group">
                        <label>PT URLs :</label>
                        <input className="pt-input" type="text" placeholder="Desktop PT URL"/>
                      </div>
                      <div className="form-group">
                        <input className="pturl-input" type="text" placeholder="Mobile PT URL"/>
                      </div>
                      <div className="form-group">
                        <input className="pturl-input" type="text" placeholder="intermediary URL"/>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="last-container form-group">
                        <label>TimeZone :</label>
                        <input
                          className="last-input"
                          type="text"
                          name=""
                          id=""
                          placeholder="Search Country Name"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="last-container form-group">
                        <label>Languages :</label>
                        <input
                          className="last-input"
                          type="text"
                          name=""
                          id=""
                          placeholder="Search Region Name"
                        />
                      </div>
                    </div>
                  </div>

                  

                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracking;
