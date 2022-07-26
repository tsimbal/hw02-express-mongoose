import { IErrorRequest } from "../interfaces/ierror";

interface IMessages {
  [key: string]: string;
}

const messages: IMessages = {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not found",
  409: "Conflict",
};

const createError = (status: number, message = messages[status]): object => {
  const error: IErrorRequest = new Error(message);
  error.status = status;
  return error;
};

export default createError;
