const express = require("express");
const { createTodo, updateTodo } = require("./types");
const app = express();
const { todo } = require("./db");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  console.log("Received payload:", createPayload);
  try {
    const parsedPayload = createTodo.parse(createPayload);
    // Put in MongoDB
    await todo.create({
      title: parsedPayload.title,
      description: parsedPayload.description,
      completed: false,
    });
    res.json({ msg: "Todo created successfully" });
  } catch (e) {
    res
      .status(400)
      .json({ msg: "Todo not created successfully", error: e.errors });
  }
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({ todos });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  console.log("Received payload:", updatePayload);
  try {
    const parsedPayload = updateTodo.parse(updatePayload);
    await todo.update(
      {
        _id: parsedPayload.id,
      },
      {
        completed: true,
      }
    );
    res.json({ msg: "Todo updated successfully" });
  } catch (e) {
    res.status(400).json({ error: e.errors });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
