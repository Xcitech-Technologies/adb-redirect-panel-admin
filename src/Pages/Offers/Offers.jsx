import React from "react";
import { Row, Col } from "react-bootstrap";
import CustomCard from "../../Components/UI/CustomCard.jsx";
import CustomInput from "../../Components/UI/CustomInput.jsx";

const Offers = () => (
  <div className="offersContainer">
    <CustomCard header={<Header />}></CustomCard>
  </div>
);
const Header = () => (
  <div className="head">
    <Row style={{ width: "100%" }}>
      <Col md={9}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <CustomInput
            type="text"
            style={{ marginRight: "10px" }}
            placeholder="Search"
          />

          <CustomInput type="text" style={{ margin: "5px" }} />
          <CustomInput type="text" style={{ margin: "5px" }} />
          <CustomInput type="text" style={{ margin: "5px" }} />
        </div>
      </Col>
    </Row>
  </div>
);

export default Offers;
