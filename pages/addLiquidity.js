
import { useState } from 'react';

export default function AddLiquidity() {
  const [tokenA, setTokenA] = useState('');
  const [tokenB, setTokenB] = useState('');
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');

  const addLiquidity = async () => {
    const response = await fetch('/api/liquidity/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenA, tokenB, amountA, amountB }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h2>Add Liquidity</h2>
      <input
        type="text"
        value={tokenA}
        onChange={(e) => setTokenA(e.target.value)}
        placeholder="Token A"
      />
      <input
        type="text"
        value={tokenB}
        onChange={(e) => setTokenB(e.target.value)}
        placeholder="Token B"
      />
      <input
        type="text"
        value={amountA}
        onChange={(e) => setAmountA(e.target.value)}
        placeholder="Amount A"
      />
      <input
        type="text"
        value={amountB}
        onChange={(e) => setAmountB(e.target.value)}
        placeholder="Amount B"
      />
      <button onClick={addLiquidity}>Add Liquidity</button>
    </div>
  );
}
