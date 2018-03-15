pragma solidity ^0.4.11;

import "./LockYourEther.sol";
import { Bounty } from "../node_modules/zeppelin-solidity/contracts/Bounty.sol";

contract LockYourEtherBounty is Bounty {
  function deployContract() internal returns(address) {
    return new LockYourEther();
  }
}