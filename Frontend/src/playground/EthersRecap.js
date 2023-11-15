import { ethers, parseEther } from "ethers";

async function fetchBlockchainData() {
  // Connect to Ethereum Provider using the browser's Ethereum object
  const provider = new ethers.BrowserProvider(window.ethereum);
  console.log(provider);
  console.log("--------------------");

  // Get Metamask accounts
  const accounts = await provider.send("eth_requestAccounts", []);
  console.log(accounts);
  console.log("--------------------");

  // Get the latest block number
  const blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);
  console.log("--------------------");

  // Get balance of "ethers.eth" address
  const balanceEthers = await provider.getBalance("ethers.eth");
  console.log(balanceEthers);
  console.log("--------------------");

  // Get balance of specific account
  const targetAccount = "0xeC3417669F881720A6131f4ecf4ED6F38f6e7450";
  const balanceAccount = await provider.getBalance(targetAccount);
  console.log(balanceAccount);
  console.log("--------------------");

  // Format balance of account in Ether units
  const formattedBalanceAccount = ethers.formatEther(balanceAccount);
  console.log(formattedBalanceAccount);
  console.log("--------------------");

  // Convert 1 Ether to Wei
  const formatEther = parseEther("1.0");
  console.log(formatEther);
  console.log("--------------------");

  // Get signer for executing transactions
  const signer = await provider.getSigner();
  console.log(signer);
  console.log("--------------------");

  // Send a transaction
  const toAddress = "0x9C49f71e66e089584e05E9eAce2C6caD783E9fE4";
  const transaction = await signer.sendTransaction({
    to: toAddress,
    value: parseEther("0.0001"),
  });
  console.log(transaction);
  console.log("--------------------");

  // Wait for transaction receipt
  const receipt = await transaction.wait();
  console.log(receipt);
  console.log("--------------------");

  // Update HTML content
  const staticDataContainer = document.createElement("div");
  staticDataContainer.innerHTML = `
    <h2>Accounts</h2>
    <div>${accounts}</div>
    <h2>Block Number</h2>
    <div>${blockNumber}</div>
    <h2>Balance of Ethers.eth</h2>
    <div>${balanceEthers}</div>
    <h2>Balance of Account</h2>
    <div>${balanceAccount}</div>
    <h2>Formatted Balance of Account</h2>
    <div>${formattedBalanceAccount}</div>
    <h2>Format Ether</h2>
    <div>${formatEther}</div>
    <h2>Signer</h2>
    <div>${signer}</div>
    <h2>Transaction</h2>
    <div>${transaction}</div>
    <h2>Receipt</h2>
    <div>${receipt}</div>
  `;
  document.getElementById("staticData").appendChild(staticDataContainer);

  // Function to update the block number
  async function updateDynamicBlockNumber() {
    const currentBlockNumber = await provider.getBlockNumber();
    const dynamicDataContainer = document.getElementById("dynamicData");
    dynamicDataContainer.innerHTML = `
    <h2>Dynamic Block Number</h2>
    <div>${currentBlockNumber}</div>
    `;
  }
  // Update the block number every 5 seconds
  setInterval(updateDynamicBlockNumber, 5000);
}

const appContainer = document.querySelector("#ethersRecapApp");
appContainer.innerHTML = `
    <div>
      <h1>Hello Ethers Recap</h1>
      <div id="staticData"></div>
      <div id="dynamicData"></div>
    </div>
  `;

fetchBlockchainData();
