
import { useState } from 'react';

export default function MintToken() {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const mintToken = async () => {
    const response = await fetch('/api/token/mint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to, amount }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h2>Mint Token</h2>
      <input
        type="text"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        placeholder="To Address"
      />
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <button onClick={mintToken}>Mint</button>
    </div>
  );
}
