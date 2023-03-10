import { Box } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {sliders} from '../../extra/sliderlinks'

const SliderLink = () => {
  const settings = {
    dots: true,
    infinite: true,

    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear"
  };
  return (
    <Box>
    <Slider {...settings}>
    {sliders.map((slide)=>{
        return(
            <Box  sx={{border:'1px solid black'}} >
            <img src={slide} alt='' style={{width:'80%'}} />
            </Box>
        )
    })}
    </Slider>
    </Box>
  )
}

export default SliderLink