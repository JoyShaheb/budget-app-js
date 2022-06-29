let payment = document.querySelector("#modals__payment");
let amount = document.querySelector("#modals__payment--amount");
let purpose = document.querySelector("#modals__payment--purpose");

export let paymentComponent = () => {
  payment.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log({
      // id:
    });
  });
};
