import React from "react";
import CryptoCard from "./CryptoCard";

function CryptoList ({ cryptos }) {
    return (
        <div className="crypto-list">
            {crypto.map (c=>(
                <CryptoCard key={c.id} crypto={c} />
            ))}
        </div>
    );
}
export default CryptoList;