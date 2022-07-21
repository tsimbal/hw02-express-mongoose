import "dotenv/config";
import express, {NextFunction, Request, Response} from "express";
import mongoose from "mongoose";
import cors from "cors";

import contactRouter from "./routes/api/contact";
import {IErrorRequest} from "./interfaces/ierror";

const { PORT = 5000, DB_HOST="https://localhost:3001" } = process.env;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRouter);

app.use(( req: Request, res: Response) => {
  res.status(404).json({
    message: "Not found",
  });
});

app.use((error: IErrorRequest, req: Request, res: Response, next: NextFunction) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({
    message,
  });
});

async function start() {
  try {
    await mongoose.connect(DB_HOST);
    app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`));
  } catch (error) {
    console.log("Server error!!!", error.message);
    process.exit(1);
  }
}

start();
