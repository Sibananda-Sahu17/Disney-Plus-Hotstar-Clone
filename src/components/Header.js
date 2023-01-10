import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
        <Logo src="/images/logo.svg" />
        <NavMenu>
            <a>
                <img src="/images/home-icon.svg" />
                <span>HOME</span>
            </a>
            <a>
                <img src="/images/search-icon.svg" />
                <span>SEARCH</span>
            </a>
            <a>
                <img src="/images/watchlist-icon.svg" />
                <span>WATCHLISTS</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" />
                <span>ORIGINALS</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" />
                <span>MOVIES</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" />
                <span>SERIES</span>
            </a>
        </NavMenu>
        <UserImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
    height: 4rem;
    background: #131927;
    // overflow-x: hidden;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 0.4rem;
    `
    const Logo = styled.img`
    width: 5rem;
    padding: 0 1rem;
    `
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 1rem;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 0.7rem;
        cursor: pointer; 
        img{
            height: 1.3rem;
            padding: 1px;
        }
        span{
            font-size: 0.9rem;
            letter-spacing: 0.1rem;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
`