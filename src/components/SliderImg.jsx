import React from "react";
import slider1 from "../assets/slider1.webp";
import slider2 from "../assets/slider2.webp";
import slider3 from "../assets/slider3.webp";
import slider4 from "../assets/slider4.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SliderImg = () => {
  const arrimg = [slider1, slider2, slider3, slider4];
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    cssEase: "linear",
  };
  return (
    <div className="w-[1024px] mx-auto">
      <Slider {...settings}>
        {arrimg.map((item, index) => (
          <div key={index}>
            <img className="w-full h-[500px] object-cover" src={item} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderImg;
