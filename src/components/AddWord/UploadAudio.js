import React from "react";

function UploadAudio({ setAudioFile }) {
  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setAudioFile(e.target.files[0]);
  };

  return (
    <div>
      <label>Add audio</label>
      <br />
      <input type="file" onChange={fileSelectedHandler} />
    </div>
  );
}

export default UploadAudio;
