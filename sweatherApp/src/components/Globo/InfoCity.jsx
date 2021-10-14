import React from 'react'
import nube from "../../../public/assets/images/home/Nube.png"

const InfoCity = ({result, ciudad}) => {
   
    if (!result.main){
        return(
            <h1>No encontre nada</h1>
        )
    }
   if(result.main){
            const grados = Math.floor(result.main.temp)
            let descriptionTime = result.weather[0].description;
            return(
                <article className="Global--info">
                    <img src={nube} alt="" />
                    
                    <div className="Global--info__text">
                     <span>{ciudad}</span>
                        <h1>{grados}º</h1>
                        <h3>{descriptionTime}</h3>
                    </div>
                    
                
                </article>
                )
        }
        return;
}

export default InfoCity
