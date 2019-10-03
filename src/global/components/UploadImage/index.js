import React from "react";

export const UploadImage = ({name, onUpload, value}) => {
  const handleChange = event => {
    const image = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = e => onUpload(e.target.result);
    reader.readAsDataURL(image);
  };

  return (
    <div>
      <input type="file" onChange={handleChange} name={name} />
      <img src={value} width="300px" height="auto" />

      <p>Agregar fotografía</p>
    </div>
  );
};
