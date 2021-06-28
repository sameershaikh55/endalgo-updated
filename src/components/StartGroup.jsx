import React from "react";

import group1 from "../assets/group1.webp";
import group2 from "../assets/group2.webp";
import group3 from "../assets/group3.webp";

const StartGroup = () => {
  const data = [
    {
      img: group1,
      title: "Sports",
      desc: "Team sports such as soccer, basketball, softball, tennis, and more.",
    },
    {
      img: group2,
      title: "Outdoor activities",
      desc: "Hikes, Surfing, Caping, Backpacking, Water sports, Biking, and more.",
    },
    {
      img: group3,
      title: "Fitness",
      desc: "Yoga, Pilates, Group training, Running, Cycling, and more.",
    },
  ];

  return (
    <div className="w-100 py-5">
      <div className="startGroup page_container">
        <div className="container-fluid">
          <h2 className="text-center fw-bold mb-2">Start a group on ENDALGO</h2>
          <h6 className="underHead text-center">
            Start managing your organizations or sharing what you love with your
            community. ENDALGO is dedicated to helping you connect with people
            through sports and outdoor activities.
          </h6>

          <div className="row">
            {data.map((prev, i) => {
              const { img, title, desc } = prev;
              return (
                <div key={i} className="col-12 col-sm-6 col-md-4 mt-4 mt-md-0">
                  <div className="border-1 border border-blue rounded-3">
                    <img className="w-100" src={img} alt="" />
                    <div className="my-4 px-4">
                      <h5 className="fw-bold">{title}</h5>
                      <h6 className="small">{desc}</h6>
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

export default StartGroup;
