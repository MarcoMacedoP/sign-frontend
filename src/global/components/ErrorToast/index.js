import React from "react";

import Snackbar from "@material-ui/core/Snackbar";
import { MaterialIcon } from "../../styles/foundations/MaterialIcon";
import { Container } from "./styles";
export const ErrorToast = ({ error, handleClose }) => {
  if (error) {
    return (
      <Container>
        <Snackbar
          anchorOrigin={{
            vertical   : "bottom",
            horizontal : "right"
          }}
          open={true}
          onClose={handleClose}
          autoHideDuration={3000}
          ContentProps={{
            "aria-describedby" : "message-id"
          }}
          message={<span id="message-id">{error.message}</span>}
          action={[
            <MaterialIcon onClick={handleClose}>close</MaterialIcon>
          ]}
        />
      </Container>
    );
  }
  //else
  return null;
};
