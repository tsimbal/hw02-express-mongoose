import Contact from "../../models/contacts";
import {Request, Response} from "express";
import {IContact} from "../../interfaces/icontact";

const getAll = async (req: Request, res: Response): Promise<void> => {
  const result: IContact[] = await Contact.find();
  res.json(result);
};

export default getAll;
