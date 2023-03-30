export const CONTRACTS = [
  {
    // on ropsten, fyi,
    // this is a simple counter contract
    // to increment a counter variable
    // pragma solidity ^0.8.0;
    //   contract Counter {
    //       int private count = 0;
    //       function incrementCounter() public {
    //           count += 1;
    //       }
    //       function decrementCounter() public {
    //           count -= 1;
    //       }
    //       function getCount() public view returns (int) {
    //           return count;
    //       }
    //   }

    
    name: 'dummyLesson',
    abi: `[
      {
        "inputs": [],
        "name": "decrementCounter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getCount",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "incrementCounter",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      }
    ]`,
    address: '0xf7a9110486cb5257baebaef0c808c7cf738f7383'
  }
]