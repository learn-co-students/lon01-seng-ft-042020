function addBook(book) {
  // selecting the target of the operation
  const book_list = document.querySelector("#book-list");
  // creating a dom node
  const div = makeBookCard(book);
  // appending the node to the parent
  book_list.appendChild(div);
}

// creates a book card div - the DOM node that we can append to a book list
function makeBookCard(book) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.src = book.img;

  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  const p = document.createElement("p");
  p.textContent = book.author;

  //add all elements to div
  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
}

// iterates over the array of books
// and adds all of them to the dom
// bookArray is an array of js objects
function showBooks(bookArray) {
  for (let i = 0; i < bookArray.length; i++) {
    addBook(bookArray[i]);
  }
}

// fetch("http://localhost:43567/books")
//   // .then always expects to receive a function as a parameter
//   // and also, that function ALWAYS recieves the
//   // value of the previous promise resolution
//   .then(function (JSONDataAboutBooks) {
//     // this is going to be ALWAYS the same
//     // we have to call .json() to tell the browser
//     // that the binary data is in JSON format
//     // and we would like to convert it to a js array
//     return JSONDataAboutBooks.json();
//   })
//   .then(function (booksArray) {
//     // once the data is eventually in the JS format
//     // we can do our biz
//     showBooks(booksArray);
//   })
//   .catch(function (error) {
//     console.error(error);
//     alert("YIKES");
//   });

function parseJSONintoJSObject(JSONDataAboutBooks) {
  return JSONDataAboutBooks.json();
}

function renderBooks(booksArray) {
  showBooks(booksArray);
}

function handleError(error) {
  console.error(error);
  alert("YIKES");
}

fetch("http://localhost:43567/books")
  .then(parseJSONintoJSObject)
  .then(renderBooks)
  .catch(handleError);
