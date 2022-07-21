import Contact from "../../models/contacts.ts";

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

export default getAll;
