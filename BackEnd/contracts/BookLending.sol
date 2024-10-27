// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract BookLending {
    struct Loan {
        address lender;
        address borrower;
        uint256 depositAmount;
        uint256 loanEndTime;
        bool isActive;
    }

    mapping(uint256 => Loan) public loans;

    event LoanCreated(uint256 tokenId, address lender, address borrower, uint256 depositAmount, uint256 loanEndTime);
    event LoanEnded(uint256 tokenId, address lender, address borrower, bool returned);

    function lendNFT(uint256 tokenId, address borrower, uint256 depositAmount, uint256 loanDuration) public {
        require(ownerOf(tokenId) == msg.sender, "Vous devez être le propriétaire pour prêter ce NFT");

        loans[tokenId] = Loan({
            lender: msg.sender,
            borrower: borrower,
            depositAmount: depositAmount,
            loanEndTime: block.timestamp + loanDuration,
            isActive: true
        });

        emit LoanCreated(tokenId, msg.sender, borrower, depositAmount, block.timestamp + loanDuration);
    }

    function returnNFT(uint256 tokenId) public {
        Loan storage loan = loans[tokenId];
        require(loan.isActive, "Le prêt n'est pas actif");
        require(msg.sender == loan.borrower, "Seul l'emprunteur peut retourner le NFT");

        loan.isActive = false;
        _transfer(loan.borrower, loan.lender, tokenId);
        payable(loan.borrower).transfer(loan.depositAmount);

        emit LoanEnded(tokenId, loan.lender, loan.borrower, true);
    }

    function claimDeposit(uint256 tokenId) public {
        Loan storage loan = loans[tokenId];
        require(block.timestamp >= loan.loanEndTime, "Le prêt n'est pas encore terminé");
        require(loan.isActive, "Le prêt est déjà terminé");

        loan.isActive = false;
        payable(loan.lender).transfer(loan.depositAmount);

        emit LoanEnded(tokenId, loan.lender, loan.borrower, false);
    }
}
