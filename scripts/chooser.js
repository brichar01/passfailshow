let app = document.getElementById("app");
let fails = 0;
let tests = 0;

function returnPassImage() {
  tests = tests+1;
  app.innerHTML   = `
    <img src="../PassFailItems/Pass/${tests}-${fails}.jpg"/>
  `
}

function returnFailImage() {
  tests = tests+1;
  app.innerHTML   = `
    <img src="../PassFailItems/Fail/${tests}-${fails}.jpg"/>
  `
}
