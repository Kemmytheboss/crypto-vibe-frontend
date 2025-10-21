import React, { useState } from 'react';

function AddCryptoForm({ addCrypto }) {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCrypto = { name, symbol, price: Number(price) };

    fetch(`${process.env.REACT_APP_API_URL}/cryptos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newCrypto)
    })
      .then(res => res.json())
      .then(data => {
        addCrypto(data);
        setName('');
        setSymbol('');
        setPrice('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input type="text" placeholder="Symbol" value={symbol} onChange={e => setSymbol(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} required />
      <button type="submit">Add Crypto</button>
    </form>
  );
}

export default AddCryptoForm;
