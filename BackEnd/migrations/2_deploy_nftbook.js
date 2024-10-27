const NFTBook = artifacts.require("NFTBook");

module.exports = function (deployer) {
  const platformOwner = '0x0AB7650c764ed015D273007607F37f36EDc1f292';
  const maxCopies = 100;
  const price = web3.utils.toWei('0.1', 'ether');
  deployer.deploy(NFTBook, platformOwner, maxCopies, price);
};
