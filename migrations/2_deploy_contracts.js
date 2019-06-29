const Voting = artifacts.require("Voting");

module.exports = async function(deployer) {
  console.log("Start deploy Voting Contract");
  console.log("ABI:", JSON.stringify(Voting.abi));
  console.log("Estimated deployment Gas: ", Voting.web3.eth.estimateGas({
    data: Voting.bytecode
  }));
  let contract = void 0;
  deployer.deploy(Voting)
  .then(instance => {
    contract = instance;
    console.log("Add Candidate 1: ");
    return contract.addCandidate("Candidate 1");
  })
  .then(tx => {
    console.log("Add Candidate 2: ");
    return contract.addCandidate("Candidate 2");
  })
  .then(tx => {
    console.log("Add Candidate 3: ");
    return contract.addCandidate("Candidate 3");
  })
  ;
};
