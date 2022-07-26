import { createError } from "../../helpers";
import Contact from "../../models/contacts";
import { Request, Response } from "express";
import { IContact } from "../../interfaces/icontact";

const removeById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const result: IContact | null = await Contact.findByIdAndRemove(id);

  if (!result) throw createError(404, "Not found");

  res.json({ message: "contact deleted" });
};

export default removeById;
