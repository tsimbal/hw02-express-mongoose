import { createError } from "../../helpers";
import Contact from "../../models/contacts.ts";

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);

  if (!result) throw createError(404, "Not found");

  res.json(result);
};

export default getById;
