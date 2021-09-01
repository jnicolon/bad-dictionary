import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import testWords from "../assets/testWords";
import Word from "../components/WordPage/Word";
import RelatedWords from "../components/WordPage/RelatedWords";

function WordPage() {
  const { word } = useParams();
  const [wordObject, setWordObject] = useState({});

  useEffect(() => {
    const found = testWords.find((object) => object.word === word);

    setWordObject(found);
  }, [word]);

  if (wordObject === undefined) {
    return <Redirect to="/noMatch" />;
  }
  return (
    <div className="main-content-container">
      <Word wordObject={wordObject} />
      <RelatedWords wordObject={wordObject} />
    </div>
  );
}

export default WordPage;
