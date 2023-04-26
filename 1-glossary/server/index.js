require("dotenv").config();
const express = require("express");
const path = require("path");
const Entry = require("./db");

const app = express();

app.use(express.json());

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/glossary', async (req, res) => {
  const entries = await Entry.find();

  res.json(entries);
})

app.post('/glossary/new', (req, res) => {
  const entry = new Entry({
    word: req.body.word,
    definition: req.body.definition
  });

  entry.save();

  res.json(entry);
});

app.delete('/glossary/delete/:id', async (req, res) => {
  const result = await Entry.findByIdAndDelete(req.params.id);

  res.json(result);
});

app.put('/glossary/edit/:id', async (req, res) => {
  const entry = await Entry.findById(req.params.id);

  entry.word = req.body.word;
  entry.definition = req.body.def;

  entry.save();

  res.json(entry);
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
