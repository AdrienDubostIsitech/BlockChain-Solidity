/**
 *Submitted for verification at Etherscan.io on 2022-06-23
*/

// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 * @custom:dev-run-script ./scripts/deploy_with_ethers.ts
 */
 contract Owner{

    //Owner Variables : LastName / FirstName / ID / Strike / Pets
    string OwnerLastName; 
    string OwnerFirstName;   
    bool OwnerStrike;
    address[] PetsID; 

    //every owner are necessarily deployed with a LastName, FirstName and if they striked or not
    constructor (string memory _OwnerLastName, string memory _OwnerFirstName, bool _Strike){    
        OwnerLastName = _OwnerLastName; 
        OwnerFirstName = _OwnerFirstName; 
        OwnerStrike = _Strike;
    }

    // Get the Owner Last Name
    function getOwnerLastName() public view returns (string memory){
        return  OwnerLastName; 
    }
    // Get the Owner FirstName
    function getOwnerFirstName() public view returns (string memory){
        return OwnerFirstName; 
    }
    // get If owner is striked or not 
    function getStrike() public view returns (bool){
        return OwnerStrike; 
    }
    //get all the Owner's Pets
    function getAllOwnerPet() public view returns(address[] memory){
        return PetsID; 
    }

    //Set the Owner Last Name
    function setOwnerLastName(string memory _OwnerLastName) public {
        OwnerLastName = _OwnerLastName; 
    }
    //Set the Owner First Name
    function setOwnerFirstName(string memory _OwnerFirstName) public {
        OwnerLastName = _OwnerFirstName; 
    }
    //Set if the owner is striked or not
    function SetOwnerStrike(bool _Strike) public {
        OwnerStrike = _Strike; 
    }
    // Add a pet if the Ownner adopt one
    function AddPet(address NewPet) public {
        PetsID.push(NewPet); 
    }


 }