import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CryptoList from "./components/CryptoList";
import AddCryptoForm from "./components/AddCryptoForm";
import About from "./components/About";
import './App.css';

function App() {
  const [cryptos, setCryptos] = useState([]);

  useEffect(()=>{
    fetch(`${process.env.REACT_APP_API_URL}/cryptos`)
    .then(res=>res.json())
    .then(date=> setCryptos(data));
  }, []);
    const addCrytpo = (newCrypto) => {
      setCryptos([...cryptos, newCrypto]);
    };


  return (
    <Router>

      <NavBar />

      <Routes>
         <Route 
        path="/"
        element={<CryptoList cryptos={cryptos} />} />

        <Route 
          path="/add"
          element={<AddCryptoForm addCrypto={addCrytpo} />}
          />

        <Route 
          path="/about"
          element={<About />}
        />

      </Routes>
     
    </Router> 
  )
}

export default App;
