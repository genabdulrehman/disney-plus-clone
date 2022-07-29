import React from 'react'
import styled from "styled-components"
import imgSlider from './imgSlider'
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
function Home() {
  return (
    <Container>
      <imgSlider/>
    </Container>
  )
}

export default Home

const Container = styled.main`
height:calc(100vh - 100px);
padding:calc(3.5vw + 5px);
position:relative;
&:before{
  background:url("/images/home-background.png") center center / cover
  no-repeat fixed;
  content:"";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
` 