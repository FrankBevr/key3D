// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console2, stdError } from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
        counter.setNumber(0);
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }
}

contract ContractBTest is Test {
    uint256 testNumber;

    function setUp() public {
        testNumber = 42;
    }

    function test_NumberIs42() public {
        assertEq(testNumber, 42);
    }

    function testFail_Subtract43() public {
        testNumber -= 43;
    }

    function test_CannotSubtract43() public {
        vm.expectRevert(stdError.arithmeticError);
        testNumber -= 43;
    }
}


/****************
 * SHARED SETUP *
 ****************/
// abstract contract HelperContract {
//     address constant IMPORTANT_ADDRESS = 0x543d...;
//     SomeContract someContract;
//     constructor() {...}
// }

// contract MyContractTest is Test, HelperContract {
//     function setUp() public {
//         someContract = new SomeContract(0, IMPORTANT_ADDRESS);
//         ...
//     }
// }

// contract MyOtherContractTest is Test, HelperContract {
//     function setUp() public {
//         someContract = new SomeContract(1000, IMPORTANT_ADDRESS);
//         ...
//     }
// }
