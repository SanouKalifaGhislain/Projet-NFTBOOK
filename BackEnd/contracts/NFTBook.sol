// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./BookMinting.sol";
import "./BookPayment.sol";
import "./BookAccess.sol";
import "./BookAuction.sol";
import "./BookLending.sol";

contract NFTBook is ERC721URIStorage, BookMinting, BookPayment, BookAccess, BookAuction, BookLending {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    address public platformOwner;

    constructor() ERC721("NFTBook", "NFTB") {
        platformOwner = msg.sender;
    }
}
