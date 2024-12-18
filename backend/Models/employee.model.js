import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  salary: { type: String, required: true },
});

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
