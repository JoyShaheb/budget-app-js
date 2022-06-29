import { nanoid } from "https://cdn.jsdelivr.net/npm/nanoid/nanoid.js";

let payment = document.querySelector("#modals__payment");
let amount = document.querySelector("#modals__payment--amount");
let purpose = document.querySelector("#modals__payment--purpose");

export let paymentComponent = () => {
  payment.addEventListener("submit", (e) => {
    e.preventDefault();
    let paymentData = {
      id: nanoid(10),
      title: purpose.value,
      date: dayjs().format("hh:mm a D/MM/YY"),
      amount: +-amount.value,
      color: "red",
    };
    console.log(paymentData);
  });
};
