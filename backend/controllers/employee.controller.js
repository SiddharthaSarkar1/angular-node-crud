import Employee from "../Models/employee.model.js";

export const createEmployee = async (req, res) => {
  const { name, email, salary } = req.body;
  const employee = new Employee({ name, email, salary });
  try {
    const savedEmployee = await employee.save();
    res.status(200).json(savedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getEmployeeByID = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try {
    const employee = await Employee.findById(id);
    if (!employee)
      return res.status(404).json({ message: "Employee not found" });

    res.json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateEmployeeByID = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedEmployee)
      return res.status(404).json({ message: "Employee not found" });

    res.json(updatedEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteEmployeeByID = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteEmployee = await Employee.findByIdAndDelete(id);
    if (!deleteEmployee)
      return res.status(404).json({ message: "Employee not found" });
    res.json(deleteEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
