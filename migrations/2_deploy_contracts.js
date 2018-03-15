var ChainList = artifacts.require("./ChainList.sol");
//var Zeppelin = artifacts.require("zeppelin-solidity/contracts/examples/SampleCrowdsale.sol");
var LockYourEther = artifacts.require("./LockYourEther.sol");
var LockYourEtherBounty = artifacts.require("./LockYourEtherBounty.sol");
const NoddyCoinCrowdsale = artifacts.require('./NoddyCoinCrowdsale.sol');
const NoddyCoin = artifacts.require('./NoddyCoin.sol');


//module.exports = function(deployer) {
//  deployer.deploy(ChainList);
//  deployer.deploy(LockYourEther);
//  deployer.deploy(LockYourEtherBounty);
//};

module.exports = function(deployer, network, accounts) {
  const openingTime = web3.eth.getBlock('latest').timestamp + 2; // two secs in the future
  const closingTime = openingTime + 86400 * 20; // 20 days
  const rate = new web3.BigNumber(1000);
  const wallet = accounts[1];

  return deployer
      .then(() => {
          return deployer.deploy(NoddyCoin);
      })
      .then(() => {
          return deployer.deploy(
              NoddyCoinCrowdsale,
              openingTime,
              closingTime,
              rate,
              wallet,
              NoddyCoin.address
          );
      });
};
