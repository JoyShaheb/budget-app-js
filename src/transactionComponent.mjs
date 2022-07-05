import { transactionCard } from "./transactionCard.mjs";
import { emptyComponent } from "./emptyHistory.mjs";
let history = document.querySelector(".transaction__history");

export let transactionComponent = (data) => {
  let filteredData = data.reverse().filter((item, index) => index < 4);
  if (data.length === 0) {
    history.innerHTML = emptyComponent();
  } else {
    history.innerHTML = filteredData
      .map((item) => {
        return transactionCard(item);
      })
      .join("");
  }
};
