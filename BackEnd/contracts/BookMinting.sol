// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookMinting {
    uint256 public mintingFee = 1 ether;  // 1 dollar équivalent à 1 token dans ce contexte

    event NFTMinted(uint256 tokenId, address owner, string tokenURI);

    function mintBook(string memory tokenURI) public payable {
        require(msg.value == mintingFee, "Frais de minting de 1 dollar requis");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);

        // Transférer les frais de minting à la plateforme
        payable(platformOwner).transfer(mintingFee);

        emit NFTMinted(tokenId, msg.sender, tokenURI);
    }
}
