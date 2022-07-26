import Contact from "../../models/contacts";
import { Request, Response } from "express";
import {IContact} from "../../interfaces/icontact";

const getById = async (req: Request, res: Response): Promise<void> => {
  const result: IContact = await Contact.create(req.body);

  res.status(201).json(result);
};

export default getById;
