import React from "react";

function UploadImg({ imageInputRef, setImageFile }) {
  const fileSelectedHandler = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div>
      <label>Add image</label>
      <br />
      <input ref={imageInputRef} type="file" onChange={fileSelectedHandler} />
    </div>
  );
}

export default UploadImg;
