import { transactionCard } from "./transactionCard.mjs";
let history = document.querySelector(".transaction__history");

export let transactionComponent = (data) => {
  history.innerHTML += transactionCard();
  history.innerHTML += transactionCard();
};
