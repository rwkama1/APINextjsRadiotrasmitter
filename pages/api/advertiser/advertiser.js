import cors from "../cors";
import {FactoryLogic} from "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic";
import {Advertiser} from "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/Advertiser";

export default async function (req, res) {
  if(req.method==="GET")
  {
    await cors(req, res)
    const list=await FactoryLogic.getLogicAdvertiser().getAdvertisers();
    res.send(list);
  }

  //POSTMAN
  //POST
  //http://localhost:3000/api/advertiser/advertiser
  //Body> Raw > JSON
  //{
  //     "rut": 1234567890,
  //     "name": "sdafsdgdsg",
  //     "address": "dsgdsgdsg",
  //     "phone": "46789978987"
  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    const dtadvertiser=new Advertiser(data.rut,data.name,data.address,data.phone);
    const addadvert=await FactoryLogic.getLogicAdvertiser().addAdvertiser(dtadvertiser);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not add advertiser", error: error.toString() }
      });
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    const dtadvertiser=new Advertiser(data.rut,data.name,data.address,data.phone);
    const updadvert=await FactoryLogic.getLogicAdvertiser().updateAdvertiser(dtadvertiser);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not update advertiser", error:error.toString() }
      });
    }
  }
  if(req.method==="DELETE")
  {
    await cors(req, res);
    const data = req.body;
    try
    {
  
        const dtadvertiser=new Advertiser(data.rut,"","","");
    const deladv=await FactoryLogic.getLogicAdvertiser().deleteAdvertiser(dtadvertiser);
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

  