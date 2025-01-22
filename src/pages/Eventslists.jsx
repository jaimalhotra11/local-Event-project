
import "./Eventslist.css";
import "../components/Card.css";
import image from "../assets/images/1.jpg";
import { IoTicketOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FaPeopleGroup } from "react-icons/fa6";
import cardData from "../JsonData/EventCard.json";
import { useState } from "react";

function Eventslists() {
  // const [add, setAdd] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterData, setFilterData] = useState(cardData);
  // const fullList = add ? cardData : cardData.slice(0,6);
  const handleSearch = (event)=>{
      const value = event.target.value.toLowerCase();
      setSearchTerm(value);
      const filterValue = cardData.filter((item)=> item.city.toLowerCase().includes(value) || item?.title.toLowerCase().includes(value));
      setFilterData(filterValue)
  }

  
  // const showMore = () =>{
  //   setAdd((prev)=> !prev);
  // }
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
                <input type="search" placeholder ="Search Your City" className="filter-search" value={searchTerm} onChange={handleSearch}/>
                
                </div>

                
              </div>

            </div>
          </div>
          <div className="card-parent-parents">
          <div className="card-parents">
          {filterData.map((item, index)=>{
              return( 
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
                    Hosted By : <span className="para-card">{item?.host}</span>
                  </p>
                  <div
                    className="para-card"
                    style={{ margin: "5px 0px", color: "#707070" }}
                  >
                    <CiCalendarDate />
                    <span className="para-card">
                      {" "}
                     {item?.date}
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
              )
            })};
            
          </div>
          {/* <div className="showMore-Finction"><button onClick={showMore} className="showMore-button">{add ? "Show Less" : "Show More"}</button></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Eventslists;
