import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import CustomCard from "../../Components/UI/CustomCard.jsx";
import getDashboardAction from "../../Store/Dashboard/actions";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  LinearScale,
  BarElement,
  CategoryScale,
  Title
);

const Dashboard = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState("");

  // const { data } = useSelector((state) => state.Dashboard);
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
      {
        count: [360, 18743],
        origin: "The Luxury Closet [Retag] ",
        total: 19103,
      },
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

  const onClickHandler = (sortOption) => {
    setActive(sortOption);
    dispatch(getDashboardAction(sortOption));
  };

  useEffect(() => {
    dispatch(getDashboardAction());
  }, [dispatch]);

  return (
    <div className="dashboardContainer">
      <Row>
        <Col md={9}>
          <Card1 data={data} active={active} onClickHandler={onClickHandler} />
        </Col>
        <Col md={3}>
          <Card2 data={data} />
        </Col>
        <Col md={12} style={{ marginTop: "15px" }}>
          <Card3 data={data} />
        </Col>
      </Row>
    </div>
  );
};

const Card1 = ({ data, onClickHandler, active }) => (
  <CustomCard
    header={
      <div className="d-flex justify-content-between align-items-center">
        <div>Total Clicks: {data.totalClicks}</div>
        <div className="d-flex align-items-center">
          <div>Sort By :</div>
          <div>
            <Button
              className={`card1Button ${active === "clicks" ? "active" : ""}`}
              onClick={() => onClickHandler("clicks")}
            >
              Clicks
            </Button>{" "}
            <Button
              className={`card1Button ${active === "modified" ? "active" : ""}`}
              onClick={() => onClickHandler("modified")}
            >
              Last Modified
            </Button>{" "}
            <Button
              className={`card1Button ${active === "created" ? "active" : ""}`}
              onClick={() => onClickHandler("created")}
            >
              Last 15 Offers By Creation Date
            </Button>{" "}
          </div>
        </div>
      </div>
    }
  >
    <div style={{ height: "300px" }}>
      <Bar
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
              stacked: true,
              ticks: {
                color: "#FFF",
                font: {
                  family: "Comfortaa",
                },
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#FFF",
                font: {
                  family: "Comfortaa",
                },
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: data.top10Offers.map((ele) => ele.origin),
          datasets: [
            {
              data: data.top10Offers.map((ele) => ele.count[0]),
              backgroundColor: "#77B77C",
            },
            {
              data: data.top10Offers.map((ele) => ele.count[1]),
              backgroundColor: "#E9434E",
            },
          ],
        }}
      />
    </div>
  </CustomCard>
);

const Card2 = ({ data }) => (
  <CustomCard header="Status">
    <div style={{ height: "325px" }}>
      <Pie
        options={{ responsive: true, maintainAspectRatio: false }}
        data={{
          labels: data.statusData.map((ele) => ele.status),
          datasets: [
            {
              label: "My First Dataset",
              data: data.statusData.map((ele) => ele.count),
              backgroundColor: ["#1F8EBE", "#E99905"],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </div>
  </CustomCard>
);

const Card3 = ({ data }) => (
  <CustomCard header="Reasons">
    <div style={{ height: "300px" }}>
      <Bar
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#FFF",
                font: {
                  family: "Comfortaa",
                },
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                color: "#FFF",
                font: {
                  family: "Comfortaa",
                },
              },
            },
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
        data={{
          labels: data.reasonData.map((ele) => ele.reason),
          datasets: [
            {
              data: data.reasonData.map((ele) => ele.count),
              backgroundColor: [
                "#E480FF",
                "#0B84A5",
                "#F6C85F",
                "#6F4E7C",
                "#CA472F",
                "#E480FF",
                "#0B84A5",
              ],
            },
          ],
        }}
      />
    </div>
  </CustomCard>
);

export default Dashboard;
