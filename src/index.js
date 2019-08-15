/*

@Author: Marco Macedo
@Description : This project uses POD structure for carpets.
                Every Feature has is own carpet. Feature First.

- profile
    - index.js
    - api.js
    - hooks.js
    - Profile.js
    - styles/
- courses
    - index.js
    - api/
    - hooks/
    - components/
    - containers/
- global
    - sharedHooks/
    - bodyStyles.css
*/

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
