import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";
import { submitBtnComponent } from "./submitBtn.mjs";

let send = document.querySelector("#modals__send");
let to = document.querySelector("#modals__send--to");
let amount = document.querySelector("#modals__send--amount");
let submitBtn = document.querySelector("#modals__send--submit");

export let sendComponent = () => {
  send.addEventListener("submit", (e) => {
    e.preventDefault();
    let sendData = {
      id: nanoid(10),
      title: to.value,
      date: dayjs().format("hh:mm a D/MM/YY"),
      amount: +-amount.value,
      color: "red",
    };
    submitBtnComponent(sendData, to, amount, submitBtn);
  });
};
