### Recap Foundry


#### Basics

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