const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

// Greeting
app.get("/greeting", (req, res) => {
  return res.send("Hello world!");
});

// Register Employee
app.post("/employee", (req, res) => {
  const { name, city } = req.body;

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
  return res.send();
});

// Get all Employee details
app.get("/employees/all", (req, res) => {
  return res.send();
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
