import Contact from "../../models/contacts";
import { createError } from "../../helpers";
import { Request, Response } from "express";
import {IContact} from "../../interfaces/icontact";

const updateFavorite = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  if (!Object.keys(req.body).length) {
    res.status(400).json({ message: "missing field favorite" });
    return;
  }

  const result: IContact | null = await Contact.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) throw createError(404, "Not found");

  res.json(result);
};

export default updateFavorite;
