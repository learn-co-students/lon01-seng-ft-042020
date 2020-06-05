function parseJSONintoJSObject(JSONDataAboutBooks) {
  return JSONDataAboutBooks.json();
}

function handleError(error) {
  console.error(error);
  alert("YIKES");
}

// return the promise, not the call
function getAllBooks() {
  return fetch("http://localhost:3001/books")
    .then(parseJSONintoJSObject)
    .then(renderBooks)
    .catch(handleError);
}
