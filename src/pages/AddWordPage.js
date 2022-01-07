import React, { useState } from "react";
import httpRequests from "../config/httpRequests";
import axios from "axios";

import { ImCheckmark } from "react-icons/im";
import UploadImg from "../components/AddWord/UploadImg";

function AddWordPage() {
  const [word, setWord] = useState("");
  const [definition, setDefinition] = useState("");
  const [relatedArray, setRelatedArray] = useState([]);
  const [related, setRelated] = useState("");
  const [file, setFile] = useState("");
  const [imgPath, setImgPath] = useState("");

  const [error, setError] = useState("");

  //add img to s3 bucket and get a pathname to download it

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);

    const results = await axios
      .post("http://localhost:5000/api/uploadImage", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });

    return results;
  };

  //TODO: success upload message modal or text

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

  const handleClear = () => {
    setWord("");
    setDefinition("");
    setRelated("");
    setRelatedArray([]);
  };

  const handleSubmit = async (e) => {
    if (word.length < 1 || definition.length < 1) {
      setError(`Fields can't be empty`);
    }

    console.log(file);

    const result = await handleFileUpload();
    const imagePath = result.data.imagePath;

    console.log(imagePath);

    const wordObject = {
      word,
      definition,
      related: relatedArray,
      imagePath,
    };

    console.log(wordObject);

    httpRequests
      .post("/addword", wordObject)
      .then(console.log("word added"))
      .catch((err) => console.log(err));
    handleClear();
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
        <UploadImg setFile={setFile} />
        <h3>{error}</h3>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
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
