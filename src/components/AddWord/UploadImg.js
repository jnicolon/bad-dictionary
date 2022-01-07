import React from "react";

function UploadImg({ setFile }) {
  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <label>Add image</label>
      <br />
      <input type="file" onChange={fileSelectedHandler} />
    </div>
  );
}

export default UploadImg;
