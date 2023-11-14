import './style.css';
import { ethers } from "ethers";
import { abi } from "./abi.js";

async function callContract() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const address = "0x6D3D4d5b3378f77901DC9671C26AE83e6d044802";
  const contract = new ethers.Contract(address, abi, provider);
  const value = await contract.number();
  console.log(value)
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = `
      <div>
        <h1>Hello Key3D </h1>
        <h3>Get Number</h3>
        <div id="dynamicData">${value}</div>
      </div>
    `;
}
callContract();
