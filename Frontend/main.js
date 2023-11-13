import "./style.css";
import { ethers, parseEther } from "ethers";

async function testo() {
  // Connect
  const provider = new ethers.BrowserProvider(window.ethereum);
  console.log(provider);
  console.log("--------------------");
  // Shot account
  const accounts = await provider.send("eth_requestAccounts", []);
  console.log(accounts);
  console.log("--------------------");
  const blockNumber = await provider.getBlockNumber();
  console.log(blockNumber);
  console.log("--------------------");
  const balanceEthers = await provider.getBalance("ethers.eth");
  console.log(balanceEthers);
  console.log("--------------------");
  const balanceAccount = await provider.getBalance(
    "0xeC3417669F881720A6131f4ecf4ED6F38f6e7450"
  );
  console.log(balanceAccount);
  console.log("--------------------");
  const formattedBalanceAccount = ethers.formatEther(balanceAccount);
  console.log(formattedBalanceAccount);
  console.log("--------------------");
  const formatEther = parseEther("1.0");
  console.log(formatEther);
  console.log("--------------------");
  const signer = await provider.getSigner();
  console.log(signer);
  console.log("--------------------");

  const tx = await signer.sendTransaction({
    to: "0x9C49f71e66e089584e05E9eAce2C6caD783E9fE4",
    value: parseEther("0.0001"),
  });
  console.log(tx);
  console.log("--------------------");
  const receipt = await tx.wait();
  console.log(receipt);
  console.log("--------------------");

  const divo = document.getElementById("testo");
  divo.innerHTML = `
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
  <div>${tx}</div>
  <h2>Receipt</h2>
  <div>${receipt}</div>
  `;
}
testo();

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Key3D</h1>
    <div id="testo"><div>
  </div>
`;
