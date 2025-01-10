import "./Eventdetails.css";
import {
  FaLocationDot,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import EventsDetails from "../JsonData/EventDetails.json";
import { useLocation } from "react-router-dom";

function Eventdetails() {
  const location = useLocation();
  const titleparams = new URLSearchParams(location.search);
  const DecodeTitle = titleparams.get("title");
  console.log("Title", DecodeTitle);

  const Event = EventsDetails.find((event) => event.title === DecodeTitle);
  console.log("Event Name", Event);
  return (
    <>
      {Event ? (
        <div className="eventdetails-container">
          <div className="eventdetails-header">
            <div className="header-left">
              <div className="left-upper">
                <h1 className="left-header">{Event?.title}</h1>
                <div className="left-div">
                  <FaLocationDot />
                  <p className="left-para">{Event?.location}</p>
                </div>

                <div className="left-div">
                  <IoIosPeople />
                  <p className="left-para">
                    {Event?.attendees} members · {Event?.group}
                  </p>
                  <IoInformationCircleSharp />
                </div>

                <div className="left-div">
                  <VscOrganization />
                  <p className="left-para">
                    Organized by{" "}
                    <span className="left-span">{Event?.organizer}</span> and{" "}
                    <span className="left-span">1 other</span>
                  </p>
                </div>
              </div>
              <div className="left-lower left-div">
                <p className="left-para">Share:</p>
                <div className="left-social">
                  <FaSquareInstagram />
                  <FaLinkedin />
                  <FaSquareXTwitter />
                </div>
              </div>
            </div>
            <div className="header-right">
              <img
                src={Event?.image}
                alt="event"
                className="header-right-img"
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Eventdetails;
