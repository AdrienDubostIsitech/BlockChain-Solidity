//ABI of Owner smart contract
const OWNER_ABI =[
    [{"inputs":[{"internalType":"string","name":"_OwnerLastName","type":"string"},{"internalType":"string","name":"_OwnerFirstName","type":"string"},{"internalType":"bool","name":"_Strike","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"NewPet","type":"address"}],"name":"AddPet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_Strike","type":"bool"}],"name":"SetOwnerStrike","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllOwnerPet","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwnerFirstName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwnerLastName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStrike","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_OwnerFirstName","type":"string"}],"name":"setOwnerFirstName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_OwnerLastName","type":"string"}],"name":"setOwnerLastName","outputs":[],"stateMutability":"nonpayable","type":"function"}]
]
//ABI of Pet smart contrat
const PET_ABI = [
    [{"inputs":[{"internalType":"string","name":"_PetName","type":"string"},{"internalType":"string","name":"_PetSpecies","type":"string"},{"internalType":"bool","name":"_Lost","type":"bool"},{"internalType":"bool","name":"_Leave","type":"bool"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"string","name":"Msg","type":"string"}],"name":"Log","type":"event"},{"inputs":[],"name":"getLeavePet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLostPet","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPetName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPetSpecies","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_leave","type":"bool"}],"name":"setLeavePet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_Lost","type":"bool"}],"name":"setLostPet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_NewOwner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_PetName","type":"string"}],"name":"setPetName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_PetSpecies","type":"string"}],"name":"setPetSpecies","outputs":[],"stateMutability":"nonpayable","type":"function"}]
]

// deployed contract address of Owner
const owner = ["0x60b9c9c30b4C6F2B218e456A767b944BDE2afB42", "0x016918E9b7E8437FDC46b834f02a592c47A682A2"]; 
// deployed contract address of Pet
const pet = ["0x817bE947140A7940AB638AdCF7CcFB743434A43b", "0xB2a40dF31a15C9fF1D18E79dD0F0DE836B864393"];

//express & web3 variables
const express = require("express");
const router = express.Router(); 
const Contract = require('web3-eth-contract');
const Web3 = require('web3');
const web3 =new Web3(Web3.givenProvider || "http://localhost:7545");
const { json } = require("body-parser");
const { jsonInterfaceMethodToString } = require("web3-utils");
const { stringify } = require("querystring");
//Mongodb variable
const MongoClient = require('mongodb').MongoClient; 
const url = 'mongodb://localhost:27017'
const dbName = 'SPA';
const CollectionName = 'PetOwner';
let dbcollection;  
let db;


//connection to MongoDB
MongoClient.connect(url, function(err, client) {
    console.log("Connecté à MongoDB"); 
    db = client.db(dbName);
}); 


module.exports = router;

//Home page
router.get("/", (req, res) => {
        res.json("Bienvenue sur la base de recensement de tout les propriétaire d'animaux de compagnie");
   }); 


//Page to get the first Owner
router.get("/Owner", (req, res) => { 
    //contract address of first owner
    let contractAddress = "0x60b9c9c30b4C6F2B218e456A767b944BDE2afB42";
    //fetch contract
    let contract =  new web3.eth.Contract(OWNER_ABI, contractAddress)
    let response; 
    const awaiter = async () => {
        //call the function to get the Owner Last Name
        console.log(contract); 
        if(contract === undefined) {return} else { const test = await contract.methods.getOwnerLastName().call();}
    }
    awaiter()
    res.json(response); 
}); 

//TO find data in mongodb
// dbcollection = db.collection(CollectionName).find({}).toArray(function(err, docs){
//     if(err){
//         console.log(err); 
//         throw err;
//     }
//     res.status(200).json(docs);
// });