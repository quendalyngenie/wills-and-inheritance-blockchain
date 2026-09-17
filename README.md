# Wills & Inheritance Blockchain DApp ⚖️

A blockchain-based digital will management prototype developed as part of a **Polytechnic project**.

The project explores how **Ethereum smart contracts** can be used to store and manage will and inheritance information through a decentralised application (DApp).

Users can connect an Ethereum wallet using MetaMask, create a digital will, specify beneficiaries, assets and an executor, view existing will records, and update a stored will through a simple web interface.

---

## About the Project

Traditional will management depends heavily on centralised records and intermediaries.

This project explores an alternative concept where information associated with a will can be recorded through an Ethereum smart contract.

The application combines:

* A Solidity smart contract
* Ethereum blockchain interaction
* MetaMask authentication
* Web3.js
* A browser-based interface

The prototype demonstrates how blockchain can be integrated into a legal-tech style application while exploring concepts such as decentralised data storage, transparency and smart contract interaction.

---

## Features

### MetaMask Wallet Connection

Users can connect an Ethereum wallet through MetaMask.

The application detects the browser's Ethereum provider and requests access to the user's wallet.

Once connected, the wallet address can be displayed within the application.

---

### Create a Digital Will

Users can create a will containing:

* Testator name
* Testator identification number
* Testator address
* Beneficiary name
* Beneficiary identification number
* Asset information
* Executor

Each new will is assigned a numerical **Will Code**.

The information is submitted to the Ethereum smart contract through a blockchain transaction.

---

### Executor Selection

Users can nominate an executor or personal representative when creating a will.

The interface provides a list of available executor names that can be selected when completing the will.

---

### Beneficiary Information

The will records information about the intended beneficiary, including:

* Beneficiary name
* Identification number
* Asset to be inherited

This information forms part of the will record stored by the smart contract.

---

### View Stored Wills

The application retrieves existing will records from the smart contract and displays them in a table.

The interface shows:

| Field            | Description                                    |
| ---------------- | ---------------------------------------------- |
| Will Code        | Unique numerical identifier                    |
| Testator NRIC    | Identification of the person creating the will |
| Testator Name    | Name of the testator                           |
| Testator Address | Address of the testator                        |
| Inheritance Name | Beneficiary                                    |
| Inheritance NRIC | Beneficiary identification                     |
| Asset List       | Assets recorded in the will                    |
| Executor         | Selected personal representative               |

---

### Edit Will Records

Existing will records can be updated using their Will Code.

The user can update information including:

* Testator information
* Beneficiary information
* Assets
* Executor

The updated information is then submitted to the smart contract through another blockchain transaction.

---

## Smart Contract

The core blockchain functionality is implemented in:

```text
WillAndInheritance.sol
```

The project uses **Solidity 0.5.10**.

The contract defines a `Will` structure containing:

```solidity
struct Will {
    uint willCode;
    string testatorNRIC;
    string testatorName;
    string testatorAddress;
    string testatorInheritNames;
    string testatorInheritNRIC;
    string assetList;
    string executorName;
}
```

Will records are stored using a Solidity mapping:

```solidity
mapping(uint => Will) public willList;
```

A counter is also maintained to track the number of wills stored.

---

## Smart Contract Functions

### `addWill()`

Creates a new will record.

The function:

1. Increments the total will count
2. Generates a new Will Code
3. Stores the supplied will information in the contract

---

### `getWill()`

Retrieves the information associated with a particular Will Code.

The function returns information including the testator, beneficiary, asset and executor.

---

### `transferEx()`

Updates an existing will record using its Will Code.

Despite the original function name, the current implementation does **not transfer cryptocurrency or ownership of an asset**. It replaces the information stored for the specified will.

---

## Application Flow

```text
Open DApp
   ↓
Connect MetaMask Wallet
   ↓
Create Will
   ↓
Enter Testator Information
   ↓
Select Executor
   ↓
Enter Beneficiary
   ↓
Enter Asset Information
   ↓
Confirm Ethereum Transaction
   ↓
Smart Contract Stores Will
   ↓
View / Edit Will
```

---

## Tech Stack

| Technology | Usage                                                |
| ---------- | ---------------------------------------------------- |
| Solidity   | Ethereum smart contract                              |
| Ethereum   | Blockchain platform                                  |
| Web3.js    | Communication between frontend and Ethereum          |
| MetaMask   | Wallet connection and transaction signing            |
| JavaScript | Application and blockchain logic                     |
| HTML       | Web interface                                        |
| CSS        | Interface styling                                    |
| jQuery     | DOM manipulation and event handling                  |
| Infura     | Ethereum RPC endpoint used by the original prototype |

---

## Project Structure

```text
wills-and-inheritance-blockchain/
│
├── WillAndInheritance.sol   # Ethereum smart contract
├── Assignment.js            # Web3 and DApp logic
├── Assignment.css           # Application styling
│
├── frontpage.html           # MetaMask login page
├── Assignment.html          # Create will interface
├── fulldisplay.html         # Display stored wills
├── transfer.html            # Edit existing wills
└── thankyou.html            # Confirmation page
```

---

## Frontend & Blockchain Integration

The frontend communicates with the Solidity smart contract using **Web3.js**.

The general architecture is:

```text
Web Interface
      ↓
JavaScript / jQuery
      ↓
Web3.js
      ↓
MetaMask
      ↓
Ethereum Network
      ↓
WillAndInheritance Smart Contract
```

MetaMask acts as the Ethereum provider and allows users to approve blockchain transactions from the browser.

---

## Running the Project

### Requirements

To experiment with the project, you will need:

* A modern web browser
* MetaMask
* An Ethereum development or test network
* A deployed version of `WillAndInheritance.sol`
* A local web server

---

### 1. Clone the repository

```bash
git clone https://github.com/quendalyngenie/wills-and-inheritance-blockchain.git
```

### 2. Enter the project directory

```bash
cd wills-and-inheritance-blockchain
```

### 3. Deploy the Smart Contract

The original smart contract can be found in:

```text
WillAndInheritance.sol
```

It can be compiled and deployed using an Ethereum development environment such as Remix.

After deployment, update the contract address and ABI used by `Assignment.js`.

---

### 4. Run a Local Server

For example, using Python:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/frontpage.html
```

Connect MetaMask to the Ethereum network where the contract was deployed.

---

## Legacy Network Configuration

The original project configuration references the **Ethereum Ropsten test network** through Infura.

Ropsten has since been deprecated, so the original deployed contract and RPC configuration should be considered historical.

To run the application today, the contract should be redeployed to a currently supported Ethereum development environment or test network and the contract configuration in `Assignment.js` updated accordingly.

---

## Project Purpose

This project was developed as a **Polytechnic blockchain project** to explore the use of smart contracts in wills and inheritance management.

The project demonstrates:

* Creating Solidity smart contracts
* Structuring blockchain data
* Reading data from a smart contract
* Sending blockchain transactions
* Integrating MetaMask with a web application
* Connecting JavaScript applications to Ethereum
* Developing a basic decentralised application
* Exploring blockchain applications outside cryptocurrency payments

---

## Limitations

This repository is an academic prototype rather than a production inheritance platform.

The current implementation:

* Stores will information directly on-chain
* Does not automatically verify a testator's death
* Does not automatically distribute cryptocurrency or tokenised assets
* Does not implement inheritance conditions or timed execution
* Does not provide access-control rules for editing wills
* Does not encrypt personally identifiable information before storing it
* Does not establish the legal validity of a will

A production implementation would require significantly stronger privacy, security, identity verification, access control and legal compliance mechanisms.

---

## Privacy & Security Note

The prototype stores information such as names, identification numbers and addresses as Solidity strings.

Public blockchain data should generally be treated as publicly accessible and permanent.

For a real-world system, sensitive personal information should **not be stored directly on a public blockchain**. A production architecture could instead store encrypted data or cryptographic references while keeping sensitive information in an appropriately secured off-chain system.

---

## Disclaimer

This project was created for **academic and educational purposes only**.

It is a proof-of-concept demonstrating smart contract and Web3 development and should not be used for real wills, estate planning, inheritance management, financial transactions or legal purposes.
