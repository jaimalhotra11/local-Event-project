import React from "react";
import "./Eventslist.css";
import "../components/Card.css";
import image from "../assets/images/1.jpg";
import { IoLocation, IoTicketOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";

function Eventslists() {
  return (
    <>
      <div className="eventslists">
        <div className="eventslists__container">
          <div className="eventslists-breadcrumb">
            <span>Home</span> / <span>India</span> / <span>Jaipur</span> /{" "}
            <span>Poetry</span>
          </div>
          <div className="eventslists-header">
            <div className="eventslists-left">
              <h1 className="eventslists-heading">Holiday events</h1>
              <p className="eventslists-para">in Jaipur, India</p>
              <p className="eventslists-para-last">
                Discover the best Holiday events in your area and online
              </p>
            </div>
            <div className="eventslists-right">
              <img src={image} alt="img" className="eventslists-image" />
            </div>
          </div>
        </div>
        <div className="eventlist-second">
          <div className="eventlist-second-first">
            <div className="filter-cat">
              <h1 className="filter-head">
                Filter by Price
              </h1>
              <div className="filter-parent">
                <div className="filter-child">
                <input type="checkbox" className="filter-input" />
                <label className="filter-label">All Price</label>
                </div>

                <div className="filter-child">
                <input type="checkbox" className="filter-input" />
                <label className="filter-label">Free</label>
                </div>

                <div className="filter-child">
                <input type="checkbox" className="filter-input" />
                <label className="filter-label">Paid</label>
                </div>
              </div>

            </div>
            <div className="filter-cat">
              <h1 className="filter-head">
                Filter by Date
              </h1>
              <div className="filter-parent">
                <div className="filter-child">
                <input type="checkbox" className="filter-input" />
                <label className="filter-label">Today</label>
                </div>

                <div className="filter-child">
                <input type="checkbox" className="filter-input" />
                <label className="filter-label">Tomorrow</label>
                </div>

                <div className="filter-child">
                <input type="checkbox" className="filter-input" />
                <label className="filter-label">This Weekend</label>
                </div>
              </div>

            </div>
            <div className="filter-cat">
              <h1 className="filter-head">
                Filter by Place
              </h1>
              <div className="filter-parent">
                <div className="filter-child">
                <input type="search" placeholder ="Search Your City" className="filter-search" />
                
                </div>

                
              </div>

            </div>
          </div>
          <div className="card-parents">
              <div className="card">
                <img
                  style={{ cursor: "pointer" }}
                  src={image}
                  alt="card"
                  className="card-image"
                />
                <div style={{ margin: "0px 10px" }}>
                  <h1
                    className="heading-card"
                    style={{ margin: "5px 0px", cursor: "pointer" }}
                  >
                    Jaipur
                  </h1>
                  <p
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    Hosted By : <span className="para-card">Suri</span>
                  </p>
                  <div
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <CiCalendarDate />
                    <span className="para-card">
                      {" "}
                     20 jan · 20
                    </span>
                  </div>
                  <div
                    className="free-div"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <div className="para-card">
                      <FaPeopleGroup />
                      <span className="para-card">
                        {" "}
                        200 attendees
                      </span>
                    </div>
                    <div className="para-card">
                      <IoTicketOutline />
                      <span className="para-card"> 200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  style={{ cursor: "pointer" }}
                  src={image}
                  alt="card"
                  className="card-image"
                />
                <div style={{ margin: "0px 10px" }}>
                  <h1
                    className="heading-card"
                    style={{ margin: "5px 0px", cursor: "pointer" }}
                  >
                    Jaipur
                  </h1>
                  <p
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    Hosted By : <span className="para-card">Suri</span>
                  </p>
                  <div
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <CiCalendarDate />
                    <span className="para-card">
                      {" "}
                     20 jan · 20
                    </span>
                  </div>
                  <div
                    className="free-div"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <div className="para-card">
                      <FaPeopleGroup />
                      <span className="para-card">
                        {" "}
                        200 attendees
                      </span>
                    </div>
                    <div className="para-card">
                      <IoTicketOutline />
                      <span className="para-card"> 200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  style={{ cursor: "pointer" }}
                  src={image}
                  alt="card"
                  className="card-image"
                />
                <div style={{ margin: "0px 10px" }}>
                  <h1
                    className="heading-card"
                    style={{ margin: "5px 0px", cursor: "pointer" }}
                  >
                    Jaipur
                  </h1>
                  <p
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    Hosted By : <span className="para-card">Suri</span>
                  </p>
                  <div
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <CiCalendarDate />
                    <span className="para-card">
                      {" "}
                     20 jan · 20
                    </span>
                  </div>
                  <div
                    className="free-div"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <div className="para-card">
                      <FaPeopleGroup />
                      <span className="para-card">
                        {" "}
                        200 attendees
                      </span>
                    </div>
                    <div className="para-card">
                      <IoTicketOutline />
                      <span className="para-card"> 200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  style={{ cursor: "pointer" }}
                  src={image}
                  alt="card"
                  className="card-image"
                />
                <div style={{ margin: "0px 10px" }}>
                  <h1
                    className="heading-card"
                    style={{ margin: "5px 0px", cursor: "pointer" }}
                  >
                    Jaipur
                  </h1>
                  <p
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    Hosted By : <span className="para-card">Suri</span>
                  </p>
                  <div
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <CiCalendarDate />
                    <span className="para-card">
                      {" "}
                     20 jan · 20
                    </span>
                  </div>
                  <div
                    className="free-div"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <div className="para-card">
                      <FaPeopleGroup />
                      <span className="para-card">
                        {" "}
                        200 attendees
                      </span>
                    </div>
                    <div className="para-card">
                      <IoTicketOutline />
                      <span className="para-card"> 200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  style={{ cursor: "pointer" }}
                  src={image}
                  alt="card"
                  className="card-image"
                />
                <div style={{ margin: "0px 10px" }}>
                  <h1
                    className="heading-card"
                    style={{ margin: "5px 0px", cursor: "pointer" }}
                  >
                    Jaipur
                  </h1>
                  <p
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    Hosted By : <span className="para-card">Suri</span>
                  </p>
                  <div
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <CiCalendarDate />
                    <span className="para-card">
                      {" "}
                     20 jan · 20
                    </span>
                  </div>
                  <div
                    className="free-div"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <div className="para-card">
                      <FaPeopleGroup />
                      <span className="para-card">
                        {" "}
                        200 attendees
                      </span>
                    </div>
                    <div className="para-card">
                      <IoTicketOutline />
                      <span className="para-card"> 200</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <img
                  style={{ cursor: "pointer" }}
                  src={image}
                  alt="card"
                  className="card-image"
                />
                <div style={{ margin: "0px 10px" }}>
                  <h1
                    className="heading-card"
                    style={{ margin: "5px 0px", cursor: "pointer" }}
                  >
                    Jaipur
                  </h1>
                  <p
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    Hosted By : <span className="para-card">Suri</span>
                  </p>
                  <div
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <CiCalendarDate />
                    <span className="para-card">
                      {" "}
                     20 jan · 20
                    </span>
                  </div>
                  <div
                    className="free-div"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <div className="para-card">
                      <FaPeopleGroup />
                      <span className="para-card">
                        {" "}
                        200 attendees
                      </span>
                    </div>
                    <div className="para-card">
                      <IoTicketOutline />
                      <span className="para-card"> 200</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Eventslists;
