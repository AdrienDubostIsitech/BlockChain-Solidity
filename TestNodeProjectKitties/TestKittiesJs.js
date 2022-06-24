//define configurations
const { Provider } = require('@ethersproject/abstract-provider');
const ethers = require('ethers'); 
//Make link between the app & the blockchain
const provider =  new ethers.getDefaultProvider() //'homstead', 'd4a9a0ba1a7c4812b280c111e67cdc81'); // homstead

//signature of the event we search
let abi = [
    "event Birth(address owner, uint kittyId, uint256 matronId, uint256 sireId, uint256 genes)"
]; 
//contract address
let contractAddress = "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d"
//fetch the contract
let contract =  new ethers.Contract(contractAddress, abi, provider); 
//We search in the last mined block if we find a "Birth" of a new cryptoKitties, if we find one we log the block number, the owner of the kittie and the kittie's Id
provider.getBlockNumber().then(blockNumber => {
    console.log("Block number : " + blockNumber);
    contract.on("Birth", (owner, kittyId, matronId, sireId, genes, event) => {
        if(blockNumber == event.blockNumber){
            console.log("# block # : " + event.blockNumber); 
            console.log("# Owner : " + owner); 
            console.log("#kittyId : " + kittyId);
        }
    });
}); 