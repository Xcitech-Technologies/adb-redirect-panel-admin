import React, { useEffect } from "react";
import { Row, Col, Button, Table } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { RiArrowUpDownFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import CustomCard from "../../Components/UI/CustomCard.jsx";
import CustomInput from "../../Components/UI/CustomInput.jsx";
import CustomSelect from "../../Components/UI/CustomSelect.jsx";
import getOffersAction from "../../Store/Offers/actions";

const Offers = () => {
  const dispatch = useDispatch();

  const { offers } = useSelector((state) => state.Offers);
  console.log(offers);

  useEffect(() => {
    dispatch(getOffersAction());
  }, [dispatch]);

  return (
    <div className="offersContainer">
      <CustomCard header={<Header />}>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>
                Type <RiArrowUpDownFill />
              </th>
              <th>
                Offer Id <RiArrowUpDownFill />
              </th>
              <th>
                Offer Name <RiArrowUpDownFill />
              </th>
              <th>
                Assigned To <RiArrowUpDownFill />
              </th>
              <th>
                Modify <RiArrowUpDownFill />
              </th>
              <th>
                Action <RiArrowUpDownFill />
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((data, key) => (
              <tr key={key}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{data.type}</td>
                <td>{data.original}</td>
                <td>{data.nickname}</td>
                <td>{data.name}</td>
                <td>
                  {moment
                    .unix(data.timestamp)
                    .local()
                    .format("DD MMM YYYY, hh:MM A")}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </CustomCard>
    </div>
  );
};
const Header = () => (
  <div className="head">
    <Row style={{ width: "100%", display: "flex", alignItems: "center" }}>
      <Col md={8}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Col md={7}>
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

              <CustomInput
                type="text"
                style={{ margin: "0 5px" }}
                placeholder="Tags"
              />
            </div>
          </Col>
          <Col md={2}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <CustomSelect
                style={{ margin: "0 5px" }}
                options={[
                  { name: "All", value: null },
                  { name: "Active", value: 1 },
                  { name: "Paused", value: 0 },
                ]}
              />
            </div>
          </Col>
          <Col md={3}>
            <CustomSelect
              style={{ margin: "0 5px" }}
              options={[
                { name: "All", value: "All" },
                { name: "Google Ads D2M", value: "Active" },
                { name: "Casino Offer", value: "Casino Offer" },
                { name: "Coupon Popup", value: "Coupon Popup" },
              ]}
            />
          </Col>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex">
          <Button className="green">
            <FaSearch />
          </Button>
          <Button className="white">Add Offer</Button>
          <Button className="white">Export</Button>
        </div>
      </Col>
    </Row>
  </div>
);

export default Offers;
