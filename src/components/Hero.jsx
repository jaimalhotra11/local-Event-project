import React from 'react'
import './Hero.css'
import { MdPlace, MdDateRange } from "react-icons/md";
import { FaPaintBrush, FaRupeeSign } from "react-icons/fa";






function Hero() {
  return (
    <>
    <div className='hero-one'>
        <div className='hero-first'>
        <h1 className='hero-first-head'>Set Your Destinations With Us.</h1>
        <p className='hero-first-para'>Make Your travel the most comfortable and affordable.</p>
        </div>

        <div className='box-one'>
          <div className='box'>
            <span className='box-span'> <MdPlace />
            From</span>
            <input className='holder' type='text' placeholder='City'/>
            <p className='place-name'>Jaipur</p>
          </div> 
          <div className='box'>
            <span className='box-span'> <FaPaintBrush />
            Interest</span>
            <input className='holder' type='text' placeholder='Hobbies'/>
            <p className='place-name'>Coding</p>
          </div>
          <div className='box'>
            <span className='box-span'><MdDateRange />Date</span>
            <input className='holder' type='text' placeholder='Enter the date'/>
            <p className='place-name'>13th January</p>
          </div>
          <div className='box'>
            <span className='box-span'><FaRupeeSign />Budget</span>
            <input className='holder' type='text' placeholder='Your Budget'/>
            <p className='place-name'>Free</p>
          </div>
          <div className='box-btn'>
          <button className='box-btn-btn'>Search</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default Hero
