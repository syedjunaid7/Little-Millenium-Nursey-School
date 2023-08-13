import React, { useState } from "react";
import "./Slider.scss";
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import Slider from "react-slick";
import imagesData from "../../assets/links/carouselData";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
{/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/> */}
export default function SimpleSlider() {
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 600,
  //   slidesToShow: 4,
  //   slidesToScroll: 2,
  //   responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 3,
  //           slidesToScroll: 3,
  //           infinite: true,
  //           dots: true
  //         }
  //       },
  //       {
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 2,
  //           slidesToScroll: 2,
  //           initialSlide: 2
  //         }
  //       },
  //       {
  //         breakpoint: 480,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       }
  //     ]
  // };
 const [slide, setSlide] = useState(0);
const nextSlide = () => {
  setSlide(slide === imagesData.length - 1 ? 0 : slide + 1 )
}
const previouSlide = () => {
  setSlide(slide === 0 - 1 ? imagesData.length - 1: slide - 1)
}


  return (
    <div className="slider-box">
      {/* <Slider {...settings}>
        <div>
          <img className='img-fluid-css'  src={img1} alt="image"  />
        </div>
        <div>
          <img className='img-fluid-css'  src={img2} alt="image"  />
        </div>
        <div>
          <img className='img-fluid-css'  src={img3} alt="image"  />
        </div>
        <div>
          <img className='img-fluid-css'  src={img4} alt="image"  />
        </div>
        <div>
          <img className='img-fluid-css'  src={img5} alt="image"  />
        </div>
      </Slider> */}

      {
        imagesData.map((item,id) => (
          <>
          <BsFillArrowLeftCircleFill className="arrow arrow-left" onClick={previouSlide}/>
            <img src={item.img} alt={item.alt} key={id} className={slide === id ? "slide" : "slide slide-hidden"} />
            <BsFillArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
          </>
        ))
      }
    </div>
  );
}
