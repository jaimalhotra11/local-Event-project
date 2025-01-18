import "../components/Footer.css";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-first">
          <h2 className="nav-heading" style={{ cursor: "pointer" }}>
            Local<span className="nav-heading nav-span">Events</span>
          </h2>
          <div className="footer-icons">
            <FaInstagram className="footer-icon" />
            <FaFacebook className="footer-icon" />
            <FaXTwitter className="footer-icon" />
            <FaYoutube className="footer-icon" />
          </div>
          <p className="footer-para">Contact Us : eventlist@gmail.com</p>
          <p className="footer-para">
            Copyright 2025 <span className="footer-para-span">EventList</span>
          </p>
        </div>
        <div className="footer-first-mddle">
          <h1 className="footer-middle-heading">Categories</h1>
          <div className="footer-middle-lists">
            <ul className="footer-middle-ul">
              <li className="footer-middle-li">
                Art exhibitions and gallery openings.
              </li>
              <li className="footer-middle-li">
                Theater performances and plays.
              </li>
              <li className="footer-middle-li">Film festivals.</li>
              <li className="footer-middle-li">Music concerts.</li>
              <li className="footer-middle-li">Dance recitals.</li>
              <li className="footer-middle-li">Cultural festivals.</li>
              <li className="footer-middle-li">
                Literary readings or book launches.
              </li>
              <li className="footer-middle-li">
                Museum night tours or special exhibits.
              </li>
              <li className="footer-middle-li">Public art installations.</li>
              <li className="footer-middle-li">
                Comedy shows or stand-up nights.
              </li>
            </ul>
            <ul className="footer-middle-ul">
              <li className="footer-middle-li">Food and drink festivals.</li>
              <li className="footer-middle-li">Holiday markets.</li>
              <li className="footer-middle-li">Parades.</li>
              <li className="footer-middle-li">
                Local heritage days or city anniversaries.
              </li>
              <li className="footer-middle-li">
                Charity or fundraising events.
              </li>
              <li className="footer-middle-li">Marathons and fun runs.</li>
              <li className="footer-middle-li">Sports tournaments.</li>
              <li className="footer-middle-li">
                Outdoor yoga or fitness classes.
              </li>
              <li className="footer-middle-li">Hiking or cycling events.</li>
              <li className="footer-middle-li">Farmers markets.</li>
            </ul>
            <ul className="footer-middle-ul">
              <li className="footer-middle-li">Street or park festivals.</li>
              <li className="footer-middle-li">Workshops or masterclasses.</li>
              <li className="footer-middle-li">Science fairs or expos.</li>
              <li className="footer-middle-li">
                Career fairs or networking events.
              </li>
              <li className="footer-middle-li">Tech meetups or hackathons.</li>
              <li className="footer-middle-li">Outdoor movie screenings.</li>
              <li className="footer-middle-li">Gaming tournaments.</li>
              <li className="footer-middle-li">
                Trivia nights at bars or cafes.
              </li>
              <li className="footer-middle-li">Escape room challenges.</li>
              <li className="footer-middle-li">
                Food crawls or tasting tours.
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-first-mddle">
          <h1 className="footer-middle-heading">About EventList</h1>
          <div className="footer-end-lists">
            <ul className="footer-middle-ul">
              <li className="footer-middle-li">Works</li>
              <li className="footer-middle-li">Pricing</li>
              <li className="footer-middle-li">About</li>
              <li className="footer-middle-li">Process</li>
              <li className="footer-middle-li">Answers</li>
              <li className="footer-middle-li">Blogs</li>
              <li className="footer-middle-li">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
