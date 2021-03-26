import cors from "../cors";
import {FactoryLogic} from "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic";
import {OwnCampaign} from "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/OwnCampaign";

export default async function (req, res) {

  if(req.method==="GET")
  {
    const { ptitle } = req.query;
    await cors(req, res)
    const camp=await FactoryLogic.getLogicCampaign().getCampaign(ptitle);
    res.send(camp);
  }


  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    const getad=await FactoryLogic.getLogicAdvertiser().getAdvertiser(data.rut);
    const dtcamp=new OwnCampaign(data.title,data.datei,data.datef,data.duration,data.mentions,getad,data.cost,[]);
   await FactoryLogic.getLogicCampaign().addCampaign(dtcamp);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not add campaign", error: error.toString() }
      });
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    const getad=await FactoryLogic.getLogicAdvertiser().getAdvertiser(data.rut);
    const dtcamp=new OwnCampaign(data.title,data.datei,data.datef,data.duration,data.mentions,getad,data.cost,[]);
    await FactoryLogic.getLogicCampaign().updateCampaign(dtcamp);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not update campaign", error:error.toString() }
      });
    }
  }
  if(req.method==="DELETE")
  {
    await cors(req, res);
    const data = req.body;
    try
    {
  
   const dtcamp=new OwnCampaign(data.title,"","",0,0,null,0,[]);
    await FactoryLogic.getLogicCampaign().deleteCampaign(dtcamp);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: {  error: error.toString() }
      });
    }
  }
  }

 