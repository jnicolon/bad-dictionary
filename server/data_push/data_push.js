const fs = require("fs");
const Word = require("../models/Word");

try {
  const data = fs.readFileSync("googleDoc.txt", "utf8");
  let entryRegex = /(?<=\n).*(?=\.)/gm;
  let firstSplit = data.match(entryRegex);
  let dataArray = [];
  firstSplit.forEach((result, index) => {
    let secondSplit = result.split(" - ");
    dataArray.push({
      word: secondSplit[0],
      definition: secondSplit[1],
      type: "(n.)",
      related: ["jelly", "shoulder", "one"],
    });
  });
  dataArray.forEach(async (entry, index) => {
    try {
      const word = new Word({
        word: entry.word,
        type: entry.type,
        definition: entry.definition,
        related: entry.related,
      });

      await word.save();
      console.log(`Entry ${index} uploaded succesfully`);
    } catch (err) {
      console.log("There was a problem");
      console.log(err);
    }
  });
} catch (err) {
  console.error(err);
}
