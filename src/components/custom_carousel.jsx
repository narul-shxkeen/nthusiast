import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import leftArrowImage from '/images/left_arrow.png';
import rightArrowImage from '/images/right_arrow.png';
import Slider from 'react-slick';
import { Slide1, Slide2, Slide3 } from './slides';
import styled from 'styled-components';



const Carousel = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const handleAfterChange = (currentSlide) => {
    setCurrentSlide(currentSlide);
  };

    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next h-8 w-10 absolute top-1/2 right-0" onClick={onClick}>
            <button>
            <img src={rightArrowImage} alt="Next" />
            </button>
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev h-8 w-20 absolute top-1/2 z-20 left-0" onClick={onClick}>
            <button>
            <img src={leftArrowImage} alt="Previous" />
            </button>
          </div>
        );
      };

      const StyledDots = styled.ul`
  position: absolute;
  bottom: -30px; /* Adjust the position of the dot menu */
  left: 50%; /* Position the dot menu on the left */
  transform: translateX(-50%); /* Center the dot menu horizontally */
  display: flex; /* Use flex layout for the dots */
  justify-content: center; /* Center the dots horizontally */
  padding: 0;
  margin: 0;
  list-style: none;

  & li {
    margin: 0 5px; /* Adjust the spacing between dots */
    padding: 0;
    cursor: pointer;

    & button {
      font-size: 0;
      line-height: 0;
      display: block;
      width: 10px; /* Adjust the size of the dots */
      height: 10px; /* Adjust the size of the dots */
      padding: 5px;
      cursor: pointer;
      color: transparent;
      border: 0;
      outline: none;
      background: transparent;

      &:before {
        font-size: 10px; /* Adjust the size of the dots */
        line-height: 10px; /* Adjust the line-height of the dots */
        position: absolute;
        top: 0;
        left: 0;
        width: 10px; /* Adjust the size of the dots */
        height: 10px; /* Adjust the size of the dots */
        content: '•';
        text-align: center;
        opacity: 0.5; /* Change the opacity of the dots */
        color: #333; /* Change the color of the dots */
      }
    }

    &.slick-active button:before {
      opacity: ${({ currentSlide, index }) => currentSlide === index ? 1 : 0.5}; /* Change the opacity of the dots */
        color: ${({ currentSlide, index }) => currentSlide === index ? '#666' : '#333'}; /* Change the color of the dots 
    }
  }
`;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay:true,
    autoplaySpeed: 3000,
    appendDots: (dots) => <StyledDots currentSlide={currentSlide}>{dots}</StyledDots>,
    beforeChange: handleBeforeChange,
    afterChange: handleAfterChange,
  };



  return (
    <div className='bg-[#FD7F4E] px-24 h-[95vh]'>
    <Slider {...settings} className='bg-[#FD7F4E] h-[90vh] w-full px-24 py-10'>
      {/* Carousel slides go here */}
      <div>
       <Slide1/>
      </div>
      <div>
        <Slide2/>
      </div>
      <div>
        <Slide3/>
      </div>
      
    </Slider>
    </div>
  );
};

export default Carousel;