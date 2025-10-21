import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">Add Crypto</Link>
            <Link to="/about">About</Link>
            <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">
                CoinGecko
                </a>
        </nav>
    );
}
export default NavBar;