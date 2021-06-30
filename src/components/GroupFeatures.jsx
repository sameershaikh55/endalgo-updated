import React from "react";

// IMPORTING ICONS
import { FaArrowCircleRight } from "react-icons/fa";

// IMPORTING IMAGES
import ft_1 from "../assets/ft-1-ic.webp";
import ft_2 from "../assets/ft-2-ic.svg";
import ft_3 from "../assets/ft-3-ic.webp";
import ft_4 from "../assets/ft-4-ic.svg";
import ft_5 from "../assets/ft-5-ic.svg";
import ft_6 from "../assets/ft-6-ic.svg";
import ft_7 from "../assets/ft-7-ic.webp";
import ft_8 from "../assets/ft-8-ic.webp";

const GroupFeatures = () => {
  const data = [
    {
      img: ft_1,
      title: "Schedule",
      desc: "Schedule public, group, and private events as well as  games with our attendance check and payment feature.",
    },
    {
      img: ft_2,
      title: "Members",
      desc: "Simply add members or players, staff, and more. Family members can be added and act behalf of their child.",
    },
    {
      img: ft_3,
      title: "Communication",
      desc: "Use the group board, group chat, and email features to communicate with your group members in real-time.",
    },
    {
      img: ft_4,
      title: "Online Registration",
      desc: "Use our online registration to get new members, collect waivers and liability, and assign members to your group.",
    },
    {
      img: ft_5,
      title: "Experience/Training",
      desc: "Earn money teaching people or sharing experience on activities you love by listing your group on ENDALGO.",
    },
    {
      img: ft_6,
      title: "Collect Payment",
      desc: "Collect the payment for your event, expenses, and dues. Track and refund by items and members - do it all.",
    },
    {
      img: ft_7,
      title: "Subgroup",
      desc: "Make unlimited number of subgroups and effortlessly manage multiple teams or groups under the same roof.",
    },
    {
      img: ft_8,
      title: "Invoicing",
      desc: "No more trips to bank. You can collect membership dues, expenses, and other payments through the app.",
    },
  ];
  return (
    <div className="groupFeature w-100">
      <div className="page_container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-10 mx-auto">
              <div className="text-center">
                <h6 className="lightColor upperHead">
                  Group Management Features
                </h6>
                <h2 className="fw-bold">There's even more to love</h2>
              </div>

              <div className="row">
                {data.map((prev, i) => {
                  const { img, title, desc } = prev;
                  return (
                    <div key={i} className="col-12 col-md-6 mt-4">
                      <div className="groupFeatureCard h-100">
                        <div>
                          <div className="d-flex align-items-center">
                            <img src={img} alt={title} />
                            <h5 className="ms-2 mb-0 fw-bold">{title}</h5>
                          </div>
                          <h6 className="small desc darkColor mt-3">{desc}</h6>
                          <button className="bg-transparent greenColor border-0 fw-bold h6">
                            Learn more <FaArrowCircleRight fontSize="1.2rem" />
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
  );
};

export default GroupFeatures;
