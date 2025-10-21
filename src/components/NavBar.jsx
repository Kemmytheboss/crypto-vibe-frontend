import React from "react";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="navbar">
            <link to="/">Home</link>
            <link to="/about">Add Crypto</link>
            <link to="/about">About</link>
            <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer">
                CoinGecko
                </a>
        </nav>
    );
}
export default NavBar;