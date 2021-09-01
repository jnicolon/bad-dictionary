import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const testWords = [
  {
    word: "jelly",
    type: "(n)",
    definition:
      "Jellylike food that’s most commonly used in a peanut butter & jelly sandwich. Peanut butter’s the brown stuff. Jelly’s the other stuff. It’s the jelly.",
  },
  {
    word: "shoulder",
    type: "(n)",
    definition:
      "Look left. Now look down. That’s your shoulder. Now look right. And look down. That’s your other shoulder.",
  },
  {
    word: "two",
    type: "(n)",
    definition:
      "It’s this thing: 2. It’s one more than one. It’s the second number, so it’s a big deal. So yeah, if you saw a goat, and then another goat came along, you’d be like, “Check it out, it’s two goats.” If you just saw one goat, though, you wouldn’t be like, “Check it out - one goat.” You’d just say, “Check it out - a goat.” So yeah, anyway, two is 2.",
  },
];

function Word({ match }) {
  const { word } = useParams();
  const [wordObject, setWordObject] = useState({});

  useEffect(() => {
    const found = testWords.find((object) => (object.word = word));
    setWordObject(found);
  }, [word]);

  console.log(wordObject);

  return (
    <div>
      <h1 className="word-page-title">
        {wordObject.word} {`${wordObject.type}`}
      </h1>
      <p className="word-page-pargraph">{wordObject.definition}</p>
    </div>
  );
}

export default Word;
