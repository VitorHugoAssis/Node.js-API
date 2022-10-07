const express = require("express");
const UserModel = require("./src/models/user.model");
const cors = require("cors");

const app = express();
app.use(cors());


app.use(express.json());

app.get("/api", async (rep, res) => {
  try {
    const user = await UserModel.find({});
    res.status(201).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.get("/api/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

app.post("/api", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});



const port = 3001;

app.listen(port, () => console.log(`Rodando express na porta${port}!`));
