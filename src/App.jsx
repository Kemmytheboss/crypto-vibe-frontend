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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
