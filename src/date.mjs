let topBarDate = document.querySelector(".topBar__text--date");

export let getDateToday = () => {
  return (topBarDate.innerHTML = `${dayjs().format("dddd, D MMMM")}`);
};
