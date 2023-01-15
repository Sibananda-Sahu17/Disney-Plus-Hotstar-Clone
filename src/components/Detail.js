import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='https://wallpapercave.com/wp/wp8567761.jpg' />
      </Background>
      <ImageTitle>
        <img src='/images/logo.svg' />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='images/group-icon.png' />
        </GroupWatchButton>
      </Controls>
      <SubTitle>
        2018 7m Family, Fantasy, Kids, Animation
      </SubTitle>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        {/* It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
      </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 4rem);
  padding: 0 calc(3.5vw + 0.1rem);
  position: relative;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.6;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 6rem;
  width: 35vw;
  min-width: 7rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
`
const PlayButton = styled.button`
  border-radius: 0.4rem;
  font-size: 0.8rem;
  padding: 0 0.8rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 0.1rem;
  cursor: pointer;
  
  &:hover{
    background: rgb(198, 198, 198);
  }
  `
const TrailerButton = styled(PlayButton)`
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`
const AddButton = styled.button`
  margin-right: 1rem;
  height: 2rem;
  width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgb(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  cursor: pointer;
  span{
    font-size: 1.4rem;
    color: white;
  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 0.8rem;
  min-height: 1rem;
  margin-top: 1.2rem;
`
const Description = styled.div`
  line-height: 1.6;
  color: rgb(249, 249, 249);
  font-size: 0.8rem;
  margin-top: 1rem;
`