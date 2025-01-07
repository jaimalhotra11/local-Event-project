import React from "react";
import "./Card.css";
import { IoLocation,IoTicketOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import jalmahal from "../assets/images/jalmahal.jpg";


function Card() {
  return (
    <>
      <div className="card-container">
        <div className="main-heading">
            <h1 className="heading">Events near <span className="heading-span">Gokalpur, IN <IoLocation className="heading-icon" /></span></h1>
        </div>
        <div className="card-parent">
          <div className="card">
            <img src={jalmahal} alt="card" className="card-image"/>
            <div>
                <h1 className="heading-card"  style={{margin: "5px 0px"}}>GitTogether Delhi NCR - Welcome 2025</h1>
                <p className="para-card" style={{margin: "5px 0px", color: "#707070"}}>Hosted By : <span className="para-card"> GitTogether</span></p>
                <div className="para-card" style={{margin: "5px 0px",color: "#707070"}}>
                <CiCalendarDate />
                <span className="para-card"> Sat, Jan 18 · 9:30 AM IST</span>
                </div>
                <div className="free-div" style={{margin: "5px 0px",color: "#707070"}}>
                <div className="para-card">
                <FaPeopleGroup />
                <span className="para-card"> 1,000+ attendees</span>
                </div>
                <div className="para-card">
                <IoTicketOutline />
                <span className="para-card"> Free</span>
                </div>
                </div>
            </div>
          </div>
          <div className="card">
            <img src={jalmahal} alt="card" className="card-image"/>
            <div>
                <h1 className="heading-card"  style={{margin: "5px 0px"}}>GitTogether Delhi NCR - Welcome 2025</h1>
                <p className="para-card" style={{margin: "5px 0px", color: "#707070"}}>Hosted By : <span className="para-card"> GitTogether</span></p>
                <div className="para-card" style={{margin: "5px 0px",color: "#707070"}}>
                <CiCalendarDate />
                <span className="para-card"> Sat, Jan 18 · 9:30 AM IST</span>
                </div>
                <div className="free-div" style={{margin: "5px 0px",color: "#707070"}}>
                <div className="para-card">
                <FaPeopleGroup />
                <span className="para-card"> 1,000+ attendees</span>
                </div>
                <div className="para-card">
                <IoTicketOutline />
                <span className="para-card"> Free</span>
                </div>
                </div>
            </div>
          </div>
          <div className="card">
            <img src={jalmahal} alt="card" className="card-image"/>
            <div>
                <h1 className="heading-card"  style={{margin: "5px 0px"}}>GitTogether Delhi NCR - Welcome 2025</h1>
                <p className="para-card" style={{margin: "5px 0px", color: "#707070"}}>Hosted By : <span className="para-card"> GitTogether</span></p>
                <div className="para-card" style={{margin: "5px 0px",color: "#707070"}}>
                <CiCalendarDate />
                <span className="para-card"> Sat, Jan 18 · 9:30 AM IST</span>
                </div>
                <div className="free-div" style={{margin: "5px 0px",color: "#707070"}}>
                <div className="para-card">
                <FaPeopleGroup />
                <span className="para-card"> 1,000+ attendees</span>
                </div>
                <div className="para-card">
                <IoTicketOutline />
                <span className="para-card"> Free</span>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
