// Redux is globally available, since we've included the link to the CDN

const getServerAction = () => {
  return fetch("http://localhost:8080/").then((data) => data.json());
};

const actionHistory = [];

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
  store.dispatch({ type: "INCREMENT", time: +new Date(), source: "UI" });
});
zeroButton.addEventListener("click", () => {
  store.dispatch({ type: "ZERO", time: +new Date(), source: "UI" });
});
minusButton.addEventListener("click", () => {
  store.dispatch({ type: "DECREMENT", time: +new Date(), source: "UI" });
});

// more on that later - and if you want to have the logic for
// making actions _do_ things, you should check out redux-thunk
serverActionButton.addEventListener("click", () => {
  getServerAction().then((action) => {
    store.dispatch(action);
  });
});

// add server and amend action type to say where did the action come from
