import {useState} from "react";
import {useLastLocation} from "react-router-last-location";
export const useRedirect = () => {
  const [isRedirect, setRedirect] = useState(false);
  const [route, setRoute] = useState("");

  function toggleRedirect(route) {
    setRoute(route);
    if (isRedirect) {
      setRedirect(false);
    } else {
      setRedirect(true);
    }
  }
  const lastLocation = useLastLocation();

  function redirectToLastLocation() {
    toggleRedirect(lastLocation);
  }

  return {isRedirect, route, toggleRedirect, redirectToLastLocation};
};
