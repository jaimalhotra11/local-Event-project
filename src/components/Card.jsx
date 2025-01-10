import "./Card.css";
import { IoLocation, IoTicketOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import cardData from "../JsonData/EventCard.json";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  const handleTitleClick = (title) => {
    navigate(`/event-details?title=${encodeURIComponent(title)}`);
  };
  return (
    <>
      <div className="card-container">
        <div className="main-heading">
          <h1 className="heading">
            Events near{" "}
            <span className="heading-span">
              Gokalpur, IN <IoLocation className="heading-icon" />
            </span>
          </h1>
        </div>
        <div className="card-parent">
          {cardData.map((item) => {
            return (
              <>
                <div className="card" key={item?.id}>
                  <img
                    style={{ cursor: "pointer" }}
                    src={item?.image}
                    alt="card"
                    className="card-image"
                    onClick={() => handleTitleClick(item.title)}
                  />
                  <div style={{ margin: "0px 10px" }}>
                    <h1
                      className="heading-card"
                      style={{ margin: "5px 0px", cursor: "pointer" }}
                      onClick={() => handleTitleClick(item.title)}
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
                      <span className="para-card">
                        {" "}
                        {item?.date} · {item?.time}
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
        </div>
      </div>
    </>
  );
}

export default Card;
