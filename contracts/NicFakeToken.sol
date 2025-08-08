// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NicFakeToken is ERC20 {
    uint constant _initial_supply = 100 * (10 ** 18);

    constructor() ERC20("NicFakeToken", "NFT") {
        _mint(msg.sender, _initial_supply);
    }
}
