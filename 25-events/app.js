const computerEmojiSpan = document.querySelector("#dev-toggle");

computerEmojiSpan.addEventListener("click", function (event) {
  const devDashboard = document.querySelector("#dev-dashboard");
  const currentVisibility = devDashboard.style.visibility;
  if (currentVisibility !== "visible") {
    devDashboard.style.visibility = "visible";
  } else {
    devDashboard.style.visibility = "hidden";
  }
});

// ---------------------------------------------------------------
// form section
// ---------------------------------------------------------------

// select the element
const passwordForm = document.querySelector("#login-form");

// add the event listener
passwordForm.addEventListener("submit", function (event) {
  // make sure to prevent the deafult behaviour!
  event.preventDefault();
  const username = event.target[0].value;
  const password = event.target[1].value;
  // this is a big deal!
  // debugger;
  const userObject = {
    username: username,
    password: password,
  };
  // create the user dom node
  const userDOMNodeLi = document.createElement("li");
  userDOMNodeLi.innerText = userObject.username;

  // add any event listeners you desire to have on this element
  userDOMNodeLi.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.remove();
  });

  // put it in the dom
  // find where to put it - select the parent
  const userUl = document.querySelector("#user-list");
  // add child
  userUl.appendChild(userDOMNodeLi);
});

// ---------------------------------------------------------------
// bg colour section
// ---------------------------------------------------------------

function changeColour(domNode, colour) {
  domNode.style.backgroundColor = colour;
}

const buttonColorPink = document.querySelector("#bg-pink");
const buttonColorGreen = document.querySelector("#bg-green");
const buttonColorWhite = document.querySelector("#bg-white");

buttonColorPink.addEventListener("click", function (event) {
  const body = document.querySelector("body");
  changeColour(body, "pink");
});

buttonColorGreen.addEventListener("click", function (event) {
  const body = document.querySelector("body");
  changeColour(body, "green");
});

buttonColorWhite.addEventListener("click", function (event) {
  const body = document.querySelector("body");
  changeColour(body, "white");
});

// ---------------------------------------------------------------
// text colour section
// ---------------------------------------------------------------

function changeTextColour(domNode, colour) {
  domNode.style.color = colour;
}

const buttonColorTextBlack = document.querySelector("#text-black");
const buttonColorTextRed = document.querySelector("#text-red");

buttonColorTextBlack.addEventListener("click", function (event) {
  const body = document.querySelector("body");
  changeTextColour(body, "black");
});

buttonColorTextRed.addEventListener("click", function (event) {
  const body = document.querySelector("body");
  changeTextColour(body, "red");
});

// -------- keylogging

document.addEventListener("keypress", function (e) {
  const h1 = document.querySelector("h1");
  h1.innerHTML += e.key;
  console.log(e.key);
});
