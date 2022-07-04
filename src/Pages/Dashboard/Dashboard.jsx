import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CustomCard from "../../Components/UI/CustomCard.jsx";
import getDashboardAction from "../../Store/Dashboard/actions";

const data = {
  totalClicks: 999387,
  top10Offers: [
    { count: [2711, 351234], origin: "Banggood [Retag]", total: 353945 },
    { count: [68110, 108388], origin: "Desertcart [Retag]", total: 176498 },
    { count: [35092, 85788], origin: "Cotosen [Retag]", total: 120880 },
    { count: [34306, 44864], origin: "Newchic [Retag]", total: 79170 },
    { count: [3260, 53203], origin: "Faces [Retag]", total: 56463 },
    { count: [24346, 29308], origin: "Oziva IN [Retag]", total: 53654 },
    { count: [2905, 47591], origin: "Fairyseason [Retag]", total: 50496 },
    { count: [6148, 13767], origin: "Karagiri [Retag]", total: 19915 },
    { count: [360, 18743], origin: "The Luxury Closet [Retag] ", total: 19103 },
    { count: [1340, 15581], origin: "Ishopping [Retag]", total: 16921 },
    { count: [543, 14264], origin: "TBDress [Retag]", total: 14807 },
    { count: [1729, 12236], origin: "basharacare [Retag]", total: 13965 },
    { count: [2058, 6344], origin: "Mufti jeans [Retag]", total: 8402 },
    { count: [6544, 61], origin: "Boat-lifestyle [Retag] ", total: 6605 },
    { count: [243, 3774], origin: "FeelUnique [Retag]", total: 4017 },
  ],
  statusData: [
    { count: 808607, status: "Rejected" },
    { count: 190863, status: "Approved" },
  ],
  reasonData: [
    { count: 487522, reason: "LP not approved" },
    { count: 287837, reason: "LP Blocked" },
    { count: 17625, reason: "Width below range" },
    { count: 14525, reason: "Height below range" },
    { count: 836, reason: "Timezone not approved" },
    { count: 135, reason: "Timezone blocked" },
    { count: 85, reason: "Height above range" },
    { count: 79, reason: "Width above range" },
  ],
};

const Dashboard = () => {
  const dispatch = useDispatch();

  // const { data } = useSelector((state) => state.Dashboard);

  useEffect(() => {
    dispatch(getDashboardAction());
  }, [dispatch]);

  return (
    <div className="dashboardContainer">
      <Row>
        <Col md={9}>
          <CustomCard />
        </Col>
        <Col md={3}>
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
