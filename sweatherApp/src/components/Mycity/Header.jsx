import React from 'react'
import Moment from 'react-moment';

const Header = ({ubication,horas}) => {
    if(ubication, horas){
        return(
            <header className="Home-header">
            <span>Se intentara encontrar tu ciudad más cercana </span>
            <h1>{ubication}</h1>
            {horas.length >1 ?<h3> <Moment format="HH:mm">{horas}</Moment></h3> : <h1>12:00</h1>}
        </header>
        )
       
    }
    
}

export default Header
