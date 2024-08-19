let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/example.jpg") {
    myImage.setAttribute("src", "images/example1.jpg");
  } else {
    myImage.setAttribute("src", "images/example.jpg");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入你的名字。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎来到我的网页，" + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎来到我的网页，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
  function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "欢迎来到我的网页，" + myName;
    }
  }