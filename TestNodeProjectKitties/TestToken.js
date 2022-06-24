const { Provider } = require('@ethersproject/abstract-provider');
const ethers = require('ethers'); 
//Make link between the app & the blockchain
const provider =  new ethers.getDefaultProvider() //'homstead', 'd4a9a0ba1a7c4812b280c111e67cdc81'); // homstead

//signature of the event we search
let abi = [
    "event Transfer(address indexed _from, address indexed _to, uint _value)"
]; 
//contract address
let contractAddress = "0x0D8775F648430679A709E98d2b0Cb6250d2887EF"
//fetch the contract
let contract =  new ethers.Contract(contractAddress, abi, provider); 

//We search in the last mined block if we find Token Transactions, if we find them we log the sender, the receiver and the value of the Token
provider.getBlockNumber().then(blockNumber => {
    console.log("Block number : " + blockNumber);
    contract.on("Transfer", (_from, _to, _value, event) => {
        console.log("# From  : " + _from); 
        console.log("# To  :" + _to); 
        console.log("# Value : " + _value); 
    })
})