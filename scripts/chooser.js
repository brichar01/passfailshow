let app = document.getElementById("app");
let tests = 0;

function returnPassImage() {
  tests = tests+1;
  app.innerHTML   = `
    <img src="https://s3-ap-southeast-2.amazonaws.com/rbriot.com.au/PassFailItems/Fail/${tests}.jpg"/>
    <div>${tests}<div/>
  `
}

function returnFailImage() {
  tests = tests+1;
  app.innerHTML   = `
    <img src="https://s3-ap-southeast-2.amazonaws.com/rbriot.com.au/PassFailItems/Fail/${tests}.jpg"/>
    <div>${tests}<div/>
  `
}
