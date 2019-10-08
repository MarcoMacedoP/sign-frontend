import React from "react";
//hooks
import {useState} from "react";

export const UploadImage = ({name, onUpload, value}) => {
  const [state, setState] = useState({
    isUploaded: false,
    base64UrlImage: ""
  });

  const handleChange = event => {
    const image = event.target.files[0];
    const reader = new FileReader();
    //call method and send it the file
    onUpload(event.target.files[0]);
    reader.onloadend = e =>
      setState({
        isUploaded: true,
        base64UrlImage: e.target.result
      });

    reader.readAsDataURL(image);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} name={name} />
      <img
        src={state.isUploaded ? state.base64UrlImage : value}
        alt="profile pic"
        width="300px"
        height="auto"
      />

      <p>Agregar fotografía</p>
    </div>
  );
};
