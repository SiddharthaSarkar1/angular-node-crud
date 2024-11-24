import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

import employeeRoutes from "./routes/employee.route.js";
import { connectDB } from "./Database/db.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

//Middleware
app.use(cors());
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   console.log("Hello World");
// });

app.use("/api/v1/employee", employeeRoutes);
app.use(express.static(path.join(__dirname, "/frontend/dist/crudapp")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "crudapp", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
