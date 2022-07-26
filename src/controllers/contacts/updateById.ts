import Contact from "../../models/contacts";
import { createError } from "../../helpers";
import { Request, Response } from "express";
import { IContact } from "../../interfaces/icontact";

const getById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const body = req.body;
  const bodyKeys = Object.keys(body);
  const requiredFields = ["name", "email", "phone"];
  const isNotExistFields = requiredFields.filter((key) => !bodyKeys.includes(key));
  let result: IContact | null = null;

  if (!isNotExistFields.length) result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  else {
    res.status(400).json({ message: `missing required ${isNotExistFields} field` });
    return;
  }

  if (!result) throw createError(404, "Not found");

  res.json(result);
};

export default getById;
