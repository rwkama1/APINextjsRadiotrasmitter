import cors from "../cors";
import {FactoryLogic} from "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic";
import {Program} from "radiotrasmitter/RadioTransmitter/dist/shared/entityshared/Program";

export default async function (req, res) {
  if(req.method==="GET")
  {
    await cors(req, res)
    const list=await FactoryLogic.getLogicProgram().getPrograms();
    res.send(list);
  }

  if(req.method==="POST")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    const dtprogram=new Program(data.name,data.producer,data.type,data.price);
    await FactoryLogic.getLogicProgram().addProgram(dtprogram);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not add program", error: error.toString() }
      });
    }
  }
  if(req.method==="PUT")
  {
    await cors(req, res)
    try
    {
    const data = req.body;
    const dtprogram=new Program(data.name,data.producer,data.type,data.price);
   await FactoryLogic.getLogicProgram().updateProgram(dtprogram);
    return res.status(200).json({ status: "Success" });
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not update program", error:error.toString() }
      });
    }
  }
  if(req.method==="DELETE")
  {
    await cors(req, res);
    const data = req.body;
    try
    {  
        const dtprogram=new Program(data.name," "," ",0);
        await FactoryLogic.getLogicProgram().deleteProgram(dtprogram);
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

  