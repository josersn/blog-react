import React from 'react';
import api from "./services/api";
function App() {
  function connect (){
    api.get("/");
  }
  return <button onClick={connect}>Conectar ao backend</button>
}

export default App;
