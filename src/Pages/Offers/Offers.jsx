import React, { useEffect, useMemo, useState } from "react";
import { Row, Col, Button, Table, Form } from "react-bootstrap";
import { FaSearch, FaClone, FaTrash } from "react-icons/fa";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MdFiberManualRecord } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import fileDownload from "js-file-download";
import ReactPaginate from "react-paginate";
import CustomCard from "../../Components/UI/CustomCard.jsx";
import CustomInput from "../../Components/UI/CustomInput.jsx";
import CustomSelect from "../../Components/UI/CustomSelect.jsx";
import {
  getOffersAction,
  cloneOfferAction,
  deleteOfferAction,
  deleteSelectedOffersAction,
  pauseOffersAction,
  resumeOffersAction,
  toggleOfferAction,
} from "../../Store/Offers/actions";
import CustomSpinner from "../../Components/UI/CustomSpinner.jsx";
import API from "../../Axios/Axios";

const DATA_PER_PAGE = 20;

const Offers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, offers } = useSelector((state) => state.Offers);

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState({ type: "", asc: false });
  const [query, setQuery] = useState({ search: "", tags: "" });
  const [selected, setSelected] = useState([]);

  const isAllChecked = () =>
    Array.from({ length: offers.length }, (e, i) => i).every((element) =>
      selected.includes(element)
    );

  const handleSearch = () => {
    dispatch(
      getOffersAction({
        ...query,
        status: query.status ? query.status : undefined,
        type: query.type ? query.type : undefined,
      })
    );
  };

  const handleExportOffers = async () => {
    try {
      const { data } = await API.get("/backup/export");
      if (data.success) {
        await axios
          .get(data.data.url, {
            responseType: "blob",
          })
          .then((res) => {
            fileDownload(res.data, "links.json");
          });
      }
    } catch (err) {
      alert("Unable to download");
    }
  };

  const getData = useMemo(() => {
    const temp = offers;

    if (sortBy.type) {
      temp.sort((a, b) => {
        if (sortBy.type === "timestamp") {
          return sortBy.asc
            ? a.timestamp - b.timestamp
            : b.timestamp - a.timestamp;
        }
        return sortBy.asc
          ? a[sortBy.type].localeCompare(b[sortBy.type])
          : b[sortBy.type].localeCompare(a[sortBy.type]);
      });
    }

    return temp.slice((page - 1) * DATA_PER_PAGE, page * DATA_PER_PAGE);
  }, [offers, page, sortBy]);

  const handleCopy = (original) => {
    navigator.clipboard.writeText(`/${original}`);
    toast.success("Copied Original");
  };

  const handlePauseResume = (object) => {
    dispatch(toggleOfferAction(object));
  };

  const handleCheck = (key) => {
    if (selected.includes(key)) {
      setSelected(selected.filter((item) => item !== key));
    } else {
      setSelected([...selected, key]);
    }
  };

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
  };

  const handleCloneOffer = (id) => {
    dispatch(cloneOfferAction(id));
  };

  const handleDeleteOffer = (id) => {
    if (window.confirm("Are you sure to Delete link")) {
      dispatch(deleteOfferAction(id));
    }
  };

  const handleDeleteAll = () => {
    if (
      window.confirm(
        "Are you sure to deleted selected offers? This action cannot be undone."
      )
    ) {
      dispatch(
        deleteSelectedOffersAction({
          links_id: selected.map((item) => offers[item]._id),
        })
      );
      setSelected([]);
    }
  };

  const handlePause = () => {
    if (window.confirm("Are you sure to pause selected offers?")) {
      dispatch(
        pauseOffersAction({
          links_id: selected.map((item) => offers[item]._id),
        })
      );
      setSelected([]);
    }
  };

  const handleResume = () => {
    if (window.confirm("Are you sure to resume selected offers?")) {
      dispatch(
        resumeOffersAction({
          links_id: selected.map((item) => offers[item]._id),
        })
      );
      setSelected([]);
    }
  };

  const handleAllCheck = () => {
    if (selected.length > 0) {
      setSelected([]);
    } else {
      setSelected(Array.from({ length: offers.length }, (e, i) => i));
    }
  };

  useEffect(() => {
    dispatch(getOffersAction());
  }, [dispatch]);

  return (
    <div className="offersContainer">
      <CustomCard
        header={
          <Header
            setQuery={setQuery}
            query={query}
            handleSearch={handleSearch}
            handleExportOffers={handleExportOffers}
            navigate={navigate}
          />
        }
        className="offers"
      >
        <>
          {selected.length > 0 && (
            <div className="optionsBar">
              <Button className="deleteAll" onClick={() => handleDeleteAll()}>
                Delete All
              </Button>
              <Button className="pause" onClick={() => handlePause()}>
                Pause
              </Button>
              <Button className="resume" onClick={() => handleResume()}>
                Resume
              </Button>
            </div>
          )}
          <Table responsive="xs">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={isAllChecked()}
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
              {!loading && (
                <>
                  {getData.map((data, key) => (
                    <tr key={key}>
                      <td>
                        <input
                          id={`checheck${(page - 1) * DATA_PER_PAGE + key}`}
                          type="checkbox"
                          checked={selected.includes(
                            (page - 1) * DATA_PER_PAGE + key
                          )}
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
                          <Form.Check
                            type="switch"
                            checked={data.status}
                            onChange={(e) =>
                              handlePauseResume({
                                id: data._id,
                                status: e.target.checked,
                              })
                            }
                          />
                          <Button
                            className="editButton"
                            onClick={() =>
                              navigate(`/admin/offer/edit/${data._id}`)
                            }
                          >
                            Edit
                          </Button>
                          <Button
                            className="copyButton"
                            onClick={() => handleCloneOffer(data._id)}
                          >
                            <FaClone />
                          </Button>
                          <Button
                            className="deleteButton"
                            onClick={() => handleDeleteOffer(data._id)}
                          >
                            <FaTrash />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </Table>
          {loading ? (
            <CustomSpinner />
          ) : (
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
          )}
        </>
      </CustomCard>
    </div>
  );
};
const Header = ({
  setQuery,
  query,
  handleSearch,
  handleExportOffers,
  navigate,
}) => (
  <div className="head">
    <Row
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        marginTop: "0",
      }}
    >
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
                className="offersHeadInput"
                style={{ marginRight: "10px" }}
                placeholder="Search"
                value={query.search}
                onChange={(e) => {
                  setQuery({ ...query, search: e.target.value });
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />

              <CustomInput
                type="text"
                className="offersHeadInput"
                style={{ margin: "0 5px" }}
                placeholder="Tags"
                value={query.tags}
                onChange={(e) => {
                  setQuery({ ...query, tags: e.target.value });
                }}
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
                className="offersHeadInput"
                value={query?.status}
                onChange={(e) => {
                  setQuery({ ...query, status: e.target.value });
                }}
                options={[
                  { name: "All", value: "" },
                  { name: "Active", value: "1" },
                  { name: "Paused", value: "0" },
                ]}
              />
            </div>
          </Col>
          <Col md={3}>
            <CustomSelect
              style={{ margin: "0 5px" }}
              value={query?.type}
              className="offersHeadInput"
              onChange={(e) => {
                setQuery({ ...query, type: e.target.value });
              }}
              options={[
                { name: "All", value: "" },
                { name: "Google Ads D2M", value: "Google Ads D2M" },
                { name: "Casino Offer", value: "Casino Offer" },
                { name: "Coupon Popup", value: "Coupon Popup" },
              ]}
            />
          </Col>
        </div>
      </Col>
      <Col md={4}>
        <div className="d-flex">
          <Button className="green" onClick={() => handleSearch()}>
            <FaSearch />
          </Button>
          <Button
            className="white"
            onClick={() => navigate("/admin/offer/addOffer")}
          >
            Add Offer
          </Button>
          <Button className="white" onClick={handleExportOffers}>
            Export
          </Button>
        </div>
      </Col>
    </Row>
  </div>
);

export default Offers;
