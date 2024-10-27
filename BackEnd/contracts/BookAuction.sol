// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookAuction {
    struct Auction {
        address seller;
        uint256 minBid;
        uint256 highestBid;
        address highestBidder;
        uint256 auctionEndTime;
        bool isActive;
    }

    mapping(uint256 => Auction) public auctions;

    event AuctionCreated(uint256 tokenId, uint256 minBid, uint256 auctionEndTime);
    event NewHighestBid(uint256 tokenId, address bidder, uint256 bidAmount);
    event AuctionEnded(uint256 tokenId, address winner, uint256 winningBid);

    function createAuction(uint256 tokenId, uint256 minBid, uint256 auctionDuration) public {
        require(ownerOf(tokenId) == msg.sender, "Vous devez être le propriétaire pour créer une enchère");
        require(!auctions[tokenId].isActive, "Une enchère est déjà active pour ce NFT");

        auctions[tokenId] = Auction({
            seller: msg.sender,
            minBid: minBid,
            highestBid: 0,
            highestBidder: address(0),
            auctionEndTime: block.timestamp + auctionDuration,
            isActive: true
        });

        emit AuctionCreated(tokenId, minBid, block.timestamp + auctionDuration);
    }

    function placeBid(uint256 tokenId) public payable {
        Auction storage auction = auctions[tokenId];
        require(block.timestamp < auction.auctionEndTime, "L'enchère est terminée");
        require(msg.value > auction.minBid && msg.value > auction.highestBid, "Votre enchère est trop faible");

        if (auction.highestBid > 0) {
            payable(auction.highestBidder).transfer(auction.highestBid);
        }

        auction.highestBid = msg.value;
        auction.highestBidder = msg.sender;

        emit NewHighestBid(tokenId, msg.sender, msg.value);
    }

    function endAuction(uint256 tokenId) public {
        Auction storage auction = auctions[tokenId];
        require(block.timestamp >= auction.auctionEndTime, "L'enchère n'est pas encore terminée");
        require(auction.isActive, "L'enchère n'est plus active");

        auction.isActive = false;

        if (auction.highestBidder != address(0)) {
            _transfer(auction.seller, auction.highestBidder, tokenId);
            payable(auction.seller).transfer(auction.highestBid);

            emit AuctionEnded(tokenId, auction.highestBidder, auction.highestBid);
        }
    }
}
