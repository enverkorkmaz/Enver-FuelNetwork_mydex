
import { ethers } from 'ethers';
import { LIQUIDITY_POOL_CONTRACT_ADDRESS, LIQUIDITY_POOL_ABI } from '../../../config';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tokenA, tokenB, amountA, amountB } = req.body;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const liquidityPoolContract = new ethers.Contract(LIQUIDITY_POOL_CONTRACT_ADDRESS, LIQUIDITY_POOL_ABI, signer);

    const tx = await liquidityPoolContract.provideLiquidity(tokenA, tokenB, amountA, amountB);
    await tx.wait();

    res.status(200).json({ success: true, transaction: tx });
  } catch (error) {
    console.error('Liquidity Add Error:', error);
    res.status(500).json({ error: 'Failed to add liquidity' });
  }
}
