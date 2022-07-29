import React from 'react'
import styled from "styled-components"
import ImgSlider from './imgSlider'
import Viewers from './Viewers'

import Movies from "./Movies"

function Home() {
  return (
    <Container>
      <ImgSlider></ImgSlider>
      <Viewers></Viewers>
      <Movies></Movies>

    </Container>
  )
}

export default Home

const Container = styled.main`
height:calc(100vh - 100px);
padding:calc(3.5vw + 5px);
overflow-x:hidden;
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