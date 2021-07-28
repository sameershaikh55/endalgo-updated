import React from "react";

import { useHooks } from "../hooks/useHooks";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const Company = () => {
  const { isOpen, OnClick } = useHooks();

  return (
    <div>
      <Header ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />

      {/* HERO SECTION START */}
      <div className="company_hero hero_sec W-100">
        <div className="page_container h-100 d-flex justify-content-center align-items-center">
          <div className="container-fluid">
            <h1 className="text-center">
              Your local sports and outdoor activity groups are build on ENDALGO
            </h1>
          </div>
        </div>
      </div>
      {/* HERO SECTION END */}

      <Footer />
    </div>
  );
};

export default Company;
