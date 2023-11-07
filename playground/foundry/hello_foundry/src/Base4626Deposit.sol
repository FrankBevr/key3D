// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;

import "forge-std/Test.sol";

interface IERC20Like {
    function balanceOf(address owner_) external view returns (uint256 balance_);

    function transferFrom(
        address owner_,
        address recipient_,
        uint256 amount_
    ) external returns (bool success_);
}

contract Basic4626Deposit {
    /**********************************************************************************************/
    /*** Storage                                                                                ***/
    /**********************************************************************************************/

    address public immutable asset;

    string public name;
    string public symbol;

    uint8 public immutable decimals;

    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    /**********************************************************************************************/
    /*** Constructor                                                                            ***/
    /**********************************************************************************************/

    constructor(
        address asset_,
        string memory name_,
        string memory symbol_,
        uint8 decimals_
    ) {
        asset = asset_;
        name = name_;
        symbol = symbol_;
        decimals = decimals_;
    }

    /**********************************************************************************************/
    /*** External Functions                                                                     ***/
    /**********************************************************************************************/

    function deposit(
        uint256 assets_,
        address receiver_
    ) external returns (uint256 shares_) {
        shares_ = convertToShares(assets_);

        require(receiver_ != address(0), "ZERO_RECEIVER");
        require(shares_ != uint256(0), "ZERO_SHARES");
        require(assets_ != uint256(0), "ZERO_ASSETS");

        totalSupply += shares_;

        // Cannot overflow because totalSupply would first overflow in the statement above.
        unchecked {
            balanceOf[receiver_] += shares_;
        }

        require(
            IERC20Like(asset).transferFrom(msg.sender, address(this), assets_),
            "TRANSFER_FROM"
        );
    }

    function transfer(
        address recipient_,
        uint256 amount_
    ) external returns (bool success_) {
        balanceOf[msg.sender] -= amount_;

        // Cannot overflow because minting prevents overflow of totalSupply,
        // and sum of user balances == totalSupply.
        unchecked {
            balanceOf[recipient_] += amount_;
        }

        return true;
    }

    /**********************************************************************************************/
    /*** Public View Functions                                                                  ***/
    /**********************************************************************************************/

    function convertToShares(
        uint256 assets_
    ) public view returns (uint256 shares_) {
        uint256 supply_ = totalSupply; // Cache to stack.

        shares_ = supply_ == 0 ? assets_ : (assets_ * supply_) / totalAssets();
    }

    function totalAssets() public view returns (uint256 assets_) {
        assets_ = IERC20Like(asset).balanceOf(address(this));
    }
}

contract Basic4626DepositTest is Test {
    Basic4626Deposit foo;
    IERC20Like asset;

    function setUp() external {
        foo = new Basic4626Deposit(address(1337), "foo", "bar", 18);
        
    }

    function testA() public view {
        assert(keccak256(bytes(foo.name())) == keccak256(bytes("foo")));
    }

    /* Got damned I dont get how they did it ^^ */
    function deposit(uint256 assets) public virtual {
        // asset.mint(address(this), assets);
        // asset.approve(address(foo.token), assets);
        // uint256 shares = foo.token.deposit(assets, address(this));
    }
}
