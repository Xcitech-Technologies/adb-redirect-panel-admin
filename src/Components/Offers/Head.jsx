import React from "react";
import { Button } from "react-bootstrap";

const Head = ({ id, handleSubmit, tabs, selectedTab, handleSelectTab }) => (
  <div className="header">
    <div className="box">
      <div className="d-flex">
        {tabs.map((tab, key) => (
          <Button
            key={key}
            className={`${tab === selectedTab ? "selected" : ""} tabButton `}
            onClick={() => handleSelectTab(tab)}
          >
            {tab}
          </Button>
        ))}
      </div>
      <Button className="submit" onClick={handleSubmit}>
        {id ? "Edit Offer" : "Add Offer"}
      </Button>
    </div>
  </div>
);

export default Head;
