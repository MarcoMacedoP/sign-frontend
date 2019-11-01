import React from "react";
import {Login} from "../Login/";
//hooks
import {useHandleState, useError} from "../../../global/hooks/";
//redux
import {connect} from "react-redux";
import {fetchUserLogin} from "../../../global/redux/actions/users";

//Container component
function LoginContainer({
  fetchUserLogin,
  loadingLogin,
  errorOnLogin
}) {
  //state
  const {state, addFormValueToState} = useHandleState({
    email: "",
    password: ""
  });
  //handle status
  const {error, setErrorToNull, setError} = useError({
    updateErrorOnChange: errorOnLogin
  });

  //handlers
  const handleClick = e => {
    e.preventDefault();
    if (!state.email || !state.password) {
      setError("Campos vacios");
    } else {
      fetchUserLogin(state);
    }
  };

  return (
    <Login
      handleClick={handleClick}
      handleChange={addFormValueToState}
      handleOnErrorClose={setErrorToNull}
      loading={loadingLogin}
      error={error}
      formValues={state}
    />
  );
}
const mapStateToProps = ({user}) => ({
  loadingLogin: user.status.loadingLogin,
  errorOnLogin: user.status.errorOnLogin
});

export default connect(
  mapStateToProps,
  {fetchUserLogin}
)(LoginContainer);
