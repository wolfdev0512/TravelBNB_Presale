// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


/**
 * @title TreeSpotNFT Contract
 */

contract PresaleContract is Ownable {



    IERC20 private _babyToken;

    uint256 private _minPrice = 100000000000000000;
    uint256 private _maxPrice = 5000000000000000000;
    uint256 private _endDate = 1638316800; //2021.12.1

    modifier duringPreSale() {
        require(block.timestamp <= _endDate, "Presale ended");
        _;
    }

    
    constructor()  {
        _babyToken = IERC20(0x7Ee73dAa1d75e7D8cC21A6a432E25B455fC48A43);
    }

    /**
     * @dev external function for presale
     * 1(8 decimal) BNB = 15000(18 decimal) babyToken
     */
    function preSale( uint256 tokenCount) external payable duringPreSale {
        uint256 realTokenCount = msg.value * 15000;
        require( realTokenCount == tokenCount, "token Count is not match");
        require( _babyToken.balanceOf(address(this)) >= tokenCount, "not enough token left in smart contract");
        require( msg.value >= _minPrice, "min price is 0.1BNB");
        require( msg.value <= _maxPrice, "max price is 5BNB");

        _babyToken.transfer(msg.sender, tokenCount);

      
    }

    /**
     * @dev withdraw the whole bnb from smart contract by the admin.
     */
     function withdraw() external onlyOwner {
        address  _owner = owner();
        payable(_owner).transfer(address(this).balance);
    }
  
    /**
     * @dev get current deposit BNB amount
     */
     function getCurrentBNBAmount() external view returns(uint256){
         uint256 amount = address(this).balance;
         return amount;
    }
}

