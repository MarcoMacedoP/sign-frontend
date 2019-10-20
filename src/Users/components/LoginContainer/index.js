import React from "react";
import {Login} from "../Login/";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
import {useState, useEffect} from "react";
//redux
import {connect} from "react-redux";
import {fetchUserLogin} from "../../../global/redux/actions/users";

//Container component
function LoginContainer({fetchUserLogin, user}) {
  const {loadingLogin, errorOnLogin} = user.status;
  //state
  const {state: formValues, addFormValueToState} = useHandleState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(loadingLogin);
  const [error, setError] = useState(errorOnLogin);
  //on user change after fetchUserLogin()
  useEffect(
    function() {
      setLoading(loadingLogin);
      if (errorOnLogin) {
        setError(errorOnLogin);
      }
    },
    [loadingLogin, errorOnLogin]
  );
  //handlers
  const handleOnErrorClose = () => setError(null);
  const handleClick = e => {
    e.preventDefault();
    if (!formValues.email || !formValues.password) {
      setError("Campos vacios");
    } else {
      fetchUserLogin(formValues);
    }
  };

  return (
    <Login
      handleClick={handleClick}
      handleChange={addFormValueToState}
      handleOnErrorClose={handleOnErrorClose}
      loading={loading}
      error={error}
      formValues={formValues}
    />
  );
}
const mapStateToProps = state => ({user: state.user});

export default connect(
  mapStateToProps,
  {fetchUserLogin}
)(LoginContainer);
