let app = document.getElementById("app");
let tests = 0;

function returnPassImage() {
  tests = tests+1;
  app.innerHTML   = `
    <img src="PassFailItems/Pass/${tests}.jpg"
         width=500
         height=500/>
    <div>${tests}<div/>
  `
}

function returnFailImage() {
  tests = tests+1;
  app.innerHTML   = `
    <img src="PassFailItems/Fail/${tests}.jpg"
         width=500
         height=500/>
    <div>${tests}<div/>
  `
}
