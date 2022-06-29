import { paymentComponent } from "./payment.mjs";
import { receiveComponent } from "./receive.mjs";
import { sendComponent } from "./send.mjs";
import { loanComponent } from "./loan.mjs";

export let bottomNavComponent = () => {
  paymentComponent();
  receiveComponent();
  sendComponent();
  loanComponent();
};
