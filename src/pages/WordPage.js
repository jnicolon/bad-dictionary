import React, { useEffect, useState } from "react";
import { useParams, Redirect } from "react-router-dom";
// import testWords from "../assets/testWords";
import httpRequest from "../config/httpRequests";
import Word from "../components/WordPage/Word";
import RelatedWords from "../components/WordPage/RelatedWords";

function WordPage() {
  const { word } = useParams();
  const [wordObject, setWordObject] = useState({});
  const [redirectStatus, setRedirectStatus] = useState(false);

  useEffect(() => {
    let found = {};
    httpRequest
      .get("/singleword", {
        params: {
          word,
        },
      })
      .then((res) => {
        found = res.data;
        if (found.word === undefined) {
          setRedirectStatus(true);
        } else {
          setWordObject(found);
        }
      })
      .catch((err) => console.log(err));
  }, [word]);

  if (redirectStatus) {
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
