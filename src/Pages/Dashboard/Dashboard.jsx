import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
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

  const { data } = useSelector((state) => state.Dashboard);

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
          labels: data?.top10Offers?.map((ele) => ele.origin),
          datasets: [
            {
              data: data?.top10Offers?.map((ele) => ele.count[0]),
              backgroundColor: "#77B77C",
            },
            {
              data: data?.top10Offers?.map((ele) => ele.count[1]),
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
          labels: data?.statusData?.map((ele) => ele.status),
          datasets: [
            {
              label: "My First Dataset",
              data: data?.statusData?.map((ele) => ele.count),
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
          labels: data?.reasonData?.map((ele) => ele.reason),
          datasets: [
            {
              data: data?.reasonData?.map((ele) => ele.count),
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
