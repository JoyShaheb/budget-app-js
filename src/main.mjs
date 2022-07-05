import { getDateToday } from "./date.mjs";
import { balanceCalculator } from "./balanceCalculator.mjs";
import { transactionComponent } from "./transactionComponent.mjs";
import { bottomNavComponent } from "./bottomNavComponent/index.mjs";

let storage = JSON.parse(localStorage.getItem("data")) || [];

getDateToday();
balanceCalculator(storage);

transactionComponent(storage);
bottomNavComponent();
