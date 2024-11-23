import express from "express";
import {
  createEmployee,
  deleteEmployeeByID,
  getAllEmployees,
  getEmployeeByID,
  updateEmployeeByID,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.get("/", getAllEmployees);
router.post("/", createEmployee);
router.get("/:id", getEmployeeByID);
router.put("/:id", updateEmployeeByID);
router.delete("/:id", deleteEmployeeByID);

export default router;
