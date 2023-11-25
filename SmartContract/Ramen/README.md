# `Ramen.sol` on zkEVM 

> ℹ️ You have to use `--legacy` on the zkEVM.

1. Fill out .env-example
2. mv .env-example .env && bash source .env
3. `forge script script/Ramen.s.sol --legacy --rpc-url=$KATANA_RPC_URL --broadcast -vvv`
    <details>

    <summary> Example output </summary>

    ```
    [⠑] Compiling...
    No files changed, compilation skipped
    Script ran successfully.

    ## Setting up 1 EVM.

    ==========================

    Chain 1261120

    Estimated gas price: 0.0115 gwei

    Estimated total gas used for script: 506953

    Estimated amount required: 0.0000058299595 ETH

    ==========================

    ###
    Finding wallets for all the necessary addresses...
    ##
    Sending transactions [0 - 0].
    ⠁ [00:00:00] [###########################################################] 1/1 txes (0.0s)
    Transactions saved to: /home/frank/key3D/SmartContract/Ramen/broadcast/Ramen.s.sol/1261120/run-latest.json

    Sensitive values saved to: /home/frank/key3D/SmartContract/Ramen/cache/Ramen.s.sol/1261120/run-latest.json

    ##
    Waiting for receipts.
    ⠉ [00:00:06] [#######################################################] 1/1 receipts (0.0s)
    ##### 1261120
    ✅  [Success]Hash: 0xf0466810c2dbd180e70ce3a543313ee24993681b2ae8b5d84515458e544a5711
    Contract Address: 0x5Aa0b5EE61195075df5626244533838D32a097ba
    Block: 191060
    Paid: 0.000004484586 ETH (389964 gas * 0.0115 gwei)


    Transactions saved to: /home/frank/key3D/SmartContract/Ramen/broadcast/Ramen.s.sol/1261120/run-latest.json

    Sensitive values saved to: /home/frank/key3D/SmartContract/Ramen/cache/Ramen.s.sol/1261120/run-latest.json



    ==========================

    ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.
    Total Paid: 0.000004484586 ETH (389964 gas * avg 0.0115 gwei)

    Transactions saved to: /home/frank/key3D/SmartContract/Ramen/broadcast/Ramen.s.sol/1261120/run-latest.json

    Sensitive values saved to: /home/frank/key3D/SmartContract/Ramen/cache/Ramen.s.sol/1261120/run-latest.json
    ```
    </details>

4. `forge flatten src/Ramen.sol | <CLIPBOARD>`
5. Go to `https://zkatana.blockscout.com/address/<CONTRACT_ADDRESS>`
6. Go to Contract Tab, click verify&publish, select flatten, select 0.83, select paris, paste from clipboard in FlattenInputField, click verify, :tada:
7. It should look like this now
    <details>

    <summary> Deployed Contract & Verified</summary>

        `https://zkatana.blockscout.com/address/0x5Aa0b5EE61195075df5626244533838D32a097ba?tab=contract`

    </details>
