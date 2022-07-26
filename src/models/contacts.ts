import mongoose, { Document } from "mongoose";
import { IContact } from "../interfaces/icontact";
import { IErrorRequest } from "../interfaces/ierror";

const { Schema, model } = mongoose;

const contactsSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const handleErrors = (error: IErrorRequest, data: Document, next: () => void): void => {
  const { name, code } = error;
  if (name === "MongoServerError" && code === 11000) {
    error.status = 409;
  } else {
    error.status = 400;
  }
  next();
};

contactsSchema.post("save", handleErrors);

const Contact = model<IContact>("contacts", contactsSchema);

export default Contact;
