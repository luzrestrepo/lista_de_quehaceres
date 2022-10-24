import React from "react";
import Listado from "./ListaQuehaceres/Listado";
import './App.css';



class App extends React.Component{
  render(){
    return(
      <div class="container col-3 mt-3">
        <Listado/>
      </div>
    )
  }
}

export default App;

