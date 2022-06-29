import { getDateToday } from "./date.mjs";
import { balanceCalculator } from "./balanceCalculator.mjs";
import { transactionComponent } from "./transactionComponent.mjs";
import { bottomNavComponent } from "./bottomNavComponent/index.mjs";

getDateToday();
balanceCalculator();

transactionComponent();
bottomNavComponent();
