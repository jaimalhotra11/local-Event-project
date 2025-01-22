import React, { useState } from "react";
import "./Hostdashboard.css";
import { MdDashboard } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { DiGoogleAnalytics } from "react-icons/di";
import { GrUserManager } from "react-icons/gr";
import { FaShop, FaMoneyCheckDollar } from "react-icons/fa6";
import { IoTicketSharp } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import cardData from "../../JsonData/EventCard.json";

function Hostdashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterData, setFilterData] = useState(cardData);
  // const fullList = add ? cardData : cardData.slice(0,6);
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filterValue = cardData.filter(
      (item) =>
        item.city.toLowerCase().includes(value) ||
        item?.title.toLowerCase().includes(value)
    );
    setFilterData(filterValue);
  };
  return (
    <>
      <div className="dash-parent">
        <div className="sidebar">
          <div className="sidebar-main">
            <h1 className="sidebar-heading">Home</h1>
            <div className="tags">
              <div className="tag">
                <MdDashboard className="tag-icon" />
                <p className="tag-para">Dashboard</p>
              </div>

              <div className="tag">
                <SlCalender className="tag-icon" />
                <p className="tag-para">All Events</p>
              </div>

              <div className="tag">
                <DiGoogleAnalytics className="tag-icon" />
                <p className="tag-para">Analytic</p>
              </div>

              <div className="tag">
                <GrUserManager className="tag-icon" />
                <p className="tag-para">Manage Event Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dash-main">
          <div className="dash-heading">
            <h1 className="head-head">Dashboard</h1>
          </div>
          <div className="head-parent">
            <div className="head-border">
              <div className="head-icon head-icon1">
                <SlCalender />
              </div>
              <div className="head-content">
                <h2 className="content-heading">20</h2>
                <p className="content-para">Awesome Events</p>
              </div>
            </div>{" "}
            <div className="head-border">
              <div className="head-icon head-icon2">
                <FaShop />
              </div>
              <div className="head-content">
                <h2 className="content-heading">50</h2>
                <p className="content-para">Counter Opened</p>
              </div>
            </div>
            <div className="head-border">
              <div className="head-icon head-icon3">
                <IoTicketSharp />
              </div>
              <div className="head-content">
                <h2 className="content-heading">880</h2>
                <p className="content-para">Ticket Sold</p>
              </div>
            </div>
            <div className="head-border">
              <div className="head-icon head-icon4">
                <FaMoneyCheckDollar />
              </div>
              <div className="head-content">
                <h2 className="content-heading">200 M</h2>
                <p className="content-para">Total Revenue</p>
              </div>
            </div>
          </div>
          <div className="card-parent-parents" style={{margin: "20px 40px"}}>
          <div className="dash-heading">
            <h1 className="head-head">My Events</h1>
          </div>
            <div className="card-parents">
              {filterData.map((item, index) => {
                return (
                  <>
                    <div className="card" key={index}>
                      <img
                        style={{ cursor: "pointer" }}
                        src={item?.image}
                        alt="card"
                        className="card-image"
                      />
                      <div style={{ margin: "0px 10px" }}>
                        <h1
                          className="heading-card"
                          style={{ margin: "5px 0px", cursor: "pointer" }}
                        >
                          {item?.title}
                        </h1>
                        <p
                          className="para-card"
                          style={{ margin: "5px 0px", color: "#707070" }}
                        >
                          Hosted By :{" "}
                          <span className="para-card">{item?.host}</span>
                        </p>
                        <div
                          className="para-card"
                          style={{ margin: "5px 0px", color: "#707070" }}
                        >
                          <CiCalendarDate />
                          <span className="para-card"> {item?.date}</span>
                        </div>
                        <div
                          className="free-div"
                          style={{ margin: "5px 0px", color: "#707070" }}
                        >
                          <div className="para-card">
                            <FaPeopleGroup />
                            <span className="para-card">
                              {" "}
                              {item?.attendees} attendees
                            </span>
                          </div>
                          <div className="para-card">
                            <IoTicketOutline />
                            <span className="para-card"> {item?.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
              ;
            </div>
            {/* <div className="showMore-Finction"><button onClick={showMore} className="showMore-button">{add ? "Show Less" : "Show More"}</button></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hostdashboard;
