///////////////////////////////////////consts
const toyDiv = document.querySelector("#toy-collection");
const toyForm = document.querySelector(".add-toy-form");
let addToy = false;

//////////////////////////////////////api calls
function get(url) {
  return fetch(url).then(function (resp) {
    return resp.json();
  });
}

function post(newToy) {
  return fetch(API_ENDPOINT, {
    method: "POST",
    headers: apiHeaders,
    body: JSON.stringify(newToy),
  }).then((resp) => resp.json());
}
//patch

function patch(toy, number) {
  return fetch(API_ENDPOINT + toy.id, {
    method: "PATCH",
    headers: apiHeaders,
    body: JSON.stringify({
      likes: number,
    }),
  }).then((resp) => resp.json());
}

const API_ENDPOINT = "http://localhost:3000/toys/";
const apiHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

////////////////////////////////////////event listeners
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

toyForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newToyObject = {
    name: event.target.name.value,
    image: event.target.image.value,
    likes: 0,
  };
  post(newToyObject).then((toy) => makeOneCard(toy));
  toyForm.reset();
});

///////////////////////////////////////////functions (dont' forget to call the master function)
function makeOneCard(toy) {
  const toyCard = document.createElement("div");
  toyCard.className = "card";

  const h2 = document.createElement("h2");
  h2.innerText = toy.name;

  const img = document.createElement("img");
  img.src = toy.image;
  img.className = "toy-avatar";

  const p = document.createElement("p");
  p.innerText = `${toy.likes} Likes`;

  const likeButton = document.createElement("button");
  likeButton.className = "like-btn";
  likeButton.innerText = "Like <3";
  likeButton.addEventListener("click", (event) => {
    debugger;
    let likes = parseInt(event.target.previousSibling.innerText);
    ++likes;

    patch(toy, likes).then(
      (event.target.previousSibling.innerText = `${likes} Likes`)
    );
  });

  toyCard.append(h2, img, p, likeButton);
  toyDiv.append(toyCard);
}

get(API_ENDPOINT).then((toys) => toys.forEach((toy) => makeOneCard(toy)));
