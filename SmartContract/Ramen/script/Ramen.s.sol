// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

import {Script, console2} from "forge-std/Script.sol";
import {Ramen} from "../src/Ramen.sol";

contract RamenScript is Script {
    function run() public {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        Ramen nft = new Ramen("Qmf1AE51kcfdHkDdcVkd44L8kzdi1g3gtrLERAA4xF9ZXr");

        vm.stopBroadcast();
    }
}
