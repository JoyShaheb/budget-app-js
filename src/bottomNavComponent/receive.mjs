import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import { submitBtnComponent } from "./submitBtn.mjs";

let receive = document.querySelector("#modals__receive");
let amount = document.querySelector("#modals__receive--amount");
let from = document.querySelector("#modals__receive--from");
let submitBtn = document.querySelector("#modals__receive--submit");

export let receiveComponent = () => {
  receive.addEventListener("submit", (e) => {
    e.preventDefault();
    let receiveData = {
      id: nanoid(10),
      title: from.value,
      date: dayjs().format("hh:mm a D/MM/YY"),
      amount: +amount.value,
      color: "green",
    };
    submitBtnComponent(receiveData, from, amount, submitBtn);
  });
};
