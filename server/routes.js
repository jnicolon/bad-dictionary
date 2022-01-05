const express = require("express");
const Word = require("./models/Word");
const router = express.Router();

//In this file are the routes for the api

//to get all the words in the collection
router.get("/words", async (req, res) => {
  const words = await Word.find();
  res.send(words);
});

//to get a specific word in the collection
router.get("/singleword", async (req, res) => {
  //TODO:case sensitive search. change it so all words work.
  const word = await Word.findOne({ word: req.query.word });
  res.send(word);
});

//to add a single word in the collection
router.post("/addword", async (req, res) => {
  try {
    const word = new Word({
      word: req.body.word,
      type: req.body.type,
      definition: req.body.definition,
      related: req.body.related,
    });

    await word.save();

    res.send(word);
  } catch (err) {
    res.status(404);
    res.send({ error: err });
  }
});

//to delete a single word in the collection
router.delete("/deleteword/:word", async (req, res) => {
  try {
    await Word.deleteOne({ word: req.params.word });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Word does not exist" });
  }
});

module.exports = router;
