import React, { useState } from "react";
import ImageUploader from "react-images-upload";

function ImageInput({ onUrlChange, url, onImage }) {
  return (
    <>
      <h4>Upload an image</h4>
      <label>
        File Upload URL:
        {/* <input id="urlInput" type="text" onChange={onUrlChange} value={url} />
        <ImageUploader
          withIcon={true}
          withPreview={true}
          label="Maximun size file: 5MB"
          onChange={onImage}
          buttonText="Choose an image"
          imgExtension={[".jpg", ".gif", ".png",
          
          ".gif"]}
          maxFileSize={5242880}
        /> */}
        <input
          type="file"
          onChange={(e) => {
            console.log(e.target.files[0].name);
          }}
        />
      </label>
    </>
  );
}

function UploadImg() {
  const [progress, setProgress] = useState("getUpload");
  const [url, setImgURL] = useState("undefined");
  const [errorMessage, setErrorMessage] = useState("");

  const onUrlChange = (e) => {
    setImgURL(e.target.value);
    console.log(e.target.value);
  };

  const onImage = (failedImages, successImages) => {
    if (!url) {
      console.log("missing Url");
      setErrorMessage("missing a url to upload to");
      setProgress("uploadError");
      return;
    }

    setProgress("uploading");

    console.log("successImages", successImages);
  };

  const content = () => {
    switch (progress) {
      case "getUpload":
        return <ImageInput onUrlChange={onUrlChange} onImage={onImage} />;
      case "uploading":
        return <h2>Uploading...</h2>;
      case "uploaded":
        return <h2>I'm succesfully uploaded at {url}</h2>;
      case "uploadError":
        return (
          <>
            <div>Error message = {errorMessage}</div>
            <div>please upload an image</div>;
          </>
        );
      default:
        break;
    }
  };

  return <>{content(progress)}</>;
}

export default UploadImg;
