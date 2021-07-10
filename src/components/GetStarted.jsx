import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

import start1 from "../assets/start1.webp";
import start2 from "../assets/start2.webp";

const GetStarted = () => {
  const data = [
    {
      img: start1,
      title: "Member",
      desc: (
        <p>
          Download the ENDALGO app <br /> to Join the groups
        </p>
      ),
    },
    {
      img: start2,
      title: "Leader",
      desc: (
        <p>
          Download the ENDALGO app <br /> to Start your group
        </p>
      ),
    },
  ];
  return (
    <div>
      <div className="groupMembers w-100">
        <div className="page_container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-11 col-md-12 mx-auto">
                <h2 className="text-center fw-bold mb-5">How to get started</h2>

                <div className="row">
                  {data.map((prev, i) => {
                    const { img, title, desc } = prev;

                    return (
                      <div key={i} className="col-12 col-md-6 mt-4 mt-md-0">
                        <div className="groupMCont bg-white border-1 border border-blue rounded-3 d-flex align-items-center">
                          <img src={img} alt={title} />
                          <div className="ms-3">
                            <h5 className="fw-bold">{title}</h5>
                            {desc}
                            <button className="btnHover bg-transparent border-0 small mt-2 redColor">
                              Download App <MdKeyboardArrowRight />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
