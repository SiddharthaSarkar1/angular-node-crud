import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
});
