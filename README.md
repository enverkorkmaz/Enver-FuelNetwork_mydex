
# DEX (Decentralized Exchange) Project

## Overview
This project is a full-featured decentralized exchange (DEX) built using the Fuel Network's Sway smart contract language. The DEX includes the following modules:

- **Token Module**: An ERC-20 like token contract for minting and transferring tokens.
- **Liquidity Pool Module**: Manages liquidity pools, allowing users to add and remove liquidity.
- **Swap Module**: Allows users to swap between different tokens using the liquidity pools.
- **DAO (Decentralized Autonomous Organization)**: Enables users to vote on governance proposals using their tokens.
- **Staking Module**: Allows users to stake tokens and earn rewards.
- **Multisig Wallet**: A wallet that requires multiple signatures to execute transactions, providing enhanced security for important actions.

## Features

### Token Module
- **Minting**: Only the owner of the contract can mint new tokens.
- **Transfers**: Users can transfer tokens to other addresses.
- **Total Supply**: The contract tracks the total supply of tokens.

### Liquidity Pool Module
- **Provide Liquidity**: Users can add liquidity to token pairs.
- **Remove Liquidity**: Users can withdraw their liquidity from the pools.
- **Get Liquidity**: Provides information on the current state of the liquidity pools.

### Swap Module
- **Token Swaps**: Users can swap between different tokens in the liquidity pools.
- **Slippage Protection**: Ensures that swaps don't exceed a specified slippage limit.

### DAO Module
- **Create Proposals**: The owner can create new governance proposals.
- **Vote**: Users can vote on proposals using their token balance.
- **Finalize Proposals**: The owner can finalize a proposal and apply the decision based on the vote results.

### Staking Module
- **Stake**: Users can stake tokens and lock them up to earn rewards.
- **Unstake**: After the staking period, users can withdraw their staked tokens and rewards.
- **Claim Rewards**: Users can claim rewards based on their staked amount.

### Multisig Wallet
- **Submit Transaction**: Owners can submit a transaction that needs approval.
- **Approve Transaction**: Other owners can approve the transaction.
- **Execute Transaction**: Once enough approvals are obtained, the transaction can be executed.

## How to Use

1. **Deploy Contracts**: Each module (Token, Liquidity Pool, Swap, DAO, Staking, and Multisig Wallet) should be deployed on the Fuel Network.
2. **Interact with Contracts**: Use the provided functions to interact with the contracts, such as minting tokens, adding liquidity, and staking tokens.
3. **Governance and Multisig**: Use the DAO and Multisig Wallet to secure important decisions and execute sensitive transactions.

## Security Features

- **Reentrancy Guard**: Prevents reentrancy attacks during token transfers and other critical functions.
- **Safe Math Operations**: Avoids overflow and underflow issues during arithmetic operations.
- **Multisig Approval**: Requires multiple signatures to execute sensitive transactions, providing an additional layer of security.

## Project Structure
- `token_contract.sw`: Token contract for minting and transferring tokens.
- `liquidity_pool_contract.sw`: Liquidity pool management.
- `swap_contract.sw`: Token swap functionality.
- `dao_contract.sw`: Governance module for creating and voting on proposals.
- `staking_contract.sw`: Staking functionality for earning rewards.
- `multisig_wallet_contract.sw`: Multisig wallet for secure transactions.

## License
This project is open-source and available under the MIT License.
