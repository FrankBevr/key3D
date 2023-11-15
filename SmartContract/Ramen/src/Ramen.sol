// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract Ramen {
    string public ramen_ipfs;
    address public owner;
    bool public did_accounting;

    constructor(string memory _ramen_ipfs) {
        ramen_ipfs = _ramen_ipfs;
        owner = msg.sender;
        did_accounting = false;
    }

    function get_ramen_ipfs() public view returns (string memory) {
        return ramen_ipfs;
    }

    function get_owner() public view returns (address) {
        return owner;
    }

    function change_owner(address newOwner) public {
        require(
            msg.sender == owner,
            "Only the current owner can change the owner"
        );
        owner = newOwner;
    }

    function do_accounting() public {
        require(
            msg.sender == owner,
            "Only the current owner can perform accounting"
        );
        did_accounting = true;
    }
}
