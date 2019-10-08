import React from "react";
import {Login} from "../Login/";
//hooks
import {useHandleState} from "../../../global/hooks/useHandleState";
import {useCallApi} from "../../../global/hooks/useCallApi";
//redux
import {connect} from "react-redux";
import {login} from "../../../global/redux/actions/users";

//Container component
function LoginContainer({login}) {
  //state handlers
  const {state: formValues, addFormValueToState} = useHandleState({
    email: "",
    password: ""
  });

  //api
  const {loading, error, fetchData, setError} = useCallApi({
    options: {method: "post", body: JSON.stringify(formValues)},
    endpoint: "/login/"
  });
  const handleOnErrorClose = () => setError(null);
  async function handleClick(e) {
    e.preventDefault();

    if (!formValues.email || !formValues.password) {
      setError("Campos vacios");
    } else {
      //Everything ok
      try {
        const {data} = await fetchData();
        debugger;
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
      formValues={formValues}
    />
  );
}
export default connect(
  null,
  {login}
)(LoginContainer);
