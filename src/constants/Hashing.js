// const DEFAULT_EXPLORER: ExplorerJSON = {
//   files: {
//     [DEFAULT_FILE]: {
//       content: DEFAULT_CODE,
//       tabs: true,
//       current: true,
//     },
//   },
// };
// Goals is to make this more dynamic

export const SIMPLE_BANK = {
	'SimpleBank.sol': {
		language: 'solidity',
		content: `/*
* This exercise has been updated to use Solidity version 0.8.5
* See the latest Solidity updates at
* https://solidity.readthedocs.io/en/latest/080-breaking-changes.html
*/
// SPDX-License-Identifier: MIT
pragma solidity >=0.5.16 <0.9.0;

contract SimpleBank {

  /* State variables
   */


  // Fill in the visibility keyword.
  // Hint: We want to protect our users balance from other contracts
  mapping (address => uint) balances ;

  // Fill in the visibility keyword
  // Hint: We want to create a getter function and allow contracts to be able
  //       to see if a user is enrolled.
  mapping (address => bool) enrolled;

  // Let's make sure everyone knows who owns the bank, yes, fill in the
  // appropriate visilibility keyword
  address owner = msg.sender;

  /* Events - publicize actions to external listeners
   */

  // Add an argument for this event, an accountAddress
  event LogEnrolled();

  // Add 2 arguments for this event, an accountAddress and an amount
  event LogDepositMade();

  // Create an event called LogWithdrawal
  // Hint: it should take 3 arguments: an accountAddress, withdrawAmount and a newBalance
  event LogWithdrawal();

  /* Functions
   */

  // Fallback function - Called if other functions don't match call or
  // sent ether without data
  // Typically, called when invalid data is sent
  // Added so ether sent to this contract is reverted if the contract fails
  // otherwise, the sender's money is transferred to contract
  function () external payable {
      revert();
  }

  /// @notice Get balance
  /// @return The balance of the user
  function getBalance() public returns (uint) {
    // 1. A SPECIAL KEYWORD prevents function from editing state variables;
    //    allows function to run locally/off blockchain
    // 2. Get the balance of the sender of this transaction
  }

  /// @notice Enroll a customer with the bank
  /// @return The users enrolled status
  // Emit the appropriate event
  function enroll() public returns (bool){
    // 1. enroll of the sender of this transaction
  }

  /// @notice Deposit ether into bank
  /// @return The balance of the user after the deposit is made
  function deposit() public returns (uint) {
    // 1. Add the appropriate keyword so that this function can receive ether

    // 2. Users should be enrolled before they can make deposits

    // 3. Add the amount to the user's balance. Hint: the amount can be
    //    accessed from of the global variable \`msg\`

    // 4. Emit the appropriate event associated with this function

    // 5. return the balance of sndr of this transaction
  }

  /// @notice Withdraw ether from bank
  /// @dev This does not return any excess ether sent to it
  /// @param withdrawAmount amount you want to withdraw
  /// @return The balance remaining for the user
  function withdraw(uint withdrawAmount) public returns (uint) {
    // If the sender's balance is at least the amount they want to withdraw,
    // Subtract the amount from the sender's balance, and try to send that amount of ether
    // to the user attempting to withdraw.
    // return the user's balance.

    // 1. Use a require expression to guard/ensure sender has enough funds

    // 2. Transfer Eth to the sender and decrement the withdrawal amount from
    //    sender's balance

    // 3. Emit the appropriate event for this message
  }
}`
},
	'SimpleBank.test.js': {
		language: 'javascript',
		content: `/*

The public version of the file used for testing can be found here: https://gist.github.com/ConsenSys-Academy/ce47850a8e2cba6ef366625b665c7fba

This test file has been updated for Truffle version 5.0. If your tests are failing, make sure that you are
using Truffle version 5.0. You can check this by running "trufffle version"  in the terminal. If version 5 is not
installed, you can uninstall the existing version with \`npm uninstall -g truffle\` and install the latest version (5.0)
with \`npm install -g truffle\`.

*/
const { catchRevert } = require("./exceptionsHelpers.js");
var SimpleBank = artifacts.require("./SimpleBank.sol");

contract("SimpleBank", function (accounts) {
  const [contractOwner, alice] = accounts;
  const deposit = web3.utils.toBN(2);

  beforeEach(async () => {
    instance = await SimpleBank.new();
  });

  it("ready to be solved!", async() => {
    const eth100 = 100e18;
    assert.equal(await web3.eth.getBalance(alice), eth100.toString());
  });

  it("is owned by owner", async () => {
    assert.equal(
      // Hint:
      //   the error \`TypeError: Cannot read property 'call' of undefined\`
      //   will be fixed by setting the correct visibility specifier. See
      //   the following two links
      //   1: https://docs.soliditylang.org/en/v0.8.5/cheatsheet.html?highlight=visibility#function-visibility-specifiers
      //   2: https://docs.soliditylang.org/en/v0.8.5/contracts.html#getter-functions
      await instance.owner.call(),
      contractOwner,
      "owner is not correct",
    );
  });

  it("should mark addresses as enrolled", async () => {
    await instance.enroll({ from: alice });

    const aliceEnrolled = await instance.enrolled(alice, { from: alice });
    assert.equal(
      aliceEnrolled,
      true,
      "enroll balance is incorrect, check balance method or constructor",
    );
  });

  it("should not mark unenrolled users as enrolled", async () => {
    const ownerEnrolled = await instance.enrolled(contractOwner, { from: contractOwner });
    assert.equal(
      ownerEnrolled,
      false,
      "only enrolled users should be marked enrolled",
    );
  });

  it("should deposit correct amount", async () => {
    await instance.enroll({ from: alice });
    await instance.deposit({ from: alice, value: deposit });
    const balance = await instance.getBalance.call({ from: alice });

    assert.equal(
      deposit.toString(),
      balance,
      "deposit amount incorrect, check deposit method",
    );
  });

  it("should log a deposit event when a deposit is made", async () => {
    await instance.enroll({ from: alice });
    const result = await instance.deposit({ from: alice, value: deposit });

    const expectedEventResult = { accountAddress: alice, amount: deposit };

    const logAccountAddress = result.logs[0].args.accountAddress;
    const logDepositAmount = result.logs[0].args.amount.toNumber();

    assert.equal(
      expectedEventResult.accountAddress,
      logAccountAddress,
      "LogDepositMade event accountAddress property not emitted, check deposit method",
    );

    assert.equal(
      expectedEventResult.amount,
      logDepositAmount,
      "LogDepositMade event amount property not emitted, check deposit method",
    );
  });

  it("should withdraw correct amount", async () => {
    const initialAmount = 0;
    await instance.enroll({ from: alice });
    await instance.deposit({ from: alice, value: deposit });
    await instance.withdraw(deposit, { from: alice });
    const balance = await instance.getBalance.call({ from: alice });

    assert.equal(
      balance.toString(),
      initialAmount.toString(),
      "balance incorrect after withdrawal, check withdraw method",
    );
  });

  it("should not be able to withdraw more than has been deposited", async () => {
    await instance.enroll({ from: alice });
    await instance.deposit({ from: alice, value: deposit });
    await catchRevert(instance.withdraw(deposit + 1, { from: alice }));
  });

  it("should emit the appropriate event when a withdrawal is made", async () => {
    const initialAmount = 0;
    await instance.enroll({ from: alice });
    await instance.deposit({ from: alice, value: deposit });
    var result = await instance.withdraw(deposit, { from: alice });

    const accountAddress = result.logs[0].args.accountAddress;
    const newBalance = result.logs[0].args.newBalance.toNumber();
    const withdrawAmount = result.logs[0].args.withdrawAmount.toNumber();

    const expectedEventResult = {
      accountAddress: alice,
      newBalance: initialAmount,
      withdrawAmount: deposit,
    };

    assert.equal(
      expectedEventResult.accountAddress,
      accountAddress,
      "LogWithdrawal event accountAddress property not emitted, check deposit method",
    );
    assert.equal(
      expectedEventResult.newBalance,
      newBalance,
      "LogWithdrawal event newBalance property not emitted, check deposit method",
    );
    assert.equal(
      expectedEventResult.withdrawAmount,
      withdrawAmount,
      "LogWithdrawal event withdrawalAmount property not emitted, check deposit method",
    );
  });
});`,
	}
}
