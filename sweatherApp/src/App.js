import React,{useState,useEffect} from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import 'moment-timezone';
import mochaString from "./components/Mycity/index.js"


import Home from './pages/Home.jsx'
import NavBar from './components/NavBar/index.jsx';
import Global from "./pages/Global"


import "./styles/global.scss"

const App = () =>{
  const [ubication, setUbication] = useState("");
  const[horas, setHoras] = useState("");
    
    useEffect(()=>{
        if(ubication === "" && horas === ""){
        fetch("http://worldtimeapi.org/api/ip")
        .then((response) => response.json())
        .then((data) =>{
            setHoras(data.utc_datetime),
            //uso de mochaString para recortar el pedazo de string que necesito que se corte
            setUbication(mochaString(data.timezone ,{
                oneOption: "America/",
                twoOption: "Asia/",
                thirdOption: "Europe/",
                fourOption: "Africa/",
                fiveOption: "Atlantic/",
                sixOption: "Australia/",
                sevenOption: "Pacific/",
                eightOption: "Indian/",
            }
        ))})
    }
    }, [ubication,horas])
    
  return(
    <BrowserRouter>


      <Route exact path="/" ><Home ubication={ubication} horas={horas}></Home></Route>
      <Route exact path="/globo" ><Global horas={horas}></Global></Route>
       <NavBar></NavBar>

    </BrowserRouter>
  )

}

export default App;