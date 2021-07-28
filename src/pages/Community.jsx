import React from "react";
import { useHooks } from "../hooks/useHooks";

// IMPORTING ICONS
import { GrShare } from "react-icons/gr";

// IMPORTING IMAGES
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";

// IMPORTING COMPONENTS
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import OurCustomer from "../components/OurCustomer";
import Stories from "../components/Stories";
import GetStarted from "../components/GetStarted";

const Community = () => {
  const { isOpen, OnClick } = useHooks();
  return (
    <div>
      <Header ClickEvent={OnClick} />
      <Sidebar ClickEvent={OnClick} isOpen={isOpen} />
      {/* HERO SECTION START */}
      <div className="hero_community hero_sec W-100">
        <div className="page_container h-100 d-flex justify-content-center align-items-center">
          <div className="container-fluid">
            <h1 className="text-white text-center">
              Your local sports and outdoor activity groups are build on ENDALGO
            </h1>
          </div>
        </div>
      </div>
      {/* HERO SECTION END */}
      <OurCustomer />
      <Stories />

      {/* COMUNITY BANNER SECTION START */}
      <div className="comunity_banner W-100">
        <div className="page_container h-100">
          <div className="container-fluid h-100">
            <h1 className="text-white text-center mb-0">
              Together, we can do so much.
            </h1>
          </div>
        </div>
      </div>
      {/* COMUNITY BANNER SECTION END */}

      {/* CARDS START */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-11 col-md-12 mx-auto">
            <div className="card1">
              <div className="page_container">
                <div className="container-fluid px-0">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 pe-md-3 order-1 order-md-0 mt-4 mt-md-0">
                      <img className="w-100" src={card1} alt="" />
                    </div>
                    <div className="col-12 col-md-6 ps-md-3">
                      <h1 className="fw-bold">Sports teams & clubs</h1>
                      <p>
                        Sports teams and clubs utilize ENDALGO to manage and
                        grow their community. FC Silverlake in Los Angeles, CA
                        hosts competitive pickups and tryouts during the off
                        season on ENDALGO to recruit new players. They manage
                        their 5 club teams during the season.
                      </p>

                      <hr />

                      <div className="list_card">
                        <div className="d-flex align-items-center mb-2">
                          <GrShare className="me-2 me-md-3" />{" "}
                          <div className="linkColor mb-0">FC Silverlake</div>{" "}
                          <div className="ms-1 mb-0">(Los Angeles, CA)</div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <GrShare className="me-2 me-md-3" />{" "}
                          <div className="linkColor mb-0">Barca Academy</div>{" "}
                          <div className="ms-1 mb-0">(Charlotte, NC)</div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <GrShare className="me-2 me-md-3" />{" "}
                          <div className="linkColor mb-0">
                            Carolina Cosmic FC
                          </div>{" "}
                          <div className="ms-1 mb-0">(Charlotte, NC)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card2">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-11 col-md-12 mx-auto">
                <div className="row align-items-center">
                  <div className="col-12 col-md-6 pe-md-3">
                    <h1 className="fw-bold">Outdoor activity groups</h1>
                    <p>
                      Outdoor activity groups use ENDALGO to meet new people and
                      share the interest that they love. K-league in Pineville,
                      NC is a well-organized group of people playing soccer on a
                      weekly basis. 40 members get together every week to share
                      their love of soccer.
                    </p>
                    <hr />

                    <div className="list_card">
                      <div className="d-flex align-items-center mb-2">
                        <GrShare className="me-2 me-md-3" />{" "}
                        <div className="linkColor mb-0">K-League</div>{" "}
                        <div className="ms-1 mb-0">(Pineville, NC)</div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <GrShare className="me-2 me-md-3" />{" "}
                        <div className="linkColor mb-0">
                          Irvine pick up Soccer
                        </div>{" "}
                        <div className="ms-1 mb-0">(Irvine, CA)</div>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <GrShare className="me-2 me-md-3" />{" "}
                        <div className="linkColor mb-0">
                          Atlanta Coed Soccer
                        </div>{" "}
                        <div className="ms-1 mb-0">(Atlanta, GA)</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 ps-md-3 mt-4 mt-md-0">
                    <img className="w-100" src={card2} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-11 col-md-12 mx-auto">
            <div className="card3">
              <div className="page_container">
                <div className="container-fluid px-0">
                  <div className="row align-items-center">
                    <div className="col-12 col-md-6 pe-md-3 order-1 order-md-0 mt-4 mt-md-0">
                      <img className="w-100" src={card3} alt="" />
                    </div>
                    <div className="col-12 col-md-6 ps-md-3">
                      <h1 className="fw-bold">Social Groups</h1>
                      <p>
                        A.O. Long Beach group started as a U.S national soccer
                        teams supporter’s group.They host watch parties at their
                        chapter bar. They also host 5v5 pickup on a weekly basis
                        in Southern California.
                      </p>

                      <hr />

                      <div className="list_card">
                        <div className="d-flex align-items-center mb-2">
                          <GrShare className="me-2" />{" "}
                          <div className="linkColor mb-0">
                            A.O. Long Beach - Pick-Up Soccer
                          </div>{" "}
                          <div className="ms-1 mb-0">(Long Beach, CA)</div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <GrShare className="me-2" />{" "}
                          <div className="linkColor mb-0">
                            Lincoln Park Fútbol Group
                          </div>{" "}
                          <div className="ms-1 mb-0">(Chicago, IL)</div>
                        </div>
                        <div className="d-flex align-items-center mb-2">
                          <GrShare className="me-2" />{" "}
                          <div className="linkColor mb-0">Las Vegas United</div>{" "}
                          <div className="ms-1 mb-0">(Las Vegas, NV)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CARDS END */}

      <GetStarted />
      <Footer />
    </div>
  );
};

export default Community;
