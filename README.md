
# Voting - DAPP

## Pre-requirements:
Install these prerequisites:
1. NPM: https://nodejs.org
2. Truffle: https://github.com/trufflesuite/truffle
3. Ganache: http://truffleframework.com/ganache/
4. Metamask: https://metamask.io/

## Step 1. Clone the project
`git clone https://github.com/duongvansang/voting-dapp.git`

## Step 2. Install dependencies
```
$ cd voting-dapp
$ npm install
```
## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed to run local blockchain

## Step 4. Compile & Deploy Election Smart Contract
`$ truffle migrate --reset`
You must migrate the Voting smart contract each time your restart ganache.

## Step 5. Configure Metamask
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
`$ npm run dev`
Visit this URL in your browser: http://localhost:3000
