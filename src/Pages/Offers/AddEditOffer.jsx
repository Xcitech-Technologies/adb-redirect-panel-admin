import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import General from "../../Components/Offers/General.jsx";
import Head from "../../Components/Offers/Head.jsx";
import CustomSpinner from "../../Components/UI/CustomSpinner.jsx";
import { getOfferDetailsAction } from "../../Store/Offers/actions";

const tabs = ["General", "ADB Fraud Detection Service"];
const initalGeneralState = {
  category: "",
  original: "",
  nickname: "",
  type: "",
  network_id: "",
  has_offer: "",
  domain: [],
  tags: "",
  link_description: "",
  destination: "",
  rejected: "",
};

const AddEditOffer = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split("/");
  const id = pathArray[3] === "addOffer" ? undefined : pathArray[4];
  const dispatch = useDispatch();

  const { offerDetails, loading } = useSelector((state) => state.Offers);

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [generalDetails, setGeneralDetails] = useState(initalGeneralState);

  const handleSubmit = () => {};

  useEffect(() => {
    if (offerDetails.category) {
      setGeneralDetails({
        category: offerDetails.category,
        original: offerDetails.original,
        nickname: offerDetails.nickname,
        type: offerDetails.type,
        network_id: offerDetails.network_id,
        has_offer: offerDetails.has_offer,
        domain: offerDetails.domain ? offerDetails.domain : [],
        tags: offerDetails.tags,
        link_description: offerDetails.link_description,
        destination: offerDetails.destination,
        rejected: offerDetails.rejected,
      });
    }
  }, [offerDetails]);
  useEffect(() => {
    if (id) {
      dispatch(getOfferDetailsAction(id));
    }
  }, [dispatch, id]);

  return (
    <div className="addEditOfferContainer">
      {loading ? (
        <CustomSpinner />
      ) : (
        <>
          <Head
            id={id}
            tabs={tabs}
            selectedTab={selectedTab}
            handleSelectTab={setSelectedTab}
            handleSubmit={handleSubmit}
          />

          <div className="body">
            {selectedTab === tabs[0] && (
              <General
                generalDetails={generalDetails}
                setGeneralDetails={setGeneralDetails}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AddEditOffer;
