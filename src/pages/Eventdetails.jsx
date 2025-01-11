import "./Eventdetails.css";
import {
  FaLocationDot,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { IoInformationCircleSharp } from "react-icons/io5";
import { PiTimerFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import EventsDetails from "../JsonData/EventDetails.json";
import { useLocation } from "react-router-dom";
import { BsCalendar2DateFill } from "react-icons/bs";

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
          <div className="body-container">
            <div className="body-left">
              <p className="body-para">
                Join us for a sneak peek into the Jaipur real coding events -
                don't miss out!
              </p>
              <div className="body-card">
                <div className="body-card-left">
                  <div className="body-card-div">
                    <img src={Event?.image} alt=""
                    className="body-card-left-img" />
                    <div className="body-card-left-paras">
                      <p className="body-card-left-para">By Jai Malhotra . 423 followers</p>
                      <p className="body-card-left-para">2.6k attendees hosted</p>
                    </div>
                  </div>
                </div>

                <div className="button-follow">
                  <button className="button-follow-btn">Follow</button>
                </div>
              </div>
              <div className="body-section">
                <h1 className="date-follow">Date and time</h1>
                <div className="icon-div">
                  <BsCalendar2DateFill />
                  <p className="body-para">January 18 · 10am - January 19 · 8pm IST</p>
                </div>
              </div>

              <div className="body-section">
                <h1 className="date-follow">Location</h1>
                <div className="icon-div">
                  <FaLocationDot />
                  <p className="body-para">
                    The Leela Ambience Gurugram Hotel & Residences - Millennium
                    City's Only Lifestyle Hotel & Residences
                  </p>
                </div>
                <p className="body-para para-second">National Highway 8 Gurugram, HR 122002</p>
                <iframe
                className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.5723811496723!2d75.75732957376124!3d26.997950556425433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3c704e4d93f%3A0xf5b44f194b7ee9a9!2sshiv%20shakti%20departmental%20store!5e1!3m2!1sen!2sin!4v1736606396726!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="body-section">
                <h1 className="date-follow">About this event</h1>
                <div className="icon-div">
                  <PiTimerFill />
                  <p className="body-para">Event lasts 1 day 10 hours</p>
                </div>
                <p className="body-para para-second">
                  Welcome to the **Upcoming Dubai Real Estate Event in
                  Gurgaon**! Join us on **Sat Jan 18th & 19th 2025** at **The
                  Leela Ambience Gurugram Hotel & Residences** for a day filled
                  with insights, networking, and opportunities in the real
                  estate industry. Connect with industry experts, explore new
                  projects, and stay ahead of the latest trends in the market.
                  Don't miss out on this exclusive event in the heart of
                  Millennium City! See you there!
                </p>
              </div>

              <div className="body-section">
                <h1 className="date-follow">Tags</h1>
                <div className="icon-div icon-div-two">
                  <p className="icon-div-tags">India Events</p>
                  <p className="icon-div-tags">Jaipur Expos</p>
                </div>
              </div>
            </div>
            <div className="body-righ">
              <div className="body-right">
                <div>
                  <p>Entry Pass</p>
                  <div>
                    <p>-</p>
                    <span>1</span>
                    <p>+</p>
                  </div>
                  <p>
                    Free <IoInformationCircleSharp />
                  </p>
                </div>
              </div>

              <div>
                <button>Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Eventdetails;
