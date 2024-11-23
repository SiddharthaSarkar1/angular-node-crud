import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import employeeRoutes from "./routes/employee.route.js";
import { connectDB } from "./Database/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   console.log("Hello World");
// });

app.use("/api/v1/employee", employeeRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on https://localhost:${PORT}`);
  connectDB();
});
