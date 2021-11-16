pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DappToken is ERC20 {
   mapping(address => mapping(address => uint256)) public stakingBalance;
   mapping(address => uint256) public uniqueTokensStaked;
   mapping(address => address) public tokenPriceFeedMapping;
   address[] allowedTokens;
   address[] public stakers;
   constructor() public ERC20("DApp Token", "DAPP") {
       _mint(msg.sender, 1000000000000000000000000);
   }
}