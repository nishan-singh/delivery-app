const allItemsWrapper = document.getElementById("each-item-wrapper");
let basketItems = document.getElementById("items-main-wrapper");
const sumNPayBtn = document.getElementById("bill-n-pay-btn-wrapper");
const subtotal = document.getElementById("sub-total");
const emptyBasket = document.getElementById("empty-basket");
const mainContainer = document.getElementById("items-main-wrapper");
let itemPrice = [];
let itemName = [];
let itemQuantity = [];

function showDishes() {
  allItemsWrapper.innerHTML = "";
  for (let i = 0; i < ourItems.length; i++) {
    allItemsWrapper.innerHTML += foodItemsTemplate(i);
  }
}

function addToBasket(i) {
  emptyMainContianer();
  if (itemName.indexOf(ourItems[i]["name"]) === -1) {
    basketItems.innerHTML += basketItemsTemplate(i);
    emptyBasket.style.display = "none";
    basketItems.style.display = "block";
    sumNPayBtn.style.display = "block";
    saveInArrays(i);
    subTotal();
  } else {
    increaseItem(i);
  }
  mobileButton(i);
}

function emptyMainContianer() {
  if (itemPrice.length === 0) {
    basketItems.innerHTML = "";
  }
}

function saveInArrays(i) {
  itemPrice[i] = ourItems[i]["price"];
  itemQuantity[i] = ourItems[i]["quantity"];
  itemName[i] = ourItems[i]["name"];
}

function subTotal() {
  const subTotal = document.getElementById("sub-total");
  const totalCost = document.getElementById("total-cost");
  let sum = 0;
  itemPrice.filter((n) => (sum += +n));
  subTotal.innerHTML = sum.toFixed(2) + " €";
  totalCost.innerHTML = subTotal.innerHTML;
}

function decreaseItem(i) {
  itemQuantity[i] = itemQuantity[i] - 1;
  if (itemQuantity[i] === 0) {
    itemPrice[i] = "";
    itemName[i] = "";
    itemQuantity[i] = "";
    document.getElementById(`add-items-wrapper${i}`).remove();
  } else {
    const eachItemPrice = document.getElementById(`each-item-price${i}`);
    eachItemPrice.innerHTML = (
      +eachItemPrice.innerHTML - ourItems[i]["price"]
    ).toFixed(1);
    let totalItems = document.getElementById(`total-items${i}`);
    totalItems.innerHTML = itemQuantity[i];
    itemPrice[i] = +eachItemPrice.innerHTML;
  }
  checkIfEmpty();
  subTotal();
}

function checkIfEmpty() {
  let filteredItem = itemPrice.filter((n) => n);
  if (filteredItem.length === 0) {
    emptyBasket.style.display = "block";
    sumNPayBtn.style.display = "none";
  }
}

function increaseItem(i) {
  let totalItems = document.getElementById(`total-items${i}`);
  const eachItemPrice = document.getElementById(`each-item-price${i}`);
  itemQuantity[i] = itemQuantity[i] + 1;
  totalItems.innerHTML = itemQuantity[i];
  itemPrice[i] = ourItems[i]["price"];
  itemPrice[i] = itemPrice[i] * itemQuantity[i];
  eachItemPrice.innerHTML = itemPrice[i].toFixed(1);
  subTotal();
}

// ---------------------------------------------------------------------------------------------------------------

//for mobiles

const mobileBtn = document.getElementById("mobile-button");
const basketContainer = document.getElementById("basket-container");

function mobileButton() {
  mobileBtn.style.display = "flex";
  mobileBtn.innerHTML = "";
  mobileBtn.innerHTML = `<button onclick="showMobileBasket()">Warenkorb</button>`;
}

function showMobileBasket() {
  basketContainer.style.display = "block";
  basketContainer.classList.remove("hide-basket");
}

function hideAddedItems() {
  basketContainer.classList.add("hide-basket");
}