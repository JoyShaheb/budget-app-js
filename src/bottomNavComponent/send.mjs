let send = document.querySelector("#modals__send");
let to = document.querySelector("#modals__send--to");
let amount = document.querySelector("#modals__send--amount");

export let sendComponent = () => {
  send.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({});
  });
};
