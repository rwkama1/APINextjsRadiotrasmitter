import cors from "../../cors";
import {FactoryLogic} from "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic";
import {Emission} from "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/Emission";


export default async function (req, res) {

  if(req.method==="POST")
  {
    try
    {
    const data = req.body;
    await cors(req, res)
    const getprogr=await FactoryLogic.getLogicProgram().getProgram(data.program);
    const getcampaign=await FactoryLogic.getLogicCampaign().getCampaign(data.title);
    const emission=new Emission(getprogr,data.date);
    getcampaign.listemision.push(emission);
   await FactoryLogic.getLogicCampaign().addCEmission(getcampaign);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).send("Could not add emmision "+error.message);
    }
  }
  return res.status(405).json({ msg: "Method not implemented"});
}