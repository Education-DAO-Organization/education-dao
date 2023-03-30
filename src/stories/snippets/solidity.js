export const SOL_SNIPPET = `/*
 * This exercise has been updated to use Solidity version 0.8.5
 * See the latest Solidity updates at
 * https://solidity.readthedocs.io/en/latest/080-breaking-changes.html
 */
// SPDX-License-Identifier: MIT
pragma solidity 0.8.5;


contract SimpleBank {

    mapping (address => uint) private balances;
    mapping (address => bool) public enrolled;

    address public owner = msg.sender;

    event LogEnrolled(address accountAddress);
    event LogDepositMade(address accountAddress, uint amount);
    event LogWithdrawal(address accountAddress, uint withdrawAmount, uint newBalance);

    // After version 6 the recieve function is used instead of the unnamed function
    // But if the receive function isn't implemented, ether transfers will revert
    // So it's not necessary to implement.
    //receive() external payable { revert(); }

    function getBalance() public view returns (uint) {
        return balances[msg.sender];
    }

    function enroll() public returns (bool) {
        enrolled[msg.sender] = true;
        emit LogEnrolled(msg.sender);
        return enrolled[msg.sender];
    }

    function deposit() public payable returns (uint) {
        require(enrolled[msg.sender], "User is not enrolled.");
        balances[msg.sender] += msg.value;
        emit LogDepositMade(msg.sender, balances[msg.sender]);
        return balances[msg.sender];
    }

    function withdraw(uint withdrawAmount) public returns (uint) {
        require(balances[msg.sender] >= withdrawAmount, "User has insufficient funds.");
        payable(msg.sender).transfer(withdrawAmount);
        balances[msg.sender] -= withdrawAmount;
        emit LogWithdrawal(msg.sender, withdrawAmount, balances[msg.sender]);
        return balances[msg.sender];
    }
}`
