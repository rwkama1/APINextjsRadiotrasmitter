import cors from "../cors";
import {FactoryLogic} from "radiotrasmitter/RadioTransmitter/dist/logic/FactoryLogic";

export default async function (req, res) {
  if(req.method==="GET")
  {
    try
    {
    const { pname } = req.query;
    await cors(req, res)

    const getprogr=await FactoryLogic.getLogicProgram().getProgram(pname);
    res.send(getprogr);
    }
    catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not search program", error:error.toString() }
      });
    }
  }
  if(req.method==="POST")
  {
    try
    {
  const data = req.body;
  await cors(req, res)
  const getad=await FactoryLogic.getLogicProgram().getProgramsByNameLetter(data.exp);
  res.send(getad);
    }
  catch (error) {
      return res.status(500).json({
        status: "Error",
        data: { msg: "Could not search program", error:error.toString() }
      });
    }
  }
    return res.status(405).json({ msg: "Method not implemented"});
  }

  