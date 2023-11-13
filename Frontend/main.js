import { sign } from "crypto";
import "./style.css";
import { ethers, formatEther, parseEther } from "ethers";

async function testo() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  console.log(await provider.send("eth_requestAccounts", []));
  console.log(await provider.getBlockNumber());
  console.log(await provider.getBalance("ethers.eth"));
  const balance = await provider.getBalance(
    "0xeC3417669F881720A6131f4ecf4ED6F38f6e7450"
  );
  console.log(formatEther(balance));
  console.log(parseEther("1.0"));
  const signer = await provider.getSigner();

  const tx = await signer.sendTransaction({
    to: "0x9C49f71e66e089584e05E9eAce2C6caD783E9fE4",
    value: parseEther("0.0001"),
  });

  // Often you may wish to wait until the transaction is mined
  const receipt = await tx.wait();
  console.log(receipt);

}
testo();

document.querySelector("#app").innerHTML = `
  <div>
    <h1>Hello Key3D</h1>
  </div>
`;
