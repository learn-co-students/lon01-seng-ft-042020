function addBook(book) {
  const bookList = document.querySelector("#book-list");
  const div = makeBookCard(book);
  bookList.appendChild(div);
}

function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

function showBooks(bookArray) {
  for (let i = 0; i < bookArray.length; i++) {
    addBook(bookArray[i]);
  }
}

function renderBooks(booksArray) {
  showBooks(booksArray);
  return booksArray;
}

// ----------------------------------------------------
//  form submission handling
// ----------------------------------------------------

// select the form
const bookSubmitForm = document.querySelector("#book-submit");

// add the event listener to capture data
bookSubmitForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookObject = {
    title: event.target[0].value,
    author: event.target[1].value,
    cover: event.target[2].value,
  };
  // add event listener to send the fetch POST request
  fetch("http://localhost:3001/books", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookObject),
  })
    .then(function (bookData) {
      return bookData.json();
    })
    .then(function (bookObject) {
      addBook(bookObject);
    })
    .catch(function (error) {
      console.error(error);
      alert("the book has not been created! try again");
    });
});
