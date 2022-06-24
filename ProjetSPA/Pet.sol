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
 contract Pet{

    //PetVariable
    string PetName; 
    string PetSpecies;
    bool lost;
    bool leave; 
    address Owner; 
    event Log(address indexed sender, string Msg); 

    // Every pet are deloyed with a Name / a species / and if they are lost or abandoned
    constructor (string memory _PetName, string memory _PetSpecies, bool _Lost, bool _Leave){    
        PetName = _PetName; 
        PetSpecies = _PetSpecies; 
        lost = _Lost; 
        leave = _Leave; 
    }

    //get the name of the pet 
    function getPetName() public view returns (string memory){
        return PetName; 
    }
    //get the species of the pet
    function getPetSpecies() public view returns (string memory){
        return PetSpecies; 
    }
    //get if the pet is lost or not
    function getLostPet()public view returns(bool){
        return lost; 
    }
    //get if the pet is abandoned or not
    function getLeavePet() public view returns (bool){
        return leave; 
    }
    // get the owner of the pet 
    function getOwner() public view returns (address){
        return Owner; 
    }

    //Set the pet's name
    function setPetName(string memory _PetName) public {
        PetName = _PetName; 
    }
    //Set the Species of the pet 
    function setPetSpecies(string memory _PetSpecies) public {
        PetSpecies = _PetSpecies; 
    }
    //Set if the pet is lost or not
    function setLostPet(bool _Lost) public {
        lost = _Lost; 
    }
    //Set if the pet is abandoned or not
    function setLeavePet(bool _leave) public {
        leave = _leave; 
        lost = false; 
    }
    //Set the new Owner of the pet
    function setOwner(address _NewOwner) public {
        Owner = _NewOwner;
        leave = false; 
        lost = false; 
    }


 }