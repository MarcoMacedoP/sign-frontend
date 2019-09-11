export function blurApp(blurStatus = true) {
    let app = document.getElementById("root");
  
    if (!blurStatus && app) {
      //Hey, stop the blur
      app.style.filter = "blur()";
    } else if (blurStatus && app) {
      //Blur the app
      app.style.filter = "blur(5px)";
    }
  }