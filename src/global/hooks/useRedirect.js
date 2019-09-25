import {useState} from "react";

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
  return [isRedirect, route, toggleRedirect];
};
