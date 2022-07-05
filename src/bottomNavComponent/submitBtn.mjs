import { balanceCalculator } from "../balanceCalculator.mjs";
import { transactionComponent } from "../transactionComponent.mjs";

let storage = JSON.parse(localStorage.getItem("data")) || [];

export let submitBtnComponent = (data, purpose, amount, submitBtn) => {
  storage.push(data);
  localStorage.setItem("data", JSON.stringify(storage));
  purpose.value = "";
  amount.value = "";
  submitBtn.setAttribute("data-bs-dismiss", "modal");
  submitBtn.click();
  submitBtn.setAttribute("data-bs-dismiss", "");
  console.log(storage);

  transactionComponent(storage);
  balanceCalculator(storage);
};
