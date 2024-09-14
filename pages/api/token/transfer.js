
import { ethers } from 'ethers';
import { TOKEN_CONTRACT_ADDRESS, TOKEN_ABI } from '../../../config';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { to, amount } = req.body;

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const tokenContract = new ethers.Contract(TOKEN_CONTRACT_ADDRESS, TOKEN_ABI, signer);

    const tx = await tokenContract.transfer(to, amount);
    await tx.wait();

    res.status(200).json({ success: true, transaction: tx });
  } catch (error) {
    console.error('Transfer Error:', error);
    res.status(500).json({ error: 'Failed to transfer token' });
  }
}
