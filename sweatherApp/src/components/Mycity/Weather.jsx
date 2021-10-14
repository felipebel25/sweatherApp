import React from 'react'

import nube from "../../../public/assets/images/home/Nube.png";
import gota from "../../../public/assets/images/home/infoTemperatura/gota.png";
import velocidad from "../../../public/assets/images/home/infoTemperatura/velocidad.png";

const Weather = ({grados,descriptionTime,info}) => {
    if(grados && descriptionTime && info){
        return (
            <>
                 <div className="Home-main__temp">
              <img src={nube} />
              <h1>{grados}º </h1>
              <h3>{descriptionTime}</h3>
            </div>
    
            <aside className="Home-main__aside">
              <div className="Home-main__aside--images">
                <img src={gota} />
                <img src={velocidad} />
              </div>
              <div className="Home-main__aside--text">
                <div>
                  <h1>{info.humidity}º</h1>
                  <h3>Humedad</h3>
                </div>
                <br />
    
                <div>
                  <h1>{info.pressure}</h1>
                  <h3>Air Pressure</h3>
                </div>
              </div>
            </aside>
            </>
        )
    }
   
}

export default Weather
