//Change the switch status
export const handleChange = (name, state, setState) => (event) => {
  setState({ ...state, [name]: event.target.checked });
};
