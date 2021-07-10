import React from "react";

// IMPORTING COMPONENTS
import EndalgoForLeaders from "../components/EndalgoForLeaders";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import GroupMembers from "../components/GroupMembers";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import StartGroup from "../components/StartGroup";

// IMPORTING HOOKS
import { useHooks } from "../hooks/useHooks";

const WhyEndalgo = () => {
  const { isOpen, OnClick } = useHooks();

  return (
    <div>
      <Header ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />
      {/* HERO SECTION START */}
      <div className="hero_sec whyEndalgo_hero text-center text-white d-flex justify-content-center align-items-center">
        <div className="container-fluid">
          <h1>The best way to bring your people together</h1>
          <h5 className="mt-3">
            Meet people through sports and outdoor activities you love.
          </h5>
          <button className="themeBtn2 px-5 py-2 mt-4">Try for free</button>
        </div>
      </div>
      {/* HERO SECTION END */}
      <GroupMembers />
      <EndalgoForLeaders />
      {/* WE GOT YOU BACK START */}
      <div className="groupMembers w-100">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-11 col-md-12 mx-auto">
                <div className="row">
                  <div className="col-12 col-md-5 text-start text-md-center">
                    <h4 className="fw-bold mb-0">
                      We’ve got your back, <br className="d-none d-md-block" />{" "}
                      every step of the way
                    </h4>
                  </div>
                  <div className="col-12 col-md-7">
                    <h6 className="lh-sm mb-0">
                      ENDALGO provides resources dedicated to your managing,
                      building, and growing needs with our 24/7 support,
                      promotion, exposure for your group, and much more.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* WE GOT YOU BACK END */}
      <StartGroup />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default WhyEndalgo;
