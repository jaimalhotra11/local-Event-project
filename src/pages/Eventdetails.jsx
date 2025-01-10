import React from 'react'
import './Eventdetails.css';
import pic1 from '../assets/images/3.jpg';
import { FaLocationDot,  FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { VscOrganization } from "react-icons/vsc";
import { IoInformationCircleSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";


function Eventdetails() {
  return (
    <>
    <div className='eventdetails-container'>
        <div className='eventdetails-header'>
            <div className='header-left'>
                <div className='left-upper'>
                    <h1 className='left-header'>Big Data & AI</h1>
                    <div className='left-div'>
                    <FaLocationDot />
                    <p className='left-para'>Jaipur, India</p>
                    </div>

                    <div className='left-div'>
                    <IoIosPeople />
                    <p className='left-para'>34,726 members · Public group</p>
                    <IoInformationCircleSharp />
                    </div>

                    <div className='left-div'>
                    <VscOrganization />
                    <p className='left-para'>Organized by <span className='left-span'>Sandeep Giri</span> and <span className='left-span'>1 other</span></p>
                    </div>

                </div>
                <div className='left-lower left-div'>
                <p className='left-para'>Share:</p>
                <div className='left-social'>
                <FaSquareInstagram />
                <FaLinkedin />
                <FaSquareXTwitter />
                </div>
                </div>

            </div>
            <div className='header-right'>
            <img src={pic1} alt='event' style={{width: "500px", height: "500px"}}/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Eventdetails
