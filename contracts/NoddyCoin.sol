pragma solidity ^0.4.19;

import '../node_modules/zeppelin-solidity/contracts/token/ERC20/MintableToken.sol';

contract NoddyCoin is MintableToken {
    string public name = "NODDY COIN";
    string public symbol = "NOD";
    uint8 public decimals = 18;
}