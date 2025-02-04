import React from "react";
import "./ItenaryDashboard.css";
import { GiIndiaGate, GiGearStick } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { SiHey } from "react-icons/si";
import { HiDotsHorizontal } from "react-icons/hi";
import {
  FaRupeeSign,
  FaHamburger,
  FaMoneyCheck,
  FaSearchLocation,
  FaDotCircle,
  FaClipboardList,
  FaRegCircle,
} from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import indiaGate from "../assets/images/indiaGate.jpeg";
import budget from "../assets/images/budget.png";
import { MdAirplaneTicket } from "react-icons/md";
import { FaTaxi } from "react-icons/fa6";
import { IoAddCircle, IoInformationCircleOutline } from "react-icons/io5";
import { CgSandClock } from "react-icons/cg";
import { PiCompassRoseFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";

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
                <p className="total-para">
                  Total <FaRupeeSign /> 2400
                </p>
              </div>
              <div className="span-div">
                <span className="total-para">
                  <GoDotFill className="color-dot1" /> Budget
                </span>

                <span className="total-para">
                  <GoDotFill className="color-dot2" /> Spend
                </span>
              </div>
            </div>
            <div className="image-div">
              <img src={budget} alt="budget" className="image-budget" />
            </div>
          </div>
          <div className="it-first it-third">
            <div className="first-first-section second-first-section">
              <p className="first-first-section-para second-first-section-para">
                <FaMoneyCheck /> Expenses
              </p>
              <div>
                <HiDotsHorizontal />
              </div>
            </div>
            <div className="ticket-parent">
              <div className="ticket-child">
                <div className="tickets">
                  <MdAirplaneTicket /> Air Ticket
                </div>
                <span className="ticket-rupee">
                  {" "}
                  <FaRupeeSign /> 25000
                </span>
              </div>
              <div className="ticket-child">
                <div className="tickets">
                  <FaTaxi />
                  Taxi Rent
                </div>
                <span className="ticket-rupee">
                  {" "}
                  <FaRupeeSign /> 1000
                </span>
              </div>
              <div className="ticket-child">
                <div className="tickets">
                  <FaHamburger />
                  Burger King
                </div>
                <span className="ticket-rupee">
                  {" "}
                  <FaRupeeSign /> 700
                </span>
              </div>
              <div className="ticket-child">
                <div className="tickets">
                  <GiGearStick />
                  Treeking Gear
                </div>
                <span className="ticket-rupee">
                  {" "}
                  <FaRupeeSign /> 4300
                </span>
              </div>
            </div>
            <div>
              <div className="ticket-child-record">
                <div className="tickets-record">
                  <IoAddCircle />
                  Record
                </div>
              </div>
            </div>
          </div>
          <div className="it-first it-fourth">
            <div className="first-first-section second-first-section">
              <p className="first-first-section-para second-first-section-para-last">
                <CgSandClock />
                Readiness
              </p>
              <div className="three-dots">
                <HiDotsHorizontal />
              </div>
            </div>
            <div className="circle-parent">
              <div className="circle">
                <span className="span-days">Days Left</span>
                <span className="span-day">10</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-second">
          <div className="map-cont">
            <div className="map-desti">
              <div className="map-dic">
                <PiCompassRoseFill />
                <span>DESTINATIONS</span>
              </div>
              <div className="map-search">
                <FaSearchLocation />
              </div>
            </div>
            <div className="map-tags">
              <p className="map-tagsPara">
                {" "}
                <FaDotCircle />
                Delhi
              </p>
              <p className="map-tagsPara">
                <FaDotCircle />
                Jaipur
              </p>
              <p className="map-tagsPara">
                <FaDotCircle />
                Faridabad
              </p>
              <p className="map-tagsPara">
                <FaDotCircle />
                Jodhpur
              </p>
            </div>
          </div>
          <div className="temperature">
            <div className="temp-first">
              <div className="temp-first-parent">
                <div className="temp-first-div">
                  <FaLocationDot />
                  <span>Jaipur</span>
                </div>

                <div className="temp-first-dots">
                  <HiDotsHorizontal />
                </div>
              </div>
              <div className="temp-second">
                <div className="temp-secondParent">
                  <div className="temp-secondChild"> 
                    <div className="temp-secondIcon"><FaLocationDot /></div>
                    <div className="temp-secondText">
                      <p>Temperature</p>
                      <p>20</p>
                    </div>
                  </div>
                  <div className="temp-secondChild"> 
                    <div className="temp-secondIcon"><FaLocationDot /></div>
                    <div className="temp-secondText">
                      <p>Temperature</p>
                      <p>20</p>
                    </div>
                  </div>
                </div>
                <div className="temp-Count">13</div>
              </div>
            </div>
            <div></div>

            <div></div>
          </div>
          <div className="add-notes">
            <div className="note-parent">
              <div className="notes-packing">
                <FaClipboardList />
                <span>PACKING LIST</span>
              </div>
              <HiDotsHorizontal />
            </div>
            <div className="note-parents">
              <div className="note-child">
                <div className="notes-packing">
                  <FaRegCircle />
                  <span>BackPack</span>
                </div>
                <IoInformationCircleOutline />
              </div>
              <div className="notes-input">
                <input type="text" placeholder="Add Notes" />
              </div>
            </div>
            <div className="note-parents">
              <div className="note-child notes-border">
                <div className="notes-packing">
                  <FaRegCircle />
                  <span>BackPack</span>
                </div>
              </div>

              <div className="note-child notes-border">
                <div className="notes-packing">
                  <FaRegCircle />
                  <span>BackPack</span>
                </div>
              </div>
              <div className="note-child notes-border">
                <div className="notes-packing">
                  <FaRegCircle />
                  <span>BackPack</span>
                </div>
              </div>
              <div className="note-child notes-border">
                <div className="notes-packing">
                  <FaRegCircle />
                  <span>BackPack</span>
                </div>
              </div>
              <div className="note-child notes-border">
                <div className="notes-packing">
                  <FaRegCircle />
                  <span>BackPack</span>
                </div>
              </div>
            </div>
            <div
              className="tickets-record"
              style={{ fontSize: "24px", marginTop: "20px" }}
            >
              <IoAddCircle />
              NEW REMINDER
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItenaryDashboard;
