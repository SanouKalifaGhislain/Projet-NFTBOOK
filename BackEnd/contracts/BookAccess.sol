// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookAccess {
    mapping(uint256 => string) private decryptionKeys;
    mapping(uint256 => bool) public isEncrypted;

    event AccessGranted(uint256 tokenId, address owner);

    function getDecryptionKey(uint256 tokenId) public view returns (string memory) {
        require(_exists(tokenId), "Livre inexistant");
        require(ownerOf(tokenId) == msg.sender, "Vous n'êtes pas le propriétaire de ce livre");
        require(isEncrypted[tokenId], "Le livre n'est pas chiffré");

        return decryptionKeys[tokenId];
    }
}
