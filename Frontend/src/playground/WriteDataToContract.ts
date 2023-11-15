// Import ethers library
import { ethers } from "ethers";

// Import ABI from external file
import { abi } from "./abi.js";

// Function to write data to the contract
async function writeDataToContract() {
  // Create provider using browser provider and window.ethereum
  const provider = new ethers.BrowserProvider(window.ethereum);

  // Define contract address and ABI
  const contractAddress = "0x6D3D4d5b3378f77901DC9671C26AE83e6d044802";

  // Create signer using provider and getSigner()
  const signer = await provider.getSigner();

  // Create contract instance
  const contract = new ethers.Contract(contractAddress, abi, signer);

  // Retrieve initial number from the contract
  let oldNumber = await contract.number();
  let newNumber = await contract.number();

  // Function to handle increment button click
  const incrementNumber = async () => {
    // Retrieve old number from the contract
    oldNumber = await contract.number();

    // Call the increment function in the contract
    const tx = await contract.increment();
    await tx.wait();

    // Retrieve new number from the contract
    newNumber = await contract.number();

    // Update displayed numbers
    updateDisplayedNumbers();
  };

  // Function to update displayed numbers
  const updateDisplayedNumbers = () => {
    const olderNumberDiv = document.querySelector("#olderNumber")!;
    olderNumberDiv.textContent = `The older number was ${oldNumber}`;

    const newNumberDiv = document.querySelector("#newNumber")!;
    newNumberDiv.textContent = `The new number is ${newNumber}`;
  };

  // Create HTML structure
  const appContainer = document.querySelector("#writeContractApp")!;
  appContainer.innerHTML = `
    <div>
      <h1>Hello writeDataToContract</h1>
      <h3>Increment Number</h3>
      <button id="incrementButton">Increment Me</button>
      <div id="olderNumber">The current number is <strong>${oldNumber}</strong></div>
      <div id="newNumber">Not incremented, yet</div>
    </div>
  `;

  // Add event listener to increment button
  document.getElementById("incrementButton")!.addEventListener("click", incrementNumber);
}

// Call the writeDataToContract function
writeDataToContract();
