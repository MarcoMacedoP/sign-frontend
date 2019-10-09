import React from "react";
import {Signup} from "../Signup";
//hooks
import {useHandleState} from "../../../global/hooks";
import {useState, useEffect} from "react";
//redux
import {fetchSignupUser} from "../../../global/redux/actions/users";
import {connect} from "react-redux";
//Container component
function SignupContainer({user, fetchSignupUser}) {
  //Hooks
  const {state, addFormValueToState} = useHandleState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password_repeat: ""
  });
  useEffect(() => {
    debugger;
    if (user.errorOnSignup) {
      setError(user.errorOnSignup.message);
      setLoading(false);
    }
    if (user.loadingSignup) {
      setLoading(user.loadingSignup);
      setError(null);
    }
  }, [user]);
  //status
  const [loading, setLoading] = useState(user.loadingSignup);
  const [error, setError] = useState(user.errorOnSignup);

  //handlers
  async function handleClick(e) {
    e.preventDefault();
    if (
      !state.email ||
      !state.password ||
      !state.name ||
      !state.lastname ||
      !state.password_repeat
    ) {
      setError("Alguno de los campos está vacio 🙅🏻‍♂️");
    } else if (state.password !== state.password_repeat) {
      setError("Las contraseñas no coinciden 🤦‍♀️");
    } else {
      fetchSignupUser(state);
    }
  }
  const handleErrorClose = () => setError(null);

  //The UI
  return (
    <Signup
      handleClick={handleClick}
      handleChange={addFormValueToState}
      loading={loading}
      error={error}
      formValues={state}
      onErrorClose={handleErrorClose}
    />
  );
}

const mapStateToProps = state => ({user: state.user});
export default connect(
  mapStateToProps,
  {fetchSignupUser}
)(SignupContainer);
