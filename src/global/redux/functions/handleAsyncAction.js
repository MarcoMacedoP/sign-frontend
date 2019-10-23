/**handles all the status of a redux-thunk async action ("loading, error, success").
 * and then return the object on that state.
 * @param {*} status the status of the async action
 * @param {*} onLoading the object to be returned when status be equal to "loading"
 * @param {*} onError  the object to be returned when status be equal to "error"
 * @param {*} onSucess the object to be returned when status be equal to "success"
 */
export function handleAsyncAction(
  status,
  onLoading,
  onError,
  onSucess
) {
  switch (status) {
    case "loading":
      return onLoading;
    case "error":
      return onError;
    case "success":
      return onSucess;
    default:
      throw "Invalid status on handleAsyncAction";
  }
}
