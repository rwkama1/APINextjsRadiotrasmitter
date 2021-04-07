import cors from "../cors";
import {FactoryLogic} from "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic";

export default async function (req, res) {
  if(req.method==="GET")
  {
    try
    {
   
    await cors(req, res)
    
    const getad=await FactoryLogic.getLogicCampaign().getECampaigns();
   return res.send(getad);
    }
    catch (error) {
      return res.status(500).send("Could not search campaign "+error.message);
    }
  }
  if(req.method==="POST")
  {
    try
    {
  const data = req.body;
  await cors(req, res)
  const getad=await FactoryLogic.getLogicCampaign().getECampaignByTitleLetter(data.exp);
 return  res.send(getad);
    }
  catch (error) {
    return res.status(500).send("Could not search campaign "+error.message);
    }
  }
    return res.status(405).json({ msg: "Method not implemented"});
  }