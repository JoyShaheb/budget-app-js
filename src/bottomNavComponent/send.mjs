import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

let send = document.querySelector("#modals__send");
let to = document.querySelector("#modals__send--to");
let amount = document.querySelector("#modals__send--amount");

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
    console.log(sendData);
  });
};
