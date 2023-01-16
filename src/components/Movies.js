import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
        <h4>Recommended for you</h4>
        <Content>
            <Wrap>
                <img src='https://c4.wallpaperflare.com/wallpaper/507/830/385/captain-america-captain-america-civil-war-captain-america-the-first-avenger-captain-america-the-winter-soldier-movies-hd-wallpaper-preview.jpg' />
            </Wrap>
            <Wrap>
                <img src='https://c4.wallpaperflare.com/wallpaper/579/921/292/amazing-spider-man-new-marvel-s-the-amazing-spider-man-movie-poster-wallpaper-preview.jpg' />
            </Wrap>
            <Wrap>
                <img src='https://c4.wallpaperflare.com/wallpaper/736/411/582/star-wars-star-wars-the-rise-of-skywalker-movie-poster-poster-movie-characters-hd-wallpaper-preview.jpg' />
            </Wrap>
            <Wrap>
                <img src='https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg' />
            </Wrap>
            <Wrap>
                <img src='https://c4.wallpaperflare.com/wallpaper/690/285/233/5bd08042c789d-wallpaper-preview.jpg' />
            </Wrap>
            <Wrap>
                <img src='https://c4.wallpaperflare.com/wallpaper/232/717/114/venom-movie-venom-superheroes-hd-wallpaper-preview.jpg' />
            </Wrap>
            <Wrap>
                <img src='https://c4.wallpaperflare.com/wallpaper/502/419/818/the-dark-knight-batman-movies-wallpaper-preview.jpg' />
            </Wrap>
            <Wrap>
                <img src='https://c4.wallpaperflare.com/wallpaper/58/729/130/digital-art-black-background-minimalism-skull-wallpaper-preview.jpg' />
            </Wrap>
        
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
    border-radius: 0.6rem;
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px; 
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    cursor: pointer;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1.05);
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
        rgb(0 0 0 / 72%) 0px 30px 22px -10px; 
        border-color: rgba(249, 249, 249, 0.8);
    }
`