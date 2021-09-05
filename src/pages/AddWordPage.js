import React, { useState } from "react";

import { ImCheckmark } from "react-icons/im";

function AddWordPage() {
  const [word, setWord] = useState("");
  const [type, setType] = useState("");
  const [definition, setDefinition] = useState("");
  const [relatedArray, setRelatedArray] = useState([]);
  const [related, setRelated] = useState("");

  const [error, setError] = useState("");

  console.log(related);
  console.log(relatedArray);

  const handleRelatedArray = (e) => {
    e.preventDefault();
    if (related.trim().length < 1) {
      setError(`Fields can't be empty`);
    } else {
      const tempArray = relatedArray;
      tempArray.push(related);
      setRelatedArray(tempArray);
      setRelated("");
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (word.length < 1 || type.length < 1 || definition.length < 1) {
      setError(`Fields can't be empty`);
    } else {
      const wordObject = {
        word,
        type,
        definition,
        related: relatedArray,
      };
      console.log(wordObject);
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setWord("");
    setType("");
    setDefinition("");
    setRelated("");
    setRelatedArray([]);
  };

  return (
    <div className="main-content-container">
      <form className="addword-container">
        <label>Fill this out to add a word</label>
        <input
          value={word}
          onChange={(e) => {
            setWord(e.target.value);
          }}
          className="addword-input"
          placeholder="Word (all lowercase)"
          type="text"
        ></input>
        {/* TODO:Make this a select imput */}
        <input
          value={type}
          onChange={(e) => {
            setType(e.target.value);
          }}
          className="addword-input"
          placeholder="Type ((n.), (v.), etc)"
          type="text"
        ></input>
        <textarea
          value={definition}
          onChange={(e) => {
            setDefinition(e.target.value);
          }}
          className="addword-input text-area"
          placeholder="Definition"
          type="textarea"
          rows={10}
          cols={25}
        ></textarea>
        <div className="related">
          <input
            value={related}
            onChange={(e) => {
              setRelated(e.target.value);
            }}
            className="addword-input"
            placeholder="Related words (one at a time)"
            type="text"
          ></input>
          <button
            onClick={(e) => {
              handleRelatedArray(e);
            }}
          >
            <ImCheckmark />
          </button>
        </div>
        <div className="related-display-container">
          {relatedArray.map((word, index) => {
            return (
              <div key={index} className="related-display-word">
                {word}
              </div>
            );
          })}
        </div>
        <h3>{error}</h3>
        <button type="submit" onClick={(e) => handleSubmit(e)}>
          Add word
        </button>
        <button className="addword-clear-form" onClick={(e) => handleClear(e)}>
          Clear form
        </button>
      </form>
    </div>
  );
}

export default AddWordPage;
