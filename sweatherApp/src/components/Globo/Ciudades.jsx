import React from "react";

const Ciudades = ({click}) => {
    
  return (
    
      <main className="Global--Main">
        <div className="Global--Main__city">
          <h1>London </h1>
          <input name="London" type="submit" onClick={click} />
        </div>

        <div className="Global--Main__city">
          <h1>Paris </h1>
          <input name="Paris" type="submit" onClick={click} />
        </div>
        <div className="Global--Main__city">
          <h1>Moscu </h1>
          <input name="Moscu" type="submit" onClick={click} />
        </div>
        <div className="Global--Main__city">
          <h1>Anapoima </h1>
          <input name="Anapoima" type="submit" onClick={click} />
        </div>
      </main>
    
  );
};

export default Ciudades;
