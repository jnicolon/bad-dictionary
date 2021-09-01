import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import testWords from "../assets/testWords";
import Word from "../components/WordPage/Word";
import RelatedWords from "../components/WordPage/RelatedWords";

function WordPage() {
  const { word } = useParams();
  const [wordObject, setWordObject] = useState({});
  console.log(testWords);

  useEffect(() => {
    const found = testWords.find((object) => object.word === word);
    console.log(found);
    setWordObject(found);
  }, [word]);

  return (
    <div className="main-content-container">
      <Word wordObject={wordObject} />
      <RelatedWords wordObject={wordObject} />
    </div>
  );
}

export default WordPage;
