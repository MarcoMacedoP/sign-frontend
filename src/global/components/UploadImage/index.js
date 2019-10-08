import React from "react";
//hooks
import {useState} from "react";
//components
import {Icon} from "../Icon";
//styled-components
import {
  Container,
  Image,
  Upload,
  UploadInput,
  UploadText
} from "./styles";

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
    <Container>
      <Image
        src={state.isUploaded ? state.base64UrlImage : value}
        alt=""
      />
      <Upload>
        <UploadInput
          type="file"
          onChange={handleChange}
          name={name}
        />
        <Icon icon="camera_alt" />
        <UploadText>Agregar fotografía</UploadText>
      </Upload>
    </Container>
  );
};
