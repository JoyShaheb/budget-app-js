let totalBalance = document.querySelector(".balanceComponent__balance");

export let balanceCalculator = (data) => {
  let calculations = data.map((item) => item.amount).reduce((x, y) => x + y, 0);
  return (totalBalance.innerHTML = `$ ${calculations}`);
};
