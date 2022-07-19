import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import General from "../../Components/Offers/General.jsx";
import Head from "../../Components/Offers/Head.jsx";
import CustomSpinner from "../../Components/UI/CustomSpinner.jsx";
import {
  addOfferAction,
  getOfferDetailsAction,
} from "../../Store/Offers/actions";
import ADBFraudDetection from "../../Components/Offers/ADBFraudDetection.jsx";
import Tracking from "../../Components/Offers/Tracking.jsx";

const tabs = ["General", "ADB Fraud Detection Service", "Tracking"];
const initalGeneralState = {
  category: "",
  original: "",
  nickname: "",
  type: "",
  network_id: "",
  has_offer: "",
  domain: [],
  tags: [],
  link_description: "",
  destination: "",
  rejected: "",
};
const initalADBFraudDetectionState = {
  meta_ip_process: "0",
  s2s_ip_process: "0",
  ipqs: "",
  strictness: "",
  vpn: false,
  approveProxy: false,
  block_bot_detected: false,
  allowVPN: false,
  lighterPenalties: false,
  approvedConnectionType: [],
  blockedConnectionType: [],
  approvedISP: [],
  blockedISP: [],
  approvedASN: [],
  blockedASN: [],
  approvedOrganization: [],
  blockedOrganization: [],
  blockedAffSub2: [],
  approvedAffSub2: [],
  allowRecentAbuse: false,
  allowedAbuseVelocity: [],
};

const trackingObj = {
  countryData: [],
  countryCondition: 0,
  regionData: [],
  regionCondition: 0,
  citiesData: [],
  citiesCondition: 0,
  timezonesData: [],
  timezonesCondition: 0,
  languagesData: [],
  languagesCondition: 0,
  devices: [],
  weightage_urls: [
    {
      url: "",
      weight_range: "",
      cap: "",
    },
  ],
  desktop_pt_url: "",
  mobile_pt_url: "",
  intermediary_url: "",
};

const AddEditOffer = () => {
  const { pathname } = useLocation();
  const pathArray = pathname.split("/");
  const id = pathArray[3] === "addOffer" ? undefined : pathArray[4];
  const dispatch = useDispatch();

  const { offerDetails, loading } = useSelector((state) => state.Offers);

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const [generalDetails, setGeneralDetails] = useState(initalGeneralState);
  const [adbFraudDetection, setAdbFraudDetection] = useState(
    initalADBFraudDetectionState
  );
  const [trackingDetails, setTrackingDetails] = useState([{ ...trackingObj }]);
  const handleAddConditionButton = () => {
    setTrackingDetails((current) => [...current, { ...trackingObj }]);
  };

  const handleSubmit = () => {
    const dataObj = {
      ...generalDetails,
      domain: generalDetails.domain.map((ele) => ele.value),
      ...adbFraudDetection,
      allowedAbuseVelocity: adbFraudDetection.allowedAbuseVelocity.map(
        (ele) => ele.value
      ),
      conditions: trackingDetails.map((ele) => ({
        country: {
          data: ele.countryData,
          condition: ele.countryCondition,
        },
        region: {
          data: ele.regionData,
          condition: ele.regionCondition,
        },
        cities: {
          data: ele.citiesData,
          condition: ele.citiesCondition,
        },
        timezones: {
          data: ele.timezonesData,
          condition: ele.timezonesCondition,
        },
        languages: {
          data: ele.languagesData,
          condition: ele.languagesCondition,
        },
        devices: ele.devices.map((e) => e.value),
        weightage_urls: ele.weightage_urls,
        desktop_pt_url: ele.desktop_pt_url,
        mobile_pt_url: ele.mobile_pt_url,
        intermediary_url: ele.intermediary_url,
      })),
    };

    dispatch(addOfferAction(dataObj));
  };

  useEffect(() => {
    if (offerDetails.name) {
      setGeneralDetails({
        category: offerDetails.category,
        original: offerDetails.original,
        nickname: offerDetails.nickname,
        type: offerDetails.type,
        network_id: offerDetails.network_id,
        has_offer: offerDetails.has_offer,
        domain: offerDetails.domain
          ? offerDetails.domain.map((ele) => ({
              value: ele,
              label: ele,
            }))
          : [],
        tags: offerDetails.tags,
        link_description: offerDetails.link_description,
        destination: offerDetails.destination,
        rejected: offerDetails.rejected,
      });
      setAdbFraudDetection({
        meta_ip_process: offerDetails.meta_ip_process.toString(),
        s2s_ip_process: offerDetails.s2s_ip_process.toString(),
        ipqs: offerDetails.s2s_ip_process ? offerDetails.s2s_ip_process : "",
        strictness: offerDetails.strictness ? offerDetails.strictness : "",
        vpn: offerDetails.vpn,
        approveProxy: offerDetails.approveProxy,
        block_bot_detected: offerDetails.block_bot_detected,
        allowVPN: offerDetails.allowVPN,
        lighterPenalties: offerDetails.lighterPenalties,
        approvedConnectionType: offerDetails.approvedConnectionType,
        blockedConnectionType: offerDetails.blockedConnectionType,
        approvedISP: offerDetails.approvedISP,
        blockedISP: offerDetails.blockedISP,
        approvedASN: offerDetails.approvedASN,
        blockedASN: offerDetails.blockedASN,
        approvedOrganization: offerDetails.approvedOrganization,
        blockedOrganization: offerDetails.blockedOrganization,
        blockedAffSub2: offerDetails.blockedAffSub2,
        approvedAffSub2: offerDetails.approvedAffSub2,
        allowRecentAbuse: offerDetails.allowRecentAbuse,
        allowedAbuseVelocity: offerDetails.allowedAbuseVelocity
          ? offerDetails.allowedAbuseVelocity.map((ele) => ({
              value: ele,
              label: ele,
            }))
          : [],
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
            {selectedTab === tabs[1] && (
              <ADBFraudDetection
                adbFraudDetection={adbFraudDetection}
                setAdbFraudDetection={setAdbFraudDetection}
              />
            )}
            {selectedTab === tabs[2] && (
              <Tracking
                setTrackingDetails={setTrackingDetails}
                trackingDetails={trackingDetails}
                handleAddConditionButton={handleAddConditionButton}
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AddEditOffer;
