import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xaDdCAA65224c5D4dfbdF70FaA13c2475Da4413ac'
)

export default instance;