import React from "react";

function CryptoCard() {
    return (
        <div className="crypto-card">
            <h3>{crypto.name} ({crypto.symbol})</h3>
            <p>Price: ${crypto.price}</p>
        </div>
    )
}
export default CryptoCard;