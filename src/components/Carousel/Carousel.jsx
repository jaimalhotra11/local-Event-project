import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';


function CarouselFadeExample() {
  return (
    <Carousel  fade className='car-fade' >
      <Carousel.Item className='car-first car-first1'>
        <Carousel.Caption className='car-caption'>
          <h3 className='car-head'>Discover Events That Inspire</h3>
          <p className='car-para'> Book tickets for workshops and conferences effortlessly. Learn, connect, and grow!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='car-first car-first2'>
        <Carousel.Caption className='car-caption'>
          <h3 className='car-head'>Discover Events That Inspire</h3>
          <p className='car-para'> Book tickets for workshops and conferences effortlessly. Learn, connect, and grow!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='car-first car-first3'>
        <Carousel.Caption className='car-caption'>
          <h3 className='car-head'>Discover Events That Inspire</h3>
          <p className='car-para'> Book tickets for workshops and conferences effortlessly. Learn, connect, and grow!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='car-first car-first4'>
        <Carousel.Caption className='car-caption'>
          <h3 className='car-head'>Discover Events That Inspire</h3>
          <p className='car-para'> Book tickets for workshops and conferences effortlessly. Learn, connect, and grow!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='car-first car-first5'>
        <Carousel.Caption className='car-caption'>
          <h3 className='car-head'>Discover Events That Inspire</h3>
          <p className='car-para'> Book tickets for workshops and conferences effortlessly. Learn, connect, and grow!</p>
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default CarouselFadeExample;