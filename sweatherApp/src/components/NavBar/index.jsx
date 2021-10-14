import React from 'react'
import { Link } from 'react-router-dom'

  
import styled from 'styled-components'

import casita from ".././../../public/assets/images/home/casita.svg"
import globo from ".././../../public/assets/images/home/globo.png"

import "../../styles/global.scss"



const ImgLink  = styled(Link)`
display: flex;
justify-content: center;
width: 100%;

text-decoration: none;
padding: 0;
margin: 0;
`
const NavBar = () => {
    return (
        <div className="NavBar">
            <ImgLink to="/">
                <img src={casita} alt="icon Home" />
            </ImgLink>
            <ImgLink to="/globo">
            
                <img src={globo} alt="icon Globe" />
            </ImgLink>
        </div>
    )
}

export default NavBar
