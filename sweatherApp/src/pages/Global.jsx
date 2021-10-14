import React, { useState, useEffect } from "react";
import Moment from "react-moment";

import InfoCity from "../components/Globo/InfoCity";
import Search from "../components/Globo/Search";
import Ciudades from "../components/Globo/Ciudades";

const Global = ({ horas }) => {
  const [ciudad, setCiudad] = useState("");
  const [result, setResult] = useState(null);
  const [verdad, setVerdad] = useState(false);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&lang=es&appid=44ecb58f8ba407a9413edf861f345d51`;

      // consultar la URL
      const answer = await fetch(url);
      const result = await answer.json();
      console.log(result);
      if (result.length === 2) {
        setResult(false);
      }
      setResult(result);
    };
    if (ciudad === "") return;

    if (!result || ciudad != verdad) {
      consultAPI();
      setVerdad(ciudad);
    }

    
  }),
    [ciudad, result];

  const handelClick = (e) => {
    e.preventDefault();
    setCiudad(e.target.name);
  };

  const handelChange = (e) => {
    setCiudad(e.target.value);
  };

  return (
    <div className="Global">
      <Search escribir={handelChange}></Search>
      {horas ? (
        <header className="Global--Header">
          <h1>Today's Weather</h1>
          <h3><Moment format="HH:mm">{horas}</Moment></h3>
        </header>
      ) : (
        <h1>Buscando el reloj</h1>
      )}

      {result ? (
        <InfoCity result={result} ciudad={ciudad}></InfoCity>
      ) : (
        <span></span>
      )}

      <Ciudades click={handelClick}></Ciudades>
    </div>
  );
};

export default Global;
