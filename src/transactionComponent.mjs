import { transactionCard } from "./transactionCard.mjs";
import { emptyComponent } from "./emptyHistory.mjs";
let history = document.querySelector(".transaction__history");

export let transactionComponent = (data) => {
  // history.innerHTML += transactionCard();
  // history.innerHTML += transactionCard();
  history.innerHTML = emptyComponent();
};
