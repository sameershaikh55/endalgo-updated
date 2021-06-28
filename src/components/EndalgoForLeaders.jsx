import React from "react";

import leader1 from "../assets/leader1.webp";
import leader2 from "../assets/leader2.webp";
import leader3 from "../assets/leader3.webp";
import leader4 from "../assets/leader4.webp";

const EndalgoForLeaders = () => {
  const data = [
    {
      img: leader1,
      title: "Manage what you have",
      desc: "Save your time with ENDALGO’s scheduling and communication feature.",
    },
    {
      img: leader2,
      title: "Grow your community",
      desc: "Expose your community to people in your area by hosting events and listing experiences.",
    },
    {
      img: leader3,
      title: "Share your Interests",
      desc: "Meet people and make new friends in your area by sharing your interest.",
    },
    {
      img: leader4,
      title: "Earn Money",
      desc: "Earn money teaching people on sports activities you love.",
    },
  ];
  return (
    <div className="w-100 py-5">
      <div className="page_container">
        <div className="container-fluid">
          <h2 className="text-center fw-bold mb-2">Why ENDALGO for leaders?</h2>

          <div className="row">
            {data.map((prev, i) => {
              const { img, title, desc } = prev;
              return (
                <div key={i} className="col-12 col-sm-6 mt-4">
                  <div className="leaderCardCont border-1 border border-blue rounded-3 h-100">
                    <img className="w-100" src={img} alt="" />
                    <div className="textContent">
                      <h5 className="fw-bold">{title}</h5>
                      <h6 className="small mb-0">{desc}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndalgoForLeaders;
