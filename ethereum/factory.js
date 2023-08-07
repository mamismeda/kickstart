import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xC3CAC55ee63813f1577e7E96072c3221b66599AB"
);

export default instance;
