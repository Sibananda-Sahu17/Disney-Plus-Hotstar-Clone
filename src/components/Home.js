import React from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'

function Home() {
  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

export default Home

const Container = styled.div`
  min-height: calc(100vh - 4rem);
  padding: 1rem calc(3.5vw + 0.1rem);
  overflow-x: hidden;
  position: relative;

  &:before{
    background: url("/images/home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`