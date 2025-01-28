import React from "react";
import "./ItenaryDashboard.css";
import { GiIndiaGate } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { SiHey } from "react-icons/si";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaRupeeSign } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import indiaGate from "../assets/images/indiaGate.jpeg";
import budget from "../assets/images/budget.png";

function ItenaryDashboard() {
  return (
    <>
      <div className="itnery-dashboard">
        <div className="container-first">
          <div className="it-first fisrt-own">
            <div className="first-first-section">
              <p className="first-first-section-para">Your Trip</p>
              <div className="first-first-section-div">
                <GiIndiaGate /> Delhi <IoMdArrowDropdown />
              </div>
            </div>
            <p className="first-second-section-para">
              Hello Akanksha Mathur <SiHey />
            </p>
            <p className="first-third-section-para">
              Welcome To Delhi Welcome To Delhi
            </p>
            <p className="first-fourth-section-para">Delhi is calling</p>
          </div>
          <div className="it-first it-second">
            <div className="first-first-section second-first-section">
              <p className="first-first-section-para second-first-section-para">
                <FaRupeeSign /> Budget
              </p>
              <div>
                <HiDotsHorizontal />
              </div>
            </div>
            <div className="second-section">
              <div className="total-div">
                <p className="total-para">Total <FaRupeeSign /> 2400</p>
              </div>
              <div className="span-div">
                <span className="total-para">
                <GoDotFill className="color-dot1"/> Budget
                </span>

                <span className="total-para">
                <GoDotFill className="color-dot2" /> Spend
                </span>
              </div>
              
            </div>
            <div className="image-div">
                <img src={budget} alt="budget" className="image-budget"/>
              </div>
          </div>
          <div className="it-first"></div>
          <div className="it-first"></div>
        </div>
      </div>
    </>
  );
}

export default ItenaryDashboard;
