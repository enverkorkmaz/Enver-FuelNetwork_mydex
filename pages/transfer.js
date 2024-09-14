
import { useState } from 'react';

export default function TransferToken() {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const transferToken = async () => {
    const response = await fetch('/api/token/transfer', {
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
      <h2>Transfer Token</h2>
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
      <button onClick={transferToken}>Transfer</button>
    </div>
  );
}
