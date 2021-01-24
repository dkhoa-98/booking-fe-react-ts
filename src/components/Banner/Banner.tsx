import React from 'react';
import './Banner.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Banner01 from '../../assets/img/banner01.png'
import Banner02 from '../../assets/img/banner02.png'
const Banner: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
    return <div className="banner">
        
        
        <Slider {...settings}>
          <div>
            <img src={Banner01} className="banner__img" alt=""/>
          </div>
          <div>
          <img src={Banner02} className="banner__img" alt=""/>
          </div>
        </Slider>
     
    </div>
}

export default Banner;