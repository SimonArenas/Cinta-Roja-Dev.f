
import React from 'react';
import './App.css';
import PrimerComponente from './components/PrimerComponente';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaPeliculas from './components/ListaPeliculas';

function App() {

  
  const fecha = new Date().getFullYear();
  return (
    <div>
   
      <PrimerComponente/>
      <Header
      titulo='Netflix'/>
      <ListaPeliculas
      
      />
      <Footer
      fecha={fecha}/>
      
    </div>
    
  );
  
}



export default App;
