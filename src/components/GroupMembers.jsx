import React from "react";

import member1 from "../assets/member1.PNG";
import member2 from "../assets/member2.PNG";
import member3 from "../assets/member3.PNG";

const GroupMembers = () => {
  const data = [
    {
      img: member1,
      title: "Hang out",
      desc: "New to your area? Make new friends by doing sports and activities together.",
    },
    {
      img: member2,
      title: "Play",
      desc: "In a good shape? Meet hundreds of team sports groups that plays on a regular basis.",
    },
    {
      img: member3,
      title: "Learn",
      desc: "Meet experts in your area. Find many experiences that you want to learn and enjoy.",
    },
  ];
  return (
    <div className="groupMembers w-100">
      <div className="page_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-11 col-md-12 mx-auto">
              <h6>Group members</h6>
              <div className="mt-2 mb-4">
                <h2 className="fw-bold mb-0">
                  People join ENDALGO groups to do outdoor activities,
                </h2>
                <h2 className="fw-bold mb-5">
                  pursue their passion in sports, and become healthy.{" "}
                </h2>
              </div>

              <div className="row">
                {data.map((prev, i) => {
                  const { img, title, desc } = prev;
                  return (
                    <div
                      key={i}
                      className="col-12 col-sm-6 col-md-4 mt-4 mt-md-0"
                    >
                      <div className="memberCard">
                        <img className="w-100 rounded-3" src={img} alt="" />
                        <h5 className="fw-bold mt-4">{title}</h5>
                        <h6 className="small">{desc}</h6>
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
  );
};

export default GroupMembers;
