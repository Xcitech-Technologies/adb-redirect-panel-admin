import React, { useEffect, useMemo, useState } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import { FaSearch, FaClone, FaTrash } from "react-icons/fa";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MdFiberManualRecord } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import moment from "moment";
import ReactPaginate from "react-paginate";
import CustomCard from "../../Components/UI/CustomCard.jsx";
import CustomInput from "../../Components/UI/CustomInput.jsx";
import CustomSelect from "../../Components/UI/CustomSelect.jsx";
import getOffersAction from "../../Store/Offers/actions";

const offers = [
  {
    status: true,
    _id: "62adfdc6eb147a1b59144ac5",
    type: "S2S",
    original: "feelunique_retag_omg",
    timestamp: "1657183125000",
    nickname: "FeelUnique [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62ac0e2aeb147a1b59144162",
    type: "S2S",
    original: "oziva_retag_icubes",
    timestamp: "1657182905000",
    nickname: "Oziva IN [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62ade40deb147a1b59144a62",
    type: "S2S",
    original: "lilysilk_retag_icubes",
    timestamp: "1657178440000",
    nickname: "Lilysilk US [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62adfda5eb147a1b59144ab1",
    type: "S2S",
    original: "theluxurycloset_retag_omg",
    timestamp: "1657123542000",
    nickname: "The Luxury Closet [Retag] ",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a8ceb147a1b5914652c",
    type: "S2S",
    original: "basharacare_retag_omg",
    timestamp: "1657093647000",
    nickname: "basharacare [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b207d7eb147a1b59145bd9",
    type: "S2S",
    original: "tbdress_retag_icubes",
    timestamp: "1657043939000",
    nickname: "TBDress [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62ab6a89eb147a1b59143ee4",
    type: "S2S",
    original: "cotosen_retag_icubes",
    timestamp: "1657039997000",
    nickname: "Cotosen [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a88eb147a1b59146522",
    type: "S2S",
    original: "fairyseason_retag_omg",
    timestamp: "1657039865000",
    nickname: "Fairyseason [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a8eeb147a1b59146531",
    type: "S2S",
    original: "banggood_retag_omg",
    timestamp: "1657039722000",
    nickname: "Banggood [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a75eb147a1b5914650e",
    type: "S2S",
    original: "newchic_retag_omg",
    timestamp: "1657039063000",
    nickname: "Newchic [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62ae1fc7eb147a1b59144f2a",
    type: "S2S",
    original: "boat_retag_icubes_FORXAPADS_VCOMM",
    timestamp: "1657019443000",
    nickname: "Boat-lifestyle [Retag] ",
    name: "Xcitech",
  },
  {
    status: false,
    _id: "62b2fd96eb147a1b591463e8",
    type: "S2S",
    original: "karagiri_retag_pokkt",
    timestamp: "1656934597000",
    nickname: "Karagiri [Retag]",
    name: "Xcitech",
  },
  {
    status: false,
    _id: "62b2fc74eb147a1b591463b9",
    type: "S2S",
    original: "muftijeans_retag_pokkt",
    timestamp: "1656934586000",
    nickname: "Mufti jeans [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a6aeb147a1b59146504",
    type: "S2S",
    original: "rituals_retag_omg",
    timestamp: "1656780760000",
    nickname: "Rituals [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a7feb147a1b59146518",
    type: "S2S",
    original: "lego.saudiblocks_retag_omg",
    timestamp: "1656608672000",
    nickname: "lego.saudiblocks [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62adfdb4eb147a1b59144abb",
    type: "S2S",
    original: "ishopping_retag_omg",
    timestamp: "1656608526000",
    nickname: "Ishopping [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62adfdb6eb147a1b59144ac0",
    type: "S2S",
    original: "desertcart_retag_omg",
    timestamp: "1656608519000",
    nickname: "Desertcart [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62adbce2eb147a1b591449b3",
    type: "S2S",
    original: "faces_retag_icubes",
    timestamp: "1656608469000",
    nickname: "Faces [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62bac7a6f5f67630cd0d46ee",
    type: "meta",
    original: "offer_not_set_for_retag",
    timestamp: "1656408027000",
    nickname: "Not Approved For Retag yet",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62adfdb2eb147a1b59144ab6",
    type: "S2S",
    original: "redsea_retag_omg",
    timestamp: "1656402355000",
    nickname: "Redsea [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b2076beb147a1b59145b9b",
    type: "S2S",
    original: "techwearclub_retag_icubes",
    timestamp: "1656402354000",
    nickname: "Techwearclub [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b206fbeb147a1b59145b7b",
    type: "S2S",
    original: "thesouledstore_retag_icubes",
    timestamp: "1656402353000",
    nickname: "Thesouledstore Retag",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a6eeb147a1b59146509",
    type: "S2S",
    original: "ontime_retag_omg",
    timestamp: "1656402351000",
    nickname: "Ontime [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a7ceb147a1b59146513",
    type: "S2S",
    original: "luxuryescapes_retag_omg",
    timestamp: "1656402350000",
    nickname: "Luxury Escapes [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62b34a86eb147a1b5914651d",
    type: "S2S",
    original: "hapynas_retag_omg",
    timestamp: "1656402349000",
    nickname: "Hapynas [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62ab620feb147a1b59143e46",
    type: "meta",
    original: "xcitech_retag",
    timestamp: "1656400779000",
    nickname: "Always Approve",
    name: "Xcitech",
  },
  {
    status: false,
    _id: "62b30463eb147a1b59146492",
    type: "S2S",
    original: "eyemyeye_retag_pokkt",
    timestamp: "1656008025000",
    nickname: "EyeMyEye [Retag]",
    name: "Xcitech",
  },
  {
    status: false,
    _id: "62b477bba40865093357d3f3",
    type: "S2S",
    original: "nWRrrXAbp9zk",
    timestamp: "1655994441000",
    nickname: "Oziva IN [Retag] weightage",
    name: "Xcitech",
  },
  {
    status: false,
    _id: "62b34a8aeb147a1b59146527",
    type: "S2S",
    original: "danubehome_retag_omg",
    timestamp: "1655917660000",
    nickname: "Danubehome [Retag]",
    name: "Xcitech",
  },
  {
    status: false,
    _id: "62ac677eeb147a1b591446f4",
    type: "S2S",
    original: "adani_retag_icubes",
    timestamp: "1655875492000",
    nickname: "Adani IN RETAG ",
    name: "Xcitech",
  },
  {
    status: false,
    _id: "62ae13c0eb147a1b59144d89",
    type: "S2S",
    original: "boat-lifestyle_retag",
    timestamp: "1655649473000",
    nickname: "Boat-lifestyle [Retag]",
    name: "Xcitech",
  },
  {
    status: true,
    _id: "62ab5e25eb147a1b59143db8",
    type: "S2S",
    original: "popupalwaysapproved",
    nickname: "COUPON POPUP TEST APPROVED",
    timestamp: "1655398084000",
    name: "Xcitech",
  },
];

console.log(offers.length);
const DATA_PER_PAGE = 20;
/* eslint-disable  */

const Offers = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.Offers);

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState({ type: "", asc: false });
  const [selected, setSelected] = useState(
    Array.from({ length: offers.length })
  );

  const getData = useMemo(() => {
    const temp = offers;

    if (sortBy.type) {
      if (sortBy.type === "timestamp") {
        temp.sort(function (a, b) {
          return sortBy.asc
            ? a.timestamp - b.timestamp
            : b.timestamp - a.timestamp;
        });
      } else {
        temp.sort(function (a, b) {
          return sortBy.asc
            ? a[sortBy.type].localeCompare(b[sortBy.type])
            : b[sortBy.type].localeCompare(a[sortBy.type]);
        });
      }
    }

    return temp.slice((page - 1) * DATA_PER_PAGE, page * DATA_PER_PAGE);
  }, [offers, page, sortBy]);

  const handleCopy = (original) => {
    navigator.clipboard.writeText(`/${original}`);
    toast.success("Copied Original");
  };

  const handleCheck = (key) => {
    setSelected((current) => {
      current[key] = !current[key];
      return current;
    });
  };

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  const handleAllCheck = () => {
    if (selected.every((e) => e === true)) {
      setSelected(Array.from({ length: offers.length }));
    } else {
      setSelected(Array.from({ length: offers.length }).map((e) => true));
    }
  };

  useEffect(() => {
    dispatch(getOffersAction());
  }, [dispatch]);

  return (
    <div className="offersContainer">
      <CustomCard header={<Header />} className="offers">
        <Table responsive="xs">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selected.every((e) => e === true)}
                  onChange={() => handleAllCheck()}
                />
              </th>
              <th
                onClick={() =>
                  setSortBy((current) => ({
                    type: "type",
                    asc: !current.asc,
                  }))
                }
                style={{ cursor: "pointer" }}
              >
                Type
                <RiArrowUpDownFill />
              </th>
              <th
                onClick={() =>
                  setSortBy((current) => ({
                    type: "original",
                    asc: !current.asc,
                  }))
                }
                style={{ cursor: "pointer" }}
              >
                Offer Id <RiArrowUpDownFill />
              </th>
              <th
                onClick={() =>
                  setSortBy((current) => ({
                    type: "nickname",
                    asc: !current.asc,
                  }))
                }
                style={{ cursor: "pointer" }}
              >
                Offer Name <RiArrowUpDownFill />
              </th>
              <th
                onClick={() =>
                  setSortBy((current) => ({
                    type: "name",
                    asc: !current.asc,
                  }))
                }
                style={{ cursor: "pointer" }}
              >
                Assigned To <RiArrowUpDownFill />
              </th>
              <th
                onClick={() =>
                  setSortBy((current) => ({
                    type: "timestamp",
                    asc: !current.asc,
                  }))
                }
                style={{ cursor: "pointer" }}
              >
                Modify <RiArrowUpDownFill />
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((data, key) => (
              <tr key={key}>
                <td>
                  <input
                    id={`checheck${(page - 1) * DATA_PER_PAGE + key}`}
                    type="checkbox"
                    checked={selected[(page - 1) * DATA_PER_PAGE + key]}
                    onChange={() => {
                      handleCheck((page - 1) * DATA_PER_PAGE + key);
                    }}
                  />
                </td>
                <td>{data.type}</td>
                <td>
                  <div>
                    <MdFiberManualRecord
                      style={{
                        color: data.status ? "#0CCE6B" : "#ff4651",
                        fontSize: "15px",
                        marginRight: "5px",
                      }}
                    />
                    <FaClone
                      style={{
                        opacity: 0.7,
                        marginRight: "5px",
                        cursor: "pointer",
                      }}
                      onClick={() => handleCopy(data)}
                    />
                    {data.original}
                  </div>
                </td>
                <td>{data.nickname}</td>
                <td>{data.name}</td>
                <td>
                  {moment
                    .unix(data.timestamp / 1000)
                    .local()
                    .format("DD MMM YYYY, hh:MM A")}
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <Form.Check type="switch" checked={data.status} />
                    <Button className="editButton">Edit</Button>
                    <Button className="copyButton">
                      <FaClone />
                    </Button>
                    <Button className="deleteButton">
                      <FaTrash />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center mt-4">
          <ReactPaginate
            breakLabel="..."
            className="customPagination"
            nextLabel="Next >"
            forcePage={page - 1}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(offers.length / DATA_PER_PAGE)}
            previousLabel="< Previous"
            renderOnZeroPageCount={null}
          />
        </div>
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
