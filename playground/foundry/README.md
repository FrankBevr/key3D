# Recap Foundry

### Basics

- `curl -L https://foundry.paradigm.xyz | bash`
- Clean up git or do something diffrent, which i dont know yet
- `forge init hello_foundry`
- `forge build`
- `forge test`
- `forge install transmissions11/solmate`
- `forge remappings`
- in foundry.tom
    ```toml
    remappings = [
        "@solmate-utils/=lib/solmate/src/utils/",
    ]
    ```
- in counter.sol
    ```sol
    import "@solmate-utils/LibString.sol";
    ```
- `forge update lib/solmate`
- `forge remove solmate`

### Tests

- `forge test`
- `forge test --match-contract ComplicatedContractTest --match-test testDeposit`
- `forge test --match-path test/ContractB.t.sol`
- `forge test --watch --run-all`

### Code Setup

- install solidty as exten from juan blanc
- add .vscode/settings.json just to be specific
- insert the following
   - `./.vscode/settings.json`
      ```json
        {
        "solidity.packageDefaultDependenciesContractsDirectory": "src",
        "solidity.packageDefaultDependenciesDirectory": "lib",
            "editor.formatOnSave": true,
        "[solidity]": {
            "editor.defaultFormatter": "JuanBlanco.solidity" 
        },
        "solidity.formatter": "forge",
        "solidity.compileUsingRemoteVersion": "v0.8.17"
        }
      ```
    - `./foundry.toml`
       ```toml
       solc = "0.8.17"
       ```

### Writing Tests
- Keyword: `setup()`, `test_asdfasdf()`, `testFail_asdfasdf`
- Good Pratice: `test_CannotSubtract43()`
- Note: must have external or public, not internal or private
- shared setup via `is` Inheritance

### Cheatcode
- the allow to manipulate state
- access via `vm`
- example only callable by owner
- `isTest` is the inherted TestSuite
- `testFail_IncrementAsNotOwner()` via `vm.prank(address(0))`
- `forge test`
- `testFail` is antipattern
- `forge tes -vvv --match-test testFail_IncrementAsNotOwner`
- via `expectRevert`
   ```sol
    // Notice that we replaced `testFail` with `test`
    function test_RevertWhen_CallerIsNotOwner() public {
        vm.expectRevert(Unauthorized.selector);
        vm.prank(address(0));
        upOnly.increment();
    }
   ```
- `forge test`
- `expectEmit` via `vm.expectEmit(true, true, false, true)` in `test_ExpectEmit()` and `test_ExpectEmit_DoNotCheckData()`
- There is a [Cheatcode Reference](https://book.getfoundry.sh/cheatcodes/)

### Forge Standard Library

- its a library
- forge std is the prefred way
- `vm.sol`, `console.sol`, `Script.sol`, `Test.sol`
- use `is Test` to inherited test
- vm.startPrank(alice) 
- import via `import "forge-std/Vm.sol` or `import "forge-std/console.sol"` 
- `import "forge-std/console2.sol"` traceable but not compatible with hardhat
- six std libardy, Std Logs, Std  Assertions, Std Cheats, std errors, std storage, std math
- std cheats via `hoax(alice, 100, ether)`
- std errors combine with expectRevert
- `vm.expectRevert(stdError.arithmeticError)`
- std storage
- stdstore.target(address(game)).sig(score.selector).checked_write(10)
- std math
- `uint256 ten = stdMath.abc(-10)`
- There is an [Refrence Sheet](https://book.getfoundry.sh/reference/forge-std/)

### Traces

- forge can prduce traces
- via `-vvv`
- each trace can have subtraces
- it has colors
- green: not rever
- red: revert
- blue cheatcode
- cyan emiited
- yellow deploy
- there is gas
- its doesn sum up the gas usage
- left pointing error indicates where its comming from

### Fork Testing

- forge supports testin
- 2 modes
- forking mode
- forking cheatcodes
- forking mode `forge test --fork-url <your_rpc_url>`
- things are changing
  - block_number
  - chain_id
  - gas_limit
  - gas_price
  - block_base_fee_per_gas
  - block_coinbase
  - block_timestamp
  - block_difficulty
- `forge test --fork-url <your_rpc_url> --fork-block-number 1 `
- caching and clean via `forge clean`
- forking with ethersan
- `forge test --fork-url <your_rpc_url> --etherscan-api-key <your_etherscan_api_key> `
- Forking via cheatcode
- all isolated, all use their evm
- `createFork` is the thingy
- `selectFork` is a onliner
- only one active at the time
- There is `roll`
- forkin mode works like
- ??? over my head :D
- Example: