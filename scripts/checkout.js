import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js';

// makes a function return a promise
// shortcut for the same code below
async function loadPage() {
  console.log('load page');

  //await - lets us write asynchronous code like normal code
  //we can only use await inside async function
  await loadProductsFetch();

  // value = value 3
  const value = await new Promise((resolve) => {
    loadCart(() => {
      resolve('value 3');
    });
  });

  renderOrderSummary();
  renderPaymentSummary();
}

loadPage();

/*
loadPage().then((value2) => {
  console.log('next load page step');
  console.log(value2);
});

function loadPageNonAsyncVersion() {
  return new Promise((resolve) => {
    console.log('load page');
    resolve('value2');
  });
}
*/

/*
Promise.all([
  // Fetch is a promise
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((value) => {
  console.log(value);
  renderOrderSummary();
  renderPaymentSummary();
});
*/

/*
new Promise((resolve) => {
  loadProducts(() => {
    resolve('Value 1');
  });

}).then((value) => {
  console.log(value);

  return new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });

}).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/

// Multiple callbacks cause a lot of nesting
/*
loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
*/