import React from "react";
import Slider from "react-slick";

export default function EachCouroselItem({imgLink,size}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,  
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
    arrows: true,      
  };

  const images = imgLink.split(" ");
  const styleSize = {
    "xs":"pt-10",
    "sm":"pt-20",
    "lg":"pt-40 pb-10"
  }

  return (
    <div className={`w-[1000px] h-[400px] mx-auto ${styleSize[size]}`}>
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <img src={img} alt="slide" className="rounded-xl bg-cover w-full" />
          </div>
        ))}
      </Slider>
    </div>
  );
}