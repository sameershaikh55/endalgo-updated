import React from "react";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import EndalgoApp from "../components/EndalgoApp";
import CommunityLeaders from "../components/CommunityLeaders";
import OurCustomer from "../components/OurCustomer";
import Schedulling from "../components/Schedulling";
import GroupFeatures from "../components/GroupFeatures";
import EmailArrive from "../components/EmailArrive";

// IMPORTING IMAGES
import groupManagementBanner from "../assets/groupManagementBanner.PNG";
import google_play from "../assets/google-play-btn.webp";
import app_store from "../assets/app-store-btn.webp";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const GroupManagement = () => {
  const { isOpen, OnClick } = useHooks();

  return (
    <div>
      <Header ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      {/* HERO SECTION START */}
      <div className="hero_sec groupManagement text-white">
        <div className="page_container h-100">
          <div className="container-fluid d-lg-flex align-items-lg-center h-100">
            <div className="row">
              <div className="col-12 col-md-8 mx-auto col-lg-5 align-self-center text-center text-lg-start">
                <h2 className="fw-bold">
                  Build, Manage, and Grow with Our #1 Group App
                </h2>
                <h6 className="lh-base mt-3">
                  Build, manage, and grow your community with our group feature.
                  Save money on managing multiple websites and apps.
                </h6>
                <div className="mt-5 d-none d-md-block mb-4 mb-lg-0">
                  <button className="bg-white py-2 rounded-3 px-3 border border-2 border-white">
                    Try for free
                  </button>
                  <button className="bg-transparent py-2 rounded-3 px-3 border border-2 border-white ms-3 text-white">
                    See pricing
                  </button>
                </div>
                <div className="mt-5 d-flex d-md-none justify-content-center mt-3 mb-4">
                  <img src={google_play} alt="" />
                  <img src={app_store} alt="" className="ms-3" />
                </div>
              </div>
              <div className="col-12 col-lg-7">
                <img
                  className="banner"
                  src={groupManagementBanner}
                  alt="groupManagementBanner"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HERO SECTION END */}

      <OurCustomer />
      <CommunityLeaders />
      <EndalgoApp />
      <Schedulling />
      <GroupFeatures />
      <EmailArrive />

      {/* GET STARTED START */}
      <div className="getStartedCont">
        <div className="page_container">
          <div className="container-fluid">
            <div className="text-center text-white">
              <h1 className="fw-bolder">Ready to get started?</h1>
              <h5>Free to get started. Free to create your group.</h5>
            </div>
            <div className="mt-5 d-flex flex-column flex-md-row justify-content-center">
              <button className="bg-white py-2 mb-0 fw-bold rounded-3 px-5 border border-2 border-white">
                Try for free
              </button>
              <button className="bg-transparent py-2 mb-0 fw-bold rounded-3 px-5 border border-2 border-white ms-3 text-white">
                See pricing
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* GET STARTED END */}

      <Footer />
    </div>
  );
};

export default GroupManagement;
