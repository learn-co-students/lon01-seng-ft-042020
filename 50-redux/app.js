// Redux is globally available, since we've included the link to the CDN

const actionHistory = [];

// take in an action (object) describing what is supposed to happen
// then given the action is valid, perform it
// and return NEW state
const counterReducer = (state = 0, action) => {
  actionHistory.push(action);
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "ZERO":
      return 0;
    default:
      return state;
  }
};

// actions are just plain js objects, and they have to
// at the very least, have a 'type' key.

const store = Redux.createStore(counterReducer, 0);

store.subscribe(() => {
  const counter = store.getState();
  counterValue.innerHTML = counter;
});

const plusButton = document.querySelector("#plus");
const zeroButton = document.querySelector("#zero");
const minusButton = document.querySelector("#minus");
const counterValue = document.querySelector("#counter-value");
const serverActionButton = document.querySelector("#server-action");

plusButton.addEventListener("click", () => {
  store.dispatch({
    type: "INCREMENT",
    date: +new Date(),
    source: "UI",
  });
});

zeroButton.addEventListener("click", () => {
  store.dispatch({
    type: "ZERO",
    date: +new Date(),
    source: "UI",
  });
});

minusButton.addEventListener("click", () => {
  store.dispatch({
    type: "DECREMENT",
    date: +new Date(),
    source: "UI",
  });
});

const getServerAction = () => {
  return fetch("http:/localhost:8080").then((d) => d.json());
};

serverActionButton.addEventListener("click", () => {
  getServerAction().then((action) => {
    store.dispatch(action);
  });
});
