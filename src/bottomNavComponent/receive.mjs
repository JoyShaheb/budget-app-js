let receive = document.querySelector("#modals__receive");
let amount = document.querySelector("#modals__receive--amount");
let from = document.querySelector("#modals__receive--from");

export let receiveComponent = () => {
  receive.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({});
  });
};
