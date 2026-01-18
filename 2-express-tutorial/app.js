const express = require("express");
const app = express();
let { people } = require("./data");

// statice assets
app.use(express.static("./methods-public"));

// parse form data
// We have to use here to get body in POST request
// For HTML traditional form
app.use(express.urlencoded({ extended: false }));

// parse json
// For javascript form
app.use(express.json());

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  // For javascript form
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ success: false, msg: "Please provide name" });
  }
  res.status(201).json({ success: true, data: [...data, name] });
});

app.post("/login", (req, res) => {
  // For HTML traditional form
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please provide credentials");
});

app.put("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((person) => person.id === Number(id));

  if (!person) {
    return res
      .status(400)
      .json({ success: false, msg: `No person with id ${id}` });
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });

  res.status(200).json({ success: true, data: newPeople });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
