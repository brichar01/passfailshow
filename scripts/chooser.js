let app = document.getElementById("app");
let tests = 0;

function returnPassImage() {
  tests = tests+1;
  app.innerHTML   = `
    <img src="https://rbriot.com.au/PassFailItems/Pass/${tests}.jpg"/>
    <div>${tests}<div/>
  `
}

function returnFailImage() {
  tests = tests+1;
  app.innerHTML   = `
    <img src="https://rbriot.com.au/PassFailItems/Fail/${tests}.jpg"/>
    <div>${tests}<div/>
  `
}
