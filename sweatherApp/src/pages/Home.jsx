import React from 'react'
import Moment from 'react-moment';

import Header from '../components/Mycity/Header.jsx'; 
import Mycity from '../components/Mycity/index.jsx'

import "../styles/global.scss"

const Home = ({ubication ,horas}) => {
    
  if(!ubication && !horas){
      return(
      <div className="lds-dual-ring"></div>
       
      )
  }
   
    return (
        <div className="Home">
           <Header ubication={ubication} horas={horas}></Header>
           
            <main className="Home-main">
                <header>
                    {horas.length >1 ?<h3> <Moment format="DD-MM-YYYY" >{horas}</Moment></h3> : <h1>00/00/0000</h1>}
                </header>
                 
                <Mycity location={ubication}></Mycity>
            </main>
        </div>
    )
}

export default Home
