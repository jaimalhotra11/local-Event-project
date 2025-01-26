import React from 'react'
import Card from './components/card'
import Categories from './components/Categories'
import Hero from './components/Hero.jsx';
import Carousel from './components/Carousel/Carousel.jsx';
import Itenaries from './components/Itenary/itenaries.jsx';

function Home() {
  return (
    <>
    <Hero/>
    <Card/>
    <Categories/>
    <Carousel/>
    <Itenaries/>
    
    
    </>
  )
}

export default Home
