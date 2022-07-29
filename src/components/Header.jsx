import React from 'react'
import styled from "styled-components"

function Header() {
  return (
    <Nav>
        <Logo src="images/logo.svg"></Logo>
<NavMenu>
<a >
    <img src="images/home-icon.svg" alt="" />
    <span>Home</span>
</a>
<a >
    <img src="images/search-icon.svg" alt="" />
    <span>Search</span>
</a>
<a >
    <img src="images/watchlist-icon.svg" alt="" />
    <span>Watchlist</span>
</a>
<a >
    <img src="images/original-icon.svg" alt="" />
    <span>Orignals</span>
</a>
<a >
    <img src="images/movie-icon.svg" alt="" />
    <span>Movies</span>
</a>
<a >
    <img src="images/series-icon.svg" alt="" />
    <span>Series</span>
</a>
</NavMenu>

<UserImg src="images/abdul-img.jpg" />

    </Nav>
  )
}

export default Header 


const Nav = styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
height:70px;
background:#090b13 ;
padding:0 30px;
overflow-x:hidden;

`

const Logo = styled.img`
width:80px`

const NavMenu = styled.div`

display:flex;
justify-content:center;
align-items:center;
margin-left:20px;
flex:1;

@media(max-width:758px){
    display:none;
}
a{
    display:flex;
    align-items:center;
    color:white;
    padding:0 12px;
    cursor:pointer;
  
    img{

        height:20px;
    }
    span{
        font-size:13px;
        letter-spacing:1.42px;
        position:relative;
        &:after{
            content:"";
            position:absolute;
            height:2px;
            background:white;
            bottom: -6px;
            right:0;
            left:0;
            opacity:0;
            transform:scaleX(0);
            transform-origin:left center;
            transition:all 250ms cubic-bezier(0.25,0.46,0.45, 0.94 ) 0s;
        }
    }
    &:hover{
        span:after{
            transform:scaleX(1);
            opacity:1;g
        }
    }
    
}
`


const UserImg = styled.img`
height:48px;
width:48px;
border-radius:50%;
cursor:pointer;
`