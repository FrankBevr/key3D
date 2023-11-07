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
