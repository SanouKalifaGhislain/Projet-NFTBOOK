// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookPayment {
    mapping(uint256 => address) public authors;
    mapping(uint256 => uint256) public resalePrices;

    event BookSold(uint256 tokenId, address buyer, uint256 price);
    event BookResold(uint256 tokenId, address buyer, uint256 resalePrice);

    function buyBook(uint256 tokenId) public payable {
        require(_exists(tokenId), "Livre inexistant");
        require(resalePrices[tokenId] > 0, "Pas de prix de revente défini");

        address author = authors[tokenId];
        address seller = ownerOf(tokenId);
        require(seller != msg.sender, "Vous possédez déjà ce livre");

        uint256 authorShare = (msg.value * 8) / 100;
        uint256 platformShare = (msg.value * 2) / 100;
        uint256 sellerShare = msg.value - authorShare - platformShare;

        payable(author).transfer(authorShare);
        payable(platformOwner).transfer(platformShare);
        payable(seller).transfer(sellerShare);

        _transfer(seller, msg.sender, tokenId);
        emit BookResold(tokenId, msg.sender, msg.value);
    }
}
