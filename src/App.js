import React from 'react';
import './assets/css/App.css';
import { Menu } from './components/menu';
import Header1 from './components/conteiner/Header';
import Footer1 from './components/conteiner/Footer';


function App() {
  let objHeader = {
    titulo: "Del Plata Ingeniería",
    parrafo: "Challenge realizado en react"
  }
  const fecha = new Date().getFullYear();

  return (
    <>

      <Header1 titulo={objHeader.titulo} parrafo={objHeader.parrafo} />
      <div className="menu text-center" style={{ "marginTop": "20px" }}  >
        <Menu />
      </div>
      <Footer1 fecha={fecha} />
    </>
  );
}

export default App;
