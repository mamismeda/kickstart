const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "pause obtain base fence attract staff foster pyramid section quote merit camera",
  "https://sepolia.infura.io/v3/f1a417ed886143cca0ea638530dc46ec"
);
const web3 = new Web3(provider);
console.log(web3);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();

//0xaDdCAA65224c5D4dfbdF70FaA13c2475Da4413ac
