import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import { submitBtnComponent } from "./submitBtn.mjs";

let loan = document.querySelector("#modals__loan");
let amount = document.querySelector("#modals__loan--amount");
let submitBtn = document.querySelector("#modals__loan--submit");

export let loanComponent = () => {
  loan.addEventListener("submit", (e) => {
    e.preventDefault();
    let loanData = {
      id: nanoid(10),
      title: "loan",
      date: dayjs().format("hh:mm a D/MM/YY"),
      amount: +amount.value,
      color: "green",
    };
    console.log(loanData);
    submitBtnComponent(loanData, amount, amount, submitBtn);
  });
};
