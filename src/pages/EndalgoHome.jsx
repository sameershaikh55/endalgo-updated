import React from "react";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

// IMPORTING IMAGES
import handBanner from "../assets/1-hand.webp";
import google_play from "../assets/google-play-btn.webp";
import app_store from "../assets/app-store-btn.webp";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HowEndalgo from "../components/HowEndalgo";
import MeetNewPeople from "../components/MeetNewPeople";
import EventCoaches from "../components/EventCoaches";
import PopularGroups from "../components/PopularGroups";

const EndalgoHome = () => {
  const { isOpen, OnClick } = useHooks();

  return (
    <div>
      <Header ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      {/* HERO SECTION START */}
      <div className="hero_sec groupManagement endalgoHome">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-8 col-lg-6 mx-auto align-self-center text-center text-lg-start">
                <h2 className="fw-bold">
                  Sports, leisure, and recreation communities near you
                </h2>
                <h6 className="lh-base mt-3">
                  Find and join thousands of communities of all types - from
                  organized sports teams to social groups - that bring you joy.
                </h6>
                <div className="mt-5 d-flex mt-3 mb-4">
                  <img src={google_play} alt="" />
                  <img src={app_store} alt="" className="ms-3" />
                </div>
              </div>
              <div className="col-12 col-lg-6 align-self-end">
                <img src={handBanner} alt="handBanner" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* HERO SECTION END */}

      <HowEndalgo />
      <MeetNewPeople />
      <EventCoaches />
      <PopularGroups />

      {/* TOP CITIES START */}
      <div className="py-5 lightGrayBg">
        <div className="page_container">
          <div className="container-fluid">
            <div className="">
              <h4 className="fw-bolder">Top Cities</h4>
              <div className="row mt-4">
                <div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
                  Los Angeles
                </div>
                <div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
                  Irvine
                </div>
                <div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
                  Chicago
                </div>
                <div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
                  Las Vegas
                </div>
                <div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
                  Charlotte
                </div>
                <div className="col-4 col-md-3 col-lg-2 linkColor fw-bold">
                  Atlanta
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* TOP CITIES END */}

      <Footer />
    </div>
  );
};

export default EndalgoHome;
