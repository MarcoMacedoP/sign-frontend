import React from "react";
import {Login} from "../Login/";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
import {useCallApi} from "../../../global/hooks/useCallApi";
//redux
import {connect} from "react-redux";
import {login} from "../../../global/redux/actions/users";

//Container component
function LoginContainer(props) {
  const {login} = props;
  //state handlers
  const {state, addFormValueToState} = useHandleState({
    email: "",
    password: ""
  });

  //api
  const {loading, data, error, fetchData, setError} = useCallApi({
    options: {method: "post", body: JSON.stringify(state)},
    endpoint: "/login/"
  });
  console.log(data);
  const handleOnErrorClose = () => setError(null);
  async function handleClick(e) {
    e.preventDefault();

    if (!state.email || !state.password) {
      setError("Campos vacios");
    } else {
      //Everything ok
      try {
        await fetchData();
        login(data.user);
      } catch (error) {
        setError(error.message);
      }
    }
  }

  return (
    <Login
      handleClick={handleClick}
      handleChange={addFormValueToState}
      handleOnErrorClose={handleOnErrorClose}
      loading={loading}
      error={error}
      formValues={state}
    />
  );
}
export default connect(
  null,
  {login}
)(LoginContainer);
