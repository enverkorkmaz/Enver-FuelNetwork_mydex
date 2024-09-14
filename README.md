
# DEX Project - Comprehensive Decentralized Exchange

## Overview
This project is a comprehensive Decentralized Exchange (DEX) application running on the Fuel Network. It allows users to trade crypto assets, add/remove liquidity, participate in decentralized governance, stake tokens, and manage a multisig wallet.

## Features
- **Token Management**: Mint and transfer tokens.
- **Liquidity Pool**: Add and remove liquidity.
- **Swap**: Swap between different tokens.
- **DAO**: Create and vote on governance proposals.
- **Staking**: Stake and unstake tokens.
- **Multisig Wallet**: Submit and approve multisig transactions.

## Modules
### 1. Token
- **Mint Token**: Create new tokens.
- **Transfer Token**: Transfer tokens between accounts.

### 2. Liquidity Pool
- **Add Liquidity**: Provide liquidity for token pairs.
- **Remove Liquidity**: Remove liquidity from the pool.

### 3. Swap
- **Swap Tokens**: Exchange one token for another.

### 4. DAO
- **Create Proposal**: Create new governance proposals.
- **Vote on Proposal**: Participate in governance by voting on proposals.

### 5. Staking
- **Stake Tokens**: Lock tokens for rewards.
- **Unstake Tokens**: Retrieve staked tokens.

### 6. Multisig Wallet
- **Submit Transaction**: Create transactions that require multiple approvals.
- **Approve Transaction**: Approve or reject pending transactions.

## Installation
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd dex-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the environment:
   - Create a `config.js` file with contract addresses and ABIs.
   - Ensure MetaMask or another web3 provider is configured to interact with the Fuel Network.

5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
### Token Management
- Access the Mint Token page to create new tokens.
- Use the Transfer Token page to send tokens to another address.

### Liquidity Pool
- Add liquidity through the Add Liquidity page.
- Remove liquidity using the Remove Liquidity page.

### Swap
- Swap tokens directly from the Swap Tokens page.

### DAO
- Create new proposals on the Create Proposal page.
- Vote on active proposals through the Vote on Proposal page.

### Staking
- Stake tokens using the Stake Tokens page.
- Unstake tokens and claim rewards from the Unstake Tokens page.

### Multisig Wallet
- Submit new transactions on the Submit Transaction page.
- Approve or reject pending transactions through the Approve Transaction page.

## API Routes and Descriptions
- **Token API**:
  - `/api/token/mint`: Mint new tokens.
  - `/api/token/transfer`: Transfer tokens to a specific address.
- **Liquidity Pool API**:
  - `/api/liquidity/add`: Add liquidity to the pool.
  - `/api/liquidity/remove`: Remove liquidity from the pool.
- **Swap API**:
  - `/api/swap/swapTokens`: Swap tokens in the exchange.
- **DAO API**:
  - `/api/dao/createProposal`: Create a new governance proposal.
  - `/api/dao/voteProposal`: Vote on an existing proposal.
- **Staking API**:
  - `/api/staking/stake`: Stake tokens for rewards.
  - `/api/staking/unstake`: Unstake tokens.
- **Multisig Wallet API**:
  - `/api/multisig/submitTransaction`: Submit a transaction for multisig approval.
  - `/api/multisig/approveTransaction`: Approve or reject a multisig transaction.

## Frontend Pages and Descriptions
- **Mint Token**: `/mint` - Interface to mint new tokens.
- **Transfer Token**: `/transfer` - Interface to transfer tokens.
- **Add Liquidity**: `/addLiquidity` - Interface to provide liquidity.
- **Remove Liquidity**: `/removeLiquidity` - Interface to remove liquidity.
- **Swap Tokens**: `/swap` - Interface to swap tokens.
- **Create Proposal**: `/createProposal` - Interface to create new DAO proposals.
- **Vote on Proposal**: `/voteProposal` - Interface to vote on DAO proposals.
- **Stake Tokens**: `/stake` - Interface to stake tokens.
- **Unstake Tokens**: `/unstake` - Interface to unstake tokens.
- **Submit Transaction**: `/submitTransaction` - Interface to submit multisig transactions.
- **Approve Transaction**: `/approveTransaction` - Interface to approve multisig transactions.

## Project Flow and Diagram
The project consists of several interconnected modules interacting with each other and the blockchain network. The project diagram can be referenced to understand the flow of data and interactions between different modules.

## License
This project is licensed under the MIT License.
