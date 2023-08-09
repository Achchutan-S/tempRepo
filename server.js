const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const employees = {};

// Greeting
app.get("/greeting", (req, res) => {
  return res.send("Hello world!");
});

// Register Employee
app.post("/employee", (req, res) => {
  const { name, city } = req.body;
  console.log(req.body);
  if (!name || !city) {
    res.status(400).json({ error: "Employee details missing" });
    return;
  }

  const employeeId = Math.floor(Math.random() * 90000) + 10000;

  employees[employeeId] = { name, city };
  return res.status(201).json({ employeeId });
  return res.send();
});

// Get Employee details
app.get("/employee/:id", (req, res) => {
  const employeeId = req.params.id;
  if (!employees[employeeId]) {
    return res
      .status(404)
      .json({ message: `Employee with ${employeeId} was not found` });
  }

  return res.status(200).json({ employees: [employeeId] });
});

// Get all Employee details
app.get("/employees/all", (req, res) => {
  console.log(req.body);
  const employeesList = Object.values(employees);

  return res.send().status(200).json(employeesList);
});

// Update Employee
app.put("/employee/:id", (req, res) => {
  return res.send();
});

// Delete Employee
app.delete("/employee/:id", (req, res) => {
  return res.send();
});

app.listen(PORT, () => {
  console.log("Server running at PORT", PORT);
});
