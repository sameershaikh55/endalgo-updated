import React from "react";

// IMPORTING ICONS
import { IoIosArrowForward } from "react-icons/io";

const EmailArrive = () => {
  const data = [
    {
      img: "",
      title: "Opportunity",
      desc: "Create your own community to earn your extra income by hosting events and teaching your expertise.",
    },
    {
      img: "",
      title: "Scalability",
      desc: "Having difficulty reaching out to the right audiences for your business? We got your back to promote for you.",
    },
    {
      img: "",
      title: "Sustainability",
      desc: "ENDALGO provides resources for you to manage, build, and grow your organization with 24/7 support.",
    },
  ];
  return (
    <div className="emailArriveCont">
      <div className="page_container">
        <div className="container-fluid">
          <div className="text-center">
            <h6 className="lightColor fw-bolder">Why ENDALGO</h6>
            <h3 className="fw-bold mt-1 mb-3">
              Truest that emails arrive securely and your data is safe.
            </h3>
          </div>
          <div className="row">
            {data.map((prev, i) => {
              const { img, title, desc } = prev;
              return (
                <div key={i} className="col-12 col-md-4 mt-4 mt-md-0">
                  <img src={img} alt="" />
                  <h5 className="fw-bold">{title}</h5>
                  <h6 className="small desc darkColor mt-3 mb-4">{desc}</h6>
                  <button className="bg-transparent redColor border-0 fw-bold h6">
                    Learn about features <IoIosArrowForward fontSize="1.2rem" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailArrive;
