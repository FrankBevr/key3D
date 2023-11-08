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
- Example: see in folders

### Fuzz Testin

- property testing
- testing withdraw
- failed on high value amounts
- there is `vm.assume(amount > 0.1 ether)`
- it runs multiple time, i guess
- there is a config via config

### Invariant Testing
- its powerful
- randomize input of testing
- there are two dimesnion, runds and depth
- runs number of runs
- depts number of function calls
- `invariant` to declare that kind of that
- there are configs avaialbe
- defining variants, xy = always X, sum of all token is the same
- direct assertion
- ghost variable assertions
- deoptimizing, compare thingies
- conditional variants
- invariants if something then do more invariants if not then less
- if condition true than do not or do following
- via setup possible 
- invariant targets
- target contract
- target senders
- target selectors
- target artifacts
- target artifacts selectors
- targetSelectors | targetArtifactSelectors > selcudeContracts | excludeArticats > target Contrracts | target ARtificats
- Invariant test helper functions
- in forge std
- ExcludedContract,excludeSender, excludeArtifact,targetArtifacts,targetArtifactSelecetor, targetArtifactSelector, targetContract, targetSelector, targetSender,
- target contract setup
- 1. manually, 2. automaticall, 3. exclude contract
- example
- hadler based testing for more complex
- example
- they chunk into storage, constructor, external function, public view functions
- target contract uses handler
- hanlder betweens protocol and foundry and foundry get invariants
- yikes a bit over my head again
- function level asserions
- bounded/unbouded Functions
- unbounded works kind of inheritance
- actor managment
- ghosted as well 
- I dont get the example they wanna not run. Feels like something where i spend a day on.

### Differnetail Testing

- testing function against function
- f1(x) = f2(x) , basically
- differinal fuzzing, does the same but uses many input
- note: floating points special
- compare upgraded, testding known reference, confirm compatibile
- Primer ffi cheatcode
   ```sol
   import "forge-std/Test.sol";
    contract TestContract is Test {

    function testMyFFI () public {
        string[] memory cmds = new string[](2);
        cmds[0] = "cat";
        cmds[1] = "address.txt"; // assume contains abi-encoded address.
        bytes memory result = vm.ffi(cmds);
        address loadedAddress = abi.decode(result, (address));
        // Do something with the address
        // ...
    }
   }
   ```
- Example: differntial testing Merkel Tree
- Murky is available, merkle tree thingy
- it uses scripts folder
- sometimes ffi is not needed
- there is deffierntial testing agains known edge case
- there is standardized testing against reference data
- there is differentail testing grdual dutch actuions 
- I will not go into depth on it. still abit over my head.

### Deploying
- Forge can deploy
- we have to provide things
- `forge create --rpc-url <your_rpc_url> --private-key <your_private_key> src/MyContract.sol:MyContract`
- with etherscan and constructor
   ```sh
   forge create --rpc-url <your_rpc_url> \
    --constructor-args "ForgeUSD" "FUSD" 18 1000000000000000000000 \
    --private-key <your_private_key> \
    --etherscan-api-key <your_etherscan_api_key> \
    --verify \
    src/MyToken.sol:MyToken
   ````
- verify prexisting
- `forge verify-contract` needs `contract addresss`, `contract name`, `ehterscan api key`, `chain id`
- an example
   ```sh
   forge create --rpc-url <your_rpc_url> \
    --constructor-args "ForgeUSD" "FUSD" 18 1000000000000000000000 \
    --private-key <your_private_key> \
    --etherscan-api-key <your_etherscan_api_key> \
    --verify \
    src/MyToken.sol:MyToken
    ```
- or via non `--watch`
   ```sh
   forge verify-check --chain-id 11155111 <GUID> <your_etherscan_api_key>
   ```
- tipp: cast can help to code
- there is troubleshoot
- there are problem erros, which say something
- there are known issue

### Gas Tracking
- forge can do gastracking
- tools are gasreports, gas snapshots,
- they differ
- gasreports use tracing more granular less speed
- snapshot are fast but less acurate

### Gas Reports
- add in foundry.toml
    ```toml
    gas_reports = ["MyContract", "MyContractFactory"]
    ```
    ```toml
    gas_reports = ["*"]
    ```
- use via `forge test --gas-report`
- then it spits out a table
- its possible to ignore thingsie via
   ```tom
   gas_reports_ignore = ["Example"]
   ```

### Gas Snapshot

- forge can generate snapshot. 
- via `forge snapshot` create file called `./.gas-snapshot`
- line by line output
- there is filtering
- via `forge snapshot --snap <FILE_NAME>`
- --desc, sort results
- --min, filters with min value
- --max, filters with min value
- --diff or --check are availabe
- `forge snapshot --diff .gas-snapshot2`
- --check does the same it seems

### Debugger

- there is interactive debugger
- via `forge test --debug $FUNC`
- via `forge test --debug "testSomething()"`
- or `forge debug --debug $FILE --sig $FUNC`
- or `forge debug --debug src/SomeContract.sol --sig "myFunc(uint256,string)" 123 "hello"`
- if debug runs 4 qudrants
- quad 1 opbcode, quad 2 current stakc, 3 source view, 4 current memory
- red = about to written
- green = were written
- cyan = are being read
- there is navigation
- vim like
- g beignning transaction
- c move previous call
- C Move next call
- a previous jump
- s next jump
- ' a-z via `vm.breakpoint`

### Cast

- cast is a clie tool
- `cast <something>`
- f.e. `cast call 0x6b175474e89094c44da98b954eedeac495271d0f "totalSupply()(uint256)" --rpc-url https://eth-mainnet.alchemyapi.io/v2/Lc7oIGYeL_QvInzI0Wiu_pOZZDEKBrdf 8603853182003814300330472690`
- its possible to provide decoded values
- use cast to sending message between anvil accounts
   ```sh
   cast send --private-key <Your Private Key> 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc $(cast from-utf8 "hello world") --rpc-url http://127.0.0.1:8545/
   ```
- There are [refrence](https://book.getfoundry.sh/reference/cast/)

### Anvil Overview

- anvil is a local testnet, like ganache
- part of foundry sweet
- foundry sweet is forge, cast, chisel
- basics 
   ```sh
   anvil -a, --accounts <ACCOUNTS>
   anvil --hardfork <HARDFORK>
   anvil  -p, --port <PORT>
   ```

### Overview Chisel
- chisel is a repl
- quickly test things
- even with forks it seems, wild
- !help to see what is available
- There is a [reference](https://book.getfoundry.sh/reference/chisel/)

### Configuring
- can be named
- example
   ```toml
   [profile.default]
   optimizer = true
   optimizer_runs = 20_000

   [profile.ci]
   verbosity = 4
   ```toml
- use via `FOUNDRY_PROFILE` .env value
- There is a [refrence](https://book.getfoundry.sh/reference/config/)

### CI 
- possible via git
- possible via travie
- possible via gitlab

### Integrate with VS Code
- maybe tweak it
- `forge remapping > remapping.txt` could be usefull
- add thingies in `.vscode/settings.json`
- add formatter in `.vscode/settings.json`
- add solc version in `.vscode/settings.json`

### Automcompletion
- availabel via zsh, fish, bash, 