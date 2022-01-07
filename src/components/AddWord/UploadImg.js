import React from "react";

function UploadImg({ setFile }) {
  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
    </div>
  );
}

export default UploadImg;
