export let transactionCard = (data) => {
  let { id, reason, title, date, color, amount } = data;

  return `
        <div id="transaction__history--${id}">
          <div class="row__1">
            <div class="row__1--title">${title}</div>
            <div class="row__1--date">${date}</div>
          </div>
          <div class="row__2">
            <div class="row__2--transID">trans ID : ${id}</div>
            <div class="row__2--amount ${color}">$ ${amount.toLocaleString(
    "en-US"
  )}</div>
          </div>
         </div>
        <hr>
  `;
};
