import React from 'react';
import Hbutton from './Hbutton';
import './App.css';
import Navbar from './Navbar'; 
import Api from './Api';
import Image from './Image';
// import "bootsrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="App">
      {/* Other components and content */}

      <Navbar/>
      {/* <Hbutton /> */}
      <Routes>
        <Route path="/Api.js" element={<Api />} />
         <Route path="/" element={<Hbutton />} />
        <Route path="/Image.js" element={<Image />} />
      </Routes>

      
      
      {/* <Api/> */}
    </div>
    
    </>
  );
}

export default App;


