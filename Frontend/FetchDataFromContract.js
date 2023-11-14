import './style.css';
import { ethers } from "ethers";
import { abi } from "./abi.js";

// Function to fetch and display data from the contract
async function fetchDataFromContract() {
  const provider = new ethers.BrowserProvider(window.ethereum);

  // Specify the address of the contract
  const contractAddress = "0x6D3D4d5b3378f77901DC9671C26AE83e6d044802";

  // Create a new instance of the contract using the address and ABI
  const contract = new ethers.Contract(contractAddress, abi, provider);

  // Call the 'number' function of the contract to get the value
  const numberValue = await contract.number();

  // Log the value to the console
  console.log(numberValue);

  // Find the app container in the HTML
  const appContainer = document.querySelector("#app");

  // Update the app container to display the fetched value
  appContainer.innerHTML = `
      <div>
        <h1>Hello Key3D</h1>
        <h3>Get Number</h3>
        <div id="dynamicData">${numberValue}</div>
      </div>
    `;
}

// Call the function to fetch and display data from the contract
fetchDataFromContract();
