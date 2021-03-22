import cors from "../cors";
import {FactoryLogic} from "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic";

export default async function (req, res) {
 
    const { prut } = req.query;
    await cors(req, res)
    const rutparse=parseInt(prut);
    const getad=await FactoryLogic.getLogicAdvertiser().getAdvertiser(rutparse);
    res.send(getad);
  
  //POSTMAN
  //GET
  //http://localhost:3000/api/advertiser/getadvertiser?prut=4234567893
  
  }

  