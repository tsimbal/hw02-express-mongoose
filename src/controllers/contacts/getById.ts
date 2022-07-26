import { createError } from "../../helpers";
import Contact from "../../models/contacts";
import { Request, Response } from "express";
import { IContact } from "../../interfaces/icontact";

const getById = async (req: Request, res: Response): Promise<void | never> => {
  const { id } = req.params;
  const result: IContact | null = await Contact.findById(id);

  if (!result) throw createError(404, "Not found");

  res.json(result);
};

export default getById;
