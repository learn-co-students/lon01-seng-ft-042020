const caloriesUl = document.querySelector("#calories-list");

const BASE_URL = "http://localhost:3001/api/v1/calorie_entries";

// JSDOC -> look up how to write those
// take note, normally you wouldn't want that long of a function - keep it shorter and more to the point
/**
 * Creates a DOM node representing a calorie entry
 * @param {object} calorieObject
 * @returns {DOMNode} calorieLi
 */
function createCalorieEntryLi(calorieObject) {
  const li = document.createElement("li");
  li.dataset.calorieEntryId = calorieObject.id;

  li.classList.add("calories-list-item");

  const gridDiv = document.createElement("div");
  gridDiv.classList.add("uk-grid");

  const calorieAmountDiv = document.createElement("div");
  calorieAmountDiv.classList.add("uk-width-1-6");
  const calorieAmountStrong = document.createElement("strong");
  calorieAmountStrong.innerText = calorieObject.calorie;
  const calorieAmountSpan = document.createElement("span");
  calorieAmountSpan.innerText = "kcal";
  calorieAmountDiv.appendChild(calorieAmountStrong);
  calorieAmountDiv.appendChild(calorieAmountSpan);

  const notesDiv = document.createElement("div");
  notesDiv.classList.add("uk-width-4-5");
  const noteEm = document.createElement("em");
  noteEm.classList.add("uk-text-meta");
  noteEm.innerText = calorieObject.note;
  notesDiv.appendChild(noteEm);

  gridDiv.appendChild(calorieAmountDiv);
  gridDiv.appendChild(notesDiv);

  const menuDiv = document.createElement("div");
  menuDiv.classList.add("list-item-menu");

  const aPencil = document.createElement("a");
  aPencil.classList.add("edit-button");
  aPencil.setAttribute("uk-toggle", "target: #edit-form-container");
  aPencil.setAttribute("uk-icon", "icon: pencil");
  aPencil.addEventListener("click", () => {
    populateModal(calorieObject);
  });

  const aDelete = document.createElement("a");
  aDelete.classList.add("delete-button");
  aDelete.setAttribute("uk-icon", "icon: trash");
  aDelete.addEventListener("click", () => {
    deleteCalorieEntry(calorieObject);
  });

  menuDiv.appendChild(aPencil);
  menuDiv.appendChild(aDelete);

  li.appendChild(gridDiv);
  li.appendChild(menuDiv);

  return li;
}

function appendCalorieEntryLi(calorieEntryLi, target) {
  target.appendChild(calorieEntryLi);
}

function appendMultipleCalorieEntryList(calorieEntriesArray, target) {
  calorieEntriesArray.forEach((calorieObject) => {
    appendCalorieEntryLi(createCalorieEntryLi(calorieObject), caloriesUl);
  });
}

const editForm = document.getElementById("edit-calorie-form");
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  handleUpdate();
});

const newCalorieForm = document.querySelector("#new-calorie-form");

newCalorieForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const calorie = newCalorieForm[0].value;
  const note = newCalorieForm[1].value;
  const entry = {
    calorie,
    note,
  };
  postCalorieEntry(entry)
    .then(renderAllCalorieEntries)
    .then(() => {
      newCalorieForm.reset();
    });
});

function renderAllCalorieEntries() {
  caloriesUl.innerHTML = "";
  fetch(`${BASE_URL}`)
    .then((data) => data.json())
    .then((calorieEntriesArray) => {
      const reducer = (accumulator, currentValue) =>
        accumulator + currentValue.calorie;
      const totalCalories = calorieEntriesArray.reduce(reducer, 0);
      setProgressBarValue(totalCalories);
      appendMultipleCalorieEntryList(calorieEntriesArray, caloriesUl);
    })
    .then(() => setMaxCalValue())
    .catch(errorHandler);
}

function postCalorieEntry(calorieObject) {
  return fetch(`${BASE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(calorieObject),
  }).catch(errorHandler);
}

// ------------ BMR calculation

function readRanges() {
  const lower = parseInt(document.getElementById("lower-bmr-range").innerText);
  const higher = parseInt(
    document.getElementById("higher-bmr-range").innerText
  );
  return { lower, higher };
}

function setMaxCalValue() {
  // this does this:
  // const lower = readRanges().lower;
  // const higher = readRanges().higher;
  const { lower, higher } = readRanges();
  const average = Math.round((lower + higher) / 2);
  const progressBar = document.getElementById("progress-bar");
  progressBar.setAttribute("max", average);
}

function readWeightHeightAndAge() {
  const bmrForm = document.getElementById("bmr-calculator");
  const weight = parseInt(bmrForm[0].value);
  const height = parseInt(bmrForm[1].value);
  const age = parseInt(bmrForm[2].value);
  return {
    weight,
    height,
    age,
  };
}

function setProgressBarValue(value) {
  const progressBar = document.getElementById("progress-bar");
  progressBar.value = value;
}

function bmrCalculationHelper(type, weight, height, age) {
  const randomConstantValue = type === "lower" ? 655 : 66;
  const weightQuotient = type === "lower" ? 4.35 : 6.23;
  const heightQuotient = type === "lower" ? 4.7 : 12.7;
  const ageQuotient = type === "lower" ? 4.7 : 6.8;
  return (
    randomConstantValue +
    weightQuotient * weight +
    heightQuotient * height -
    ageQuotient * age
  );
}

function calculateBMR() {
  const { weight, height, age } = readWeightHeightAndAge();
  const lowerBMR = bmrCalculationHelper("lower", weight, height, age);
  const higherBMR = bmrCalculationHelper("higher", weight, height, age);
  return { lowerBMR, higherBMR };
}

function updateBMRRangeSpans() {
  const { lowerBMR, higherBMR } = calculateBMR();
  const lowerBMRSpan = document.getElementById("lower-bmr-range");
  const higherBMRSpan = document.getElementById("higher-bmr-range");
  lowerBMRSpan.innerText = lowerBMR;
  higherBMRSpan.innerText = higherBMR;
  setMaxCalValue();
}

// ------------ Deleting entries

function deleteCalorieEntry(calorieEntry) {
  const { id } = calorieEntry;
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  })
    .then(renderAllCalorieEntries)
    .catch(errorHandler);
}

// ------------ Edit modal stuff

function populateModal(calorieEntry) {
  const editForm = document.getElementById("edit-calorie-form");
  // PLEASE READ ABOUT DATASETS ON MDN
  editForm.dataset.lastClickedCalorieEntryId = calorieEntry.id;
  const { calorie, note } = calorieEntry;
  editForm[0].value = calorie;
  editForm[1].value = note;
}

function handleUpdate() {
  const editForm = document.getElementById("edit-calorie-form");
  const id = editForm.dataset.lastClickedCalorieEntryId;
  const calorie = editForm[0].value;
  const note = editForm[1].value;
  const calorieObject = { calorie, note };
  fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(calorieObject),
  })
    .then(renderAllCalorieEntries)
    .catch(errorHandler);
}

const bmrCalculatorForm = document.getElementById("bmr-calculator");
bmrCalculatorForm.addEventListener("submit", (e) => {
  e.preventDefault();
  updateBMRRangeSpans();
});

function errorHandler(error) {
  console.error(error);
  alert("OMG it is not good");
}

function init() {
  renderAllCalorieEntries();
}

init();
