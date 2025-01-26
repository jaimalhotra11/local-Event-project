import React from 'react'
import './Itenaries.css'
import bali from '../../assets/images/bali.jpeg'
import jaipur from '../../assets/images/jaipurmap.jpg'

function Itenaries() {
  return (
    <>
    <div className='itenary-parent'>
        <div className='itenary-child'>
            <div className='itenary-header'>
                <h1 className='itenary-heading'>
                    Your Itenary
                </h1>
                <div className='itenary-button'>
                    See All
                </div>
            </div>
            <div className='itenary-cards'>
                <div className='itenary-card'>
                    <div className='itenary-card-image'>
                        <img src= {bali} alt='bali' className='itenary-img'/>
                    </div>
                    <div className='itenary-card-content'>
                        <div className='itenary-card-div'>
                        <p className='itenary-card-para'>Jaipur, India</p>
                        <p className='itenary-card-para'>27 January, 2025</p>
                        <p className='itenary-card-para'>7 Spots</p>
                        </div>
                        <div className='img-div2'>
                            <img src= {jaipur} alt='jaipur' className='img2-itenary' />
                        </div>
                    </div>
                </div>
                <div className='itenary-card'>
                    <div className='itenary-card-image'>
                        <img src= {bali} alt='bali' className='itenary-img'/>
                    </div>
                    <div className='itenary-card-content'>
                        <div className='itenary-card-div'>
                        <p className='itenary-card-para'>Jaipur, India</p>
                        <p className='itenary-card-para'>27 January, 2025</p>
                        <p className='itenary-card-para'>7 Spots</p>
                        </div>
                        <div className='img-div2'>
                            <img src= {jaipur} alt='jaipur' className='img2-itenary' />
                        </div>
                    </div>
                </div>
                <div className='itenary-card'>
                    <div className='itenary-card-image'>
                        <img src= {bali} alt='bali' className='itenary-img'/>
                    </div>
                    <div className='itenary-card-content'>
                        <div className='itenary-card-div'>
                        <p className='itenary-card-para'>Jaipur, India</p>
                        <p className='itenary-card-para'>27 January, 2025</p>
                        <p className='itenary-card-para'>7 Spots</p>
                        </div>
                        <div className='img-div2'>
                            <img src= {jaipur} alt='jaipur' className='img2-itenary' />
                        </div>
                    </div>
                </div>
                <div className='itenary-card'>
                    <div className='itenary-card-image'>
                        <img src= {bali} alt='bali' className='itenary-img'/>
                    </div>
                    <div className='itenary-card-content'>
                        <div className='itenary-card-div'>
                        <p className='itenary-card-para'>Jaipur, India</p>
                        <p className='itenary-card-para'>27 January, 2025</p>
                        <p className='itenary-card-para'>7 Spots</p>
                        </div>
                        <div className='img-div2'>
                            <img src= {jaipur} alt='jaipur' className='img2-itenary' />
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </>
  )
}

export default Itenaries
