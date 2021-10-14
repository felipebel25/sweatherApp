import React from "react";
import buscar from '../../../public/assets/images/home/infoTemperatura/search.png'

const Search = ({escribir}) => {
  return (
    <div className="Global--buscar">
      <img src={buscar} alt="" />
      <input
        type="text"
        placeholder="Busca tu ciudad o pueblito"
        onChange={escribir}
      />
    </div>
  );
};

export default Search;
