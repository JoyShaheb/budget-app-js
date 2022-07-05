let totalBalance = document.querySelector(".balanceComponent__balance");

export let balanceCalculator = (data) => {
  let calculations = data.map((item) => item.amount).reduce((x, y) => x + y, 0);
  if (calculations > 0) {
    totalBalance.classList.add("green");
  } else {
    totalBalance.classList.add("red");
  }
  return (totalBalance.innerHTML = `$ ${calculations}`);
};
