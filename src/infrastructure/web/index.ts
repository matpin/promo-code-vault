import express, { Application } from "express";
import dotenv from "dotenv";
import connectDB from "../database/mongo/connection";
import codeRouter from "../web/routes";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/codes", codeRouter);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (err) {
    process.exit(1);
  }
};

startServer();
