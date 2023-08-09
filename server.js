const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const employees = [];

// Greeting
app.get("/greeting", (req, res) => {
  return res.send("Hello world!");
});

// Register Employee
app.post("/employee", async (req, res) => {
  const { city, name } = req.body;
  console.log(req.body);
  if (!name || !city) {
    res.status(400).json({ error: "Employee details missing" });
    return;
  }

  const employeeId = Math.floor(Math.random() * 90000) + 10000;

  const newEmployee = { employeeId, name, city };
  employees.push(newEmployee);
  return res.send().status(201).json({ newEmployee, status: 201 });
});

// Get Employee details
app.get("/employee/:id", async (req, res) => {
  const employeeId = req.params.id;
  if (!employees[employeeId]) {
    return res.status(404).json({
      message: `Employee with ${employeeId} was not found`,
      status: 404,
    });
  }

  return res
    .send()
    .status(200)
    .json({ employees: [employeeId], status: 200 });
});

// Get all Employee details
app.get("/employees/all", async (req, res) => {
  console.log(req.body);
  const employeesList = Object.values(employees);

  return res.send().status(200).json(employeesList);
});

// Update Employee
app.put("/employee/:id", async (req, res) => {
  const employeeId = req.params.id;
  const { city, name } = req.body;
  if (!employees[employeeId]) {
    return res
      .status(404)
      .json({ message: `Employee with ${employeeId} was not found` });
  }
  employees[employeeId] = { ...employees[employeeId], name, city };
  return res
    .send()
    .status(200)
    .json({ employees: [employeeId] });
});

// Delete Employee
app.delete("/employee/:id", async (req, res) => {
  const employeeId = req.params.id;

  if (!employees[employeeId]) {
    return res
      .status(404)
      .json({ message: `Employee with ${employeeId} was not found` });
  }

  const deletedEmployee = employees[employeeId];
  delete employees[employeeId];
  return res.send().status(200).json(deletedEmployee);
});

app.listen(PORT, () => {
  console.log("Server running at PORT", PORT);
});
