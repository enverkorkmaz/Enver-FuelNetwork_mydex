
import { useState } from 'react';

export default function RemoveLiquidity() {
  const [tokenA, setTokenA] = useState('');
  const [tokenB, setTokenB] = useState('');

  const removeLiquidity = async () => {
    const response = await fetch('/api/liquidity/remove', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tokenA, tokenB }),
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <div>
      <h2>Remove Liquidity</h2>
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
      <button onClick={removeLiquidity}>Remove Liquidity</button>
    </div>
  );
}
