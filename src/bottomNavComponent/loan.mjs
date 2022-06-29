let loan = document.querySelector("#modals__loan");
let amount = document.querySelector("#modals__loan--amount");

export let loanComponent = () => {
  loan.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log({});
  });
};
