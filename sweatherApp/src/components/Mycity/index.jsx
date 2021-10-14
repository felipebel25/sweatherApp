import React, { useState, useEffect } from "react";

import Weather from "./Weather";


import "../../styles/global.scss";



const Mycity = ({ location = "" }) => {
  
  const [temperatura, setTemperatura] = useState(false);

  useEffect(() => {
    if (location.length && !temperatura) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=es&appid=44ecb58f8ba407a9413edf861f345d51`
      )
        .then((response) => response.json())
        .then((data) => {
          setTemperatura(data);
        });
    }
  }, [location, temperatura]);
   
  
  //si temperatura no esta todavia 
    if(!temperatura){
      return (
      <div className="lds-dual-ring"></div>
       
      )
    }

  if (temperatura) {
    const grados = Math.floor(temperatura.main.temp);
    let info = temperatura.main;
    let descriptionTime = temperatura.weather[0].description;

    return (
      <>
       <Weather grados={grados} info={info} descriptionTime={descriptionTime}></Weather>
      </>
    );
  }


};

export default Mycity;
